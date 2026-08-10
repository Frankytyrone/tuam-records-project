(function () {
  "use strict";

  var input = document.getElementById("search-input");
  var resultsEl = document.getElementById("search-results");
  var statusEl = document.getElementById("search-status");
  if (!input || !resultsEl) return;

  var pagesByUrl = {};
  var idx = null;
  var debounceTimer = null;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function buildSnippet(content, terms) {
    var lower = content.toLowerCase();
    var pos = -1;
    for (var i = 0; i < terms.length; i++) {
      var t = terms[i].toLowerCase();
      if (!t) continue;
      var found = lower.indexOf(t);
      if (found !== -1 && (pos === -1 || found < pos)) pos = found;
    }
    var start = pos === -1 ? 0 : Math.max(0, pos - 90);
    var end = pos === -1 ? Math.min(content.length, 220) : Math.min(content.length, pos + 150);
    var snippet = content.substring(start, end).trim();
    if (start > 0) snippet = "\u2026" + snippet;
    if (end < content.length) snippet = snippet + "\u2026";

    var escaped = escapeHtml(snippet);
    terms.forEach(function (t) {
      if (!t) return;
      var re = new RegExp("(" + escapeRegExp(escapeHtml(t)) + ")", "ig");
      escaped = escaped.replace(re, "<mark>$1</mark>");
    });
    return escaped;
  }

  function buildLunrQuery(rawTerms) {
    var clauses = [];
    rawTerms.forEach(function (t) {
      var clean = t.replace(/[^a-zA-Z0-9-]/g, "");
      if (!clean) return;
      clauses.push(clean);
      clauses.push(clean + "*");
    });
    return clauses.join(" ");
  }

  function render(rawQuery) {
    var rawTerms = rawQuery.trim().split(/\s+/).filter(Boolean);

    if (rawTerms.length === 0) {
      resultsEl.innerHTML = "";
      statusEl.textContent = "";
      return;
    }

    if (!idx) {
      statusEl.textContent = "Loading search index\u2026";
      return;
    }

    var lunrQuery = buildLunrQuery(rawTerms);
    var hits = [];
    try {
      hits = lunrQuery ? idx.search(lunrQuery) : [];
    } catch (e) {
      hits = [];
    }

    if (hits.length === 0) {
      statusEl.textContent = "No results for \u201c" + rawQuery + "\u201d. Try a different word, a document ID, or fewer terms.";
      resultsEl.innerHTML = "";
      return;
    }

    statusEl.textContent = hits.length + " result" + (hits.length === 1 ? "" : "s") + " for \u201c" + rawQuery + "\u201d";

    var html = "<ul class=\"search-results-list\">";
    hits.slice(0, 25).forEach(function (hit) {
      var page = pagesByUrl[hit.ref];
      if (!page) return;
      var snippet = buildSnippet(page.content, rawTerms);
      html += "<li class=\"search-result\">" +
        "<a class=\"search-result-title\" href=\"" + page.url + "\">" + escapeHtml(page.title) + "</a>" +
        "<p class=\"search-result-snippet\">" + snippet + "</p>" +
        "</li>";
    });
    html += "</ul>";
    resultsEl.innerHTML = html;
  }

  statusEl.textContent = "Loading search index\u2026";

  fetch(window.TRP_SEARCH_INDEX_URL)
    .then(function (r) { return r.json(); })
    .then(function (pages) {
      idx = lunr(function () {
        this.ref("url");
        this.field("title", { boost: 10 });
        this.field("content");

        pages.forEach(function (page) {
          pagesByUrl[page.url] = page;
          this.add(page);
        }, this);
      });
      statusEl.textContent = "";
      if (input.value.trim()) render(input.value);

      var params = new URLSearchParams(window.location.search);
      var q = params.get("q");
      if (q) {
        input.value = q;
        render(q);
      }
    })
    .catch(function () {
      statusEl.textContent = "The search index could not be loaded. Please try again shortly.";
    });

  input.addEventListener("input", function () {
    clearTimeout(debounceTimer);
    var value = input.value;
    debounceTimer = setTimeout(function () { render(value); }, 150);
  });
})();

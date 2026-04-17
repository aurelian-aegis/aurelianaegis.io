(function () {
  var cfg = window.AEGIS_SITE_CONFIG || {};
  var base = (cfg.githubRepo || "").replace(/\/$/, "");
  if (!base) return;

  var treeMain = base + "/tree/main";

  var map = {
    "data-gh-repo": base,
    "data-gh-tree": treeMain,
    "data-gh-schema": base + "/blob/main/schema/attestation-envelope.json",
    "data-gh-readme": base + "/blob/main/README.md",
    "data-gh-integration": base + "/blob/main/spec/INTEGRATION.md",
    "data-gh-specification": base + "/blob/main/spec/SPECIFICATION.md",
    "data-gh-usage-universal": base + "/blob/main/spec/usage/universal-enforcement-agentic-platforms.md",
    "data-gh-usage-nocode": base + "/blob/main/spec/usage/no-code-low-code-enforcement.md",
    "data-gh-implementation": base + "/blob/main/docs/IMPLEMENTATION-GUIDE.md",
    "data-gh-signing": base + "/blob/main/spec/SIGNING.md",
    "data-gh-chain": base + "/blob/main/spec/CHAIN-INTEGRITY.md",
    "data-gh-examples": base + "/tree/main/examples",
    "data-gh-vectors": base + "/tree/main/test-vectors",
    "data-gh-contributing": base + "/blob/main/CONTRIBUTING.md",
  };

  Object.keys(map).forEach(function (attr) {
    document.querySelectorAll("[" + attr + "]").forEach(function (el) {
      el.setAttribute("href", map[attr]);
    });
  });
})();

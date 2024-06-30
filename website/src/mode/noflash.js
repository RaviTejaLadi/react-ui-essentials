(function () {
  let classNameDark = "dark-mode";
  let classNameLight = "light-mode";
  function setClassOnDocument(darkMode) {
    document.querySelector("html").classList.add(darkMode ? classNameDark : classNameLight);
    document.querySelector("html").classList.remove(darkMode ? classNameLight : classNameDark);
  }
  let preferDarkQuery = "(prefers-color-scheme: dark)";
  let mql = window.matchMedia(preferDarkQuery);
  let supportsColorSchemeQuery = mql.media === preferDarkQuery;
  let mode;
  try {
    let modeValue = localStorage.getItem("scheme-mode");
    if (modeValue) mode = JSON.parse(modeValue);
  } catch {}
  if (supportsColorSchemeQuery && mode === "system") setClassOnDocument(mql.matches);
  else if (mode === "light" || mode === "dark") setClassOnDocument(mode === "dark");
  else setClassOnDocument(false);
})();

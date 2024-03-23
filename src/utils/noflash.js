(function () {
  const classNameDark = "dark-mode";
  const classNameLight = "light-mode";
  function setClassOnDocument(darkMode) {
    document.querySelector("html").classList.add(darkMode ? classNameDark : classNameLight);
    document.querySelector("html").classList.remove(darkMode ? classNameLight : classNameDark);
  }
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const mql = window.matchMedia(preferDarkQuery);
  const supportsColorSchemeQuery = mql.media === preferDarkQuery;
  let mode;
  try {
    const modeValue = localStorage.getItem("scheme-mode");
    if (modeValue) mode = JSON.parse(modeValue);
  } catch {
    console.log("Error: noflash.js");
  }
  if (supportsColorSchemeQuery && mode === "system") setClassOnDocument(mql.matches);
  else if (mode === "light" || mode === "dark") setClassOnDocument(mode === "dark");
  else setClassOnDocument(false);
})();

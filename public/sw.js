self.addEventListener("install", (event) => {
  console.log("Service Worker installé");
});

self.addEventListener("fetch", (event) => {
  // simple version (pas encore offline avancé)
});
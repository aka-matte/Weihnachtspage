console.log("❄️ snow.js geladen");

/*
  ❄️ Eleganter Schneefall für Weihnachtsseite
  – ruhig, dezent, mobilfreundlich
  – kein externes Framework
*/

document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     🎛️ FEINTUNING (HIER ANPASSEN)
     ============================= */

  const SETTINGS = {
    flakes: 35,           // Anzahl Schneeflocken (20–40 elegant, >50 stark)
    minSize: 2,            // minimale Größe in px
    maxSize: 5,            // maximale Größe in px
    minDuration: 10,       // minimale Fallzeit (Sekunden)
    maxDuration: 22,       // maximale Fallzeit (Sekunden)
    minOpacity: 0.25,      // minimale Transparenz
    maxOpacity: 0.7        // maximale Transparenz
  };

  /* =============================
     ❄️ SCHNEE-CONTAINER
     ============================= */

  const snowContainer = document.createElement("div");
  snowContainer.className = "snow";
  document.body.appendChild(snowContainer);

  /* =============================
     ❄️ SCHNEEFLOCKEN ERZEUGEN
     ============================= */

  for (let i = 0; i < SETTINGS.flakes; i++) {
    const flake = document.createElement("span");

    // Zufällige horizontale Startposition
    flake.style.left = Math.random() * 100 + "vw";

    // Zufällige Größe
    const size =
      SETTINGS.minSize +
      Math.random() * (SETTINGS.maxSize - SETTINGS.minSize);
    flake.style.width = size + "px";
    flake.style.height = size + "px";

    // Zufällige Transparenz
    const opacity =
      SETTINGS.minOpacity +
      Math.random() * (SETTINGS.maxOpacity - SETTINGS.minOpacity);
    flake.style.opacity = opacity.toString();

    // Zufällige Fallgeschwindigkeit
    const duration =
      SETTINGS.minDuration +
      Math.random() * (SETTINGS.maxDuration - SETTINGS.minDuration);
    flake.style.animationDuration = duration + "s";

    // Zufällige Startverzögerung
    flake.style.animationDelay = Math.random() * duration + "s";

    snowContainer.appendChild(flake);
  }
});


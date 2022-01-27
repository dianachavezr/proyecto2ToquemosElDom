/*Audio Piano*/

let audioPiano = document.querySelector(".audioPiano")
    let audioEtiqueta = document.querySelector("audio")

    audioPiano.addEventListener("click", () => {
      audioEtiqueta.setAttribute("src", "./sounds/sonidoPiano.mp3")
      audioEtiqueta.play()
      console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    })






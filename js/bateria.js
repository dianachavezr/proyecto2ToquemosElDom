<<<<<<< HEAD

/*Audio Bateria*/
    let audioBateria = document.querySelector(".audioBateria")
    let audioEtiqueta2 = document.querySelector("audio")

    audioBateria.addEventListener("click", () => {
      audioEtiqueta2.setAttribute("src", "./sounds/sonidoBateria.mp3")
      audioEtiqueta2.play()
      console.log(`Reproduciendo: ${audioEtiqueta2.src}`)
    })



   
=======
>>>>>>> bfc930622bb656cd1e83f69f566a4b2931f031ba
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "l":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
<<<<<<< HEAD
      var hihat = new Audio('sounds/Hi-Hat-Open-Hit-mp3.mp3');
=======
      var hihat = new Audio('sounds/Hi-Hat-Open-Hit-mp3');
>>>>>>> bfc930622bb656cd1e83f69f566a4b2931f031ba
      hihat.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "w":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
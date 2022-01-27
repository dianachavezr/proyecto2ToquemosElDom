/*Audio Piano*/

let audioPiano = document.querySelector(".audioPiano")
    let audioEtiqueta = document.querySelector("audio")

    audioPiano.addEventListener("click", () => {
      audioEtiqueta.setAttribute("src", "./sounds/sonidoPiano.mp3")
      audioEtiqueta.play()
      console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    })


/*Codigo Piano*/



const BLACK_KEYS = ['Q', 'W', 'E', 'R', 'Y', 'T', 'U', 'I', 'O', 'P', 'L']
const WHITE_KEYS = ['A', 'S', 'Z', 'D', 'X', 'F', 'C', 'G', 'H', 'J', 'K', 'B', 'N', 'M',]
const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')


const buttonSeeNotes = document.getElementById('btn')
const buttonSeeKeyboard = document.getElementById('btn2')
const piano = document.querySelector('.pianoPruba')
const playPiano = document.querySelector('.botonO')
const iconPiano = document.querySelector('.icono-piano')
const piano2 = document.getElementById('piano')



playPiano.addEventListener('click', (e) => {
    
    e.target.classList.toggle('activated')


    if (playPiano){
        piano.classList.add('pianoVisible')
        iconPiano.classList.add('ocultar-icono')
        buttonSeeNotes.classList.add('boton-ver-notas-on')
        buttonSeeKeyboard.classList.add('ver-teaclado-on')
        console.log('activado');
        

        keys.forEach(key => {
    
            key.addEventListener('click', () => playNote(key))
        })

        document.addEventListener('keydown', e => {
            if (e.repeat) return
            const key = e.key
            console.log('imprimiendo la tecla: ' + key);
            const whiteKeyIndex = WHITE_KEYS.indexOf(key)
            const blackKeyIndex = BLACK_KEYS.indexOf(key)
            function activarTeclado (){
                if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
                if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])

            }
            
            
            console.log(e);
            if (playPiano.classList.contains('activated')){
                activarTeclado()

            }

        })
        
        function playNote(key) {
            const noteAudio = document.getElementById(key.dataset.note)
            noteAudio.currentTime = 0
            noteAudio.play()
            key.classList.add('active')
            noteAudio.addEventListener('ended', () => {
                key.classList.remove('active')
            })
        }

        

        buttonSeeNotes.addEventListener('click', (e) => {
            
            e.target.classList.toggle('activated')
            let notesWhite = document.querySelectorAll(".notes-on");
            let notesBlack = document.querySelectorAll(".notesBlack-on");
        
            if (buttonSeeNotes){
                buttonSeeNotes.textContent = 'Ver notas'
                notesWhite.forEach(note => {
                    note.classList.add('notes-off')
                })   
                notesBlack.forEach(note => {
                    note.classList.add('notesBlack-off')
                }) 
            }
        
            if (!(buttonSeeNotes.classList.contains('activated'))){
                buttonSeeNotes.textContent = 'Ocultar notas'
                notesWhite.forEach(note => {
                    note.classList.remove('notes-off')
               
                }) 
                notesBlack.forEach(note => {
                    note.classList.remove('notesBlack-off')
               
                })      
                
            }
            
        })

        buttonSeeKeyboard.addEventListener('click', (e) => {
            
            e.target.classList.toggle('activated')
            let keyboardBlack = document.querySelectorAll(".keyboard"); 
            let keyboardWhite = document.querySelectorAll(".keyboard2");
        
            if (buttonSeeKeyboard){
                buttonSeeKeyboard.textContent = 'Ver teclado'

                keyboardBlack.forEach(key => {
                    key.classList.add('keyboard-off')
                })   

                keyboardWhite.forEach(key => {
                    key.classList.add('keyboard2-off')
                }) 
            }
        
            if (!(buttonSeeKeyboard.classList.contains('activated'))){
                buttonSeeKeyboard.textContent = 'ocultar teclado'
                
                keyboardBlack.forEach(key => {
                    key.classList.remove('keyboard-off')
               
                }) 
                keyboardWhite.forEach(key => {
                    key.classList.remove('keyboard2-off')
               
                })      
                
            }
            
        })
        
    }

    if (!(playPiano.classList.contains('activated'))){
          console.log('desativado');
          piano.classList.remove('pianoVisible')
          iconPiano.classList.remove('ocultar-icono')
          buttonSeeNotes.classList.remove('boton-ver-notas-on')
          buttonSeeKeyboard.classList.remove('ver-teaclado-on')
    
    
    }
    
})









// const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
// const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const BLACK_KEYS = ['q', 'w', 'e', 'r', 'y', 'u', 'i', 'o', 'p', 'l']
const WHITE_KEYS = ['a', 's', 'z', 'd', 'x', 'f', 'g', 'h', 'k', 'j', 'c', 'b', 'n', 'm',]
const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')


const buttonSeeNotes = document.getElementById('btn')
const piano = document.querySelector('.pianoPruba')
const playPiano = document.querySelector('.botonO')
const iconPiano = document.querySelector('.icono-piano')
const piano2 = document.getElementById('piano')



playPiano.addEventListener('click', (e) => {
    
    e.target.classList.toggle('activated')


    if (playPiano){
        piano.classList.add('pianoVisible')
        iconPiano.classList.add('ocultar-icono')
        buttonSeeNotes.classList.add('notas-on')
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

        
    }

    if (!(playPiano.classList.contains('activated'))){
          console.log('desativado');
          piano.classList.remove('pianoVisible')
          iconPiano.classList.remove('ocultar-icono')
          buttonSeeNotes.classList.remove('notas-on')
    
    
    }
    
})



// comienza la logica 
/* const BLACK_KEYS = ['q', 'w', 'e', 'r', 'y', 'u', 'i', 'o', 'p', 'l']
const WHITE_KEYS = ['a', 's', 'z', 'd', 'x', 'f', 'g', 'h', 'k', 'j', 'c', 'b', 'n', 'm',]


const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    

    key.addEventListener('click', () => playNote(key))
})


document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    console.log('imprimiendo la tecla: ' + key);
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    console.log(key.dataset);
    console.log(key.dataset.note);
    console.log(noteAudio);
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

const buttonSeeNotes = document.querySelector('.btn')

buttonSeeNotes.addEventListener('click', (e) => {
    
    e.target.classList.toggle('activated')
    let notesWhite = document.querySelectorAll(".notes-on");
    let notesBlack = document.querySelectorAll(".notesBlack-on");

    if (buttonSeeNotes){
        notesWhite.forEach(note => {
            note.classList.add('notes-off')
        })   
        notesBlack.forEach(note => {
            note.classList.add('notesBlack-off')
        }) 
    }

    if (!(buttonSeeNotes.classList.contains('activated'))){
        notesWhite.forEach(note => {
            note.classList.remove('notes-off')
       
        }) 
        notesBlack.forEach(note => {
            note.classList.remove('notesBlack-off')
       
        })      
        
    }
    
}) */







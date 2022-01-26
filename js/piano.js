// const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
// const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const BLACK_KEYS = ['q', 'w', 'e', 'r', 'y', 'u', 'i', 'o', 'p', 'l']
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
    let notesWhite = document.querySelectorAll(".notes-off");
    let notesBlack = document.querySelectorAll(".notesBlack-off");

    if (buttonSeeNotes){
        notesWhite.forEach(note => {
            note.classList.add('notes-on')
        })   
        notesBlack.forEach(note => {
            note.classList.add('notesBlack-on')
        }) 
    }

    if (!(buttonSeeNotes.classList.contains('activated'))){
        notesWhite.forEach(note => {
            note.classList.remove('notes-on')
       
        }) 
        notesBlack.forEach(note => {
            note.classList.remove('notesBlack-on')
       
        })      
        
    }
    
})





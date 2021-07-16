
const dailyNotes = [

    {
        id: 1,
        subject: "For loops",
        date: "07/16/2021",
        feeling: "Good",
        timeSpent: 25
    },

    {
        id: 2,
        subject: "If Statements",
        date: "07/16/2021",
        feeling: "Need more practice",
        timeSpent: 25
    }

]

const newNote = {
        id: 3,
        subject: "If Statements and For loops",
        date: "07/16/2021",
        feeling: "Good",
        timeSpent: 30
}
dailyNotes.push(newNote)


const addingNote = {
    subject: "adding notes to array and generating ID",
        date: "07/16/2021",
        feeling: "Iffy",
        timeSpent: 30
}
const addNoteToInventory = (noteObject) => {
    const lastIndex = dailyNotes.length - 1
    const currentLastNote = dailyNotes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1

    noteObject.id = idForNewNote
    dailyNotes.push(noteObject)
}

addNoteToInventory(addingNote) 
    for (const note of dailyNotes) {
        console.log(note.id)
        
    }
console.log(dailyNotes)


    


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

const searchTerm = "Good"
    
    for (const note of dailyNotes) {
        if (note.feeling === "Good")
        console.log(note)
    }



    

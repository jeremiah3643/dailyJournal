const FormManager = require("./JournalForm")
const journalData = require("./DataManager")
const journalBuilder = require("./JournalList")
const $ = require("jquery")

document.querySelector("#journalForm").innerHTML = FormManager.buildFormTemplate()

journalBuilder.journalLister().then(string => {
    document.querySelector("#journalEntry").innerHTML = string
})

function dateFunction() {
    let d = new Date();
    let n = d.toString();
    return n
}

document.querySelector("#saveEntryButton").addEventListener("click", () => {
    // Get form field values
    // Create objectfrom them
    // Add timestamp
    function dateFunction() {
        let d = new Date();
        let n = d.toString();
        return n
    }

    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: dateFunction()
    }
    // POST to API
    journalData.saveJournalEntry(newEntry)
        // Clear the form fields
        .then(() => {
            FormManager.clearForm()
        })
        // Put HTML representation on the DOM
        .then(
            location.reload()
        )
})


document.querySelector("#journalEntry").addEventListener("click", (event) => {
    let buttonId = event.target.id
    if (buttonId.includes("edit--")) {
        let editId = parseInt(event.target.id.split("--")[1])
        document.querySelector("#editField").innerHTML = FormManager.buildEditForm(editId)


        // document.querySelector("#editField").innerHTML = journalBuilder.editer(editId)


        // journalBuilder.editer(buttonId)
    }
    else if (buttonId.includes("delete--")) {
        let deleteId = parseInt(event.target.id.split("--")[1])
        journalBuilder.deleter(deleteId)
        location.reload()
    }

})

document.querySelector("#editField").addEventListener("click", () => {
    let buttonId = event.target.id
    if (buttonId.includes("saveEntryButton")) {
        let editId = parseInt(event.target.id.split("--")[1])
        const entryData = {
            title: document.querySelector("#editTitle").value,
            content: document.querySelector("#editContent").value,
            date: dateFunction()
        }
        journalData.editEntry(editId, entryData)
            .then(() => {
                location.reload()
            })
    }
})


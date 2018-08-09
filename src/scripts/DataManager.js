

let journalData = {}


journalData.saveJournalEntry = (entry) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(response => response.json())
}
journalData.loadJournalEntry = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
}
journalData.deleteEntry = (lookupId) => {
    return fetch(`http://localhost:8088/entries/${lookupId}`, {
        method: "DELETE",
    })
}
journalData.editEntry = (entry, entryData) => {
    return fetch(`http://localhost:8088/entries/${entry}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryData)
    })

    .then(response => response.json())
},
module.exports = journalData
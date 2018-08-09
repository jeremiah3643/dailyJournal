

const journalEntry = (result) => {


    return `<fieldset class="entryField">
        <h3 class="entryTitle">${result.title}</h3>
        <p class="entryContent">${result.content}</p>
        <label>${result.date}</label>
        <button id="delete--${result.id}" class="deleteButton">Delete</button>
        <button id="edit--${result.id}">Edit</button>
    </fieldset>
`
}
module.exports = journalEntry
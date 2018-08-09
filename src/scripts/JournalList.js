const journalEntry = require("./JournalLayout")
const journalData = require("./DataManager")
const FormManager = require("./JournalForm")

const journalBuilder = Object.create(null, {
    journalLister: {
        value: () => {
            return journalData.loadJournalEntry()
                .then((result) => {
                    result.reverse()
                    let string = ""
                    for (let i = 0; i < result.length; i++) {
                        const element = result[i]
                        string += journalEntry(element)
                    }
                    return string
                })
        }
    },
    deleter: {
        value: (buttonId) => {
            journalData.deleteEntry(buttonId)
        }
    },
    reloadEntries: {
        value: () => {
            document.querySelector("#journalEntry").value = ""
        }
    },
    editer: {
        value: (editId) => {
            return journalData.loadSingleJournalEntry(editId)
                .then((result) => {
                    let editForm = ""
                    editForm += FormManager.buildEditForm(result)
                    return editForm
                }
                )
        }
    }
})


module.exports = journalBuilder
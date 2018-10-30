/* fetch("http://localhost:3000/entries") // Fetch from the API
    .then( (journalData) => journalData.json() )  // Parse as JSON
    .then(entries => { // Renaming the json data to entries
      renderJournalEntries(entries)
        // What should happen when we finally have the array?
    }) */

const API = {
  getJournalEntries () {
    console.log("get journal entries running")
    return fetch("http://localhost:3000/entries")
    .then(response => response.json())
  }
}
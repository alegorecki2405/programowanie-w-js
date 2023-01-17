const fillOutForm = () => {
    const id = window.location.search.replace("?", "")*1;
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const note = notes.find((note) => note.id === id);
    const form = document.getElementById("edit");
    form.elements['title'].value = note.title;
    form.elements['content'].value = note.content;
    form.elements['pin'].value = note.pinned;
    form.elements['color'].value = note.color;
}

fillOutForm();

const form = document.getElementById("edit");
form.addEventListener("submit", (event) => {
    const id = window.location.search.replace("?", "") *1;
    event.preventDefault();
    const title = form.elements['title'].value;
    const content = form.elements['content'].value;
    const date = new Date().toLocaleDateString();
    const pin = form.elements['pin'].checked;
    const color = form.elements['color'].value;
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const filteredNotes = notes.filter((note) => note.id !== id*1);
    filteredNotes.push({id:filteredNotes.length+1,title, content, date, pinned:pin, color});
    localStorage.setItem('notes', JSON.stringify(filteredNotes));
    window.location.href = "index.html";
});
const showNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach((note) => {
        const noteDiv = document.createElement("div");
        const editButton = document.createElement("button")
        editButton.textContent = "EDIT";
        editButton.dataset.id = note.id;
        editButton.classList.add("edit")
        noteDiv.appendChild(editButton)
        const title = document.createElement("p");
        title.innerText = `Title: ${note.title}`;
        const created = document.createElement("p");
        created.innerText = `created/edited: ${note.date}`;
        const content = document.createElement("p");
        content.innerText = `created/edited: ${note.content}`;
        noteDiv.style.backgroundColor = note.color;
        noteDiv.appendChild(title);
        noteDiv.appendChild(created)
        noteDiv.appendChild(content)
        if (note.pinned) {
            const pinned = document.getElementById("pinned-notes")
            pinned.appendChild(noteDiv)
        } else {
            const unpinned = document.getElementById("all-notes")
            unpinned.appendChild(noteDiv)
        }
    });
}

showNotes()

const editButtons = document.querySelectorAll(".edit")

editButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const id = e.target.getAttribute('data-id');
        window.location.href="edit.html?"+id;
    });
})
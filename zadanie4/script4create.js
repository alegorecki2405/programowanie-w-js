const form = document.getElementById("create");
form.addEventListener("submit", (event) => {
   event.preventDefault();
   const title = form.elements['title'].value;
   const content = form.elements['content'].value;
   const date = new Date().toLocaleDateString();
   const pin = form.elements['pin'].checked;
   const color = form.elements['color'].value;
   const notes = JSON.parse(localStorage.getItem("notes")) || [];
   notes.push({id:notes.length+1,title,content,date,pinned:pin,color});
   localStorage.setItem('notes',JSON.stringify(notes));
   window.location.href= "index.html";
});
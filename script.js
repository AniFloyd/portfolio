document.querySelector(".nav-icon").addEventListener("click", function (){
    document.querySelector("ul").classList.toggle("show")
})

// showNotes()

// let btn = document.getElementById("btn");


// btn.addEventListener("click",function(e){
//     let NoteArea = document.getElementById("NoteArea");
//     let notes = localStorage.getItem("notes");

//     if(notes == null){
//         notesObj = []
       
       
//     }
//     else{
//         notesObj = JSON.parse(notes)
//     }
//     notesObj.push(NoteArea.value)
    
//     localStorage.setItem("notes", JSON.stringify(notesObj))
//     NoteArea.value = ""
//     console.log(notesObj);

//         showNotes()

// })

// function showNotes(){
//     let notes = localStorage.getItem("notes");

//     if(notes == null){
//         notesObj = []
       
//     }
//     else{
//         notesObj = JSON.parse(notes)
//     }
//     let html = "";
//     notesObj.forEach( function(element,index) {
         
//         html += `    <div class="card mx-3" style="width: 18rem;">
        
//         <div class="card-body">
//           <h5 class="card-title"> Comment ${index + 1} </h5>
//           <p class="card-text">  ${element} </p>
//           <button class="btn btn-primary"> Delete Note</button>
//         </div>
//       </div>
     
        
// </div>
// `

//     });
    
//     let noteElm = document.getElementById("notes")
//     if(notesObj.length != 0 ){
//         noteElm.innerHTML = html;
//     }
//   else{
//     noteElm.innerHTML = "No Comments to show"
//   }

// }
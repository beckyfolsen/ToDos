function onReady() {
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");

  addToDoForm.addEventListener('submit', event => {
      event.preventDefault();

      // get the text
      let title = newToDoText.value;

      // create a new li
      let newLi = document.createElement('li');

      // create a new input
      let checkbox = document.createElement('input');

      // set the input's type to checkbox
      checkbox.type = "checkbox";
      
      checkbox.id = "check";
      checkbox.className = "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect";
      

      // create a delete button
      let deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete mdl-button mdl-js-button mdl-button--raised mdl-button--colored';

      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener('click', function(event){
          toDoList.removeChild(this.parentElement);
      })

      // set the title
      newLi.textContent = title;

      // attach the checkbox to the li
      newLi.appendChild(checkbox);

      // attach the delete button to the li
      newLi.appendChild(deleteBtn);

      // attach the li to the ul
      toDoList.appendChild(newLi);

      //empty the input
      newToDoText.value = '';
  });
}

window.onload = function() {
  onReady();
 };
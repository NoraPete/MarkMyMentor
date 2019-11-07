
let span = document.querySelector('.name');
let stack = document.querySelector('.stack');
let theClass = document.querySelector('.theClass');
let expl = document.querySelector('.expl');
let know = document.querySelector('.know');
let help = document.querySelector('.help');


window.onload = function loadData() {
  console.log(window.location.pathname)
  fetch(`http://localhost:3000/profile/:id`)
    .then(response => response.json())
    .then(response => {
      span.textContent = response.name;
      response.stack.forEach(element => {
        stack.textContent += element + ' ';
      });
      theClass.textContent = response.class;
      expl.textContent = response.explanation;
      know.textContent = response.knowledge;
      help.textContent = response.helpfulness;
    })
}
let span = document.querySelector('name');
let stack = document.querySelector('stack');
let theClass = document.querySelector('theClass');
let expl = document.querySelector('expl');
let know = document.querySelector('know');
let help = document.querySelector('help');

get method
window.onload = function loadData() {
  fetch('/mentor/:id')
    .then(response => response.json());
    .then(response =>)
}
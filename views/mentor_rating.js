'use strict';

const name = document.querySelector('.name');
const stack = document.querySelector('.stack');
const clas = document.querySelector('.theClass');
const expl = document.querySelector('.expl');
const know = document.querySelector('.know');
const help = document.querySelector('.help');

function renderData(resp) {
  name.innerText = resp.name;
  clas.innerText = resp.class;
  expl.innerText = resp.explanation;
  know.innerText = resp.knowledge;
  help.innerText = resp.helpfulness;
  stack.innerText = '';
  resp.stack.forEach(function(tech) {
    stack.innerText += tech;
  });
}

fetch('/metor/:id')
  .then((res) => {
    if (res.status < 200 || res.status >= 300) {
      return new Error('Something went wrong');
    }
    return res;
  })
  .then(response => response.json())
  .then(renderData)
  .catch(err => console.log(err.message))

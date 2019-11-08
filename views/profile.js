'use strict';

const name = document.querySelector('.name');
const stack = document.querySelector('.stack');
const clas = document.querySelector('.theClass');
const expl = document.querySelector('.expl');
const know = document.querySelector('.know');
const help = document.querySelector('.help');
const form = document.querySelector('form');

let id = window.location.search.slice(4);

function renderData(resp) {
  name.innerText = resp.name;
  clas.innerText = 'Class: '  + resp.class;
  expl.innerText = 'Explanation: ' + resp.explanation;
  know.innerText = 'Knowledge: ' + resp.knowledge;
  help.innerText = 'Helpfulness: ' + resp.helpfulness;
  resp.stack.forEach(function(tech) {
    let newTech = document.createElement('p');
    newTech.innerText = tech;
    stack.appendChild(newTech);
  });
}

fetch(`/mentor/${id}`)
  .then((res) => {
    if (res.status < 200 || res.status >= 300) {
      return new Error('Something went wrong');
    }
    return res;
  })
  .then(response => response.json())
  .then(renderData)
  .catch(err => console.log(err.message))

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let rates = {
      explanation: form.explanation.value,
      knowledge: form.knowledge.value,
      helpfulness: form.helpfulness.value
    }
    fetch(`/mentor/${id}`, {
      method: 'PUT',
      body: JSON.stringify(rates),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(response => {
      if(response.status < 200 || response.status >= 300) {
        return new Error('Something went wrong');
      }
      return response;
     })
     .then(response => {
       if(response.status === 200) {
        window.location.href = '/';
       }
     })
     .catch(console.log);
  })
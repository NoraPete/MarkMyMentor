'use strict'

const top = document.querySelector('.topList');
const allMen = document.querySelector('.allMentors');

window.onload = function loadData() {
  console.log('asd')
  fetch('top')
    .then(response => response.json())
    .then(response => {
      response.forEach(element => {
        let liElem = document.createElement('li');
        liElem.textContent = `${element.name} ${element.rank} ${element.average}`
        topMen.appendChild(liElem)
      });
    })
  fetch('http://localhost:3000/mentors')
    .then(response => response.json())
    .then(response => {
      response.forEach(element => {
        let liElem = document.createElement('li');
        let lidiv = document.createElement('div');
        let text = document.createElement('span');
        text.textContent = `${element.name}`;
        lidiv.appendChild(text);
        liElem.appendChild(lidiv);
        liElem.setAttribute('id', `${element.id}`)
        allMen.appendChild(liElem);
      });
    })
}

document.querySelectorAll('div').addEventListener('click', test);
const test = () => {
  console.log('asd')
}
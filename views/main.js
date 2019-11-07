'use strict'

// const top = document.querySelector('.topList');
const allMen = document.querySelector('.allMentors')


window.onload = function loadData() {
  fetch('/top')
    .then(response => response.json())
    .then(response => {
      response.forEach(element => {
        // let name = document.createElement('span');
        // let ranking = document.createElement('span');
        // let average = document.createElement('span');
        // name.textContent = element.name
        // ranking.textContent = element.rank
        // average.textContent = element.average
        let liElem = document.createElement('li');
        liElem.textContent = `${element.name} ${element.rank} ${element.average}`
        top.appendChild(liElem)
      });
    })
}

window.onload = function loadData() {
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
        allMen.appendChild(liElem);
      });
    })
}
const fullstack = document.getElementById('fullstack');
const backend = document.getElementById('backend');
const devops = document.getElementById('devops');
const embedded = document.getElementById('embedded');
const name = document.getElementById('nick');
const whichClass = document.getElementById('class');
const expl = document.getElementById('explonation');
const know = document.getElementById('knowledge');
const help = document.getElementById('helpfulness');
const send = document.querySelector('.yip');
const btn = document.querySelector('button');

let bend = 0;
let dops = 0;
let eded = 0;
let fstak = 0;

if (send.fullstack) {
  fstak = 1;
}
if (send.devops) {
  dops = 1;
}
if (send.backend) {
  bend = 1;
}
if (send.embedded) {
  eded = 1;
}

send.addEventListener('submit', e => {
  e.preventDefault();
  fetch('/new', {
    method: 'POST',
    body: JSON.stringify({
      name: send.nick.value,
      class: send.whichClass.value,
      fullstack: fstak,
      backend: bend,
      devops: dops,
      embedded: eded,
      explanation: send.explanation.value,
      knowledge: send.knowledge.value,
      helpfulness: send.helpfulness.value,
    }),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Data sent');
      window.location.href = '/';
      });
});
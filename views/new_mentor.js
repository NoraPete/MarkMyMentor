const fullstack = document.getElementById('fullstack');
const backend = document.getElementById('backend');
const devops = document.getElementById('devops');
const embedded = document.getElementById('embedded');
const name = document.getElementById('name');
const whichClass = document.getElementById('class');
const expl = document.getElementById('explonation');
const know = document.getElementById('knowledge');
const help = document.getElementById('helpfulness');
const send = document.getElementById('yip');
const btn = document.querySelector('button');

let bend = 0;
let dops = 0;
let eded = 0;
let fstak = 0;

if (fullstack.checked) {
  fstak = 1;
}
if (devops.checked) {
  dops = 1;
}
if (backend.checked) {
  bend = 1;
}
if (embedded.checked) {
  eded = 1;
}

send.addEventListener('submit', e => {
  e.preventDefault();
  fetch('/new', {
    method: 'POST',
    body: JSON.stringify({ name: name.value, class: whichClass.value, fullstack: fstak, devops: dops, backend: bend, embedded: eded, explanation: expl.value, knowledge: know.value, helpfulness: help.value }),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Data sent')
      if (response.status === 200) {
        // goBack()
        window.location.replace('index.html');
      } else {
        alert(response.body.err)
      }
    })
})

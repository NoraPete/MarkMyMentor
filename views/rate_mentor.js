
// put method /mentor/id
// expl
// know
// help
// values

const form = document.querySelector('form');
const name = document.querySelector('h3');



form.addEventListener('submit', e => {
  e.preventDefault();
  fetch('http://localhost:3000/mentor/:id', {
    method: PUT,
    body: JSON.stringify({
      explanation: form.explanation.value,
      knowledge: form.knowledge.value,
      helpfulness: form.helpfulness.value
    }),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(response => response.json())
})
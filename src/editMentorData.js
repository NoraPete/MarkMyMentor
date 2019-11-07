function editMentorData(mentor) {
  let editedData = {
    name: mentor.name,
    class: mentor.class,
    stack: [],
    explanation: parseInt(mentor.explanation) / parseInt(mentor.mark_sum),
    knowledge: parseInt(mentor.knowledge) / parseInt(mentor.mark_sum),
    helpfulness: parseInt(mentor.helpfulness) / parseInt(mentor.mark_sum)
  };
  if(parseInt(mentor.fullstack) === 1) {
    editedData.stack.push('Fullstack');
  }
  if(parseInt(mentor.backend) === 1) {
    editedData.stack.push('Backend');
  }
  if(parseInt(mentor.devops) === 1) {
    editedData.stack.push('DevOps');
  }
  if(parseInt(mentor.embedded) === 1) {
    editedData.stack.push('Embedded');
  }
  return editedData;
}

module.exports = editMentorData;

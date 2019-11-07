function getAverage(mentor) {
  let sumOfSkills = mentor.explanation + mentor.knowledge + mentor.helpfulness;
  let avg = (sumOfSkills / (mentor.mark_sum * 3)).toFixed(1);
  let response = {
    name: mentor.name,
    average: avg
  }
  return response;
}

function getBest(editedMentorList) {
  let top = editedMentorList[0];
  for(let i = 0; i < editedMentorList.length; i ++) {
    if(editedMentorList[i].average > top.average) {
      top = editedMentorList[i]
    }
  }
  return top;
}

function rank(mentors) {
  let editedList = [];
  mentors.forEach(function(mentor) {
    editedList.push(getAverage(mentor))
  });
  let toplist = [];
  while(editedList.length > 0) {
    toplist.push(getBest(editedList));
    editedList.splice(editedList.indexOf(getBest(editedList)), 1);
  }
  for(let i = 0; i < toplist.length; i ++) {
    toplist[i].rank = i + 1;
  }
  if(toplist.length > 3) {
    toplist.splice(3);
  }
  return toplist;
}

module.exports = rank;

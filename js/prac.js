//Obtengo la cantidad de representantes por cada partido
function countMembers(members) {
  var countedMembers = [];

   for (var i = 0; i < members.length; i++) {

      if (members[i].party == "R") {
        countedMembers.push(members[i]);
      }
    
      if (members[i].party == "D") {
        countedMembers.push(members[i]);
      }
    
      if (members[i].party == "I") {
        countedMembers.push(members[i]);
      }
    }
      return countedMembers;
  }

  countMembers(dataSenate.results[0].members);
  countMembers(dataSenate.results[0].members);
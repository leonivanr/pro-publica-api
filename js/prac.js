//Obtengo la cantidad de representantes por cada partido

var memberSenate = dataSenate.results[0].members;
var memberHouse = dataHouse.results[0].members;
var ind = "I";
var dem = "D";
var rep = "R";
function countMembers(members, idParty) {
  var countedMembers = [];
  for (var i = 0; i < members.length; i++) {

    if (members[i].party === idParty) {
      countedMembers.push(members[i])
    }
    return countedMembers;
  }
}
console.log(countMembers(memberSenate, ind));

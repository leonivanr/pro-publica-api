// // .stringify(valoraconvertir, selector/filtro, cantidad de espacios)
// var preElement = document.getElementById("senate-data").innerHTML = JSON.stringify(dataSenate,null,1);

createSenateTable();

function createSenateTable() {
  // Busco el elemento que tiene el id "senate-data" (tabla) y le pido que lo aloje en la variable "elSenateTable".
  var elSenateTable = document.getElementById('senate-data');
  // Copio el contenido el array "members" en la variable tableElement.
  tableElement = addTableToHTML(dataSenate.results[0].members);
  //Para despues cambiar el contenido de la tabla en el HTML
  elSenateTable.innerHTML = tableElement;

}

function addTableToHTML(membersArray) {
 //
  var elementHtml = '<thead class="thead-light"><tr><th scope="col"> Full Name </th><th scope="col"> Party </th><th scope="col"> State </th><th scope="col"> Seniority </th><th scope="col"> Percentage of votes with party </th></tr></thead>';
  elementHtml += '<tbody>';
//
  membersArray.forEach(function(member) {
    elementHtml += '<tr>';
    if (member.middle_name === null) {
      elementHtml += '<td><a href="' + member.url + '">' + member.first_name + ' ' + member.last_name + '</td>';
    } else {
      elementHtml += '<td><a href="' + member.url + '">' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</a></td>';
    }
    elementHtml += '<td>' + member.party + '</td>';
    elementHtml += '<td>' + member.state + '</td>';
    elementHtml += '<td>' + member.seniority + '</td>';
    elementHtml += '<td>' + member.votes_with_party_pct + ' % </td>';
    elementHtml += '</tr>';
  });
  elementHtml += '</tbody>';

  return elementHtml;
}

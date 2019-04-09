// // .stringify(valoraconvertir, selector/filtro, cantidad de espacios)
// var preElement = document.getElementById("senate-data").innerHTML = JSON.stringify(dataSenate,null,1);

createSenateTable();

function createSenateTable() {
  // Busco el elemento que tiene el id "senate-data" (tabla) y le pido que lo aloje en la variable "elSenateTable".
  var elSenateTable = document.getElementById('senate-data');
  // Copio el contenido del array "members" en la variable tableElement.
  tableElement = addTableToHTML(dataSenate.results[0].members);
  //Actualizo el contenido de la tabla en el HTML
  elSenateTable.innerHTML = tableElement;

}

function addTableToHTML(membersArray) {
  // Creo una variable que contenga las etiquetas con los titulos de cada columna de la tabla.
  var elementHtml = '<thead class="thead-light"><tr><th> Full Name </th><th> Party Affiliation</th><th> State </th><th> Seniority </th><th> Percentage of votes with party </th></tr></thead>';
  // Le agrego la etiqueta <tbody> al cuerpo de la tabla.
  elementHtml += '<tbody>';
  // Recorro el array "members", y por cada item, agrego una fila (<tr>) y las columnas que se necesitan.
  membersArray.forEach(function(member) {
    elementHtml += '<tr>';
    if (member.middle_name === null) { // Si no tiene segundo nombre, solo agrega nombre y apellido.
      elementHtml += '<td><a href="' + member.url + '">' + member.first_name + ' ' + member.last_name + '</td>';
    } else { // De lo contrario, nombre, segundo nombre y apellido.
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

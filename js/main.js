verifyPage();

// Verifica si es Senadores o Congreso, en base a eso, llama a la función createTable con sus respectivos datos.
function verifyPage() {

  if (document.getElementById("senate-table")) {
    createTable("senate-table", filterTable(dataSenate.results[0].members));
  } else {
    createTable("house-table", filterTable(dataHouse.results[0].members));
  }
}
// Toma la tabla y la rellena con los campos tomados de la función addTableToHTML,
function createTable(id, data) {
  // Busco el elemento que tiene el id "senate-data" (tabla) y le pido que lo aloje en la variable "elSenateTable".
  var elSenateTable = document.getElementById(id);
  // Copio el contenido del array "members" en la variable tableElement.
  tableElement = addTableToHTML(data);
  //Actualizo el contenido de la tabla en el HTML
  elSenateTable.innerHTML = tableElement;

}
// Recorre el array y crea el head y el body de la tabla.
function addTableToHTML(membersArray) {

  // Creo una variable que contenga las etiquetas con los titulos de cada columna de la tabla.
  var elementHtml = '<thead class="thead-light"><tr><th> Name </th><th> Party Affiliation</th><th> State </th><th> Seniority </th><th> Percentage of votes with party </th></tr></thead>';
  // Le agrego la etiqueta <tbody> al cuerpo de la tabla.
  elementHtml += '<tbody>';
  // Recorro el array "members", y por cada item, agrego una fila (<tr>) y las columnas que se necesitan.
  membersArray.forEach(function (member) {
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
// Filtra el array de miembros de acuerdo a los 3 checkboxes y el menú desplegable.
function filterTable(members) {

  var filters = [];
  //Obtengo el item seleccionado del menú desplegable de estados.
  var selectedState = document.getElementById("select-states").value;

  for (var i = 0; i < members.length; i++) {
    memberState = members[i].state;
    // Si el checkbox da verdadero, comprueba si hay algún estado seleccionado y la compara, después copia el elemento
    // en el array "filters".
    if ((selectedState === "All" || selectedState === memberState) && (document.getElementById("check-independent").checked === true)) {
      if (members[i].party === "I") {
        filters.push(members[i]);
      }
    }
    if ((selectedState === "All" || selectedState === memberState) && (document.getElementById("check-republican").checked === true)) {
      if (members[i].party === "R") {
        filters.push(members[i]);
      }
    }
    if ((selectedState === "All" || selectedState === memberState) && (document.getElementById("check-democrat").checked === true)) {
      if (members[i].party === "D") {
        filters.push(members[i]);
      }
    }

  }
  return filters;

}
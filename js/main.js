
verifyPage();

// Verifica si es Senadores o Congreso, en base a eso, llama a la función createTable con sus respectivos datos.
function verifyPage() {
  var idTable = document.getElementById("senate-table");
  if (idTable) {
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
    addToDropDown(member.state);
    elementHtml += '<td>' + member.seniority + '</td>';
    elementHtml += '<td>' + member.votes_with_party_pct + ' % </td>';
    elementHtml += '</tr>';
  });
  elementHtml += '</tbody>';

  return elementHtml;
}
// Añade todos los estados al menú desplegable.
function addToDropDown(state) {
  // Selecciono el menú desplegable y lo pongo en una variable.
  var elDropDownStates = document.getElementById('select-states');
  // Crea un elemento cada vez que se lo llame.
  var elOption = document.createElement('option');
  // Si el nombre de la clase es 0 (está vacío), entonces:
  if (elDropDownStates.getElementsByClassName(state).length == 0) {
    // Le pongo como clase, el nombre del estado
    elOption.className = state;
    // Le pongo como valor, el nombre del estado
    elOption.nodeValue = state;
    // Le pongo como contenido de la etiqueta, el nombre del estado
    elOption.textContent = state;
    //Creo una etiqueta <option> para cada state.
    elDropDownStates.appendChild(elOption)
  }
};
// Filtra el array de miembros de acuerdo a los 3 checkboxes y el menú desplegable.
function filterTable(members) {
  var filters = [];
  for (var i = 0; i < members.length; i++) {
    memberState = members[i].state;
    if ((document.getElementById("check-republican").checked === true)) {
      if (members[i].party == "R") {
        filters.push(members[i]);
      }
    }
    if ((document.getElementById("check-democrat").checked === true)) {
      if (members[i].party == "D") {
        filters.push(members[i]);
      }
    }
    if ((document.getElementById("check-independent").checked === true)) {
      if (members[i].party == "I") {
        filters.push(members[i]);
      }
    }
  }
  return filters;
}
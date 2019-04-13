//Añade los elementos recolectados por la función al menu desplegable.
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
    addToDropDown(member.state)
    elementHtml += '<td>' + member.seniority + '</td>';
    elementHtml += '<td>' + member.votes_with_party_pct + ' % </td>';
    elementHtml += '</tr>';
  });
  elementHtml += '</tbody>';

  return elementHtml;
}

function updateTableParty(membersArray,checkValue) {
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
// Checkboxes filters.
document.getElementById("check-democrat").addEventListener("change", myFunction);
document.getElementById("check-republican").addEventListener("change", myFunction);
document.getElementById("check-independent").addEventListener("change", myFunction);



function myFunction() {
  alert("The input value has changed. The new value is: ");
}

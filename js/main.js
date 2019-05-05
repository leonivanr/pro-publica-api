var memberSenateArray = dataSenate.results[0].members;
var memberHouseArray = dataHouse.results[0].members;

//Crea por primera vez la tabla sin filtros.
verifyPage();
// Cuando cambia el estado de los checkboxes o del menú, renueva la tabla con los filtros.
document.getElementById("checkboxes").addEventListener("change", () => {
  const table = document.querySelector('table');
  table.innerHTML = " ";
  verifyPage();
});

// Verifica si es Senadores o Congreso, en base a eso, llama a la función createTable con sus respectivos datos.
function verifyPage() {
  const page = document.getElementById("senate-table") ? createTable("senate-table", filterTable(memberSenateArray)) : createTable("house-table", filterTable(memberHouseArray));
  return page;
}

function createTable(id, data) {
  //Obtengo la tabla tabla
  const table = document.getElementById(id);
  //Crear head de la tabla.
  const thead = table.createTHead();
  thead.innerHTML = '<tr><th class="thead-light">Name</th><th>Party</th><th>State</th><th>Seniority</th><th>Votes</th></tr>';
  //Crear body de la tabla.
  const tbody = table.createTBody();
  // Crear una fila por cada miembro.
  data.forEach(miembro => {
    const row = document.createElement('tr');
    const nameM = document.createElement('td');
    const stateM = document.createElement('td');
    const partyM = document.createElement('td');
    const votesM = document.createElement('td');
    const seniorityM = document.createElement('td');
    // Asignar valores.
    // Controlar si tienen segundo nombre.
    if (miembro.middle_name === null) {
      nameM.textContent = `${miembro.first_name} ${miembro.last_name}`;
    } else {
      nameM.textContent = `${miembro.first_name} ${miembro.middle_name} ${miembro.last_name}`;
    }
    partyM.textContent = miembro.party;
    stateM.textContent = miembro.state;
        seniorityM.textContent = miembro.seniority;
    votesM.textContent = `${miembro.votes_with_party_pct} %`;
    //Insertar en la fila
    row.appendChild(nameM);
    row.appendChild(partyM);
    row.appendChild(stateM);
    row.appendChild(seniorityM);
    row.appendChild(votesM);
    //Insertar en el body de la tabla.
    tbody.appendChild(row);
  });
}
// Filtra el array de miembros de acuerdo a los 3 checkboxes y el menú desplegable.

function filterTable(members) {
  let filters = [];
  //Obtengo el item seleccionado del menú desplegable de estados.
  const selectedState = document.getElementById("select-states").value;

  for (let i = 0; i < members.length; i++) {
    memberState = members[i].state;
    // Si el checkbox da verdadero, comprueba si hay algún estado seleccionado y la compara, después copia el elemento
    // en el array "filters".

    if ((selectedState === "All" || selectedState === memberState) && (document.getElementById("check-republican").checked === true)) {
      if (members[i].party == "R") {
        filters.push(members[i]);
      }
    }
    if ((selectedState === "All" || selectedState === memberState) && (document.getElementById("check-democrat").checked === true)) {
      if (members[i].party == "D") {
        filters.push(members[i]);
      }
    }
    if ((selectedState === "All" || selectedState === memberState) && (document.getElementById("check-independent").checked === true)) {
      if (members[i].party == "I") {
        filters.push(members[i]);
      }
    }
  }
  return filters;

}

/*////////////////////////////////////////
// Forma más simple y ordenada de filtrar.
////////////////////////////////////////*/
/* function filterTable(array) {

  let stateSelect = document.getElementById("select-states").value;
  let checkeds = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(element => element.value);
  let items = [];
  let aux = [];

  checkeds.forEach(element => {
    aux = [];
    aux = array.filter(item => item.party === element && (item.state === stateSelect || stateSelect === "All"));
    items.push.apply(items, aux);
  })

  return items;
}
 */

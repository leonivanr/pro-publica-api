var memberSenateArray = dataSenate.results[0].members;
var memberHouseArray = dataHouse.results[0].members;
var estados = [{
    "letrasEstado": "AL",
    "nombreCompleto": "Alabama"
  },
  {
    "letrasEstado": "AK",
    "nombreCompleto": "Alaska"
  },
  {
    "letrasEstado": "AS",
    "nombreCompleto": "American Samoa"
  },
  {
    "letrasEstado": "AR",
    "nombreCompleto": "Arkansas"
  },
  {
    "letrasEstado": "AZ",
    "nombreCompleto": "Arizona"
  },
  {
    "letrasEstado": "CA",
    "nombreCompleto": "California"
  },
  {
    "letrasEstado": "CO",
    "nombreCompleto": "Colorado"
  },
  {
    "letrasEstado": "CT",
    "nombreCompleto": "Connecticut"
  },
  {
    "letrasEstado": "DE",
    "nombreCompleto": "Delaware"
  },
  {
    "letrasEstado": "FL",
    "nombreCompleto": "Florida"
  },
  {
    "letrasEstado": "GA",
    "nombreCompleto": "Georgia"
  },
  {
    "letrasEstado": "GU",
    "nombreCompleto": "Guam"
  },
  {
    "letrasEstado": "HI",
    "nombreCompleto": "Hawaii"
  },
  {
    "letrasEstado": "IA",
    "nombreCompleto": "Iowa"
  },
  {
    "letrasEstado": "ID",
    "nombreCompleto": "Idaho"
  },
  {
    "letrasEstado": "IL",
    "nombreCompleto": "Illinois"
  },
  {
    "letrasEstado": "IN",
    "nombreCompleto": "Indiana"
  },
  {
    "letrasEstado": "KS",
    "nombreCompleto": "Kansas"
  },
  {
    "letrasEstado": "KY",
    "nombreCompleto": "Kentucky"
  },
  {
    "letrasEstado": "LA",
    "nombreCompleto": "Lousiana"
  },
  {
    "letrasEstado": "MA",
    "nombreCompleto": "Massachussets"
  },
  {
    "letrasEstado": "MD",
    "nombreCompleto": "Maryland"
  },
  {
    "letrasEstado": "ME",
    "nombreCompleto": "Maine"
  },
  {
    "letrasEstado": "MI",
    "nombreCompleto": "Michigan"
  },
  {
    "letrasEstado": "MN",
    "nombreCompleto": "Minnesota"
  },
  {
    "letrasEstado": "MO",
    "nombreCompleto": "Missouri"
  },
  {
    "letrasEstado": "MP",
    "nombreCompleto": "Northern Mariana Islands"
  },
  {
    "letrasEstado": "MS",
    "nombreCompleto": "Mississippi"
  },
  {
    "letrasEstado": "MT",
    "nombreCompleto": "Montana"
  },
  {
    "letrasEstado": "NC",
    "nombreCompleto": "North Carolina"
  },
  {
    "letrasEstado": "ND",
    "nombreCompleto": "North Dakota"
  },
  {
    "letrasEstado": "NE",
    "nombreCompleto": "Nebraska"
  },
  {
    "letrasEstado": "NH",
    "nombreCompleto": "New Hampshire"
  },
  {
    "letrasEstado": "NJ",
    "nombreCompleto": "New Jersey"
  },
  {
    "letrasEstado": "NM",
    "nombreCompleto": "New Mexico"
  },
  {
    "letrasEstado": "NV",
    "nombreCompleto": "Nevada"
  },
  {
    "letrasEstado": "NY",
    "nombreCompleto": "New York"
  },
  {
    "letrasEstado": "OH",
    "nombreCompleto": "Ohio"
  },
  {
    "letrasEstado": "OK",
    "nombreCompleto": "Oklahoma"
  },
  {
    "letrasEstado": "OR",
    "nombreCompleto": "Oregon"
  },
  {
    "letrasEstado": "PA",
    "nombreCompleto": "Pennsylvania"
  },
  {
    "letrasEstado": "PR",
    "nombreCompleto": "Puerto Rico"
  },
  {
    "letrasEstado": "RI",
    "nombreCompleto": "Rhode Island"
  },
  {
    "letrasEstado": "SC",
    "nombreCompleto": "South Carolina"
  },
  {
    "letrasEstado": "SD",
    "nombreCompleto": "South Dakota"
  },
  {
    "letrasEstado": "TN",
    "nombreCompleto": "Tennessee"
  },
  {
    "letrasEstado": "TX",
    "nombreCompleto": "Texas"
  },
  {
    "letrasEstado": "UT",
    "nombreCompleto": "Utah"
  },
  {
    "letrasEstado": "VA",
    "nombreCompleto": "Virginia"
  },
  {
    "letrasEstado": "VI",
    "nombreCompleto": "Virgin Islands"
  },
  {
    "letrasEstado": "VT",
    "nombreCompleto": "Vermont"
  },
  {
    "letrasEstado": "WA",
    "nombreCompleto": "Washington"
  },
  {
    "letrasEstado": "WI",
    "nombreCompleto": "Wisconsin"
  },
  {
    "letrasEstado": "WV",
    "nombreCompleto": "West Virginia"
  },
  {
    "letrasEstado": "WY",
    "nombreCompleto": "Wyoming"
  },
]

//Crea por primera vez la tabla sin filtros.
verifyPage();
// Cuando cambia el estado de los checkboxes o del menú, renueva la tabla con los filtros.
document.getElementById("checkboxes").addEventListener("change", function () {
  verifyPage();
});;

// Verifica si es Senadores o Congreso, en base a eso, llama a la función createTable con sus respectivos datos.
function verifyPage() {
  if (document.getElementById("senate-table")) {
    createTable("senate-table", filterTable(memberSenateArray));
  } else {
    createTable("house-table", filterTable(memberHouseArray));
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
  var elementHtml = '<thead class="thead-light"><tr><th> Name </th><th> Party Affiliation</th><th> State </th><th> Seniority </th><th> Votes with party </th></tr></thead>';
  // Le agrego la etiqueta <tbody> al cuerpo de la tabla.
  elementHtml += '<tbody>';
  // Recorro el array "members", y por cada item, agrego una fila (<tr>) y las columnas que se necesitan.
  membersArray.forEach(function (member) {
    elementHtml += '<tr>';
    if (member.middle_name === null) { // Si no tiene segundo nombre, solo agrega nombre y apellido.
      elementHtml += '<td><a href="' + member.url + '">' + member.first_name + ' ' + member.last_name + '</a></td>';
    } else { // De lo contrario, nombre, segundo nombre y apellido.
      elementHtml += '<td><a href="' + member.url + '">' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</a></td>';
    }
    elementHtml += '<td>' + member.party + '</td>';
    elementHtml += '<td>' + member.state + '</td>';
    addToDropDown(member.state);
    elementHtml += '<td>' + member.seniority + '</td>';
    elementHtml += '<td id="percent">' + member.votes_with_party_pct + ' % </td>';
    elementHtml += '</tr>';
  });
  elementHtml += '</tbody>';

  return elementHtml;
}
// Filtra el array de miembros de acuerdo a los 3 checkboxes y el menú desplegable.
/* function filterTable(members) {

  var filters = [];
  //Obtengo el item seleccionado del menú desplegable de estados.
  var selectedState = document.getElementById("select-states").value;

  for (var i = 0; i < members.length; i++) {
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

} */

function filterTable(array) {

  let stateSelect = compareSelectStates(document.getElementById("select-states").value);
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

/*///////////////////////////////// 
        Add states DropDown
/////////////////////////////////*/

function addToDropDown(state) {
  var elDropDownStates = document.getElementById('select-states');
  var elOption = document.createElement('OPTION');

  if (elDropDownStates.getElementsByClassName(state).length == 0) {
    elOption.className = state;
    elOption.nodeValue = state;
    elOption.textContent = compareStates(state);
    elDropDownStates.appendChild(elOption)
  }
};

function compareStates(stateName) {
  
  var states = estados.filter(letters => letters.letrasEstado === stateName);
  return states[0].nombreCompleto;
  // for (let i = 0; i < estados.nombres.length; i++) {
  //   if (stateName === estados.nombres[i].letrasEstado) {
  //     return estados.nombres[i].nombreCompleto;
  //   }
  // }
}

function compareSelectStates(stateName) {
  var states = estados.filter(letters => letters.nombreCompleto === stateName);
  if (stateName === "All") {
    return "All";
  } else {
    return states[0].letrasEstado;
  }
}
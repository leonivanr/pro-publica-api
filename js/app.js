// TODO: Verificar por qué no funciona el fucking fetch().
// TODO: Verificar el funcionamiento de filtros.
// TODO: Verificar si es necesario createTable(), o se arma desde HTML.
var dataM = {};

/* 
// Prueba fetch:
fetch('https://randomuser.me/api/?results=10')
    .then((respuesta) => respuesta.json()) // Transforma los datos en JSON.
    .then((data) => {
        dataM = data.results;
        console.table(dataM);
    })
    .catch((error) => console.log(error))
 */

fetch('http://api.propublica.org/congress/v1/113/senate/members.json', {
        method: 'GET',
        headers: new Headers({
            'X-API-Key': 'D2sQEk1LttT9w8Vydx7vfZZtD3Cag10zupr6TxbL'
        })
    })
    .then((respuesta) => respuesta.json()) // Transforma los datos en JSON.
    .then((data) => {
        console.log(JSON.stringify(data))// Intento mostrar los datos que recibo por consola.
    })
    .catch((error) => console.log(error))// En caso de haber algún error, mostrarlo por consola.




var app = new Vue({
    el: '#vue-app',
    data: {
        memberSenate: [{
            name: 'Lunes - Senadores',
            party: 'I',
            state: 'AZ',
            votes: 98.35,
            seniority: 8
        }, {
            name: 'Martes - Senadores',
            party: 'D',
            state: 'BZ',
            votes: 97.12,
            seniority: 6
        }, {
            name: 'Miercoles - Senadores',
            party: 'R',
            state: 'CZ',
            votes: 76.3,
            seniority: 14
        }, {
            name: 'Jueves - Senadores',
            party: 'I',
            state: 'DZ',
            votes: 91.35,
            seniority: 7
        }, {
            name: 'Viernes - Senadores',
            party: 'D',
            state: 'EZ',
            votes: 93.14,
            seniority: 12
        }, {
            name: 'Sabado - Senadores',
            party: 'R',
            state: 'FZ',
            votes: 99.14,
            seniority: 15
        }],
        memberHouse: [{
            name: 'Lunes - House',
            party: 'I',
            state: 'AZ',
            votes: 98.35,
            seniority: 8
        }, {
            name: 'Martes - House',
            party: 'D',
            state: 'BZ',
            votes: 97.12,
            seniority: 6
        }, {
            name: 'Miercoles - House',
            party: 'R',
            state: 'CZ',
            votes: 76.3,
            seniority: 14
        }, {
            name: 'Jueves - House',
            party: 'I',
            state: 'DZ',
            votes: 91.35,
            seniority: 7
        }, {
            name: 'Viernes - House',
            party: 'D',
            state: 'EZ',
            votes: 93.14,
            seniority: 12
        }, {
            name: 'Sabado - House',
            party: 'R',
            state: 'FZ',
            votes: 99.14,
            seniority: 15
        }]
    },
    methods: {
        createTable: (id, data) => {
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
        },
        filterTable: (array) => { // Agregar parametro de array.

            /*             let stateSelect = document.getElementById("select-states").value;
                        let checkeds = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(element => element.value);
                        let items = [];
                        let aux = [];

                        checkeds.forEach(element => {
                            aux = [];
                            aux = array.filter(item => item.party === element && (item.state === stateSelect || stateSelect === "All"));
                            items.push.apply(items, aux);
                        })

                        return items; */
            return alert(array[0]);
        },
        mostLeast: (arrayM, leastOrMost, attendanceOrLoyal) => {
            // Obtengo la cantidad de elementos que cubren ese 10%.
            const minLenght = Math.round((arrayM.length * 10) / 100) //
            let aux = [];
            if (leastOrMost === "least") {
                if (attendanceOrLoyal === "attendance") {
                    // Ordeno el array comparando los valores de missed_votes.
                    arrayM.sort((a, b) => (a.missed_votes_pct > b.missed_votes_pct) ? 1 : ((b.missed_votes_pct > a.missed_votes_pct) ? -1 : 0));
                    // Itero hasta que llegue al 10%.
                    for (var i = 0; aux.length < minLenght; i++) {
                        aux.push(arrayM[i]);
                    }
                    // Cuando llega al último elemento, verifica si el que sigue es igual.
                    while (aux[aux.length - 1].missed_votes_pct === arrayM[i + 1].missed_votes_pct) {
                        aux.push(arrayM[i + 1]);
                        i++;
                    }
                    return aux;
                } else if (attendanceOrLoyal === "loyal") {
                    arrayM.sort((a, b) => (a.votes_with_party_pct > b.votes_with_party_pct) ? 1 : ((b.votes_with_party_pct > a.votes_with_party_pct) ? -1 : 0));
                    for (var i = 0; aux.length < minLenght; i++) {
                        aux.push(arrayM[i]);
                    }
                    while (aux[aux.length - 1].votes_with_party_pct === arrayM[i + 1].votes_with_party_pct) {
                        aux.push(arrayM[i + 1]);
                        i++;
                    }
                    return aux;
                }
            } else if (leastOrMost === "most") {
                if (attendanceOrLoyal === "attendance") {
                    arrayM.sort((a, b) => (a.missed_votes_pct < b.missed_votes_pct) ? 1 : ((b.missed_votes_pct < a.missed_votes_pct) ? -1 : 0));
                    for (var i = 0; aux.length < minLenght; i++) {
                        aux.push(arrayM[i]);
                    }
                    while (aux[aux.length - 1].missed_votes_pct === arrayM[i + 1].missed_votes_pct) {
                        aux.push(arrayM[i + 1]);
                        i++;
                    }
                    return aux;
                } else if (attendanceOrLoyal === "loyal") {
                    arrayM.sort((a, b) => (a.votes_with_party_pct < b.votes_with_party_pct) ? 1 : ((b.votes_with_party_pct < a.votes_with_party_pct) ? -1 : 0));
                    for (var i = 0; aux.length < minLenght; i++) {
                        aux.push(arrayM[i]);
                    }
                    while (aux[aux.length - 1].votes_with_party_pct === arrayM[i + 1].votes_with_party_pct) {
                        aux.push(arrayM[i + 1]);
                        i++;
                    }
                    return aux;
                }
            }
        }
    }
})


// PROPUBLICA KEY
// D2sQEk1LttT9w8Vydx7vfZZtD3Cag10zupr6TxbL 
// PROPUBLICA DATA
//'http://api.propublica.org/congress/v1/113/senate/members.json'
//'http://api.propublica.org/congress/v1/113/house/members.json'
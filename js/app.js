// TODO: Verificar por qué no funciona el fucking fetch().
// TODO: Verificar el funcionamiento de filtros.
// TODO: Verificar si es necesario createTable(), o se arma desde HTML.


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
        }
    }
})


// PROPUBLICA KEY
// D2sQEk1LttT9w8Vydx7vfZZtD3Cag10zupr6TxbL 
// PROPUBLICA DATA
//'http://api.propublica.org/congress/v1/113/senate/members.json'

/* fetch('http://api.propublica.org/congress/v1/113/senate/members.json', {
        method: 'GET',
        headers: new Headers ({
            'X-API-Key':'iv8LMc9T9sQKOc0EfDC1NLtQU68pFsF6O6W3NPJz'
        })
    })
    .then((respuesta) => respuesta.json()) // Transforma los datos en JSON.
    .then((data) => {
         console.log(JSON.stringify(data));
    })
 */
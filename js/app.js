// DONE: Verificar por qué no funciona el fucking fetch().
// DONE: Verificar si es necesario createTable(), o se arma desde HTML.
// TODO: Verificar el funcionamiento de filtros.

var siteUrl = '';

if (document.getElementById('senate')) {
    siteUrl = 'https://api.propublica.org/congress/v1/113/senate/members.json';
} else if (document.getElementById('house')) {
   siteUrl = 'https://api.propublica.org/congress/v1/113/house/members.json';
}

var app = new Vue({
    el: '#vue-app',
    data: {
        siteUrl: siteUrl,
        membersList: [],
    },
    methods: {
        getData: () => {
            fetch(siteUrl, {
                    headers: new Headers({
                        'X-API-Key': 'D2sQEk1LttT9w8Vydx7vfZZtD3Cag10zupr6TxbL'
                    })
                })
                .then((respuesta) => respuesta.json()) // Transforma los datos en JSON.
                .then(function (jsonData) {
                    app.membersList = jsonData.results[0].members;
                })
                // Intento mostrar los datos que recibo por consola.
                .catch((error) => alert("Pasaron cosas.")) // En caso de haber algún error, mostrarlo por consola.
        },

    }
})
app.getData();

// PROPUBLICA KEY
// D2sQEk1LttT9w8Vydx7vfZZtD3Cag10zupr6TxbL 

// PROPUBLICA DATA
//'http://api.propublica.org/congress/v1/113/senate/members.json'
//'http://api.propublica.org/congress/v1/113/house/members.json'
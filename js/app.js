fetch('http://api.propublica.org/congress/v1/113/senate/members.json', {
        method: 'GET',
        headers: {
            'X-API-Key': 'iv8LMc9T9sQKOc0EfDC1NLtQU68pFsF6O6W3NPJz',
        }
    })
    .then((respuesta) => console.log(respuesta.json())) // Transforma los datos en JSON.
    .then((data) => {
        console.log(JSON.stringify(data));
    })

/* var app = new Vue({
    el: '#vue-app',
    data: {
        message: ''
    }
})
 */

// PROPUBLICA KEY
// D2sQEk1LttT9w8Vydx7vfZZtD3Cag10zupr6TxbL 
// PROPUBLICA DATA
//'http://api.propublica.org/congress/v1/113/senate/members.json'
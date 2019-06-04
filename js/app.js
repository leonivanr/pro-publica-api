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
        membersAux: [],
        numberOfDemocrats: 0,
        numberOfRepublicans: 0,
        numberOfIndependents: 0,
        totalMembers: 0,
        averageVotesDemocrats: 0,
        averageVotesRepublicans: 0,
        averageVotesIndependents: 0,
        averageVotesAll: 0,
        mostAttendance: [],
        leastAttendance: [],
        mostLoyal: [],
        leastLoyal: [],
        show: false,
        loading: true,
        alerta: false,
    },
    methods: {
        cachedFetch: (url, cacheKey = url) => {
            let cached = sessionStorage.getItem(cacheKey);
            if (cached !== null) {
                console.log('---------------')
                console.log('CACHEADO')
                console.log('---------------')

                app.membersList = JSON.parse(cached).results[0].members;
                app.membersAux = JSON.parse(cached).results[0].members;
                app.numberOfDemocrats = app.countMembers(JSON.parse(cached).results[0].members, 'D');
                app.numberOfRepublicans = app.countMembers(JSON.parse(cached).results[0].members, 'R');
                app.numberOfIndependents = app.countMembers(JSON.parse(cached).results[0].members, 'I');
                app.averageVotesAll = app.averageVotesWithPartyAll(JSON.parse(cached).results[0].members);
                app.averageVotesDemocrats = app.averageVotesWithParty(JSON.parse(cached).results[0].members, 'D');
                app.averageVotesRepublicans = app.averageVotesWithParty(JSON.parse(cached).results[0].members, 'R');
                app.averageVotesIndependents = app.averageVotesWithParty(JSON.parse(cached).results[0].members, 'I');
                app.mostAttendance = app.mostLeast(JSON.parse(cached).results[0].members, 'most', 'attendance');
                app.leastAttendance = app.mostLeast(JSON.parse(cached).results[0].members, 'least', 'attendance');
                app.mostLoyal = app.mostLeast(JSON.parse(cached).results[0].members, 'most', 'loyal');
                app.leastLoyal = app.mostLeast(JSON.parse(cached).results[0].members, 'least', 'loyal');
                app.totalMembers = (app.numberOfDemocrats + app.numberOfIndependents + app.numberOfRepublicans);


                setTimeout(() => {
                    app.loading = false;
                    app.show = true;
                }, 500)
                return Promise.resolve(new Response(new Blob([cached])));
            }

            return fetch(url, {
                    headers: {
                        'X-API-Key': 'D2sQEk1LttT9w8Vydx7vfZZtD3Cag10zupr6TxbL'
                    }
                })
                .then(response => {
                    console.log('---------------')
                    console.log('AJAX')
                    console.log('---------------')
                    if (response.status === 200) {
                        response.clone().text().then(content => {
                            sessionStorage.setItem(cacheKey, content);
                        })
                    }
                    setTimeout(() => {
                        app.loading = false;
                        app.show = true;
                    }, 500)
                    return response.json();
                })
                .then((jsonData) => {
                    app.membersList = jsonData.results[0].members;
                    app.membersAux = jsonData.results[0].members;
                    app.numberOfDemocrats = app.countMembers(jsonData.results[0].members, 'D');
                    app.numberOfRepublicans = app.countMembers(jsonData.results[0].members, 'R');
                    app.numberOfIndependents = app.countMembers(jsonData.results[0].members, 'I');
                    app.averageVotesAll = app.averageVotesWithPartyAll(jsonData.results[0].members);
                    app.averageVotesDemocrats = app.averageVotesWithParty(jsonData.results[0].members, 'D');
                    app.averageVotesRepublicans = app.averageVotesWithParty(jsonData.results[0].members, 'R');
                    app.averageVotesIndependents = app.averageVotesWithParty(jsonData.results[0].members, 'I');
                    app.mostAttendance = app.mostLeast(jsonData.results[0].members, 'most', 'attendance');
                    app.leastAttendance = app.mostLeast(jsonData.results[0].members, 'least', 'attendance');
                    app.mostLoyal = app.mostLeast(jsonData.results[0].members, 'most', 'loyal');
                    app.leastLoyal = app.mostLeast(jsonData.results[0].members, 'least', 'loyal');
                    app.totalMembers = (app.numberOfDemocrats + app.numberOfIndependents + app.numberOfRepublicans);
                    setTimeout(() => {
                        app.loading = false;
                        app.show = true;
                    }, 500)
                })
                // Intento mostrar los datos que recibo por consola.
                .catch((error) => {
                    app.alerta = true;
                    app.loading = false;
                }) // En caso de haber algún error, mostrarlo por consola.
        },
        filterTable: () => {
            let members = app.membersAux;
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
            app.membersList = filters;
            /* return items; */
        },
        countMembers: (arrayM, partyChar) => {
            let counted = arrayM.filter(e => e.party === partyChar);
            return counted.length;
        },
        averageVotesWithParty: (arrayM, partyChar) => {
            let dividerLength = 0;
            let countPercent = 0;
            let average = 0;
            for (let i = 0; i < arrayM.length; i++) {
                if (arrayM[i].party === partyChar) {
                    countPercent += arrayM[i].votes_with_party_pct;
                    dividerLength++
                }
            }
            average = (countPercent / dividerLength).toFixed(2)
            return average;
        },
        averageVotesWithPartyAll: (arrayM) => {
            let dividerLength = 0;
            let countPercent = 0;
            let average = 0;
            for (let i = 0; i < arrayM.length; i++) {
                countPercent += arrayM[i].votes_with_party_pct;
                dividerLength++
            }
            average = (countPercent / dividerLength).toFixed(2)

            return average;
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

    },
})
app.cachedFetch(app.siteUrl);

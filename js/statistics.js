/* ////////////////////////////////////////////////
                ESTADISTICAS
//////////////////////////////////////////////// */

var memberSenateArray = dataSenate.results[0].members;
var memberHouseArray = dataHouse.results[0].members;
var independent = "I";
var democrat = "D";
var republican = "R";
var loyal = "loyal";
var attendance = "attendance";
var least = "least";
var most = "most";
var stadistics = {
    "senate": [{
        "democrats": {
            "numberOfMembers": 0,
            "averageVotesWithParty": 0,
        },
        "republicans": {
            "numberOfMembers": 0,
            "averageVotesWithParty": 0,
        },
        "independents": {
            "numberOfMembers": 0,
            "averageVotesWithParty": 0,
        },
        "totalMembersAllParties": 0,
        "averageVotesAllParties": 0,
        "mostEngaged": 0,
        "leastEngaged": 0,
        "mostLoyal": 0,
        "leastLoyal": 0
    }],
    "house": [{
        "democrats": {
            "numberOfMembers": 0,
            "averageVotesWithParty": 0,
        },
        "republicans": {
            "numberOfMembers": 0,
            "averageVotesWithParty": 0,
        },
        "independents": {
            "numberOfMembers": 0,
            "averageVotesWithParty": 0,
        },
        "totalMembersAllParties": 0,
        "averageVotesAllParties": 0,
        "mostEngaged": 0,
        "leastEngaged": 0,
        "mostLoyal": 0,
        "leastLoyal": 0
    }],
}

verifyGlanceTable();
verifyLoyalTable();
verifyAttTable();

/* //////////////////////////
    Calculamos Estadisticas
////////////////////////// */
//Obtengo la cantidad de representantes por cada partido
function countMembers(arrayM, partyChar) {
    counted = arrayM.filter(e => e.party === partyChar);
    return counted.length;
}
// Cantidad promedio de votantes con cada partido. 
function averageVotesWithParty(arrayM, partyChar) {
    var dividerLength = 0;
    var countPercent = 0;
    var average = 0;
    for (let i = 0; i < arrayM.length; i++) {
        if (arrayM[i].party === partyChar) {
            countPercent += arrayM[i].votes_with_party_pct;
            dividerLength++
        }
    }
    average = (countPercent / dividerLength).toFixed(2)
    return average;
}
// Most o Least de acuerdo a parámetros.
function mostLeast(arrayM, leastOrMost, attendanceOrLoyal) {
    var minLenght = Math.round((arrayM.length * 10) / 100) //
    var aux = [];
    if (leastOrMost === "least") {
        if (attendanceOrLoyal === "attendance") {
            arrayM.sort((a, b) => (a.missed_votes > b.missed_votes) ? 1 : ((b.missed_votes > a.missed_votes) ? -1 : 0));
            for (let i = 0; aux.length < minLenght; i++) {
                aux.push(arrayM[i]);
            }
            return aux;
        } else if (attendanceOrLoyal === "loyal") {
            arrayM.sort((a, b) => (a.total_votes > b.total_votes) ? 1 : ((b.total_votes > a.total_votes) ? -1 : 0));
            for (let i = 0; aux.length < minLenght; i++) {
                aux.push(arrayM[i]);
            }
            return aux;
        }
    } else if (leastOrMost === "most") {
        if (attendanceOrLoyal === "attendance") {
            arrayM.sort((a, b) => (a.missed_votes < b.missed_votes) ? 1 : ((b.missed_votes < a.missed_votes) ? -1 : 0));
            for (let i = 0; aux.length < minLenght; i++) {
                aux.push(arrayM[i]);
            }
            return aux;
        } else if (attendanceOrLoyal === "loyal") {
            arrayM.sort((a, b) => (a.total_votes < b.total_votes) ? 1 : ((b.total_votes < a.total_votes) ? -1 : 0));
            for (let i = 0; aux.length < minLenght; i++) {
                aux.push(arrayM[i]);
            }
            return aux;
        }
    }
}

/* //////////////////////////
    Verificamos H o S
////////////////////////// */
function verifyGlanceTable() {
    if (document.getElementById('total-members-s')) {
        fillAtGlanceTable('total-members-s');

    } else if (document.getElementById('total-members-h')) {
        fillAtGlanceTable('total-members-h');
    }
}
function verifyAttTable() {
    if (document.getElementById('most-engaged-s')) {
        fillAttendanceTable(memberSenateArray, 'most-engaged-s');
        fillAttendanceTable(memberSenateArray, 'least-engaged-s');

    } else if (document.getElementById('most-engaged-h')) {
        fillAttendanceTable(memberHouseArray, 'most-engaged-h');
        fillAttendanceTable(memberHouseArray, 'least-engaged-h');
    }
}
function verifyLoyalTable() {
    if (document.getElementById('most-loyal-s')) {
        fillLoyaltyTable(memberSenateArray, 'most-loyal-s');
        fillLoyaltyTable(memberSenateArray, 'least-loyal-s');

    } else if (document.getElementById('most-loyal-h')) {
        fillLoyaltyTable(memberHouseArray, 'most-loyal-h');
        fillLoyaltyTable(memberHouseArray, 'least-loyal-h');
    }
}
/* //////////////////////////
    Llenamo' las tablas.
////////////////////////// */
function fillAtGlanceTable(id) { // TODO. Crear valores según H o S
    var tableElement = "<thead class='thead-light'><tr><th> Party </th><th> Votes </th><th> Percent </th></tr></thead>";
    tableElement += "<tbody>";
    tableElement += "<tr><td>Democrat</td><td>" + 15 + "</td><td>" + 12 + " % </td></tr>";
    tableElement += "<tr><td>Republican</td><td>" + 16 + "</td><td>" + 13 + " % </td></tr>";
    // TODO. Clausula por si no hay elementos.
    tableElement += "<tr><td>Independent</td><td>" + 17 + "</td><td>" + 14 + " %</td></tr>";
    tableElement += "</tbody>";
    tableElement += "<tr><td class='font-weight-bold'>Total</td><td class='font-weight-bold'>" + 75 + "</td><td class='font-weight-bold'>" + 8 + " %</td></tr>";
    tableElement += "</tbody>";
    if (id === "total-members-s") {
        document.getElementById('total-members-s').innerHTML = tableElement;
    } else {
        document.getElementById('total-members-h').innerHTML = tableElement;
    }
}

function fillAttendanceTable(arrayM, id) {
    let tableElement = "<thead class='thead-light'><tr><th> Name </th><th> Missed Votes </th><th> %Missed </th></tr></thead>";
    if (id === "most-engaged-s" || id === "most-engaged-h") {
        var attendanceArray = mostLeast(arrayM, least, attendance);
    } else {
        var attendanceArray = mostLeast(arrayM, most, attendance);
    }
    attendanceArray.forEach(function (member) {
        tableElement += "<tbody>";
        tableElement += "<tr>"
        if (member.middle_name === null) { // Si no tiene segundo nombre, solo agrega nombre y apellido.
            tableElement += '<td><a href="' + member.url + '">' + member.first_name + ' ' + member.last_name + '</a></td>';
        } else { // De lo contrario, nombre, segundo nombre y apellido.
            tableElement += '<td><a href="' + member.url + '">' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</a></td>';
        }
        tableElement += "<td>" + member.missed_votes + "</td><td>" + member.missed_votes_pct + " % </td></tr>";
        tableElement += "</tbody>";
    });
    document.getElementById(id).innerHTML = tableElement;
}

function fillLoyaltyTable(arrayM, id) {
    let tableElement = "<thead class='thead-light'><tr><th> Name </th><th> Party Votes </th><th> % Votes </th></tr></thead>";
    if (id === "most-loyal-s" || id === "most-loyal-h") {
        var loyaltyArray = mostLeast(arrayM, least, loyal);
    } else {
        var loyaltyArray = mostLeast(arrayM, most, loyal);
    }
    loyaltyArray.forEach(function (member) {
        tableElement += "<tbody>";
        tableElement += "<tr>"
        if (member.middle_name === null) { // Si no tiene segundo nombre, solo agrega nombre y apellido.
            tableElement += '<td><a href="' + member.url + '">' + member.first_name + ' ' + member.last_name + '</a></td>';
        } else { // De lo contrario, nombre, segundo nombre y apellido.
            tableElement += '<td><a href="' + member.url + '">' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</a></td>';
        }
        tableElement += "<td>" + member.total_votes + "</td><td>" + member.votes_with_party_pct + " % </td></tr>";
        tableElement += "</tbody>";
    });
    document.getElementById(id).innerHTML = tableElement;
}

/* ////////////////////////////////////////////////
                ESTADISTICAS
//////////////////////////////////////////////// */


var memberSenateArray = dataSenate.results[0].members;
var memberHouseArray = dataHouse.results[0].members;
var independent = "I";
var democrat = "D";
var republican = "R";
var missed = "missed";
var total = "total";
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
// TODO Hacer con Democrats
// TODO Hacer con Republicans

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

function mostLeast(arrayM, leastOrMost, missedOrTotal) {
    var minLenght = Math.round((arrayM.length * 10) / 100) //
    var aux = [];
    if (leastOrMost === "least") {
        if (missedOrTotal === "missed") {
            arrayM.sort((a, b) => (a.missed_votes > b.missed_votes) ? 1 : ((b.missed_votes > a.missed_votes) ? -1 : 0));
            for (let i = 0; aux.length < minLenght; i++) {
                aux.push(arrayM[i]);
            }
            return aux;
        } else if (missedOrTotal === "total") {
            arrayM.sort((a, b) => (a.total_votes > b.total_votes) ? 1 : ((b.total_votes > a.total_votes) ? -1 : 0));
            for (let i = 0; aux.length < minLenght; i++) {
                aux.push(arrayM[i]);
            }
            return aux;
        }
    }
    if (leastOrMost === "most") {
        if (missedOrTotal === "missed") {
            arrayM.sort((a, b) => (a.missed_votes < b.missed_votes) ? 1 : ((b.missed_votes < a.missed_votes) ? -1 : 0));
            for (let i = 0; aux.length < minLenght; i++) {
                aux.push(arrayM[i]);
            }
            return aux;
        } else if (missedOrTotal === "total") {
            arrayM.sort((a, b) => (a.total_votes < b.total_votes) ? 1 : ((b.total_votes < a.total_votes) ? -1 : 0));
            for (let i = 0; aux.length < minLenght; i++) {
                aux.push(arrayM[i]);
            }
            return aux;
        }
}
}
// Lleno las estadisticas.
/* function fillStatisticsFields() {
    stadistics.senate[0].democrats.numberOfMembers = countMembers(memberSenateArray, democrat);
    stadistics.senate[0].democrats.averageVotesWithParty = averageVotesWithParty(membersenate, democrat);
    stadistics.senate[0].republicans.numberOfMembers = countMembers(memberSenateArray, republican);
    stadistics.senate[0].republicans.averageVotesWithParty = averageVotesWithParty(membersenate, republican);
    stadistics.senate[0].independents.numberOfMembers = countMembers(memberSenateArray, independent);
    stadistics.senate[0].independents.averageVotesWithParty = averageVotesWithParty(membersenate, independent);
    stadistics.senate[0].leastLoyal = mostLeast(memberSenateArray, missed, most);
    stadistics.senate[0].mostLoyal = mostLeast(memberSenateArray, missedOrTotal, leastOrMost);
    stadistics.senate[0].leastEngaged = mostLeast(memberSenateArray, missed, most);
    stadistics.senate[0].mostEngaged = mostLeast(memberSenateArray, missedOrTotal, leastOrMost);
    stadistics.senate[0].averageVotesAllParties = 
    stadistics.senate[0].totalMembersAllParties = 
} */
// LLenamo' las tablas.
var mytable1 = "<thead class='thead-light'><tr><th> Party </th><th> Votes </th><th> Percent </th></tr></thead>";
mytable1 += "<tbody>";
mytable1 += "<tr><td>Democrat</td><td>" + 15 + "</td><td>" + 12 + " % </td></tr>";
mytable1 += "<tr><td>Republican</td><td>" + 16 + "</td><td>" + 13 + " % </td></tr>";
mytable1 += "<tr><td>Independent</td><td>" + 17 + "</td><td>" + 14 + " %</td></tr>";
mytable1 += "</tbody>";
mytable1 += "<tr><td class='font-weight-bold'>Total</td><td>" + 75 + "</td><td>" + 8 + " %</td></tr>";
mytable1 += "</tbody>";
document.getElementById('total-members').innerHTML = mytable1;


/* var mytable1 = "<thead class='thead-light'><tr><th> Name </th><th> Missed Votes </th><th> %Missed </th></tr></thead>";
var mostVoteSenate = mostLeast(memberSenateArray);
mostVoteSenate.forEach(function (member) {
    mytable1 += "<tbody>";
    mytable1 += "<tr>"
    if (member.middle_name === null) { // Si no tiene segundo nombre, solo agrega nombre y apellido.
        mytable1 += '<td>' + member.first_name + ' ' + member.last_name + '</td>';
    } else { // De lo contrario, nombre, segundo nombre y apellido.
        mytable1 += '<td>' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</td>';
    }

    mytable1 += "<td>" + member.missed_votes + "</td><td>" + member.missed_votes_pct + " % </td></tr>";
    mytable1 += "</tbody>";
});
document.getElementById('least-engaged').innerHTML = mytable1;

var mytable1 = "<thead class='thead-light'><tr><th> Name </th><th> Missed Votes </th><th> %Missed </th></tr></thead>";
var leastVoteSenate = lestVotes(memberSenateArray);
leastVoteSenate.forEach(function (member) {
    mytable1 += "<tbody>";
    mytable1 += "<tr>"
    if (member.middle_name === null) { // Si no tiene segundo nombre, solo agrega nombre y apellido.
        mytable1 += '<td>' + member.first_name + ' ' + member.last_name + '</td>';
    } else { // De lo contrario, nombre, segundo nombre y apellido.
        mytable1 += '<td>' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</td>';
    }

    mytable1 += "<td>" + member.missed_votes + "</td><td>" + member.missed_votes_pct + " % </td></tr>";
    mytable1 += "</tbody>";
});
document.getElementById('most-engaged').innerHTML = mytable1; */


/* //////////////////////////
/////////////////////////////
Loyalty/////////////////// */
var mytable1 = "<thead class='thead-light'><tr><th> Name </th><th> Missed Votes </th><th> %Missed </th></tr></thead>";
var mostVoteSenate = mostLeast(memberSenateArray, least, missed);
mostVoteSenate.forEach(function (member) {
    mytable1 += "<tbody>";
    mytable1 += "<tr>"
    if (member.middle_name === null) { // Si no tiene segundo nombre, solo agrega nombre y apellido.
        mytable1 += '<td>' + member.first_name + ' ' + member.last_name + '</td>';
    } else { // De lo contrario, nombre, segundo nombre y apellido.
        mytable1 += '<td>' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</td>';
    }

    mytable1 += "<td>" + member.missed_votes + "</td><td>" + member.missed_votes_pct + " % </td></tr>";
    mytable1 += "</tbody>";
});
document.getElementById('most-engaged').innerHTML = mytable1;

var mytable1 = "<thead class='thead-light'><tr><th> Name </th><th> Missed Votes </th><th> %Missed </th></tr></thead>";
var leastVoteSenate = mostLeast(memberSenateArray, most, missed);
leastVoteSenate.forEach(function (member) {
    mytable1 += "<tbody>";
    mytable1 += "<tr>"
    if (member.middle_name === null) { // Si no tiene segundo nombre, solo agrega nombre y apellido.
        mytable1 += '<td>' + member.first_name + ' ' + member.last_name + '</td>';
    } else { // De lo contrario, nombre, segundo nombre y apellido.
        mytable1 += '<td>' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</td>';
    }

    mytable1 += "<td>" + member.missed_votes + "</td><td>" + member.missed_votes_pct + " % </td></tr>";
    mytable1 += "</tbody>";
});
document.getElementById('least-engaged').innerHTML = mytable1;
























































/* function fillStatisticsFields() {
    estadisticas[0].numberOfRepublicans = countMembers(memberSenateArray, republican);
    estadisticas[0].numberOfIndependents = countMembers(memberSenateArray, independent);
    estadisticas[0].numberOfDemocrats = countMembers(memberSenateArray, democrat);
    estadisticas[1].numberOfRepublicans = countMembers(memberHouseArray, republican);
    estadisticas[1].numberOfIndependents = countMembers(memberHouseArray, independent);
    estadisticas[1].numberOfDemocrats = countMembers(memberHouseArray, democrat);
    estadisticas[0].membersRepDoNotVoteWithParty = averageVotesWithParty(memberSenateArray, republican);
    estadisticas[0].membersIndDoNotVoteWithParty = averageVotesWithParty(memberSenateArray, independent);
    estadisticas[0].membersDemDoNotVoteWithParty = averageVotesWithParty(memberSenateArray, democrat);
    estadisticas[1].membersRepDoNotVoteWithParty = averageVotesWithParty(memberHouseArray, republican);
    estadisticas[1].membersIndDoNotVoteWithParty = averageVotesWithParty(memberHouseArray, independent);
    estadisticas[1].membersDemDoNotVoteWithParty = averageVotesWithParty(memberHouseArray, democrat);
} */


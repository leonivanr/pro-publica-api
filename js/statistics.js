/* ////////////////////////////////////////////////
                ESTADISTICAS
//////////////////////////////////////////////// */
var memberSenateArray = dataSenate.results[0].members;
var memberHouseArray = dataHouse.results[0].members;
var independent = "I";
var democrat = "D";
var republican = "R";
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
        "leastEngaged":0,
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
        "leastEngaged":0,
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
    var average = 0;
    var countPercent = 0;
    for (let i = 0; i < arrayM.length; i++) {
        if (arrayM[i].party === partyChar) {
            countPercent += arrayM[i].votes_with_party_pct;
            average++
        }
    }
    return (countPercent / average).toFixed(2);
}
// Votos menos perdidos por partido. 
function lestVotes(array) {
    var minLenght = Math.round((array.length * 10) / 100) //
    array.sort((a, b) => (a.missed_votes > b.missed_votes) ? 1 : ((b.missed_votes > a.missed_votes) ? -1 : 0));
    var aux = [];
    for (let i = 0; aux.length < minLenght; i++) {
        aux.push(array[i]);
    }
    return aux;
}
// Votos más por partido. 
function mostMissedVotes(array) {
    var minLenght = Math.round((array.length * 10) / 100) //
    array.sort((a, b) => (a.missed_votes < b.missed_votes) ? 1 : ((b.missed_votes < a.missed_votes) ? -1 : 0));
    var aux = [];
    for (let i = 0; aux.length < minLenght; i++) {
        aux.push(array[i]);
    }
    return aux;
}
// 
function lestLoyalVotes(array) {
    var minLenght = Math.round((array.length * 10) / 100) //
    array.sort((a, b) => (a.total_votes > b.total_votes) ? 1 : ((b.total_votes > a.total_votes) ? -1 : 0));
    var aux = [];
    for (let i = 0; aux.length < minLenght; i++) {
        aux.push(array[i]);
    }
    return aux;
}
// Votos más por partido. 
function mostLoyalVotes(array) {
    var minLenght = Math.round((array.length * 10) / 100) //
    array.sort((a, b) => (a.total_votes < b.total_votes) ? 1 : ((b.total_votes < a.total_votes) ? -1 : 0));
    var aux = [];
    for (let i = 0; aux.length < minLenght; i++) {
        aux.push(array[i]);
    }
    return aux;
}
/* console.log("Most loyal votes Senate: " + mostLoyalVotes(memberSenateArray).length);
console.table(mostLoyalVotes(memberSenateArray));
console.log("Most loyal votes House: " + mostLoyalVotes(memberHouseArray).length);
console.table(mostLoyalVotes(memberHouseArray));
console.log("Least loyal votes Senate: " + mostLoyalVotes(memberSenateArray).length);
console.table(mostLoyalVotes(memberSenateArray));
console.log("Least loyal votes House: " + mostLoyalVotes(memberHouseArray).length);
console.table(mostLoyalVotes(memberHouseArray));

 */

// Lleno las estadisticas.
function fillStatisticsFields() {
    estadisticas.numberOfRepublicans = countMembers(memberSenateArray, republican);
    estadisticas.numberOfIndependents = countMembers(memberSenateArray, independent);
    estadisticas.numberOfDemocrats = countMembers(memberSenateArray, democrat);
}
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

/*
var mytable1 = "<thead class='thead-light'><tr><th> Name </th><th> Missed Votes </th><th> %Missed </th></tr></thead>";
var mostVoteSenate = mostVotes(memberSenateArray);
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
var mytable1 = "<thead class='thead-light'><tr><th> Name </th><th> Total Votes </th><th> %votes </th></tr></thead>";
var mostVoteSenate = mostLoyalVotes(memberSenateArray);
mostVoteSenate.forEach(function (member) {
    mytable1 += "<tbody>";
    mytable1 += "<tr>"
    if (member.middle_name === null) { // Si no tiene segundo nombre, solo agrega nombre y apellido.
        mytable1 += '<td>' + member.first_name + ' ' + member.last_name + '</td>';
    } else { // De lo contrario, nombre, segundo nombre y apellido.
        mytable1 += '<td>' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</td>';
    }

    mytable1 += "<td>" + member.total_votes + "</td><td>" + member.votes_with_party_pct + " % </td></tr>";
    mytable1 += "</tbody>";
});
document.getElementById('least-engaged').innerHTML = mytable1;

var mytable1 = "<thead class='thead-light'><tr><th> Name </th><th> Missed Votes </th><th> %Missed </th></tr></thead>";
var leastVoteSenate = lestLoyalVotes(memberSenateArray);
leastVoteSenate.forEach(function (member) {
    mytable1 += "<tbody>";
    mytable1 += "<tr>"
    if (member.middle_name === null) { // Si no tiene segundo nombre, solo agrega nombre y apellido.
        mytable1 += '<td>' + member.first_name + ' ' + member.last_name + '</td>';
    } else { // De lo contrario, nombre, segundo nombre y apellido.
        mytable1 += '<td>' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</td>';
    }

    mytable1 += "<td>" + member.total_votes + "</td><td>" + member.votes_with_party_pct + " % </td></tr>";
    mytable1 += "</tbody>";
});
document.getElementById('most-engaged').innerHTML = mytable1;
























































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




// console.table(memberSenateArray.sort((a, b) => (a.missed_votes > b.missed_votes) ? 1 : ((b.missed_votes > a.missed_votes) ? -1 : 0)));
/* console.table(memberSenateArray.sort(compare)); */
/* function compare(a, b) {
    if (a.missed_votes < b.missed_votes) {
        return -1;
    }
    if (a.missed_votes > b.missed_votes) {
        return 1;
    }
    return 0;
} */
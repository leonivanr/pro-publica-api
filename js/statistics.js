/* ////////////////////////////////////////////////
                ESTADISTICAS
//////////////////////////////////////////////// */
var memberSenateArray = dataSenate.results[0].members;
var memberHouseArray = dataHouse.results[0].members;
var independent = "I";
var democrat = "D";
var republican = "R";
var stadistics = {
    "numberOfDemocrats": 0,
    "numberOfIndependents": 0,
    "numberOfRepublicans": 0,
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
// Lleno las estadisticas.
function fillStatisticsFields() {
    estadisticas.numberOfRepublicans = countMembers(memberSenateArray, republican);
    estadisticas.numberOfIndependents = countMembers(memberSenateArray, independent);
    estadisticas.numberOfDemocrats = countMembers(memberSenateArray, democrat);
}

function fillTable(params) {
    var mytable1 = "<thead class='thead-light'><tr><th> Party </th><th> Votes </th><th> Percent </th></tr></thead>";
    mytable1 += "<tbody>";
    mytable1 += "<tr><td>Democrat</td><td>" + 15 + "</td><td>" + 12 + " % </td></tr>";
    mytable1 += "<tr><td>Republican</td><td>" + 16 + "</td><td>" + 13 + " % </td></tr>";
    mytable1 += "<tr><td>Independent</td><td>" + 17 + "</td><td>" + 14 + " %</td></tr>";
    mytable1 += "</tbody>";
    mytable1 += "<tr><td class='font-weight-bold'>Total</td><td>" + 75 + "</td><td>" + 8 + " %</td></tr>";
    mytable1 += "</tbody>";
    document.getElementById('total-members').innerHTML = mytable1;
}


























































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
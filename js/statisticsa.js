/* ////////////////////////////////////////////////
                ESTADISTICAS
//////////////////////////////////////////////// */
var memberSenateArray = dataSenate.results[0].members;
var memberHouseArray = dataHouse.results[0].members;
var independent = "I";
var democrat = "D";
var republican = "R";
var missed = "missed_votes";
var total = "total_votes";
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




function calculateStatistics(arrayM, partyChar, missedOrTotal, leastOrMost) {
    let countPercent = 0;
    let dividerLength = 0;
    var minLenght = Math.round((array.length * 10) / 100) //
    var aux = [];
    // Total miembros por partido + promedio de votos.
    if (partyChar === "D") {
        counted = arrayM.filter(e => e.party === partyChar);
        for (let i = 0; i < arrayM.length; i++) {
            if (arrayM[i].party === partyChar) {
                countPercent += arrayM[i].votes_with_party_pct;
                dividerLength++
            }
        }
        average = (countPercent / dividerLength).toFixed(2);
    }
    if (partyChar === "R") {
        counted = arrayM.filter(e => e.party === partyChar);
        for (let i = 0; i < arrayM.length; i++) {
            if (arrayM[i].party === partyChar) {
                countPercent += arrayM[i].votes_with_party_pct;
                dividerLength++
            }
        }
        average = (countPercent / dividerLength).toFixed(2);
    }
    if (partyChar === "I") {
        counted = arrayM.filter(e => e.party === partyChar);
        for (let i = 0; i < arrayM.length; i++) {
            if (arrayM[i].party === partyChar) {
                countPercent += arrayM[i].votes_with_party_pct;
                dividerLength++
            }
        }
        average = (countPercent / dividerLength).toFixed(2);
    }

}



console.table(companiasOrdenadas);


















































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
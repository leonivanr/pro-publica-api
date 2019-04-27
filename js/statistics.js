/* ////////////////////////////////////////////////
                ESTADISTICAS
//////////////////////////////////////////////// */
var memberSenateArray = dataSenate.results[0].members;
var memberHouseArray = dataHouse.results[0].members;
var independent = "I";
var democrat = "D";
var republican = "R";

//Obtengo la cantidad de representantes por cada partido
function countMembers(arrayM, partyChar) {
    counted = arrayM.filter(e => e.party === partyChar);
    return counted.length;
}

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
var estadisticas = [{
        "congress": "senate",
        "numberOfDemocrats": 0,
        "numberOfIndependents": 0,
        "numberOfRepublicans": 0,
        "membersDemDoNotVoteWithParty": 0,
        "membersIndDoNotVoteWithParty": 0,
        "membersRepDoNotVoteWithParty": 0,
        "membersVoteWithParty": 0,
        "membersMissedMostVotes": 0,
        "membersMissedLeastVotes": 0
    },
    {
        "congress": "house",
        "numberOfDemocrats": 0,
        "numberOfIndependents": 0,
        "numberOfRepublicans": 0,
        "membersDemDoNotVoteWithParty": 0,
        "membersIndDoNotVoteWithParty": 0,
        "membersRepDoNotVoteWithParty": 0,
        "membersVoteWithParty": 0,
        "membersMissedMostVotes": 0,
        "membersMissedLeastVotes": 0
    }
]

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
}

fillStatisticsFields();

for (let i = 0; i < estadisticas.length; i++) {
    var obj = estadisticas[i];
    console.log("Number of Democrats of " + obj.congress + ": " + obj.numberOfDemocrats);
    console.log("Average votes Dem of " + obj.congress + ": " + obj.averageVotesWithParty);
}
for (let i = 0; i < estadisticas.length; i++) {
    var obj = estadisticas[i];
    console.log("Number of Independents of " + obj.congress + ": " + obj.numberOfIndependents);
    console.log("Average votes Independents of " + obj.congress + ": " + obj.averageVotesWithParty);
}
for (let i = 0; i < estadisticas.length; i++) {
    var obj = estadisticas[i];
    console.log("Number of Republicans of " + obj.congress + ": " + obj.numberOfRepublicans);
    console.log("Average votes Republicans of " + obj.congress + ": " + obj.averageVotesWithParty);
} */
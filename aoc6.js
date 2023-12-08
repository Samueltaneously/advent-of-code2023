
let rawData = `
Time:        54     94     65     92
Distance:   302   1476   1029   1404
`;

// F O R M A T T I N G    O F    D A T A //

let raceTime = [54, 94, 65, 92];

let recordDistance = [302, 1476, 1029, 1404];

// F O R M A T T I N G    O F    D A T A //





distanceBoatTravels >= recordDistance[i];



const possibleHoldTimes = (raceTimeLimit) => {

    let holdTimesThatCompleteRace = [];


    for (let holdTime = 0; holdTime < raceTimeLimit; holdTime++) {

        let speed = holdTime;
        let raceTimeRemaining = raceTimeLimit - holdTime;
        let distanceBoatTravels = raceTimeRemaining * speed;

        if (distanceBoatTravels >= recordDistance[holdTime]) {

            holdTimesThatCompleteRace.push(distanceBoatTravels);

        }

    }

}


const solve = (raceTime, recordDistance) => {

    for (let i = 0; i < raceTime.length; i++) {

        possibleHoldTimes(i);


        if (distanceBoatTravels >= recordDistance[i]) {

        }

    }

}



solve();



recordDistance / holdTime
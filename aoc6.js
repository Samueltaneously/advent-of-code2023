
// let rawData = `
// Time:        54     94     65     92
// Distance:   302   1476   1029   1404
// `;

// F O R M A T T I N G    O F    D A T A //

let raceTimes = [54, 94, 65, 92];

let recordDistances = [302, 1476, 1029, 1404];

// F O R M A T T I N G    O F    D A T A //



//// P A R T    O N E ////
const possibleHoldTimes = (iteration, raceTimes, recordDistances) => {

    let holdTimesThatCompleteRace = [];
    let count = 0;


    for (let holdTime = 0; holdTime < raceTimes[iteration]; holdTime++) {

        let speed = holdTime;
        let raceTimeRemaining = raceTimes[iteration] - holdTime;
        let distanceBoatTravels = raceTimeRemaining * speed;

        if (distanceBoatTravels >= recordDistances[iteration]) {

            holdTimesThatCompleteRace.push(distanceBoatTravels);
            count++;

        }

    }

    console.log('holdtimes that complete the race:', holdTimesThatCompleteRace);
    console.log('count of ways to win:', count);
    return count;

}


const solve = (raceTimes, recordDistances) => {

    let count = 1;

    for (let iteration = 0; iteration < raceTimes.length; iteration++) {

        count *= possibleHoldTimes(iteration, raceTimes, recordDistances);

    }

    console.log('total', count);

}

solve(raceTimes, recordDistances);



//// P A R T    T W O ////

let raceTime = [54946592];

let recordDistance = [302147610291404];

console.log('part 2:', possibleHoldTimes(0, raceTime, recordDistance));
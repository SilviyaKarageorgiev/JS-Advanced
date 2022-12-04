class Triathlon {

    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {

        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        } else {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }
    }

    completeness(participantName, condition) {

        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        } else if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        let numberOfDisciplines = Math.floor(condition / 30);

        if (numberOfDisciplines == 1 || numberOfDisciplines == 2) {
            return `${participantName} could only complete ${numberOfDisciplines} of the disciplines`;
        } else {

            let gender = this.participants[participantName];
            this.listOfFinalists.push({
                name: participantName,
                gender: gender
            });

            delete this.participants[participantName];

            return `Congratulations, ${participantName} finished the whole competition`;
        }

    }

    rewarding(participantName) {
        if (!this.listOfFinalists.some(x => x.name === participantName)) {
            return `${participantName} is not in the current finalists list`;
        } else {
            return `${participantName} was rewarded with a trophy for his performance`;
        }
    }

    showRecord(criteria) {

        if (this.listOfFinalists.length == 0) {
            return `There are no finalists in this competition`;
        }

        if (criteria == 'male' || criteria == 'female') {
            let finalistsByGender = this.listOfFinalists.filter(f => f.gender === criteria);

            if (finalistsByGender.length == 0) {
                return `There are no ${criteria}'s that finished the competition`;
            }

            let first = finalistsByGender[0].name;
            return `${first} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        } else {

            let sorted = this.listOfFinalists.sort((a, b) => a.name.localeCompare(b.name));
            let result = [`List of all ${this.competitionName} finalists:`];
            sorted.forEach((finalist) => {
                result.push(`${finalist.name}`);
            });

            return result.join("\n");
        }
    }

}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("all"));



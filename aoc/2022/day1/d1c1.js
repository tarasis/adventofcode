use = "strict";

const fs = require("fs");
const inputText = fs.readFileSync("./input.txt").toString("utf-8");
const splitInputText = inputText.split("\n");

const testData = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

const splitTestData = testData.split("\n");
// console.log(splitInputText);
// console.log(splitTestData);

function determineHighestCarriedCalories(input) {
    let highestTotalCalories = 0;
    let numberOfElves = 1;
    let elfNumber = 1;
    let currentTotalCalories = 0;

    input.forEach((line, curIndex, array) => {
        if (line.length !== 0) {
            currentElf = numberOfElves;
            let num = Number.parseInt(line);
            if (Number.isInteger(num)) {
                // console.log(
                //     "current Calories: " + currentTotalCalories + " plus " + num
                // );
                currentTotalCalories += num;
            }
        } else {
            // console.log(
            //     `Current elf ${currentElf} has ${currentTotalCalories}`
            // );
            numberOfElves += 1;
            if (currentTotalCalories > highestTotalCalories) {
                elfNumber = currentElf;
                highestTotalCalories = currentTotalCalories;
            }
            currentTotalCalories = 0;
        }
    });

    console.log(
        `The most Calories carried by is Elf ${elfNumber} with ${highestTotalCalories} total calories`
    );

    return highestTotalCalories;
}

determineHighestCarriedCalories(splitTestData);
determineHighestCarriedCalories(splitInputText);

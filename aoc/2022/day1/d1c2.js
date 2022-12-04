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

function calculateEachElfsTotalCalories(input) {
    let calculatedCalories = [];
    let currentTotalCalories = 0;

    input.forEach((line, curIndex, array) => {
        if (line.length !== 0) {
            let num = Number.parseInt(line);
            if (Number.isInteger(num)) {
                currentTotalCalories += num;
            }
        } else {
            calculatedCalories.push(currentTotalCalories);
            currentTotalCalories = 0;
        }
    });

    return calculatedCalories;
}

/**
 * [getTotalOfTop description]
 *
 * @param   {[Integer]}  count  [count description]
 * @param   {[Array]}  array  [array description]
 *
 * @return  {[Integer]}         [return description]
 */
function getTotalOfTop(count, array) {
    const sortedArray = array.sort(compareNumeric);
    // console.log(sortedArray);
    return sortedArray[0] + sortedArray[1] + sortedArray[2];
}

function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}

let results = calculateEachElfsTotalCalories(splitTestData);
console.log("TestData = " + getTotalOfTop(3, results));

results = calculateEachElfsTotalCalories(splitInputText);
console.log("InputData = " + getTotalOfTop(3, results));

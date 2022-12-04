"use strict";

const fs = require("fs");
const inputText = fs.readFileSync("./input.txt").toString("utf-8");
const splitInputText = inputText.split("\n");

const splitTestData = `
A Y
B X
C Z
`.split("\n");

function processData(input) {
    let currentScore = 0;

    input.forEach((line) => {
        if (line.length > 0) {
            //add line check the moves are ABC / XYZ if not skip line
            const playerOneMove = convertMove(line[0]);
            const playerTwoMove = calculatePlayerMove(playerOneMove, line[2]);
            // console.log(playerTwo);
            const score = calculateScoreForRound(playerOneMove, playerTwoMove);

            currentScore += score;
        }
    });

    return currentScore;
}

/**
 * [calculatePlayerMove description]
 *
 * @param   {String}  playerMove  [playerMove description]
 * @param   {String}  outcome     [outcome description]
 *
 * @return  {String}              [return description]
 */
function calculatePlayerMove(playerMove, outcome) {
    let calculatedMove = "";

    // WIN
    if (outcome === "Z") {
        switch (playerMove) {
            case "rock":
                calculatedMove = "paper";
                break;
            case "paper":
                calculatedMove = "scissors";
                break;
            case "scissors":
                calculatedMove = "rock";
                break;
        }
    } else if (outcome === "Y") {
        //DRAW
        calculatedMove = playerMove;
    } else if (outcome === "X") {
        // LOSE
        switch (playerMove) {
            case "rock":
                calculatedMove = "scissors";
                break;
            case "paper":
                calculatedMove = "rock";
                break;
            case "scissors":
                calculatedMove = "paper";
                break;
        }
    }

    return calculatedMove;
}

/**
 * [convertMove description]
 *
 * @param   {String}  input  [input description]
 *
 * @return  {String}         [return description]
 */
function convertMove(input) {
    let move = "";

    let santatizedInput = input.toUpperCase();

    // console.log(santatizedInput);
    switch (santatizedInput) {
        case "A":
        case "X":
            move = "rock";
            break;
        case "B":
        case "Y":
            move = "paper";
            break;
        case "C":
        case "Z":
            move = "scissors";
            break;
    }

    return move;
}

function calculateScoreForRound(playerOneMove, playerTwoMove) {
    let score = 0;
    switch (playerTwoMove) {
        case "rock":
            score = 1;
            break;
        case "paper":
            score = 2;
            break;
        case "scissors":
            score = 3;
            break;
    }

    if (playerOneMove === playerTwoMove) {
        // draw
        score += 3;
    } else if (
        (playerOneMove === "rock" && playerTwoMove === "scissors") ||
        (playerOneMove === "paper" && playerTwoMove === "rock") ||
        (playerOneMove === "scissors" && playerTwoMove === "paper")
    ) {
        // loss player 1
    } else {
        // win for player 2
        score += 6;
    }
    console.log(`P1: ${playerOneMove}    P2:${playerTwoMove}    = ${score}`);

    return score;
}

console.log("TestData, Expected 12 got " + processData(splitTestData));

console.log("Real Data, got " + processData(splitInputText));

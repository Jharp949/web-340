//Title: index.js
//Author: James Harper
//Date: 6/10/2023
//Description: Web 340 - Assignment 3.2

"use strict";

const teamManager = require('./team-manager');

const teamsArray = teamManager.getTeams();
console.log('-- DISPLAYING TEAMS -- ');
teamsArray.forEach(team => {
  const viewTeam = teamManager.displayTeam(team);
  console.log(viewTeam);
  console.log();
});


const singleOne = teamManager.getTeam('San Diego Chargers');
const singleTwo = teamManager.getTeam('Los Angeles Rams');


console.log('\n-- DISPLAYING A SINGLE TEAM --');
if (singleOne) {
  const viewTeam1 = teamManager.displayTeam(singleOne);
  console.log(viewTeam1);
}


console.log('\n-- DISPLAYING A SINGLE TEAM --');
if (singleTwo) {
  const viewTeam2 = teamManager.displayTeam(singleTwo);
  console.log(viewTeam2);
}

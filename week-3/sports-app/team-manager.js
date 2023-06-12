//Title: team-manager.js
//Author: James Harper
//Date: 6/10/2023
//Description: Web 340 - Assignment 3.2

"use strict";

const Team = require('./team.js');

const teams = [
  new Team('San Diego Chargers', 'Charger', 52),
  new Team('Los Angeles Rams', 'Ram', 55),
  new Team('San Francisco 49ers', '49er', 54),
  new Team('Seattle Seahawks', 'Seahawk', 52),
  new Team('Denver Broncos', 'Bronco', 53),
];

function getTeams() {
  return teams;
}

function getTeam(name) {
  return teams.find(team => team.name === name);
}

function displayTeam(team) {
  const { name, mascot, playerCount } = team;
  return `Team: ${name}\nMascot: ${mascot}\nPlayer Count: ${playerCount}`;
}

module.exports = {
  getTeams,
  getTeam,
  displayTeam
};

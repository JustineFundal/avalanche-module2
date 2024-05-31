# avalanche-module2

LongRidesKillsBoredom and RPM Gear Indicator


Table of Contents

Introduction

Solidity Smart Contract

React Application

Installation and Setup

Usage

Introduction

This project consists of two main components: a Solidity smart contract that handles gear shifting logic based on RPM (Revolutions Per Minute) and a React application that provides a user interface to input RPM values and determine the corresponding gear.

Solidity Smart Contract

Contract: LongRidesKillsBoredom

The Solidity contract LongRidesKillsBoredom contains functions to determine if the RPM value is appropriate for different gears. Each gear has specific RPM requirements, and the contract enforces these using require, revert, and assert statements.

Functions

Gear2(uint RPM): Validates that the RPM is less than or equal to 20 for the 2nd gear.

Gear3(uint RPM): Checks that the RPM is less than 60 for the 3rd gear.

Gear4(uint RPM): Ensures the RPM is at least 100 for the 4th gear.

Gear5(uint RPM): Ensures the RPM is at least 120 for the 5th gear.

Solidity Code
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;



Installation and Setup
Prerequisites

Node.js and npm installed

Solidity compiler (e.g., via Remix or Truffle)


Usage
React Application: Open your browser and navigate to http://localhost:3000. Enter the RPM value in the input field to see the corresponding gear displayed.

Solidity Contract: Interact with the deployed contract using a web3 provider or a tool like Remix to call the functions with appropriate RPM values and see the results based on the constraints defined in the contract.


AUTHORS:

creator: Justine Felix V. Fundal

email: 8213339@ntc.edu.ph

contact: 09176510079

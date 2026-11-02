## NodeJS is a JS Runtime

- JS runs outside of the browser
- Based on the v8 JS Engine
- Node isn't a new language - its all JS

## NPM - node package manager
- Dependencies - needed for when the app is running
  - runtime packages are packages that are needed for runtime like node:http
- Dev Dependencies - needed while developing or building
  - development packages are then packages that only check, compile, test, etc our application, like tsx

## Basic Folder Structure
- *Folder, file -> holding specific responsibility*
  - utils -> can't hold any routing 
  - service logic -> shouldn't include db repository
  - routing -> should have service logic
- *Always have only one main entry file*
  - Root file should contain all the information for the entire source code.
  

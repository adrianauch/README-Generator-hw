# README-Generator-hw

## Table of Contents

-[Description](#description) -[Installation](#installation) -[Usage](#usage) -[Contribution](#contribution) -[License] -[Test Instructions](#test-instructions) -[Contact Information](#conact-information)

## Description:

This project was created to make creating a README file for projects more efficient. Developers can use this commnadline application to quickily generate a README right in their terminal. The application takes the user through a series of prompts and the README will be generated at the end with a table of contents, license badge, license link and informati on about the application.

## Instalation:

The application will need a commnadline in order to run so the user should have terminal or windows terminal (VS code is reccomend to use as well). Additionally, the user will have to have node.js installed and the inquierer package installed/

## Usage

The user will run node index.js command in the command line of their terminal. The inquirer package will prompt the suer with a seriers of questions to input about of the user projects. The application then takes the users responses and runs a function (called gernateMarkdown in this case) and that function will render table of contents and create the general layout of the README. Then the application uses the fs package to write the file and "print" the file to the users current directory. The user will then have to navigate to teh file labled README.md to view its contents. Please see the video for a visual tutorial.

https://user-images.githubusercontent.com/87041736/130299795-8a0e0338-6629-4fb3-94a2-a4415086c2e9.mov

Example of VS code version:
![picture of readme in vs code](assets/images/example1.png)

Example of README Preview
![picture of readme nicely formatted](assets/images/example2.png)

### Contribution

Please just comment them on this repository. https://github.com/adrianauch/README-Generator-hw.

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Test Instructions

Please make sure that you have downloaded and installed the nmp inquirer package to test the program. You cannot already have a README.md file created for your project.

### Contact

Please email me if you have any questions!
Adrian Auchterlonie
email: adrian.acuh11@gmail.com

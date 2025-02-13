# Native Electron Application

The application aims to provide an efficient approach to developing semiconductor functionalities, ensuring the reliable high-volume production of speakers. This application was experiment from the inspiration of existing real-world application.

## Installation

### Prerequisites

1.  Executing and building this electron application, the users should have Node-js version 14 and above.

        Install Node:
            https://nodejs.org/en

2.  To ensure type safety and stability, TypeScript is required. It compiles the TypeScript code into JavaScript, providing strong typing and preventing potential runtime errors.

        Install typescript:
            npm install typescript --global

### Steps

1.  Clone the repository:

        git clone https://github.com/Vigneshkumar-05/project.git

        cd project

2.  Install dependencies:

        npm install

## Usage

The application was developed with React and Electron. For executing in dev mode, Both the electron and react need to be executed simultaneously.

        npm run dev:react
        npm run dev:electron

## Build

Utilizing the electron-builder package to build the executables for multiple platforms. The command to build the application for specific platforms are,

Windows:

    npm run dist:win

Linux:

    npm run dist:linux

MacOS:

    npm run dist:mac

The current application will build the executable file in the application's main directory with the folder name "dist".

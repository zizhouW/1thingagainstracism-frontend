# #1Thing

Frontend of the #1Thing web application built by the #1Thing team during the [Tech For AAPI](https://www.techforaapi.org/) hackathon. Our campaign #1ThingAgainstRacism aims to promote the anti-racism awareness by providing a social platform for anyone to share their stories happened around them that raises anti-racism awareness, as well as their experience on racism. The platform allows users to post, like, comment, and share stories with their friends, family, and/or the public, in efforts to raise awareness on stopping racism and hate crimes.

## Getting started
#### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tools
The web application is written in ReactJS with hooks and functional components. [Material UI](https://mui.com/) is used for design system. [Sass](https://sass-lang.com/) was chosen to be our css preprocessor. Tests are not yet implemented, but the plan was to use [react-testing-libaray](https://testing-library.com/docs/react-testing-library/intro/) for unit testing, and [cypress](https://www.cypress.io/) for UI/UX testing.

## File structure
```
▾ src/
  ▸ api/                        |~ fetch api calls that communicates with #1Thing backend
  ▾ components/                 |~ react components that make up the web app
    ▾ component-name            |~ example name of component folder\
      ComponentName.js          |~ example react component
      ComponentName.scss        |~ style sheet of the react component
  ▸ constants/                  |~ a place for all constants used inteh web app
  ▸ pages/                      |~ pages (react components under the hood) in the web app
  ▸ styles/                     |~ common styles some components share
  ▸ util                        |~ utility functions used by more than one components
  App.js                        |~ entry to the react app
```

## Conventions
This project follows a couple traditional react/frontend best practices such as DRY, separation of concerns, etc. It practices functional components with hooks. The class namings follow the [BEM](http://getbem.com/naming/) convention. Adding ESLint/prettier with something like Airbnb was the guide would be a good add into the project.

# #1Thing

Frontend of the #1Thing web application built by the #1Thing team during the [Tech For AAPI](https://www.techforaapi.org/) hackathon.

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

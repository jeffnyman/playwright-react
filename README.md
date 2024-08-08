# Jeff's Vite + React + TS + Playwright Example

This project is based on the start Vite and React template with TypeScript as the language of choice. The focus of the project is showing the use of Playwright.

[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-1c8620.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Playwright - GitHub](https://img.shields.io/badge/GitHub-Playwright-1c8620.svg?logo=github)](https://github.com/microsoft/playwright/tree/main)
[![Playwright - Stack Overflow](https://img.shields.io/badge/stackoverflow-Playwright-e87922.svg?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/playwright)

## 🟢 Prerequisites

Make sure you have [Node.js](https://nodejs.org/en). The LTS version should be fine. You will also need the `npm` package manager (which comes with Node.js) or `yarn`. A development environment or IDE with TypeScript/JavaScript support will help. [Visual Studio Code](https://code.visualstudio.com/) is a good choice.

## 📦 Execution

Clone the repository and then set everything up:

```shell
npm ci
```

The reason for `npm ci` over `npm install` is covered best in this [Stack Overflow answer](https://stackoverflow.com/a/53325242).

Make sure to install the Playwright browsers:

```shell
npx playwright install
```

Now run the Playwright tests:

```shell
npx playwright test
```

What this does is start up a web server for the application and run the tests. There only happens to be one test because this repo is meant to serve as a starting point to understand how to situate a Playwright test context within a React application.

## ⚖ License

The code used in this project and in the linked tutorial are licensed under the [MIT license](https://github.com/jeffnyman/playwright-react-ui/blob/main/LICENSE).

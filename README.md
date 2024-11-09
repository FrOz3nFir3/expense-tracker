# Expense Tracker

### Clone the Repo
HTTPS
```js
git clone https://github.com/FrOz3nFir3/expense-tracker.git
```

SSH
```js
git clone git@github.com:FrOz3nFir3/expense-tracker.git
```

Create .env file in root folder refer [sample.env](https://github.com/FrOz3nFir3/expense-tracker/blob/main/sample.env)
```js
PORT=any port
MONGO_URI=mongodb atlas string here
JWT_SECRET=any random long secure string
COOKIE_SECRET=any random long secure string
```

Installation
```js
npm install
```

Build Mode
```js
npm run deploy
```

Development Mode
```js
npm run dev
```
Devlopment mode will expose server on different port, so you will need to change the baseUrl in [apiSlice.js](https://github.com/FrOz3nFir3/expense-tracker/blob/main/client/src/slice/apiSlice.js)

### Potential Improvements
Frontend
* Use CSS frameworks like Tailwind CSS, Material UI  which would enchance ui (like toast, modal, left pane etc).
* Actual loading skeleton component for each page for better user experience.
* Show graphs of the expenditure based on category etc.
* Allow to enter expense other than current month.
* Support of Sign in using Mobile, google, facebook etc

Backend
* Usuage of JWT refresh tokens and using of express-session.
* Using middleware like HelmetJS to prevent common web vulnerabilities.
* Input vaildation / sanitization using JOI, express-validator etc.
* Usage of email otp while creating of users.
* Expenses where embedded on users document, however as it scales we might need to use reference.

Both
* Usuage of linter like ESLint
* Unit and Functional Test Cases (Jest, or Mocha / Chai)
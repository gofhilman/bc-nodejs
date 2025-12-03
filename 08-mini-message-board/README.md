# Mini Message Board

The Mini Message Board is a simple web application that allows users to post messages with their name and view messages posted by others.

Live: <https://mini-message-board-9bsr.onrender.com/>

## Features

- View all messages on the homepage.
- Post a new message with a name and content.
- View details of individual messages.
- Form validation to ensure proper input.

## Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: EJS (Embedded JavaScript Templates), CSS
- **Database**: PostgreSQL
- **Utilities**: date-fns for formatting dates, express-validator for input validation

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up a `.env` file with the required environment variables (e.g., `PORT`, database connection details).
4. Run the application using `npm start` or `npm run dev` for development mode.
5. Open your browser and navigate to `http://localhost:<PORT>` (default is 3000).

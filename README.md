# Running/Environment

- Make sure you **fork** this repository to your own Github, then clone it to your computer
- From the project root directory, run `npm install`, then run `node server.js`
- Also make sure you have `mongod` running in the background
- Next, go to `http://localhost:3000/` in your browser
- Note that "logging in" will create a user if one doesn't exist

# Features

### Friends
As is, any user can send any other user a message. Instead, users should only be able to send messages to their friends. The `User` Model already has a `friends` array, but it's never used. As such:

- Give the ability to "add a friend"
- Show a friends list on the right of the screen
- Clicking a friend from the list should populate the `To` input 
- When a user presses "Send", first validate that they are sending the message to a friend

### Filter
Given many messages, a user will have a hard time finding messages from certain friends. A user should be able to filter the messages

- Add a drop-down to the top of the page
- The drop-down should have all the user's friends
- Selecting one of the friends will only show messages from that friend

### Register & Validate
Currently anyone can login as a user given the username. Instead, a user should have to sign up and authenticate their identitiy with a password. Note that any time you save a password it should be encrypted, and when you validate the password you should decrypt it. You can use [this NPM package](https://www.npmjs.com/package/cryptr) to encrypt/decrypt your passwords

- Add a `password` field to the `User` Model
- Add an input to the sign-in section for the user's password
- When a user tries to log in with a username and password:
    - Find the user in the DB based off the username
    - Validate the password they used
- Add an option to "sign up":
    - When a user signs up they have to use a unique username
    - Make sure you are encrypting their password before you store it in the DB


# Known issues
- When a user presses "Send", the entire conversation disappears
- A user can send a message to a user that doesn't exist; causes a server crash
- Using `username` instead of mongo ID to look for users

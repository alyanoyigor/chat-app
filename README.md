# Chat App ([`LOOK CLOSER`](https://chat-app-ai16.web.app/))

## A simple chat implementation with static contacts and API responses
![Chat App](https://user-images.githubusercontent.com/85354736/165063890-f64f6aa0-353c-4ca5-b8df-5aa03bd8d027.png)

### Requirements
#### Basic requirements
1. [x] As close as possible to the following image should be the chat page
![image](https://user-images.githubusercontent.com/85354736/165064287-146b4df9-6f2e-4f54-a0d1-6f4ac7fb14c8.png)
2. [x] User has access to a static list of contacts at the start of the application, as well as their history of communication with some contacts
3. [x] The history of communication between two contacts is displayed automatically when you select a contact from the contact list. Chat messages must contain the following attributes - message text, time, and date of transmission
4. [x] Upon selecting a contact, the user has the ability to write a message to the chat room, and upon sending the message, the user will receive an automatic response within 10-15 seconds with the message. To generate an automatic response you must use the Chuck Norris API https://api.chucknorris.io/, namely use the API method which generates random jokes. The value of "value" will be the text of the automatic response in the chat
5. [x] To implement search among contacts. Functionally, the search will work as in any well-known messenger
6. [x] Save the history of messages after reloading the page
7. [x] Contacts with new messages should automatically move up
8. [x] The code must be accompanied by a link to the deployed application
#### Additional requirements
1. [x] Adaptive design
2. [x] Login through one of the third-party providers (GMAIL, Facebook, etc.)

### Stack
- React
- Redux
- TypeScript
- Styled Components
- Prettier
- Eslint
- Husky

### Deploy
https://chat-app-ai16.web.app/

# video-server-challenge

Design a server that handles HTTP requests.

1. _User management_: The server should be able to register and authenticate users. User has: username, password, and an optional mobile_token (string) Required routes:

- Get users (no auth required): returns a list of all users
- Get users (no auth required): takes a username and return the user with matching username
- Register (no auth required): takes a username, password and optional string for mobile_token. Registers the user and authenticates the client as the newly created user
- Sign in/authenticate: takes a username and password, and authenticates the user
- Update User (must be signed in as the user): updates password and/or mobile_token of the user
- Delete User (must be signed in as the user): deletes the user

1. _Room management_: The server should be able to handle creating conference rooms Room has: name (non-unique), guid, host user, participants (users) in the room, and a capacity limit. Number of users in the room must not exceed the capacity Required routes:

- Create a room (signed in as a user): creates a room hosted by the current user, with an optional capacity limit. Default is 5.
- Change host (must be signin as the host): changes the host of the user from the current user to another user
- Join/leave (signed in as a user): joins/leaves the room as the current user
- Get info (no auth): given a room guid, gets information about a room
- Search for the rooms that a user is in: given a username, returns a list of rooms that the user is in.

## NOTES:

- **_Express + TypeScript_** is preferred, but feel free to implement in a framework you’re familiar with as well
- This spec is not comprehensive. Feel free to add any custom behaviour (or assumptions about **_user input_**) if they are not specified in the spec. But please do document these behaviours.
- The server DOES NOT need to persist anything between runs. You can store everything in memory if you want (bonus points for **_persistence of the data_**)

# Order
## A discord clone, but light theme is the only choice.
###### *I know, its gross*


### MVP Feature list:

- Servers anyone can join via links.
- Channels within the servers where messages are sent.
- Live chat within these channels.
- Private servers between two people.
- Log in and log out.
- Users cannot see neither servers they have not joined, nor direct messages that do not pertain to them.

### MVP User Stories:

- As a user, I want to be able to create an account with a displayed username so others can easily identify me.
- As a user, I want to be able to log out of my account and log back in, to both protect my account and use it on other devices.
- As a user, I want to be able to join servers easily to discuss topics relevant to myself.
- As a user, I want to be able to directly message other users privately as to have private conversations.
- As a user, I do not want to see servers and conversations not relevant to my interests to reduce visual clutter.

### Extra Features:

- A discord bot/webhook that will relay all messages from a specified channel on order to a specific channel on a discord server.
- A discord bot that has a command that allows members within a discord server to send a message to appear on order.
- Users can create and delete servers.
- Users can create and delete channels (in a server they own).
- Channel categories (collapsible collections of channels).
- Existing channels can be added to categories.
- Channels in categories can be removed from said category, or moved to new ones.
- Giphy integration for sending gifs in channels.
- A listing of all existing servers, only visible on opening another part of the app.
- Adding and removing other users from a friends list.
- Pinned messages

### Plan of attack:

- Design database structure
- Design component structure (aka look at discord some more)
- Design store/state structure
- Set up database with basic seeded data
- Set up back end routes
- Create react-redux basic site structure
- Create fine details and additional, smaller components
- Style site
- Add additional features (starting with discord webhook, then bot integration)

### Database diagram link:

https://dbdiagram.io/d/5f6e833b7da1ea736e2f6713
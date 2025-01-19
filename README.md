# UofTHacks12
<h1>Precept</h1>

<p>
  This project aimed to create an anonymous and randomized perspective-sharing platform, where a user can anonymously share their perspective and an anonymous response would be shared back from another random user.

For the frontend, we created a login, register, profile, mail, and map pages using Javascript, CSS, HTML, with React as a framework, and the importing Google Maps API. The map would display connections, using markers from the Google Map API, made by users throughout their time using the platform.

For the backend Python with Flask and SQLite in Python were used to store and utilize user data for message filters.

</p>
<h1>How it Works</h1>
Users will use the login page to either sign up for or login in to their account. Once signed in, they'll be brought to the main map page.
The map would show all the places a user received a message and where a message went. Markers on the map display the connections users have built by sending and receiving messages.
To write or comment on a message, users use the mail page.
The profile tab stores previously commented on mail from a random anonymous user from around the world.

Example:
- A Canadian user writes about their stressful life as a university student.
 - The message could then be sent to an Argentinian user.
 - This user could then provide their perspective/reply to the message.
 - The new message would then be returned to the Canadian user.

This allows both users to share their perspective on a shared topic, such as post-secondary education in Canada vs. Argentina

<h1>Challenges / Obstacles</h1>
We were unable to fully connect the backend to the frontend due to API connection issues. This lead to a non-functional frontend.
There were also some frontend components that were not implemented due to developer expereince difficulties.

<h1>How to Run</h1>
Clone repo
In terminal, change directory (cd) into cloned repo
npm run dev

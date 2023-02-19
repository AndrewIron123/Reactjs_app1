## What was the purpose of this project?

I created this project to explore my programming knowledge.

## How to run my application?
1. In bash in "json-mock-api" folder please run the following commands:

    npm install
    npm start

    (The api is available at url http://localhost:3001 - no need to go to that url ;))

2. In bash in "reactjs_app1" folder please run the following commands:

    npm install
    npm start

###`Main application` will launch in the browser under the link http://localhost:3000/ - go to that url ;)

## What is interesting about this project?

This is an application using the React.js library.
In my application I used: React.js(Function - with Hooks and Class Components), Redux, Sass.
This is a website design with ###`top and side navigation`.

###`The top navigation` contains, among other things, links to the home page and the contact form. 
An interesting element is also the ###`change to the light and dark mode` of the entire page.

###`Make an appointment`(calendar) page contains a form that is sent via the post method to the API and saved in the json-mock-api\src\db.json file. 

###`The side navigation` contains categories and articles that are fetched from the API(json-mock-api\src\db.json).
###`After entering the article`, its content is also downloaded from the API as html.

###`If you refresh the page`:
-the button will be highlighted depending on the url, 
-and the light/dark mode will be as it was before the page refresh (this feature works by using local storage).

###`I made a mobile view.`

## What packages did I use in my application?

Create React App (https://github.com/facebook/create-react-app)
Json Mock Api (https://github.com/petergoes/json-mock-api)
React Icons (https://github.com/react-icons/react-icons)
Redux (https://redux.js.org/introduction/getting-started)












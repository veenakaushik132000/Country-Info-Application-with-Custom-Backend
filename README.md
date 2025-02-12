A full-stack Country Info Application using React for the frontend and Node.js + Express for the backend. The app allows users to search for countries and view detailed information about them.

Ensure you have the following installed: 
                                        Node.js (v16 or later)
                                        npm (or yarn)
                                        Git

Backend Setup (Node.js + Express): npm install

Create a .env file
Inside the backend/ folder, create a .env file:
                                              PORT=7000
                                             API_URL=https://restcountries.com/v3.1

Your backend will be running at http://localhost:7000                                             



Frontend Setup (React + Redux): REACT_APP_API_URL=http://localhost:7000

Start the React app :  npm start

Your frontend will be running at http://localhost:3000


 API Endpoints (Backend) :
                          GET	/api/countries?name=XYZ	Fetch a list of countries by name
                          GET	/api/countries/:code	Fetch detailed info for a country

Available Scripts
Backend:
npm start – Start the Node.js server
npm run dev – Start the server in development mode

Frontend:
npm start – Run the React app
npm run build – Build the app for production


🖥️ Tech Stack
Frontend: React, Redux Toolkit, Axios
Backend: Node.js, Express, dotenv
State Management: Redux Toolkit



The backend fetches country data from REST Countries API.
The frontend fetches data from the backend using Axios.









                          

# Netflix Clone 🍿🎬

This is a Netflix clone built using React, TMDB API, JWT Authentication, Firebase, and MongoDB. The website allows users to browse movies, view details, and authenticate through JWT for a personalized experience. The app also integrates Firebase for additional features.

## Features ✨

- **Movie Browsing**: Fetches movie data from the TMDB API and displays a list of trending and popular movies 🎥.
- **Movie Details**: Displays detailed information for each movie when clicked 📜.
- **Authentication**: Users can sign up, log in, and securely authenticate via JWT tokens 🔐.
- **User Profile**: Authenticated users can have personalized data 🧑‍💻.
- **Firebase Integration**: Used for additional functionalities like storing images and handling user data 📸.
- **MongoDB Database**: Stores user information and additional data 💾.

## Tech Stack 🛠️

- **Frontend**: React.js ⚛️
- **Backend**: Node.js, Express.js 🌐
- **Authentication**: JWT (JSON Web Tokens) 🔑
- **Database**: MongoDB 🗄️ (for storing user data)
- **APIs**: TMDB API (for fetching movie data) 🎬
- **Cloud Storage**: Firebase (for image storage) ☁️
- **Styling**: CSS, SCSS, and modern UI components 🎨

## Installation 🚀

### Prerequisites ⚙️
- Node.js and npm installed
- MongoDB (for the backend)
- Firebase setup (for storage)
- TMDB API key 🎥

### Steps 🔧

Usage 🎬
Sign Up / Log In: Users can create an account or log in to access personalized features 🔐.
Browse Movies: The homepage displays a list of trending and popular movies fetched from the TMDB API 🎥.
Movie Details: Clicking on a movie will show more detailed information, including the movie's plot, cast, and release date 📜.
Profile: After logging in, users can see their profile and preferences 👤.


Apologies for the confusion! Here's the corrected project structure for your Netflix clone:

markdown
Copy code
# Netflix Clone 🍿🎬

This is a Netflix clone built using React, TMDB API, JWT Authentication, Firebase, and MongoDB. The website allows users to browse movies, view details, and authenticate through JWT for a personalized experience. The app also integrates Firebase for additional features.

## Features ✨

- **Movie Browsing**: Fetches movie data from the TMDB API and displays a list of trending and popular movies 🎥.
- **Movie Details**: Displays detailed information for each movie when clicked 📜.
- **Authentication**: Users can sign up, log in, and securely authenticate via JWT tokens 🔐.
- **User Profile**: Authenticated users can have personalized data 🧑‍💻.
- **Firebase Integration**: Used for additional functionalities like storing images and handling user data 📸.
- **MongoDB Database**: Stores user information and additional data 💾.

## Tech Stack 🛠️

- **Frontend**: React.js ⚛️
- **Backend**: Node.js, Express.js 🌐
- **Authentication**: JWT (JSON Web Tokens) 🔑
- **Database**: MongoDB 🗄️ (for storing user data)
- **APIs**: TMDB API (for fetching movie data) 🎬
- **Cloud Storage**: Firebase (for image storage) ☁️
- **Styling**: CSS, SCSS, and modern UI components 🎨

## Installation 🚀

### Prerequisites ⚙️
- Node.js and npm installed
- MongoDB (for the backend)
- Firebase setup (for storage)
- TMDB API key 🎥

### Steps 🔧

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
Install dependencies for both the client and server:

Navigate to the project directory:

bash
Copy code
cd netflix-clone
Install the frontend dependencies:

bash
Copy code
cd client
npm install
Then, install the backend dependencies:

bash
Copy code
cd ../server
npm install
Set up the environment variables:

In the backend (server folder), create a .env file and add the following variables:

env
Copy code
MONGO_URL=mongodb://your_mongo_db_url
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
TMDB_API_KEY=your_tmdb_api_key
Start the server and client:

In the server folder, start the backend server:

bash
Copy code
npm start
In the client folder, start the React app:

bash
Copy code
npm start
Your website should now be running at http://localhost:3000 🌍.

Usage 🎬
Sign Up / Log In: Users can create an account or log in to access personalized features 🔐.
Browse Movies: The homepage displays a list of trending and popular movies fetched from the TMDB API 🎥.
Movie Details: Clicking on a movie will show more detailed information, including the movie's plot, cast, and release date 📜.
Profile: After logging in, users can see their profile and preferences 👤.

## Project Structure 🗂

```plaintext
├── client/                 # React frontend code
│   ├── public/             # Public assets like images, index.html
│   ├── src/                # React components and app logic
│   │   ├── components/     # React components (Navbar, MovieCard, etc.)
│   │   ├── context/        # React Context or hooks for state management
│   │   ├── utils/          # Utility functions
│   │   ├── App.js          # Main React App component
│   │   ├── index.js        # Entry point for React
│   │   └── .env            # Environment variables (e.g., TMDB API key)
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend Node.js + Express code
│   ├── controllers/        # Controllers for handling requests
│   │   ├── authController.js
│   │   ├── movieController.js
│   │   └── userController.js
│   ├── models/             # MongoDB models for user data
│   │   ├── userModel.js
│   │   └── movieModel.js
│   ├── routes/             # API routes
│   │   ├── authRoutes.js
│   │   ├── movieRoutes.js
│   │   └── userRoutes.js
│   ├── middleware/         # Middleware (e.g., JWT verification)
│   │   └── authMiddleware.js
│   ├── .env                # Environment variables (e.g., MongoDB URL)
│   └── server.js           # Main entry point for the server
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
└── package.json            # Backend dependencies


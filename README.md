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

├── client/                 # React frontend code
│   ├── public/             # Public assets like images, index.html
│   ├── src/                # React components and app logic
│   ├── .env                # Environment variables (e.g., TMDB API key)
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend Node.js + Express code
│   ├── controllers/        # Controllers for handling requests
│   ├── models/             # MongoDB models for user data
│   ├── routes/             # API routes
│   ├── .env                # Environment variables (e.g., MongoDB URL)
│   └── server.js           # Main entry point for the server
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
└── package.json            # Backend dependencies

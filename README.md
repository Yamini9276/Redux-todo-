
# Redux Todo App

This is a simple React application demonstrating the use of Redux for state management. The app allows users to add, view, and manage todos.

## Features
- Add new todos
- View list of todos
- Mark todos as completed
- Delete todos

## Technologies Used
- React
- Redux Toolkit
- Vite
- ESLint

## Getting Started

### Prerequisites
- Node.js (v18 or above recommended)
- npm

### Installation
1. Clone the repository:
	```sh
	git clone https://github.com/Yamini9276/Redux-todo-.git
	```
2. Navigate to the project directory:
	```sh
	cd Redux-class
	```
3. Install dependencies:
	```sh
	npm install
	```

### Running the App
Start the development server:
```sh
npm run dev
```

Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Project Structure
```
Redux-class/
├── public/
├── src/
│   ├── app/
│   │   └── store.js
│   ├── Components/
│   │   └── Todo.jsx
│   ├── features/
│   │   └── Todo/
│   │       └── todoSlice.js
│   ├── App.jsx
│   ├── Counter.jsx
│   ├── main.jsx
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

## License
This project is licensed under the MIT License.

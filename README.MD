# 🎬 Movie Application

A full-stack Movie Application built using **React.js** and **Python Django REST Framework**. The application connects a React frontend with a Django backend to manage and display movie-related information.

## 🚀 Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Axios

### Backend
- Python
- Django
- Django REST Framework

### Database
- SQLite

## ✨ Features

- React-based user interface
- Django REST API integration
- Backend API for movie data
- SQLite database integration
- Frontend and backend separation

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Movie-Application
```

### 2. Backend Setup

```bash
cd backend/movie
```

Create a virtual environment:

```bash
python -m venv djvenv
```

Activate the virtual environment (Windows):

```bash
djvenv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Start the Django server:

```bash
python manage.py runserver
```

Backend URL: `http://127.0.0.1:8000/`

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

## 🗄️ Database

This project uses **SQLite**, a lightweight, file-based relational database.

Django ORM is used to interact with the database.

## 🔗 API Integration

The React frontend communicates with the Django REST Framework backend through HTTP requests using Axios or Fetch API.

## 🛠️ Development Tools

- Visual Studio Code
- Git and GitHub
- Postman
- Python
- React and npm

## 👨‍💻 Author

**Ananthu ES**

Full Stack Developer | Python & Django
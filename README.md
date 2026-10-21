# Full Stack Application Development Capstone Project

## Repository Name
**fullstack-car-dealership-capstone**

## Project Name
**XDrive Auto Dealership – Full Stack Car Dealership Web Application**

## Project Overview
XDrive Auto Dealership is a full-stack web application developed as the final submission for the IBM **Full Stack Application Development Capstone Project**. The application allows users to browse car dealers, filter dealers by state, view dealer details with customer reviews, run sentiment analysis on review text, register and log in, and post their own reviews for a dealership.

## Technology Stack
- **Backend:** Django, Django REST Framework, SQLite
- **Frontend:** React (Create React App), React Router, HTML5, CSS3
- **Database / Microservice:** IBM Cloudant (dealers and reviews data)
- **Sentiment Analysis:** IBM Watson Natural Language Understanding (NLU)
- **CI/CD:** GitHub Actions
- **Deployment:** IBM Code Engine
- **Version Control:** Git and GitHub

## Features
- Home page listing all car dealers (filterable by state)
- Dealer detail page showing dealer info and customer reviews
- Sentiment analysis (positive / negative / neutral) on review text
- User Sign-up (registration), Login, and Logout
- Post Review page (available to logged-in users only)
- Static pages: About Us and Contact Us
- Django admin panel accessible by the root user
- CI/CD pipeline with GitHub Actions that builds, tests, and deploys the app to IBM Code Engine

## Project Structure
```
server/
├── djangoapp/                  # Django application (models, views, urls, templates)
├── server/                     # Django project settings (settings.py, urls.py, wsgi.py)
├── frontend/                   # React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Register/       # Sign-up page (Register.jsx)
│   │   │   ├── Login/          # Login page (Login.jsx)
│   │   │   ├── Dealers/        # Dealers, Dealer details, PostReview components
│   │   │   ├── Header/         # Navigation bar
│   │   │   └── ...
│   │   ├── App.js
│   │   └── index.js
│   └── static/                 # About.html, Contact.html, CSS files
├── manage.py
├── requirements.txt
└── .github/workflows/server.yml  # GitHub Actions CI/CD workflow
```

## Getting Started

### Prerequisites
- Python 3.9+
- Node.js 16+
- Git

### Backend Setup
```bash
cd server
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
The Django server starts at `http://127.0.0.1:8000/`

### Frontend Setup
```bash
cd server/frontend
npm install
npm start
```
The React app runs at `http://localhost:3000/`

## API Endpoints
| Endpoint | Method | Description |
|---|---|---|
| `/djangoapp/get_dealers/` | GET | Get all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Get dealers filtered by state |
| `/djangoapp/dealer_details/<int:id>` | GET | Get dealer details by dealer ID |
| `/djangoapp/reviews/dealer/<int:id>` | GET | Get all reviews for a dealer |
| `/djangoapp/add_review` | POST | Add a review for a dealer |
| `/djangoapp/analyze_review_sentiments` | POST | Sentiment analysis of review text |
| `/djangoapp/register` | POST | User registration (Sign-up) |
| `/djangoapp/login` | POST | User login |
| `/djangoapp/logout` | POST | User logout |

## CI/CD
The GitHub Actions workflow (`.github/workflows/server.yml`) is triggered on every push to the `main` branch. It installs dependencies, runs Django tests, builds the React frontend, and deploys the Django application to IBM Code Engine.

## Deployment
The deployed Django application is available at:
`https://xdrive-dealership.us-south.codeengine.appdomain.cloud`

## Author
Capstone Learner — IBM Full Stack Application Development Professional Certificate

## License
This project is developed for educational purposes as part of the IBM Full Stack Application Development Capstone Project.
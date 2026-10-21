# Full Stack Application Development Capstone Project

## Repository Name
**fullstack-car-dealership-capstone**

## Project Name
**Dealership — Full Stack Car Dealership Web Application (Django + React)**

---

## Project Overview
This capstone project is a full-stack web application for a car dealership company. It allows users to browse car dealers, view dealer details and customer reviews, perform sentiment analysis on reviews, register/login, and post their own reviews. The application is built with a **Django** backend (REST APIs + server-rendered pages) and a **React** frontend, and is deployed to IBM Cloud Code Engine through a **GitHub Actions CI/CD** pipeline.

## Technology Stack
- **Backend:** Python 3, Django, Django REST Framework, SQLite
- **Frontend:** React (Create React App), React Router, Cloudant-style UI components
- **Sentiment Analysis:** IBM Watson Natural Language Understanding (NLU)
- **Database:** SQLite (development) / Django ORM models
- **CI/CD:** GitHub Actions
- **Deployment:** IBM Cloud Code Engine (Docker containerized Django app)
- **Version Control:** Git / GitHub

## Key Features
1. **Dealer Pages** — List all dealers, filter dealers by state, view dealer details by ID.
2. **Reviews** — Fetch reviews per dealer, post new reviews (logged-in users only), analyze review sentiment with Watson NLU.
3. **Authentication** — User sign-up (Register), login, and logout using Django session authentication.
4. **Static Pages** — "About Us" and "Contact Us" pages with custom CSS, navigation bar, team member details, and contact information.
5. **Admin Interface** — Django superuser (root) access for managing dealers, cars, and reviews.
6. **CI/CD Pipeline** — GitHub Actions workflow that builds, tests, and deploys the Django application to IBM Cloud Code Engine on every push to the main branch.

## Project Structure
```
fullstack-car-dealership-capstone/
├── server/
│   ├── djangoapp/                 # Django application (models, views, APIs, templates)
│   │   ├── static/                # Static assets (About.html, Contact.html, CSS, images)
│   │   ├── templates/             # Django templates (home page, dealer pages)
│   │   ├── models.py              # CarMake, CarModel, Dealer, Review models
│   │   ├── restapis.py            # REST API helper methods
│   │   └── views.py               # View functions (register, login, logout, dealers, reviews)
│   ├── server/                    # Django project settings
│   ├── manage.py
│   ├── Dockerfile
│   └── requirements.txt
├── server/frontend/               # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Register/Register.jsx   # Sign-up page (5 fields + Register button)
│   │   │   ├── Login/Login.jsx
│   │   │   ├── Dealers/Dealers.jsx
│   │   │   ├── Dealer/Dealer.jsx
│   │   │   └── PostReview/PostReview.jsx
│   │   └── App.jsx
├── .github/workflows/server.yml   # GitHub Actions CI/CD workflow
└── README.md
```

## Getting Started

### Prerequisites
- Python 3.9+
- Node.js 14+
- Git

### Backend Setup
```bash
cd server
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
The Django server starts at `http://localhost:8000`.

### Frontend Setup
```bash
cd server/frontend
npm install
npm start
```
The React app starts at `http://localhost:3000`.

## API Endpoints
| Endpoint | Method | Description |
|---|---|---|
| `/djangoapp/register` | POST | Register a new user |
| `/djangoapp/login` | POST | Log in an existing user |
| `/djangoapp/logout` | GET | Log out the current user |
| `/djangoapp/get_dealers/` | GET | Retrieve all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Retrieve dealers filtered by state |
| `/djangoapp/dealer/<id>` | GET | Retrieve dealer details by ID |
| `/djangoapp/reviews/dealer/<id>` | GET | Retrieve reviews for a dealer |
| `/djangoapp/add_review` | POST | Post a review for a dealer |
| `/djangoapp/analyze_review` | POST | Analyze review sentiment (Watson NLU) |
| `/djangoapp/get_cars` | GET | Retrieve all car makes and models |

## Deployment
The application is containerized with Docker and deployed to **IBM Cloud Code Engine**. The GitHub Actions workflow (`.github/workflows/server.yml`) builds the image, pushes it to IBM Container Registry, and deploys it to Code Engine on every push to `main`.

## Author
Capstone project for the **IBM Full Stack Application Development Professional Certificate** — Full Stack Application Development Capstone Project course.
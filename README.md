# xrwvm-fullstack_developer_capstone

## Project Name: Full Stack Car Dealership Application (Django + React)

**Repository Name:** `xrwvm-fullstack_developer_capstone`

**Project Name:** Full Stack Car Dealership Application — a full-stack web application built with a Django REST backend and a React frontend for browsing car dealerships, viewing and posting dealer reviews, performing sentiment analysis on reviews, and managing user registration/login.

---

## Project Overview

This capstone project for the **IBM Full Stack Application Development Capstone Project** course demonstrates end-to-end full-stack development skills. The application allows users to:

- View a list of car dealerships (filtered by state)
- View dealer details and customer reviews
- Register and log in as a user (Django authentication)
- Post reviews for dealerships
- Run sentiment analysis (Watson NLU) on review text
- Manage car makes and models through the Django admin panel

## Technology Stack

| Layer      | Technology |
|------------|------------|
| Frontend   | React.js, React Router, HTML5, CSS3 |
| Backend    | Django, Django REST Framework |
| Database   | SQLite (Django ORM) |
| Auth       | Django session authentication, JWT (djangorestframework-simplejwt) |
| NLU        | IBM Watson Natural Language Understanding (sentiment analysis) |
| CI/CD      | GitHub Actions |
| Deployment | IBM Cloud Code Engine / Koyeb |

## Repository Structure

```
xrwvm-fullstack_developer_capstone/
├── server/
│   ├── djangoapp/                 # Django application (models, views, REST endpoints)
│   ├── server/                    # Django project settings
│   ├── frontend/                  # React frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/Register.jsx
│   │   │   │   ├── Login/Login.jsx
│   │   │   │   ├── Dealers/Dealers.jsx
│   │   │   │   ├── Dealer/Dealer.jsx
│   │   │   │   └── PostReview/PostReview.jsx
│   │   │   └── App.js
│   │   └── static/                # Static pages (About.html, Contact.html)
│   ├── manage.py
│   └── requirements.txt
├── .github/workflows/server.yml   # GitHub Actions CI/CD workflow
├── README.md
└── .gitignore
```

## Key REST API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/djangoapp/register` | POST | Register a new user |
| `/djangoapp/login` | POST | Log in a user |
| `/djangoapp/logout` | GET | Log out the current user |
| `/djangoapp/get_dealers/` | GET | Get all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Get dealers by state |
| `/djangoapp/dealer/<id>` | GET | Get dealer details by ID |
| `/djangoapp/reviews/dealer/<id>` | GET | Get reviews for a dealer |
| `/djangoapp/add_review` | POST | Add a review for a dealer |
| `/djangoapp/get_cars` | GET | Get all car makes and models |
| `/djangoapp/analyze_review_sentiment` | POST | Analyze sentiment of review text |

## Setup and Run Locally

```bash
# Backend
cd server
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Frontend
cd server/frontend
npm install
npm start
```

## Author

Capstone project completed as part of the IBM Full Stack Application Development Professional Certificate.
# Best Cars Dealership — Full Stack Application Development Capstone

## Repository Name
**xrwvm-fullstack_developers_capstone**

## Project Name
**Best Cars Dealership — Django + React Full Stack Car Dealership Application**

## Project Overview
Best Cars Dealership is a full-stack web application developed as the final capstone project for the IBM **Full Stack Application Development Capstone Project** course. The application allows users to browse car dealerships, view dealer details and customer reviews, perform sentiment analysis on reviews, register/login, and post their own reviews for a dealership.

## Technology Stack
- **Backend:** Django, Django REST Framework, SQLite3, Node.js (Express microservice for sentiment analysis)
- **Frontend:** React, React Router, Cloudant-style REST services, HTML5, CSS3, Bootstrap
- **Authentication:** Django user authentication (login, logout, registration)
- **Sentiment Analysis:** IBM Watson NLU / Express sentiment microservice (`sentiment_analyzer`)
- **CI/CD:** GitHub Actions workflow with IBM Cloud toolchain deployment
- **Deployment:** IBM Cloud Code Engine

## Application Features
1. **Home / Dealerships page** — displays all dealers, with optional filtering by state.
2. **Dealer details page** — shows dealer information along with all posted reviews.
3. **About Us page** (`server/frontend/static/About.html`) — team members with roles, details, and email IDs.
4. **Contact Us page** (`server/frontend/static/Contact.html`) — contact details with navigation bar.
5. **User Registration (Sign-up)** — Username, First Name, Last Name, Email, Password fields with a Register button.
6. **User Login / Logout** — session-based authentication for reviewing dealers.
7. **Post Review** — authenticated users can post a review for any dealership.
8. **Sentiment Analysis** — each review is analyzed (positive / negative / neutral) via the sentiment analyzer microservice.
9. **REST API endpoints** — get all dealers, get dealer by ID, get dealers by state, get dealer reviews, add review, analyze review sentiment.

## Project Structure
```
xrwvm-fullstack_developers_capstone/
├── server/
│   ├── djangoapp/                 # Django application (models, views, templates, static)
│   │   ├── static/
│   │   │   ├── About.html
│   │   │   └── Contact.html
│   │   ├── templates/djangoapp/   # index.html, dealer_details.html, add_review.html, etc.
│   │   ├── models.py, views.py, urls.py, restapis.py
│   ├── server/                    # Django project settings
│   ├── frontend/
│   │   └── src/
│   │       ├── components/
│   │       │   ├── Register/Register.jsx
│   │       │   ├── Login/Login.jsx
│   │       │   ├── Dealers/Dealers.jsx
│   │       │   ├── Dealer/Dealer.jsx
│   │       │   └── PostReview/PostReview.jsx
│   ├── microservices/             # sentiment analyzer (Express) microservice
│   ├── manage.py
│   ├── requirements.txt
│   └── db.sqlite3
├── .github/workflows/server.yml   # GitHub Actions CI/CD pipeline
└── README.md
```

## Setup and Run Locally
```bash
# Backend (Django)
cd server
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Frontend (React)
cd server/frontend
npm install
npm start

# Sentiment analyzer microservice
cd server/microservices
npm install
node server.js
```

## Key Endpoints
- `/djangoapp/` — home page listing dealers
- `/djangoapp/dealer/<int:dealer_id>` — dealer details and reviews
- `/djangoapp/add_review/<int:dealer_id>` — post a review
- `/djangoapp/get_dealers/` — REST: all dealers
- `/djangoapp/get_dealers/<str:state>` — REST: dealers by state
- `/djangoapp/dealer/<int:dealer_id>/` — REST: dealer by ID
- `/djangoapp/get_reviews/<int:dealer_id>` — REST: dealer reviews
- `/djangoapp/login`, `/djangoapp/logout`, `/djangoapp/register` — authentication

## Author
Capstone project submitted for the IBM Full Stack Application Development Capstone Project (Final Project: Submission and Evaluation).
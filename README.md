# Best Cars Dealership — Full Stack Application Development Capstone Project

**Repository Name:** `fullstack-capstone-dealership`

**Project Name:** Best Cars Dealership

---

## 📋 Project Overview

Best Cars Dealership is a full-stack web application developed as the capstone project for the **IBM Full Stack Application Development Capstone Project** course. The application allows users to browse car dealerships, filter dealers by state, view dealer details and customer reviews, post their own reviews with AI-powered sentiment analysis, and manage user accounts through secure registration and login.

## 🛠️ Technology Stack

| Layer      | Technology |
|------------|------------|
| Backend    | Python, Django, Django REST Framework |
| Frontend   | React, React Router, Express (dev proxy) |
| Database   | MongoDB (IBM Cloudant) |
| AI Service | IBM Watson Natural Language Understanding (sentiment analysis of reviews) |
| CI/CD      | GitHub Actions |
| Deployment | IBM Cloud Code Engine (containerized with Docker) |

## ✨ Features

- **User Authentication** — Sign-up, login, and logout using Django's authentication system
- **Dealership Listing** — View all dealers on the home page, with filtering by state
- **Dealer Details** — View dealer information along with all customer reviews
- **Post Reviews** — Authenticated users can post reviews for any dealer
- **Sentiment Analysis** — Review sentiment (positive / negative / neutral) is analyzed with IBM Watson NLU
- **About Us & Contact Us** — Static pages with team details and contact information
- **Admin Panel** — Django admin for managing dealers, reviews, and users
- **CI/CD Pipeline** — Automated build, test, and deployment via GitHub Actions

## 📁 Project Structure

```
fullstack-capstone-dealership/
├── server/
│   ├── djangoapp/                  # Django application (models, views, templates)
│   │   ├── static/
│   │   │   ├── About.html          # About Us page
│   │   │   └── Contact.html        # Contact Us page
│   │   ├── templates/djangoapp/    # Django templates
│   │   ├── models.py               # Dealer, Review, CarMake, CarModel models
│   │   ├── views.py                # REST endpoints (dealers, reviews, auth)
│   │   └── urls.py
│   ├── frontend/                   # React frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/Register.jsx
│   │   │   │   ├── Login/Login.jsx
│   │   │   │   ├── Dealers/Dealers.jsx
│   │   │   │   ├── Dealer/Dealer.jsx
│   │   │   │   └── PostReview/PostReview.jsx
│   │   │   └── App.js
│   │   └── static/                 # Built React bundle served by Django
│   ├── server/                     # Django project settings
│   ├── manage.py
│   ├── requirements.txt
│   └── Dockerfile
├── .github/workflows/              # GitHub Actions CI/CD workflow
└── README.md
```

## 🔌 Key API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/djangoapp/register` | POST | Register a new user |
| `/djangoapp/login` | POST | Log in a user |
| `/djangoapp/logout` | GET | Log out the current user |
| `/djangoapp/get_dealers/` | GET | Retrieve all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Retrieve dealers filtered by state |
| `/djangoapp/dealer/<id>` | GET | Retrieve dealer details by ID |
| `/djangoapp/reviews/dealer/<id>` | GET | Retrieve reviews for a dealer |
| `/djangoapp/add_review` | POST | Post a review (with sentiment analysis) |
| `/djangoapp/get_cars` | GET | Retrieve all car makes and models |

## 🚀 Getting Started

### Prerequisites
- Python 3.9+
- Node.js 16+
- MongoDB / IBM Cloudant account
- IBM Watson NLU API key

### Local Setup

```bash
# Clone the repository
git clone https://github.com/<your-username>/fullstack-capstone-dealership.git
cd fullstack-capstone-dealership/server

# Install backend dependencies
pip install -r requirements.txt

# Run migrations and start the Django server
python manage.py migrate
python manage.py runserver

# In a second terminal, build the React frontend
cd frontend
npm install
npm run build
```

The application is then available at `http://localhost:8000`.

## 📦 Deployment

The application is containerized with Docker and deployed to **IBM Cloud Code Engine** through a GitHub Actions pipeline defined in `.github/workflows/server.yml`. The live deployment URL is stored in the `deploymentURL` file of this repository.

## 👤 Author

Capstone project submitted for the IBM Full Stack Application Development Capstone Project course on IBM Skills Network / Coursera.
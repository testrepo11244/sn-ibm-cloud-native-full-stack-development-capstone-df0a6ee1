# Full Stack Application Development Capstone Project

## Repository Name
**fullstack-car-dealership-capstone**

## Project Name
**AutoDeal – Full Stack Car Dealership Application**

---

## 📋 Project Overview

AutoDeal is a full-stack web application developed as the capstone project for the
**IBM Full Stack Application Development Capstone Project** course. The application
allows users to browse car dealerships, view dealership details and customer reviews,
perform sentiment analysis on reviews, and post their own reviews after registering
and logging in.

## 🚀 Features

- **Dealer Listings** – View all car dealers or filter them by state
- **Dealer Details** – View dealer information along with customer reviews
- **User Authentication** – Sign-up, login, and logout functionality (Django auth)
- **Review Posting** – Authenticated users can post reviews for any dealer
- **Sentiment Analysis** – IBM Watson NLU–powered sentiment analysis of review text
- **Admin Panel** – Django admin for managing dealers, cars, and reviews
- **About Us & Contact Us** – Static pages with navigation and styling
- **CI/CD Pipeline** – GitHub Actions workflow for build, test, and deployment
- **Cloud Deployment** – Application deployed to IBM Cloud Code Engine

## 🛠️ Technology Stack

| Layer      | Technology |
|------------|------------|
| Frontend   | React.js, React Router, Express (Node proxy server) |
| Backend    | Django, Django REST Framework |
| Database   | SQLite / Django ORM |
| NLU        | IBM Watson Natural Language Understanding |
| CI/CD      | GitHub Actions |
| Deployment | IBM Cloud Code Engine |

## 📁 Project Structure

```
fullstack-car-dealership-capstone/
│
├── server/
│   ├── djangoapp/                 # Django application (models, views, templates)
│   ├── server/                    # Django project settings
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/      # Sign-up page component
│   │   │   │   ├── Login/         # Login page component
│   │   │   │   ├── Dealers/       # Dealers home page component
│   │   │   │   ├── Dealer/        # Dealer details & reviews component
│   │   │   │   ├── PostReview/    # Post review component
│   │   │   │   └── SearchCars/    # Car makes and models search
│   │   │   └── App.js
│   │   └── static/                # Static HTML pages (About.html, Contact.html)
│   ├── manage.py
│   └── requirements.txt
│
├── .github/workflows/             # GitHub Actions CI/CD workflow
├── README.md
└── .gitignore
```

## ⚙️ Setup and Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/<username>/fullstack-car-dealership-capstone.git
   cd fullstack-car-dealership-capstone/server
   ```

2. **Install Python dependencies**

   ```bash
   pip install -r requirements.txt
   ```

3. **Run database migrations**

   ```bash
   python manage.py migrate
   python manage.py populate_db
   ```

4. **Start the Django server**

   ```bash
   python manage.py runserver
   ```

5. **Start the React frontend**

   ```bash
   cd frontend
   npm install
   npm start
   ```

## 🔗 Key API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/djangoapp/register` | POST | Register a new user |
| `/djangoapp/login` | POST | Log in a user |
| `/djangoapp/logout` | GET | Log out the current user |
| `/djangoapp/get_dealers/` | GET | Retrieve all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Retrieve dealers by state |
| `/djangoapp/dealer/<id>` | GET | Retrieve dealer details by ID |
| `/djangoapp/reviews/dealer/<id>` | GET | Retrieve reviews for a dealer |
| `/djangoapp/add_review` | POST | Post a review for a dealer |
| `/djangoapp/analyze_review` | POST | Run sentiment analysis on review text |
| `/djangoapp/get_cars` | GET | Retrieve all car makes and models |

## 🔄 CI/CD

The repository includes a GitHub Actions workflow (`.github/workflows/server.yml`)
that automatically builds, tests, and deploys the Django application to IBM Cloud
Code Engine on every push to the `main` branch.

## 👤 Author

Capstone project completed for the IBM Full Stack Application Development
Professional Certificate.
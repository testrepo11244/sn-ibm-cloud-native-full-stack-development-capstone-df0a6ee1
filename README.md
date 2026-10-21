# Best Cars Dealership — Full Stack Application Development Capstone Project

- **Repository name:** `car-dealership-capstone`
- **Project name:** Best Cars Dealership — Django + React Full Stack Web Application

---

## 📋 Project Overview

Best Cars Dealership is a full-stack web application developed as the final capstone project for the **IBM Full Stack Application Development Capstone Project** course. The application allows users to browse car dealerships, filter dealers by state, view dealer details and reviews, post new reviews, and analyze review sentiment using IBM Watson Natural Language Understanding (NLU).

## 🏗️ Architecture

| Layer      | Technology |
|------------|------------|
| Frontend   | React.js (with React Router) |
| Backend    | Django + Django REST Framework |
| Database   | SQLite (dev) / PostgreSQL (deployment) |
| Sentiment Analysis | IBM Watson NLU |
| CI/CD      | GitHub Actions |
| Deployment | IBM Cloud Code Engine |

## ✨ Features

- User registration (Sign-up) and login/logout with session authentication
- Home page listing all dealerships retrieved from the backend API
- Filter dealerships by U.S. state
- Dealer detail page showing dealer information and customer reviews
- Post Review page (available to logged-in users only)
- Sentiment analysis (positive / negative / neutral) on every review via IBM Watson NLU
- Static pages: **About Us** and **Contact Us**
- Admin panel (Django admin) for managing dealers, cars, and reviews
- Automated CI/CD pipeline with GitHub Actions

## 📁 Project Structure

```
car-dealership-capstone/
├── server/
│   ├── djangoapp/                 # Django application (models, views, APIs)
│   ├── server/                    # Django project settings
│   ├── frontend/                  # React application
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/      # Sign-up page (Register.jsx)
│   │   │   │   ├── Login/
│   │   │   │   ├── Dealers/
│   │   │   │   ├── Dealer/
│   │   │   │   └── PostReview/
│   │   │   └── App.js
│   │   └── static/                # About.html, Contact.html, CSS
│   ├── manage.py
│   ├── requirements.txt
│   └── Procfile
├── .github/workflows/cicd.yml     # GitHub Actions CI/CD workflow
└── README.md
```

## 🔌 REST API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/djangoapp/register` | POST | Register a new user |
| `/djangoapp/login` | POST | Log in a user |
| `/djangoapp/logout` | GET | Log out the current user |
| `/djangoapp/get_dealers/` | GET | Fetch all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Fetch dealers by state |
| `/djangoapp/dealer/<id>` | GET | Fetch dealer details by ID |
| `/djangoapp/reviews/dealer/<id>` | GET | Fetch reviews for a dealer |
| `/djangoapp/add_review` | POST | Post a review for a dealer |
| `/djangoapp/analyze_review` | POST | Run sentiment analysis on review text |

## 🚀 Getting Started

### Prerequisites
- Python 3.9+
- Node.js 16+
- npm

### Backend Setup
```bash
cd server
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend Setup
```bash
cd server/frontend
npm install
npm start
```

## 🔗 Deployment

The application is deployed on IBM Cloud Code Engine:
**https://bestcarsdealership.us-south.codeengine.app.com/**

## 👤 Author

- **Name:** Alex Johnson
- **Course:** Full Stack Application Development Capstone Project (IBM Skills Network)

## 📄 License

This project is licensed under the MIT License.
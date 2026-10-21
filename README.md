# Full Stack Application Development Capstone Project

## Repository Name
**fullstack-car-dealership-capstone**

## Project Name
**AutoDeal — Full Stack Car Dealership Web Application**

---

## Overview
AutoDeal is a full-stack web application developed for the IBM **Full Stack Application
Development Capstone Project**. The application allows users to browse car dealerships,
filter dealers by state, view dealer details and customer reviews, perform sentiment
analysis on reviews, register/login, and post their own reviews for a dealership.

## Tech Stack
- **Backend:** Python 3, Django, Django REST Framework
- **Frontend:** React (JavaScript, JSX, React Router, Bootstrap/CSS)
- **Databases:** SQLite (users, reviews), MongoDB Atlas (dealerships)
- **Sentiment Analysis:** IBM Watson Natural Language Understanding (NLU)
- **CI/CD:** GitHub Actions
- **Deployment:** IBM Cloud Code Engine (Docker containerized Django app)

## Features
- Home page listing all car dealers with state filtering
- Dealer detail page with reviews and sentiment icons
- User registration (Sign-up) and login/logout with session authentication
- Post review for a dealership (logged-in users only)
- Sentiment analysis (positive / neutral / negative) on review text
- Static pages: About Us and Contact Us
- REST API endpoints for dealers, reviews, and sentiment analysis
- Automated CI/CD pipeline via GitHub Actions deploying to IBM Cloud Code Engine

## Project Structure
```
fullstack-car-dealership-capstone/
├── server/
│   ├── djangoapp/               # Django application (models, views, templates, static)
│   │   ├── static/
│   │   │   ├── About.html
│   │   │   └── Contact.html
│   │   ├── views.py
│   │   ├── models.py
│   │   ├── urls.py
│   │   └── restapis.py
│   ├── server/                  # Django project settings
│   ├── manage.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── frontend/                # React frontend
│       ├── src/
│       │   ├── components/
│       │   │   ├── Register/Register.jsx
│       │   │   ├── Login/Login.jsx
│       │   │   ├── Dealers/Dealers.jsx
│       │   │   ├── Dealer/Dealer.jsx
│       │   │   └── PostReview/PostReview.jsx
│       │   ├── App.js
│       │   └── index.js
│       └── package.json
├── .github/workflows/server.yml # GitHub Actions CI/CD workflow
└── README.md
```

## Prerequisites
- Python 3.9+
- Node.js 14+
- MongoDB Atlas account
- IBM Cloud account (for Watson NLU and Code Engine deployment)

## Setup and Run (Local)
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/fullstack-car-dealership-capstone.git
   cd fullstack-car-dealership-capstone/server
   ```
2. Install Python dependencies and run migrations:
   ```bash
   pip install -r requirements.txt
   python manage.py makemigrations
   python manage.py migrate
   ```
3. Start the Django server:
   ```bash
   python manage.py runserver
   ```
4. Build and run the React frontend:
   ```bash
   cd frontend
   npm install
   npm start
   ```

## API Endpoints
| Endpoint | Method | Description |
|---|---|---|
| `/djangoapp/register` | POST | Register a new user |
| `/djangoapp/login` | POST | Login user |
| `/djangoapp/logout` | GET | Logout user |
| `/djangoapp/get_dealers/` | GET | Get all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Get dealers by state |
| `/djangoapp/dealer/<int:id>` | GET | Get dealer details by ID |
| `/djangoapp/reviews/dealer/<int:id>` | GET | Get reviews for a dealer |
| `/djangoapp/add_review` | POST | Post a review |
| `/djangoapp/analyze_review` | POST | Sentiment analysis of review text |

## Author
Capstone project submitted for the IBM Full Stack Application Development
Professional Certificate.

## License
This project is licensed under the MIT License.
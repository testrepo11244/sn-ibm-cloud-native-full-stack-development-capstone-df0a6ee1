# Full Stack Car Dealership Application

## Repository Name
**fullstack-car-dealership-capstone**

## Project Name
**Best Cars Dealership — Full Stack Application Development Capstone Project**

## Project Overview
This project is the final capstone for the IBM Full Stack Application Development Professional Certificate. It is a full-stack car dealership web application built with **Django** (backend) and **React** (frontend), allowing users to browse car dealers, view and post dealer reviews, perform sentiment analysis on reviews, and manage user authentication (sign-up, login, and logout).

## Features
- **User Authentication** — Sign-up, login, and logout functionality using Django's authentication system
- **Dealer Listings** — View all dealers, filter dealers by state, and view dealer details by ID
- **Dealer Reviews** — Retrieve and post reviews for any dealer
- **Sentiment Analysis** — IBM Watson NLU-based sentiment analysis on review text
- **Admin Panel** — Django admin site for managing dealers, cars, and reviews
- **About Us & Contact Us** — Static pages with updated styling and contact details
- **CI/CD Pipeline** — GitHub Actions workflow for automated build, test, and deployment to IBM Cloud Code Engine

## Technology Stack
| Layer      | Technology |
|------------|------------|
| Frontend   | React, React Router, Cloudant-style REST calls via fetch |
| Backend    | Django, Django REST Framework, SQLite / Django ORM |
| NLU        | IBM Watson Natural Language Understanding (sentiment analysis) |
| Database   | SQLite (development) / Db2 (cloud) |
| Deployment | IBM Cloud Code Engine, Docker |
| CI/CD      | GitHub Actions |

## Project Structure
```
fullstack-car-dealership-capstone/
├── server/
│   ├── djangoapp/                 # Django application (models, views, templates)
│   │   ├── static/
│   │   │   ├── About.html
│   │   │   └── Contact.html
│   │   └── ...
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/
│   │   │   │   │   └── Register.jsx
│   │   │   │   ├── Login/
│   │   │   │   ├── Dealers/
│   │   │   │   ├── Dealer/
│   │   │   │   ├── PostReview/
│   │   │   │   └── ...
│   │   │   └── App.js
│   │   └── package.json
│   ├── manage.py
│   ├── server.wsgi
│   └── requirements.txt
├── .github/workflows/server.yml   # GitHub Actions CI/CD workflow
├── Dockerfile
└── README.md
```

## Getting Started

### Prerequisites
- Python 3.9+
- Node.js 16+
- IBM Cloud account (for Watson NLU and deployment)

### Backend Setup
```bash
cd server
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### Frontend Setup
```bash
cd server/frontend
npm install
npm start
```

## API Endpoints
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
| `/djangoapp/analyze_review_sentiments` | POST | Analyze review sentiment |

## Deployment
The application is containerized with Docker and deployed to **IBM Cloud Code Engine** via a GitHub Actions CI/CD pipeline. The deployed application URL is stored in the `deploymentURL` file in the repository root.

## Author
Capstone project completed as part of the **IBM Full Stack Application Development Capstone Project** course on Coursera / IBM Skills Network.
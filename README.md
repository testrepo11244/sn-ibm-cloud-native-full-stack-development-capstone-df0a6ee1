# Full Stack Application Development Capstone Project

## Repository Name

**car-dealership-capstone**

## Project Name

**Best Cars Dealership — Full Stack Django + React Application**

---

## Project Overview

Best Cars Dealership is a full-stack web application developed as the final
capstone project for the **IBM Full Stack Application Development Capstone
Project** course. The application allows users to browse car dealerships,
filter dealers by state, view dealer details and customer reviews, post new
reviews, and analyze review sentiment using the Watson Natural Language
Understanding (NLU) service.

The backend is built with **Django** (with a SQLite database and Django REST
endpoints), the frontend is built with **React**, and the application is
deployed to **IBM Cloud Code Engine** through a **GitHub Actions CI/CD
pipeline**.

---

## Features

- User Registration, Login, and Logout (session-based authentication)
- List all car dealerships on the home page
- Filter dealerships by state
- View dealer details along with customer reviews
- Post a review for a dealership (logged-in users only)
- Sentiment analysis of reviews using Watson NLU
- Static pages: **About Us** and **Contact Us**
- Admin panel (Django admin) for managing dealers, cars, and reviews
- CI/CD pipeline using GitHub Actions
- Containerized deployment on IBM Cloud Code Engine

---

## Technology Stack

| Layer            | Technology                          |
|------------------|-------------------------------------|
| Frontend         | React, React Router, HTML5, CSS3    |
| Backend          | Django, Django REST Framework       |
| Database         | SQLite                              |
| Sentiment        | IBM Watson Natural Language Understanding (NLU) |
| Cloud Functions  | IBM Cloud Functions (dealership APIs) |
| CI/CD            | GitHub Actions                      |
| Deployment       | IBM Cloud Code Engine (Docker)      |

---

## Project Structure

```
car-dealership-capstone/
├── server/
│   ├── djangoapp/
│   │   ├── views.py
│   │   ├── models.py
│   │   ├── urls.py
│   │   ├── restapis.py
│   │   └── templates/djangoapp/
│   ├── server/
│   │   ├── settings.py
│   │   └── urls.py
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Register/Register.jsx
│   │   │   │   ├── Login/Login.jsx
│   │   │   │   ├── Dealers/Dealers.jsx
│   │   │   │   ├── Dealers/Dealer.jsx
│   │   │   │   ├── Dealers/PostReview.jsx
│   │   │   │   └── ...
│   │   │   └── App.js
│   │   └── static/
│   │       ├── About.html
│   │       └── Contact.html
│   ├── manage.py
│   ├── Dockerfile
│   └── requirements.txt
├── .github/workflows/server.yml
├── README.md
└── screenshots/
```

---

## Setup and Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/<github-username>/car-dealership-capstone.git
   cd car-dealership-capstone/server
   ```

2. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Apply migrations and create the root (superuser) account:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   python manage.py createsuperuser
   ```

4. Start the Django development server:

   ```bash
   python manage.py runserver
   ```

5. Open the application at `http://localhost:8000/djangoapp`.

---

## Key Endpoints

| Endpoint                          | Description                       |
|-----------------------------------|-----------------------------------|
| `/djangoapp/`                     | Home page (all dealers)           |
| `/djangoapp/dealers/<state>`      | Dealers filtered by state         |
| `/djangoapp/dealer/<dealer_id>`   | Dealer details and reviews        |
| `/djangoapp/review/<dealer_id>`   | Post a review for a dealer        |
| `/djangoapp/login`                | User login                        |
| `/djangoapp/logout`               | User logout                       |
| `/djangoapp/register`             | User registration (Sign-up)       |
| `/djangoapp/get_dealers/`         | REST: get all dealers             |
| `/djangoapp/get_dealers/<state>`  | REST: get dealers by state        |
| `/djangoapp/get_dealer/<id>`      | REST: get dealer by ID            |
| `/djangoapp/get_reviews/<id>`     | REST: get reviews for a dealer    |
| `/djangoapp/analyze_review`       | REST: Watson NLU sentiment analysis |

---

## Deployment

The application is automatically built and deployed to **IBM Cloud Code
Engine** whenever changes are pushed to the `main` branch. The GitHub Actions
workflow (`.github/workflows/server.yml`) builds the Docker image, pushes it
to IBM Container Registry, and deploys it to Code Engine.

**Deployment URL:** see the `deploymentURL` file in this repository.

---

## Author

Capstone submission for the IBM Full Stack Application Development
Professional Certificate.
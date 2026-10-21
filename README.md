# Best Cars Dealership – Full Stack Web Application

**Repository Name:** `fullstack-car-dealership`

**Project Name:** Best Cars Dealership – Django + React Full Stack Application

---

## 📋 Project Overview

Best Cars Dealership is a full-stack web application developed as the final capstone project for the **IBM Full Stack Application Development Capstone Project** course. The application allows users to browse car dealerships, filter dealers by state, view dealer details and reviews, perform sentiment analysis on reviews, register/login, and post their own dealer reviews.

The backend is built with **Django** (REST endpoints + SQLite database), the frontend is built with **React**, sentiment analysis is powered by **IBM Watson NLU**, and the application is deployed to **IBM Cloud Code Engine** with a **GitHub Actions CI/CD** pipeline.

---

## 🗂️ Repository Details

| Item | Value |
| --- | --- |
| Repository Name | `fullstack-car-dealership` |
| Project Name | Best Cars Dealership – Django + React Full Stack Application |
| Course | Full Stack Application Development Capstone Project (IBM Skills Network) |
| Author | Capstone Learner |

---

## 🛠️ Tech Stack

- **Backend:** Python 3, Django, Django REST Framework, SQLite
- **Frontend:** React, React Router, HTML5, CSS3, JavaScript (ES6)
- **Sentiment Analysis:** IBM Watson Natural Language Understanding (NLU)
- **CI/CD:** GitHub Actions
- **Deployment:** IBM Cloud Code Engine (Docker containerized Django app)
- **Version Control:** Git / GitHub

---

## ✨ Features

- Home page listing all car dealerships
- Filter dealerships by U.S. state
- Dealer detail page with customer reviews
- Sentiment analysis (positive / negative / neutral) on review text
- User registration (Sign-up) and login/logout with session authentication
- Post review page (authenticated users only)
- Static pages: **About Us** and **Contact Us**
- Admin panel for managing dealers, cars, and reviews
- Automated CI/CD pipeline with GitHub Actions
- Cloud deployment on IBM Cloud Code Engine

---

## 📁 Project Structure

```
fullstack-car-dealership/
├── server/
│   ├── djangoapp/                 # Django application (models, views, templates, static)
│   │   ├── static/
│   │   │   └── frontend/          # Built React app + static HTML pages
│   │   │       ├── static/
│   │   │       │   ├── About.html
│   │   │       │   ├── Contact.html
│   │   │       │   └── css/
│   │   │       └── src/
│   │   │           └── components/
│   │   │               ├── Register/
│   │   │               │   └── Register.jsx
│   │   │               ├── Login/
│   │   │               ├── Dealers/
│   │   │               ├── Dealer/
│   │   │               └── PostReview/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── restapis.py
│   ├── server/                    # Django project settings
│   ├── manage.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .github/
│       └── workflows/
│           └── server.yml         # GitHub Actions CI/CD workflow
├── README.md
└── .gitignore
```

---

## ⚙️ Prerequisites

- Python 3.9+
- Node.js 14+ and npm
- Git
- IBM Cloud account (for deployment)
- Watson NLU API key (for sentiment analysis)

---

## 🚀 Installation & Local Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/capstone-learner/fullstack-car-dealership.git
   cd fullstack-car-dealership/server
   ```

2. **Create and activate a virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate   # Windows: venv\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run database migrations**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a superuser (root) for the admin panel**

   ```bash
   python manage.py createsuperuser
   ```

6. **Start the Django development server**

   ```bash
   python manage.py runserver
   ```

   The application is now available at `http://localhost:8000/`.

---

## 🔗 API Endpoints

| Endpoint | Method | Description |
| --- | --- | --- |
| `/djangoapp/get_dealers/` | GET | Retrieve all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Retrieve dealers filtered by state |
| `/djangoapp/dealer/<id>` | GET | Retrieve dealer details by ID |
| `/djangoapp/reviews/dealer/<id>` | GET | Retrieve reviews for a dealer |
| `/djangoapp/add_review` | POST | Post a review for a dealer |
| `/djangoapp/register` | POST | Register a new user |
| `/djangoapp/login` | POST | Log in a user |
| `/djangoapp/logout` | GET | Log out the current user |
| `/djangoapp/analyze_review` | POST | Analyze review sentiment (Watson NLU) |
| `/djangoapp/get_cars` | GET | Retrieve all car makes and models |

---

## 🔄 CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/server.yml`) automatically:

1. Checks out the repository
2. Sets up Python
3. Installs project dependencies
4. Runs database migrations
5. Builds the Docker image
6. Pushes the image to IBM Cloud Container Registry
7. Deploys the container to IBM Cloud Code Engine

---

## ☁️ Deployment

The application is deployed on **IBM Cloud Code Engine**. The live deployment URL is stored in the `deploymentURL` file in this repository.

---

## 📸 Screenshots

Screenshots demonstrating the running application, admin panel, CI/CD workflow, and deployed app are included in the repository as required by the capstone submission checklist.

---

## 🙏 Acknowledgments

- IBM Skills Network – Full Stack Application Development Capstone Project
- Django and React open-source communities
- IBM Watson Natural Language Understanding

---

## 📄 License

This project is licensed under the MIT License.
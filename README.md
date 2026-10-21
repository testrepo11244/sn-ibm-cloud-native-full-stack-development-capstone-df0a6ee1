# Full Stack Car Dealership Application (Capstone Project)

## Repository Name
**fullstack-car-dealership-capstone**

## Project Name
**DriveNow — Full Stack Car Dealership Application**

## Project Overview
DriveNow is a full-stack web application developed as the final capstone project for the
*Full Stack Application Development Capstone Project* course (IBM Skills Network).
The application allows users to browse car dealerships, view dealer details and customer
reviews, post new reviews, and read sentiment-analyzed review feedback.

## Tech Stack
- **Backend:** Django, Django REST Framework, SQLite
- **Frontend:** React (Create React App), React Router, Express (microservice for dealer data)
- **Sentiment Analysis:** IBM Watson Natural Language Understanding (NLU)
- **CI/CD:** GitHub Actions
- **Deployment:** IBM Cloud Code Engine

## Key Features
- User registration, login, and logout (session-based authentication)
- Home page listing all dealerships with state-based filtering
- Dealer detail page with customer reviews
- Post Review page (available to logged-in users only)
- Sentiment analysis of review text via Watson NLU
- Static pages: About Us and Contact Us
- Django admin panel for managing dealers, cars, and reviews
- Automated CI/CD pipeline with GitHub Actions

## Repository Structure
```
fullstack-car-dealership-capstone/
├── server/
│   ├── djangoapp/            # Django application (models, views, templates)
│   ├── server/               # Django project settings
│   ├── frontend/             # React frontend
│   │   ├── src/
│   │   │   ├── components/   # Register, Login, Dealers, DealerDetail, PostReview
│   │   │   └── static/       # About.html, Contact.html, CSS
│   ├── manage.py
│   └── requirements.txt
├── .github/workflows/        # GitHub Actions CI/CD workflow
└── README.md
```

## Getting Started

### Prerequisites
- Python 3.9+
- Node.js 16+
- npm 8+

### Backend Setup
```bash
cd server
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata djangoapp/fixtures/dealerships.json
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
|---|---|---|
| `/djangoapp/register` | POST | Register a new user |
| `/djangoapp/login` | POST | Log in a user |
| `/djangoapp/logout` | GET | Log out the current user |
| `/djangoapp/get_dealers/` | GET | Retrieve all dealers |
| `/djangoapp/get_dealers/<state>` | GET | Retrieve dealers by state |
| `/djangoapp/dealer/<id>` | GET | Retrieve dealer details by ID |
| `/djangoapp/reviews/dealer/<id>` | GET | Retrieve reviews for a dealer |
| `/djangoapp/add_review` | POST | Post a review (requires login) |
| `/djangoapp/analyze_review` | POST | Sentiment analysis of review text |

## Author
Capstone learner — IBM Full Stack Application Development Professional Certificate
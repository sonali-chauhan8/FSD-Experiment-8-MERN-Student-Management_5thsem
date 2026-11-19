# Student Management System (MERN Stack)

**Department of Computer Science & Engineering**  
**B.Tech Fifth-Semester — Full Stack Development Laboratory**  
**Experiment No. 8**

---

## 🎯 Experiment Aim

> **Aim:** Integrate React.js front-end with Express.js/MongoDB back-end to build a complete, functional MERN stack Student Management System supporting end-to-end CRUD (Create, Read, Update, Delete) operations, dynamic data visualization, and search/filter capabilities.

---

## 🏗️ 1. Technology Stack

### Frontend Tier (Client)
- **React 18**: Component-driven user interface with functional components and modern React Hooks (`useState`, `useEffect`, `useMemo`).
- **Vite 6**: Ultra-fast next-generation frontend build tool and development server.
- **React Router DOM v6**: Client-side single-page application (SPA) routing.
- **Tailwind CSS v3**: Utility-first CSS framework for clean, responsive design.
- **Axios**: Promise-based HTTP client for dispatching asynchronous requests to the Express REST API.
- **Lucide React**: Clean icons for actions, navigation, and badges.

### Backend Tier (Application Server)
- **Node.js**: Asynchronous event-driven JavaScript runtime engine.
- **Express.js**: Fast, minimalist web framework for building RESTful APIs.
- **Mongoose ODM**: Object Data Modeling library managing schemas, validation, and database operations.
- **cors**: Cross-Origin Resource Sharing middleware enabling secure cross-port communication between React (`http://localhost:5173`) and Express (`http://localhost:5000`).
- **dotenv**: Zero-dependency module that loads sensitive environment variables from `.env` into `process.env`.

### Database Tier
- **MongoDB**: Document-oriented NoSQL database. Supports both local instances (`mongodb://127.0.0.1:27017`) and cloud clusters via **MongoDB Atlas**.

---

## 📁 2. Project Directory Structure

```text
mern-student-management/
├── .gitignore                      # Git ignore file protecting .env and node_modules
├── README.md                       # Comprehensive laboratory manual and setup guide
│
├── backend/                        # Node.js + Express.js API Server
│   ├── config/
│   │   └── db.js                   # Mongoose connection logic with error handling
│   ├── controllers/
│   │   └── studentController.js    # CRUD business logic, validation, aggregation
│   ├── models/
│   │   └── Student.js              # Mongoose Schema & model definitions
│   ├── routes/
│   │   └── studentRoutes.js        # Express REST API route definitions
│   ├── tests/
│   │   └── api.test.js             # Automated verification test suite
│   ├── .env                        # Local backend environment variables (gitignored)
│   ├── .env.example                # Example environment template
│   ├── package.json                # Backend dependencies & npm scripts
│   └── server.js                   # Express application entrypoint
│
└── frontend/                       # React.js + Vite Client Application
    ├── public/                     # Static web assets
    ├── src/
    │   ├── components/
    │   │   ├── AlertNotification.jsx # Dismissible feedback alerts
    │   │   ├── BranchBarChart.jsx  # Student branch distribution bar chart
    │   │   ├── DeleteConfirmModal.jsx # Delete confirmation dialog
    │   │   ├── Footer.jsx          # Academic lab footer
    │   │   ├── LoadingSpinner.jsx  # Animated loading indicator
    │   │   ├── Navbar.jsx          # Header with live backend status ping
    │   │   ├── SemesterDistribution.jsx # Semester distribution progress meters
    │   │   ├── StatCard.jsx        # Dashboard metric summary card
    │   │   ├── StudentModal.jsx    # Student edit dialog modal
    │   │   └── StudentTable.jsx    # Responsive data table with actions
    │   ├── pages/
    │   │   ├── About.jsx           # Lab experiment details, Viva questions
    │   │   ├── AddStudent.jsx      # Student registration form with validation
    │   │   ├── Dashboard.jsx       # Analytics metrics and charts
    │   │   ├── NotFound.jsx        # 404 error page
    │   │   └── StudentList.jsx     # Searchable & filterable student records
    │   ├── services/
    │   │   └── api.js              # Axios service wrapper & interceptors
    │   ├── App.jsx                 # Route definitions & layout wrapper
    │   ├── index.css               # Tailwind CSS directives
    │   └── main.jsx                # React DOM render entrypoint
    ├── .env                        # Frontend environment variables
    ├── .env.example                # Frontend environment template
    ├── index.html                  # HTML5 document template
    ├── package.json                # Frontend dependencies & npm scripts
    ├── postcss.config.js           # PostCSS configuration for Tailwind
    ├── tailwind.config.js          # Tailwind CSS theme configuration
    └── vite.config.js              # Vite server & build configuration
```

---

## ⚡ 3. Local Development Quickstart (VS Code)

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher installed)
- [MongoDB](https://www.mongodb.com/) (Local Community Server installed OR MongoDB Atlas cloud account)

---

### Step 1: Open the Project in VS Code
Open the project root folder:
```powershell
code mern-student-management
```

---

### Step 2: Configure Environment Variables

#### Backend Configuration:
Check `backend/.env`. If missing, copy `backend/.env.example` to `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/student_management_db
CLIENT_URL=http://localhost:5173
```

#### Frontend Configuration:
Check `frontend/.env`. If missing, copy `frontend/.env.example` to `frontend/.env`:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

### Step 3: Run the Application (Two Terminals)

In VS Code, open two split terminals (`Terminal -> New Terminal`):

#### 🖥️ Terminal 1: Backend Server
```powershell
cd backend
npm install
npm run dev
```
> The Express server starts on `http://localhost:5000`.

#### 💻 Terminal 2: Frontend Client
```powershell
cd frontend
npm install
npm run dev
```
> Vite starts the development server on `http://localhost:5173`.

---

### Step 4: Open in Browser
Visit: **[http://localhost:5173](http://localhost:5173)**

The top navigation bar displays a live **"Backend Online"** green indicator verifying active communication between React and Express!

---

## 🌐 4. MongoDB Configuration Guide

You can connect this application to either a **Local MongoDB instance** or a **Cloud MongoDB Atlas cluster**.

### Option A: Local MongoDB (Default)
1. Verify that the MongoDB service is running on your machine:
   ```powershell
   # Windows PowerShell
   net start MongoDB
   ```
2. In `backend/.env`, set:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/student_management_db
   ```

---

### Option B: MongoDB Atlas (Cloud Database)
1. Create a free account at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. Create a new **M0 Free Cluster**.
3. Go to **Security -> Database Access**:
   - Add a new database user (e.g., `student_admin`).
   - Create a strong password (e.g., `SecurePass123!`).
   - Assign the **Read and write to any database** role.
4. Go to **Security -> Network Access**:
   - Click **Add IP Address**.
   - Select **Allow Access from Anywhere** (`0.0.0.0/0`) for development/lab purposes.
5. Go to **Deployment -> Database -> Connect**:
   - Choose **Drivers** (Node.js).
   - Copy your connection string. It will look like:
     ```text
     mongodb+srv://student_admin:<password>@cluster0.xxxxx.mongodb.net/student_management_db?retryWrites=true&w=majority
     ```
6. Replace `<password>` with your database user password.
7. Paste this connection string into `backend/.env`:
   ```env
   MONGODB_URI=mongodb+srv://student_admin:SecurePass123!@cluster0.xxxxx.mongodb.net/student_management_db?retryWrites=true&w=majority
   ```
8. Restart your backend server (`npm run dev`).

---

## 📡 5. REST API Documentation

| HTTP Method | Route | Description | Expected Status Codes |
|:---|:---|:---|:---|
| `GET` | `/api/health` | Backend status and uptime check | `200 OK` |
| `GET` | `/api/students` | Retrieve all student records (supports `search`, `branch`, `semester` query parameters) | `200 OK`, `500 Internal Error` |
| `GET` | `/api/students/stats` | Aggregate dashboard analytics (counts by branch, semester, recent records) | `200 OK`, `500 Internal Error` |
| `GET` | `/api/students/:id` | Fetch a single student record by MongoDB `_id` | `200 OK`, `400 Invalid ID`, `404 Not Found` |
| `POST` | `/api/students` | Create a new student (validates fields and unique enrollment) | `201 Created`, `400 Bad Request` |
| `PUT` | `/api/students/:id` | Update an existing student record | `200 OK`, `400 Validation Error`, `404 Not Found` |
| `DELETE` | `/api/students/:id` | Delete a student record permanently | `200 OK`, `404 Not Found` |

### Sample POST Request Body:
```json
{
  "name": "Ananya Sharma",
  "enrollmentNumber": "0101CS221088",
  "email": "ananya.sharma@college.edu",
  "branch": "Computer Science & Engineering",
  "semester": 5,
  "mobileNumber": "9876543210"
}
```

---

## 🧪 6. Automated Testing Verification

The project includes an automated end-to-end integration test suite that launches a temporary database and exercises all REST endpoints:

To run the automated tests:
```powershell
cd backend
npm test
```

### Verified Test Cases:
- [x] Backend connects to MongoDB.
- [x] Health check probe responds with HTTP 200.
- [x] `POST /api/students` creates new student records.
- [x] Duplicate enrollment number validation rejects duplicates with HTTP 400.
- [x] `GET /api/students` retrieves all student records.
- [x] `GET /api/students/:id` retrieves individual record by ID.
- [x] Search filtering by student name and enrollment number.
- [x] Branch filtering returns exact cohort.
- [x] `GET /api/students/stats` aggregates metrics.
- [x] `PUT /api/students/:id` updates student details.
- [x] `DELETE /api/students/:id` removes student record.
- [x] Verifies database persistence across operations.
- [x] `npm run build` succeeds for frontend production bundle.

---

## 🚀 7. Deployment Instructions

### A. Deploy Backend to Render (or Railway)
1. Push your repository to GitHub.
2. Sign in to [Render](https://render.com/).
3. Create a **New Web Service** and select your GitHub repository.
4. Set the following configuration:
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Add Environment Variables in Render:
   - `MONGODB_URI`: *Your MongoDB Atlas connection string*
   - `PORT`: `5000`
   - `CLIENT_URL`: *Your Vercel frontend URL (e.g. `https://your-frontend.vercel.app`)*
6. Click **Deploy**. Note down your backend URL (e.g., `https://student-api.onrender.com`).

---

### B. Deploy Frontend to Vercel
1. Sign in to [Vercel](https://vercel.com/).
2. Import your GitHub repository.
3. Set the following configuration:
   - **Root Directory**: `frontend`
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add Environment Variable:
   - `VITE_API_BASE_URL`: `https://student-api.onrender.com/api` *(Your deployed backend URL)*
5. Click **Deploy**.

---

## 🎓 8. Laboratory Viva Voce Questions & Answers

1. **What is MERN stack?**  
   MERN stands for **M**ongoDB, **E**xpress.js, **R**eact.js, and **N**ode.js. It is a full-stack JavaScript software stack used to build modern, dynamic web applications from the database tier up to the user interface.

2. **Why do we use Mongoose instead of the native MongoDB driver?**  
   Mongoose provides a structured schema definition layer over schema-less MongoDB collections. It includes automatic type casting, built-in validation, middleware hooks (pre/post save), and a clean model-based query API.

3. **What is CORS and why is it necessary?**  
   Cross-Origin Resource Sharing (CORS) is a security feature enforced by web browsers. When React runs on port `5173` and Express runs on port `5000`, browser security blocks requests unless the Express server explicitly authorizes the origin using the `cors` middleware.

4. **What is the significance of the `_id` field in MongoDB?**  
   In MongoDB, each document is automatically assigned a unique 12-byte hexadecimal identifier named `_id` of type `ObjectId`. It acts as the primary key and contains a timestamp, machine identifier, process ID, and an incrementing counter.

5. **How does Vite improve developer experience over Create React App (CRA)?**  
   Vite leverages native ES modules (`ESM`) in modern browsers and uses `esbuild` written in Go. This allows near-instantaneous dev server startup and hot module replacement (HMR) without pre-bundling the entire application.

---

**Developed for B.Tech Full Stack Development Laboratory (Experiment No. 8)**

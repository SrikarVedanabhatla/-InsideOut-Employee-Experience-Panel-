# 🚀 InsideOut: Employee Experience Panel (Template)

**Powered by Srikar Vedanabhatla**

InsideOut is a futuristic and interactive web-based feedback system designed for employees to share their workplace experience. It features:

- A modern, responsive frontend built with HTML, CSS, and JavaScript
- Real-time form validation
- Dynamic dashboards with Plotly.js
- Backend integration using **Node.js** and **MySQL**

> ⚠️ **Note**: This is a **template project** that can be customized and improved as per your needs. It does not include the `server.js` backend file—you will need to implement it based on the structure and instructions provided below.

---

## 📜 Project Description

This application enables organizations to:

- Collect structured feedback from employees
- Monitor satisfaction across departments
- Visualize feedback through charts and analytics

The modular design and clean UI make it easy to adapt this system for any organization’s internal feedback process.

---

## 🖼️ UI Previews

### 🔐 Login Page
![Login Page]![a](https://github.com/user-attachments/assets/d6ab0a4d-61da-4b98-8613-1cccd0f98439)


---

### 📝 Feedback Form
![Form Page]![b](https://github.com/user-attachments/assets/8d4a09b3-bd5b-445c-9ba4-5abbe581777c)


---

### 📊 Admin Dashboard
![Dashboard Page]![e](https://github.com/user-attachments/assets/8b6f33fb-1546-4010-be7e-d6e03f35d092)


---

### 📋 View Feedback
![View Feedback Page]![f](https://github.com/user-attachments/assets/a4ab21bc-8b37-4ffc-85ba-e7060cb4d9df)


---

### 📊 Analysis Dashboard
![Analysis Page] ![f] ![c](https://github.com/user-attachments/assets/f040f830-3060-489b-9462-46b5b36f1a7d)

## 🧾 Included Files

| File Name             | Description                                                          |
|-----------------------|----------------------------------------------------------------------|
| `login.html`          | Login screen template                                                |
| `form.html`           | Feedback submission form with validation                             |
| `view-feedback.html`  | Displays submitted feedback (admin view)                             |
| `dashboard.html`      | Analytics dashboard using Plotly.js charts                           |
| `feedback.js`         | JavaScript for form validation and submission via Fetch API          |
| `server.js`           | ❌ Not included — must be created to connect to MySQL and serve APIs |

---

## 🛠️ Technologies Used

- **Frontend**:
  - HTML5 + CSS3
  - JavaScript
  - Plotly.js (for charts)
  - Google Fonts (Orbitron)

- **Backend**:
  - Node.js
  - Express.js *(You must create your own `server.js`)*
  - MySQL (for storing and querying feedback)

---

## ⚙️ Backend Setup

> 🧩 You must **create a `server.js` file** to handle server logic and database communication.

### ✅ Required Endpoints

| Method | Endpoint                         | Description                          |
|--------|----------------------------------|--------------------------------------|
| POST   | `/submit-feedback`              | Receives and stores feedback         |
| GET    | `/api/feedback-summary`         | Returns average scores per category  |
| GET    | `/api/department-distribution`  | Returns count of responses per department |

### 🗃️ MySQL Table Example

```sql
CREATE TABLE feedback (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  employeeId VARCHAR(50),
  age INT,
  date DATE,
  department VARCHAR(100),
  q1 INT,
  q2 INT,
  q3 INT,
  q4 TEXT,
  q5 TEXT
);

# 🚀 InsideOut: Employee Experience Panel (Template)

**Powered by Srikar Vedanabhatla**

InsideOut is a **modern feedback collection system** designed for employees to share their experience with the organization. This project offers a **modular, futuristic, and customizable template** using HTML, CSS, JavaScript, and a backend built on **Node.js and MySQL**.

It includes everything needed to collect, store, and visualize feedback — making it perfect for HR teams, managers, and developers who want to implement an internal feedback loop.

> 🧠 **Note:** This is a template project and can be **improvised** based on future needs.

---

## 📁 Included Files

| File Name             | Description                                                          |
|-----------------------|----------------------------------------------------------------------|
| `login.html`          | Login page template                                                  |
| `form.html`           | Feedback submission form for employees                               |
| `view-feedback.html`  | Displays submitted feedback (for admin review)                       |
| `dashboard.html`      | Admin dashboard showing charts and total responses                   |
| `feedback.js`         | JavaScript for form validation and feedback submission               |
| `server.js`           | ❌ **Not included** — Must be created separately with database logic |

---

## 📜 Project Description

InsideOut is built to help organizations:

- Capture feedback across multiple departments
- Measure employee satisfaction and support
- Visualize insights through charts and summaries

With a modern UI, responsive layout, and real-time validation, this project is both functional and engaging. Data is securely stored in a **MySQL database**, and interactive charts are rendered with **Plotly.js**.

---

## ⚙️ Requirements

- [x] **Node.js** (Install from [nodejs.org](https://nodejs.org))
- [x] **MySQL Database**
- [ ] `server.js` (Must be written to handle database logic and API endpoints)

---

## 🔌 Backend Setup (Manual Required)

### ❗ `server.js` File is NOT Included

You must **create a `server.js` file** in the project directory. This file should:

- Connect to your MySQL database
- Expose the following API routes:

| Method | Endpoint                         | Description                          |
|--------|----------------------------------|--------------------------------------|
| POST   | `/submit-feedback`              | Stores feedback in the database      |
| GET    | `/api/feedback-summary`         | Returns average scores per category  |
| GET    | `/api/department-distribution`  | Returns department-wise stats        |

### 📦 Example SQL Table

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

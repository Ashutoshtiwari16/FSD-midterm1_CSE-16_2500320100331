# Full Stack Development - Midterm 1

Hi there! This repository contains my submission for the Full Stack Development (FSD) Midterm 1 practical evaluation. 

## 🛠️ About the Project
This project is built using a Node.js backend setup to handle core server-side logic and endpoints.

## 🧠 Problem Statement & Solution Breakdown

To solve this midterm practical task, the following step-by-step approach was implemented:

1. **Environment Setup & Initialization:**
   * Initialized a Node.js project environment using `npm init -y` to generate the `package.json` manifest[cite: 3].
   * Configured key dependencies (such as Express) to manage HTTP requests and middleware routing efficiently.

2. **Server Configuration (`server.js`):**
   * Configured an HTTP server instance listening on a specified port (e.g., `3000` or `8000`).
   * Implemented middleware functions to parse incoming JSON payloads (`express.json()`) and handle URL-encoded data.

3. **API Endpoints & Routing:**
   * Structured clean RESTful routes inside `server.js` to process incoming client queries and request parameters[cite: 3].
   * Built response handlers returning standardized HTTP status codes (`200 OK`, `400 Bad Request`, `404 Not Found`) along with JSON formatted outputs.

4. **Version Control & Clean Commit Workflow:**
   * Set up `.gitignore` to prevent committing heavy modules like `node_modules` to keep the remote repository lightweight[cite: 3].
   * Executed step-by-step Git commits and pushed the final codebase directly to GitHub[cite: 1, 3].

---

## 📂 Repository Structure
* **`server.js`**: The main entry point for the Node.js server[cite: 3].
* **`package.json`**: Manages the project dependencies and scripts[cite: 3].
* **`.gitignore`**: Specifies untracked files that git should ignore (like `node_modules`)[cite: 3].

---

## 🏃‍♂️ Getting Started Locally

If you want to run or test this project on your local machine, follow these steps[cite: 3]:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Ashutoshtiwari16/FSD-midterm1_CSE-16_2500320100331.git](https://github.com/Ashutoshtiwari16/FSD-midterm1_CSE-16_2500320100331.git)
# web-API-test-Automation-and-Performance-Test-Automation
🚀 Automated API testing suite for JSONPlaceholder using Jest &amp; Supertest, integrated with K6 for high-concurrency performance benchmarking. Features detailed Excel reporting for test case validation.
Hashtags: #qa-automation #api-testing #performance-testing #k6 #jest #supertest #load-testing #software-testing #json-placeholder #test-automation

# 🧪 JSONPlaceholder API Automation & Performance Suite

![Jest](https://img.shields.io/badge/-Jest-C21325?style=flat&logo=jest&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white)
![K6](https://img.shields.io/badge/-K6-7D64FF?style=flat&logo=k6&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

## 📌 Project Overview
This repository hosts a comprehensive automated testing framework designed for the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) fake REST API. The project demonstrates a hybrid testing strategy combining **Functional API Testing** (POST, GET, DELETE) with **Non-Functional Performance Testing** to ensure system reliability under load.

## 🛠 Tech Stack
* **API Automation:** Node.js, Jest, Supertest
  <img width="712" height="209" alt="image" src="[https://github.com/user-attachments/assets/69a6f246-182b-40cc-910c-984c69a325e6](https://github.com/user-attachments/assets/69a6f246-182b-40cc-910c-984c69a325e6)" />

* **Performance Testing:** K6 (Load Testing)
  <img width="1150" height="625" alt="image" src="[https://github.com/user-attachments/assets/aea4fa08-ccf9-4fc4-a807-c16aaed3b982](https://github.com/user-attachments/assets/aea4fa08-ccf9-4fc4-a807-c16aaed3b982)" />

* **Reporting:** Excel (xlsx) Test Case Logs
  <img width="838" height="197" alt="image" src="[https://github.com/user-attachments/assets/4a924ded-2f6c-4aec-ba98-d429e2c1ad1b](https://github.com/user-attachments/assets/4a924ded-2f6c-4aec-ba98-d429e2c1ad1b)" />

## ⚙️ Features
* **End-to-End API Validation:** Verifies endpoints for Users and Posts resources.
* **Load Simulation:** Simulates concurrent users to test API latency and stability using K6.
* **Data-Driven Reporting:** Generates/Stores detailed pass/fail logs in Excel format for audit trails.
* **Error Handling:** Validates correct HTTP status codes (200, 201, 204, 400).

## 📂 Project Structure

```text
├── api-tests/          # Jest & Supertest functional test scripts
├── performance/        # K6 load testing scripts
├── reports/            # Excel sheets with test execution results
└── README.md           # Project documentation

🔄 CI/CD Pipeline

This project is integrated with GitHub Actions to ensure code quality with every push.

    Trigger: Runs automatically on every push to the main branch.

    Jobs:

        Installs Node.js dependencies.

        Executes Jest API tests (Sequential execution).

        Sets up K6 and runs Performance benchmarks.

    Status: You can view the live build status in the "Actions" tab.

🚀 How to Run

Prerequisites

    Node.js (v14+)

    K6 installed on your machine

1. Install Dependencies

Bash

npm install

2. Run Functional API Tests

Bash

npm test

3. Run Performance Tests

Bash

k6 run performance/test1.js

📊 Test Results

Test cases cover positive and negative scenarios. Detailed execution logs are available in the reports/ directory (or "See attached Excel sheet").

👥 Authors

    Zaid Hassan - @zaidhassan2

    Hafiz Muhammad Rizwan - @Hafiz-Muhammad-Rizwan

🎥 Project Demo

    View Project Demo Video

📊 Detailed Reports

Full test execution logs are available in the Excel format. 👉 Download the Test Case Report (.xlsx)

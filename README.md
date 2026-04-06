# 🚀 AI Marketing Automation Agent

An AI-powered tool that generates SEO keywords and content ideas based on a user-provided topic.

---

## 🧠 Overview

This project is a simple full-stack application that simulates an AI agent for automating marketing tasks like keyword research and content ideation.

---

## ⚙️ Tech Stack

* Backend: Node.js, Express
* Frontend: HTML, CSS, JavaScript
* API: OpenAI (with fallback handling)
* Tools: Axios, dotenv

---

## ✨ Features

* 🔍 Generate SEO keywords
* 💡 Generate content ideas
* ⚡ Fast API-based responses
* 🛡️ Error handling with fallback output
* 🎯 Simple and clean UI

---

## 🔄 How It Works

1. User enters a topic
2. Frontend sends request to backend
3. Backend calls AI API
4. If API fails → fallback logic runs
5. Results displayed on UI

---

## 📸 Demo

Example Input:
fitness for beginners

Example Output:
Keywords:

* fitness tips
* beginner workout
* home workout plan

Content Ideas:

* 10-day fitness plan
* beginner fitness guide

---

## 🛠️ Installation & Setup

1. Clone the repository:
   git clone https://github.com/your-username/ai-marketing-agent.git

2. Navigate to project:
   cd ai-marketing-agent

3. Install dependencies:
   npm install

4. Add environment variables:
   Create a `.env` file and add:
   OPENAI_API_KEY=your_api_key_here

5. Run the server:
   node server.js

6. Open index.html in browser

---

## ⚠️ Note

If API quota is exceeded, the system uses fallback logic to generate mock outputs.

---

## 🚀 Future Improvements

* Add database (MongoDB) to store results
* Build advanced UI using React
* Implement multi-step AI agent workflows
* Deploy online

---

## 👨‍💻 Author

Shridhi Suman

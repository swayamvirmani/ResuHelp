# ResuHelp – AI-Powered Resume Helper ✨

ResuHelp is a full-stack web application that helps users **analyze** and **compare** resumes using AI, making it easier to improve and screen resumes effectively.

Built with **React**, **Node.js**, **Express**, and powered by **Cohere's LLM**, it offers instant, markdown-formatted feedback on resumes and highlights key differences between them.

---

## 🚀 Features

- 📄 **Resume Analysis**: Upload a resume and receive AI-generated feedback including skills, strengths, weaknesses, and improvement tips.
- 🆚 **Resume Comparison**: Upload two resumes to compare them side-by-side and get a detailed analysis.
- ⚡ Instant markdown output with clean formatting
- 🌐 Deployed and accessible online (Vercel + Render)

---

## 📁 Project Structure

ResuHelp/
├── backend/ # Node.js + Express backend with Cohere API
├── frontend/ # React + Chakra UI frontend
├── README.md


---

## 🛠️ Tech Stack

| Layer     | Technologies                          |
|-----------|---------------------------------------|
| Frontend  | React, Chakra UI, Axios               |
| Backend   | Node.js, Express, Multer, pdf-parse   |
| AI API    | Cohere (Command-R model)              |
| Deployment| Vercel (Frontend), Render (Backend)   |

---

## ⚙️ Setup Instructions

### 🔙 Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
npm install
COHERE_API_KEY=your_cohere_api_key_here
node server.js


🖥️ Frontend Setup
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Update the backend URL in your code (AnalyseUpload.js, Compare.js):

js
Copy
Edit
const BACKEND_URL = "https://your-backend-url.onrender.com";
Start the development server:

bash
Copy
Edit
npm start

🌐 Live Demo
Frontend (Vercel): https://resuhelp.vercel.app

Backend (Render): https://resuhelp-backend.onrender.com

📌 Usage
Visit the app

Upload one or two PDF resumes

Click Analyse or Compare

View AI-generated feedback in beautifully formatted markdown

📚 Example Output
markdown
Copy
Edit
### Resume Strengths:
- Strong experience in backend development
- Demonstrated leadership through open-source contributions

### Suggested Improvements:
- Add quantified achievements
- Highlight recent certifications

### Overall Score: 8.5/10

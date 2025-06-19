# Resumine - Resume Analysis and Creation Tool

A web application for analyzing and creating professional resumes.

## Features

- Resume analysis using AI
- Resume creation assistance
- Compare multiple resumes
- Modern and user-friendly interface

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
    cd Resumine-backend
```

2. Install dependencies:
```bash
    npm install
```

3. Set up environment variables:
Create a `.env` file in the backend directory with your Google Gemini API key:
```
GOOGLE_API_KEY=your_gemini_api_key_here
```

To get your Gemini API key:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the Generative AI API
3. Create a new API key from the Credentials section
4. Copy the API key and paste it in the .env file

Note: Make sure you have billing enabled on your Google Cloud account to use Gemini API.
4. Start the backend server:
```bash
    npm start
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
    cd Resumine-frontend
```

2. Install dependencies:
```bash
    npm install
```

3. Start the frontend development server:
```bash
    npm start
```

## Usage

1. Upload your resume file (PDF, DOC, DOCX supported)
2. Click "Upload" to process the file
3. Click "Analyse Resume" to get AI-powered analysis
4. View the analysis results in markdown format

## Technologies Used

- Frontend: React, Chakra UI, Axios
- Backend: Node.js, Express, Tesseract.js, Google AI
- File Processing: Multer

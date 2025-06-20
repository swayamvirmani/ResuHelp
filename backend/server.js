// server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://resuhelp.vercel.app', // 🔁 Replace with your actual Vercel URL
  credentials: true,
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ ResuHelp Backend is live!');
});

console.log("✅ COHERE_API_KEY loaded:", process.env.COHERE_API_KEY ? '✅ Present' : '❌ Missing');

// Ensure uploads folder exists
if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/pdf') return cb(new Error('Only PDF files are allowed'));
    cb(null, true);
  },
});

// POST /analyse
app.post('/analyse', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    console.log("📄 File received:", file.originalname);

    const dataBuffer = fs.readFileSync(file.path);
    const pdfData = await pdfParse(dataBuffer);
    const resumeText = pdfData.text;

    fs.unlinkSync(file.path); // Clean up file
    console.log("🧹 Deleted uploaded file");

    const prompt = `Analyze the following resume and provide detailed feedback:\n\n${resumeText}\n\nPlease include:\n1. Key skills identified\n2. Areas of improvement\n3. Strengths and weaknesses\n4. Overall assessment\n\nFormat the output in markdown.`;

    // ✅ Correct Cohere Chat API Call using "command-r"
    const response = await axios.post(
      'https://api.cohere.ai/v1/chat',
      {
        model: 'command-r',
        message: prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const analysis = response.data.text;
    console.log("✅ Analysis completed");
    res.json({ analysis });

  } catch (error) {
    console.error("❌ Error analyzing resume:", error.response?.data || error.message);
    res.status(500).json({ error: 'Error processing resume' });
  }
});

app.post('/compare', upload.array('files', 2), async (req, res) => {
  try {
    const files = req.files;
    if (!files || files.length !== 2) {
      return res.status(400).json({ error: 'Please upload exactly 2 PDF files' });
    }

    // Extract text from both PDFs
    const pdfData = [];
    for (const file of files) {
      const dataBuffer = fs.readFileSync(file.path);
      const pdfText = await pdfParse(dataBuffer);
      pdfData.push(pdfText.text);
      fs.unlinkSync(file.path); // Clean up file
    }

    // Create comparison prompt
    const prompt = `
    Compare these two resumes and provide a detailed analysis:
    
    Resume 1:
    ${pdfData[0]}
    
    Resume 2:
    ${pdfData[1]}
    
    Please provide:
    1. Key differences in skills and experience
    2. Strengths of each resume
    3. Areas where one resume outperforms the other
    4. Overall assessment of both resumes
    
    Format the output in markdown.`;

    // Get comparison analysis
    const response = await axios.post(
      'https://api.cohere.ai/v1/chat',
      {
        model: 'command-r',
        message: prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const analysis = response.data.text;
    res.json({ analysis });

  } catch (error) {
    console.error("Error comparing resumes:", error);
    res.status(500).json({ error: 'Error comparing resumes' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

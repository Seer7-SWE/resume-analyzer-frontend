#  Real-Time AI Resume Analyzer

> A real-time resume analysis tool that uses AI to score resumes and match them with job descriptions. Built to help applicants land their dream jobs faster.

🚀 **Live App**: [https://resume-matcher-frontend-sooty.vercel.app](https://resume-matcher-frontend-sooty.vercel.app)

---

##  Features

- Upload your resume (PDF/DOCX)
- Get real-time AI-powered feedback
- Match resume to job descriptions using sentence transformers
- Modern UI (Next.js + Tailwind)

---

##  Tech Stack

- **Frontend**: Next.js App Router, TailwindCSS, Vercel
- **Backend** (separate): FastAPI, SBERT, FAISS, MongoDB
- **AI Models**: Sentence Transformers (`all-MiniLM-L6-v2`)
- **Deployment**: Vercel (frontend), Render (backend)

---

## Preview

![screenshot](./public/screenshot.png)

---

## Run Locally

```bash
git clone https://github.com/Seer7-SWE/resume-analyzer-frontend.git
cd resume-analyzer-frontend
npm install
npm run dev

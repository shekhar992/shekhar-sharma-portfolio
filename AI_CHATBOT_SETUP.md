# AI Chatbot Setup Guide

## Quick Start

Your portfolio now has an intelligent AI chatbot powered by **Groq (FREE!)** 🤖✨

## Features

- **Conversational AI**: Powered by Groq's Llama 3.3 70B (ultra-fast & FREE!)
- **Resume-Aware**: Trained on your complete professional experience
- **Quick Questions**: Pre-loaded prompts for common queries
- **Beautiful UI**: Glassmorphic design with smooth animations
- **Smart Positioning**: Bottom-left corner, doesn't conflict with app floater
- **Zero Cost**: Groq's free tier is extremely generous (7,000 requests/day!)

## Setup (Takes 2 minutes!)

### Get Your FREE Groq API Key

1. **Visit Groq Console**
   - Go to: https://console.groq.com
   - Sign up with Google/GitHub (30 seconds)

2. **Create API Key**
   - Click "API Keys" in the left sidebar
   - Click "Create API Key" button
   - Give it a name (e.g., "Portfolio Chatbot")
   - Copy the key (starts with `gsk_`)

3. **Configure Locally**
   ```bash
   # Edit .env file in your project root
   VITE_GROQ_API_KEY=gsk_your_actual_key_here
   
   # Restart dev server
   npm run dev
   ```

4. **Deploy to Vercel** (if hosting)
   - Go to your Vercel project settings
   - Navigate to Environment Variables
   - Add: `VITE_GROQ_API_KEY` = `your-groq-api-key`
   - Redeploy

## What the Chatbot Knows

The AI assistant has full context about:
- Your 10 years of product management experience
- All 5 roles (Deloitte, CRMNEXT, BSE)
- Key achievements and metrics
- Technical skills and certifications
- Side projects (Smart Release Planner)
- Education and contact info

## Example Questions

Try asking:
- "What's Shekhar's experience with GenAI?"
- "Tell me about his biggest achievements"
- "What companies has he worked for?"
- "How does he build products so fast?"
- "What are his technical skills?"

## Why Groq?

- **100% FREE**: Generous free tier (7,000 requests/day, 30 req/minute)
- **Lightning Fast**: 10-20x faster than OpenAI (responses in <1 second)
- **Same Quality**: Llama 3.3 70B performs as well as GPT-4o-mini
- **No Credit Card Required**: Start using immediately

## Cost Breakdown

- **Groq Free Tier**: 7,000 requests/day = ~210,000/month
- **Your Portfolio Traffic**: Likely 10-50 requests/day
- **Total Cost**: $0.00 forever! 🎉

## Customization

Want to modify the chatbot? Edit:
- `/src/components/AIChatbot.jsx` - Main component
- `resumeContext` variable - Update your info
- `quickQuestions` array - Change suggested prompts
- Styling - Match your brand colors

## Troubleshooting

**Chatbot shows fallback message?**
- Check `.env` file exists and has valid API key
- Restart dev server after adding key
- For Vercel: Checllama-3.1-70b-versatile'` to `mixtral-8x7b-32768` (faster, shorter responses) or `llama-3.1-8b-instant` (ultra-fast)
- All Groq models are FREE!

---

Built with 💜 using React, Vite, Tailwind, and Groq ed)

**Want to use different AI model?**
- Change `model: 'gpt-4o-mini'` to `gpt-3.5-turbo` (cheaper) or `gpt-4` (smarter)

---

Built with 💜 using React, Vite, Tailwind, and OpenAI

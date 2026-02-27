# Shekhar Sharma - Portfolio

Senior Product Manager & Builder specializing in GenAI, SaaS platforms, and vibecoding.

## About This Portfolio

This portfolio showcases my vibecoding journey - building production-ready applications as a PM without a traditional dev team. It highlights my experience at Deloitte, Pfizer, Kroger, and Eli Lilly, along with the Smart Release Planner I built.

## Tech Stack

- **Frontend:** React 18 + Vite 5
- **Styling:** Tailwind CSS 3 with custom animations
- **Icons:** Lucide React
- **AI:** Groq (Llama 3.3 70B) - Ultra-fast FREE AI for intelligent chatbot
- **Deployment:** Vercel

## Features

✨ **AI-Powered Chatbot** - Ask questions about my experience, projects, and skills  
🎨 **Dark Glassmorphism UI** - Modern design with animated gradients  
📱 **Fully Responsive** - Optimized for all screen sizes  
🚀 **Fast Loading** - Built with Vite for optimal performance  
🎯 **Interactive Elements** - Micro-animations and smooth transitions

## Development

```bash
# Install dependencies
npm install

# Set up environment variables (required for AI chatbot)
cp .env.example .env
# Add your Groq API key to .env (FREE - get from console.groq.com)

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## AI Chatbot Setup

The portfolio includes an intelligent AI chatbot powered by **Groq** (FREE!) that can answer questions about my experience and skills.

### Getting a Groq API Key (100% Free):

1. Go to [console.groq.com](https://console.groq.com)
2. Sign up with Google/GitHub (takes 30 seconds)
3. Click "API Keys" in the left sidebar
4. Click "Create API Key" button
5. Copy the key (starts with `gsk_...`)

### Configuration:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your API key to `.env`:
   ```
   VITE_GROQ_API_KEY=gsk_your_actual_api_key_here
   ```

3. Restart the dev server

**Note:** The chatbot will work in fallback mode without an API key, providing basic information about the portfolio.

## Deployment

### Vercel Deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Add `VITE_GROQ_API_KEY` to Vercel environment variables
4. Deploy automatically

### Environment Variables:

Add these to your deployment platform:
- `VITE_GROQ_API_KEY` - Your Groq API key (FREE from console.groq.com)

## Contact

- LinkedIn: [linkedin.com/in/sheksharma](https://www.linkedin.com/in/sheksharma)
- Email: sharmashekhar992@gmail.com
- GitHub: [github.com/shekhar992](https://github.com/shekhar992)

## License

© 2026 Shekhar Sharma. All rights reserved.

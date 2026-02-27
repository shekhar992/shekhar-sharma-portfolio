import { MessageCircle, X, Send, Sparkles, Loader2, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "👋 Hi! I'm Shekhar's AI assistant. Ask me anything about his experience, projects, or skills!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showMoreQuestions, setShowMoreQuestions] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  const initialMessages = [
    {
      role: 'assistant',
      content: "👋 Hi! I'm Shekhar's AI assistant. Ask me anything about his experience, projects, or skills!",
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const resumeContext = `
SHEKHAR SHARMA - Senior Product Manager

PROFESSIONAL SUMMARY:
10 years of product management experience with 7 years at Deloitte building products for Fortune 500 clients including Pfizer, Kroger, and Eli Lilly. Expert in GenAI/LLMs, Enterprise SaaS, Mobile Applications, and Regulated Healthcare (SAMD).

KEY ACHIEVEMENTS:
- Led GenAI platform serving 500+ medical researchers, reducing insight time from 12 hours to 6 hours
- Secured $200K incremental funding through rapid MVP prototyping
- Scaled SAMD patient app to 3,000 users in 8 weeks (3x faster than 24-week target)
- Built and shipped PI Planner SaaS tool in 3 weeks using AI-powered vibecoding

CURRENT ROLE - Senior Product Manager at Deloitte (Pfizer GenAI Platform) - 2023-Present:
- Delivered 10+ major features across 4 quarterly releases
- Reduced researcher query-to-insight time from 12 hours to 6 hours
- Drove 40% increase in daily active users (500+ researchers)
- Orchestrated 15-person cross-functional team with 95% on-time delivery rate
- Platform retention improved from 60% to 85%
- Enabled $1.2M contract expansion

PREVIOUS ROLES:
1. Platform Product Manager - Kroger Mobile Platform (2022-2023):
   - Accelerated feature rollout by 30% through modular API architecture
   - Reduced mobile crash rate from 4.2% to 1.1% (preventing $500K lost productivity)
   - Improved frontline efficiency by 20% across 15,000 devices
   - Doubled deployment velocity (monthly to bi-weekly sprints)

2. Product Owner - Eli Lilly SAMD Applications (2019-2022):
   - Delivered 3 regulated patient-facing mobile apps with zero FDA violations
   - Redesigned onboarding from 24 steps to 12 steps (completion rate 72% → 94%)
   - Prevented $2M delay penalty through accelerated user onboarding
   - Maintained 92% sprint velocity consistency across 3 time zones

3. Product Manager - CRMNEXT (2017-2019):
   - Increased platform adoption by 35% across 8 banking clients
   - Led 20+ client workshops, reduced customization time by 40%

4. Associate Product Owner - Bombay Stock Exchange (2016-2017):
   - 98% defect-free deployment rate across 5 releases
   - Reduced requirement clarification time by 30%

SIDE PROJECT:
Smart Release Planner - Built and deployed full-stack release planning SaaS in 3 weeks using React, TypeScript, and AI-assisted development. Features release confidence scoring algorithm with 85% accuracy, achieving 500+ hours of simulated capacity analysis.

SKILLS:
- Product Management: Strategy, PI Planning, Stakeholder Alignment, OKRs, Cross-Functional Leadership
- Technical: GenAI/LLMs, Enterprise SaaS, Mobile (iOS/Android), Regulated Healthcare (SAMD, FDA 21 CFR Part 11)
- Methodologies: SAFe Agile, Scrum, Design Thinking, Lean Product Development
- Tools: Figma, JIRA, Confluence, SQL, API Design, AI-Powered Prototyping

CERTIFICATIONS:
- Certified SAFe® 6 Agilist (2025)
- Certified Scrum Product Owner (CSPO) (2025)

EDUCATION:
Bachelor of Engineering - Information Technology, Mumbai

CONTACT:
Email: sharmashekhar992@gmail.com
LinkedIn: linkedin.com/in/sheksharma
Location: Mumbai, India
`;

  const quickQuestions = [
    "What's your GenAI experience?",
    "Tell me about your biggest impact",
    "What tools and tech do you use?",
    "How do you ship products fast?",
  ];

  const moreQuestions = [
    "What companies have you worked for?",
    "Tell me about the Smart Release Planner",
    "What's your experience with regulated healthcare?",
    "How do you approach product strategy?",
    "What certifications do you have?",
    "What's your leadership style?",
  ];

  const handleClearChat = () => {
    setMessages(initialMessages);
    setShowMoreQuestions(false);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      
      console.log('🔍 Debug - API Key exists:', !!apiKey);
      console.log('🔍 Debug - API Key length:', apiKey?.length || 0);
      
      if (!apiKey) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: "⚠️ AI features are currently disabled. The Groq API key hasn't been configured. However, I can still share that Shekhar is a Senior PM at Deloitte with 10 years of experience building products for Fortune 500 clients. Check out his full experience above!",
          },
        ]);
        setIsLoading(false);
        return;
      }

      console.log('🚀 Sending request to Groq API...');
      
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: `You are a helpful AI assistant representing Shekhar Sharma's portfolio. Answer questions about his professional experience, skills, and achievements based on the following resume information. Be conversational, enthusiastic, and highlight his strengths. Keep responses concise (2-4 sentences) and factual based on the resume. If asked about something not in the resume, politely say you don't have that information but redirect to what you do know.\n\nResume Data:\n${resumeContext}`,
            },
            ...messages.filter((m) => m.role !== 'assistant' || m.content !== initialMessages[0].content),
            userMessage,
          ],
          temperature: 0.7,
          max_tokens: 200,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('❌ API Error:', response.status, errorData);
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Got response from Groq!', data);
      
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      
      // Show detailed error in UI for debugging
      const errorMessage = error.message || 'Unknown error';
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `🔧 Debug Error: ${errorMessage}. Check console for details. Using Groq API with model: llama-3.3-70b-versatile`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = async (question) => {
    setInput('');
    
    const userMessage = { role: 'user', content: question };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      
      if (!apiKey) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: "⚠️ AI features are currently disabled. The Groq API key hasn't been configured. However, I can still share that Shekhar is a Senior PM at Deloitte with 10 years of experience building products for Fortune 500 clients. Check out his full experience above!",
          },
        ]);
        setIsLoading(false);
        return;
      }

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: `You are a helpful AI assistant representing Shekhar Sharma's portfolio. Answer questions about his professional experience, skills, and achievements based on the following resume information. Be conversational, enthusiastic, and highlight his strengths. Keep responses concise (2-4 sentences) and factual based on the resume. If asked about something not in the resume, politely say you don't have that information but redirect to what you do know.\n\nResume Data:\n${resumeContext}`,
            },
            ...messages.filter((m) => m.role !== 'assistant' || m.content !== initialMessages[0].content),
            userMessage,
          ],
          temperature: 0.7,
          max_tokens: 200,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('❌ API Error:', response.status, errorData);
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now. But feel free to check out Shekhar's LinkedIn or reach out directly!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 left-8 z-50 group"
          aria-label="Open AI Chat"
        >
          {/* Pulsing rings */}
          <div className="absolute inset-0 animate-ping">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30"></div>
          </div>
          <div className="absolute inset-0 animate-pulse">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"></div>
          </div>

          {/* Main button */}
          <div className="relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] rounded-full shadow-2xl shadow-purple-500/50 hover:shadow-pink-500/70 transition-all hover:scale-110 animate-shimmer">
            <div className="relative">
              <MessageCircle className="text-white" size={24} />
              <Sparkles 
                className="absolute -top-1 -right-1 text-yellow-300 animate-pulse" 
                size={14} 
              />
            </div>
            <span className="hidden sm:block text-white font-bold whitespace-nowrap">
              Ask AI About Me 🤖
            </span>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 left-8 z-50 w-[400px] max-w-[calc(100vw-4rem)] animate-fadeInUp">
          <div className="glass rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <MessageCircle className="text-white" size={24} />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-purple-600"></span>
                </div>
                <div>
                  <h3 className="font-bold text-white">AI Assistant</h3>
                  <p className="text-xs text-purple-100">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="text-white" size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-slate-900/50">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'glass text-gray-200'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="glass rounded-2xl px-4 py-2">
                    <Loader2 className="animate-spin text-purple-400" size={20} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-3 bg-slate-900/30 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-gray-400">
                  {messages.length <= 1 ? 'Quick questions:' : 'Follow-up questions:'}
                </p>
                {messages.length > 1 && (
                  <button
                    onClick={handleClearChat}
                    className="flex items-center gap-1 text-xs px-2 py-1 glass glass-hover rounded-lg text-gray-400 hover:text-white transition-all"
                    title="Clear chat"
                  >
                    <RotateCcw size={12} />
                    Clear
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(q)}
                    className="text-xs px-3 py-1 glass glass-hover rounded-full text-gray-300 hover:text-white transition-all"
                  >
                    {q}
                  </button>
                ))}
                {showMoreQuestions && moreQuestions.map((q, idx) => (
                  <button
                    key={`more-${idx}`}
                    onClick={() => handleQuickQuestion(q)}
                    className="text-xs px-3 py-1 glass glass-hover rounded-full text-gray-300 hover:text-white transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowMoreQuestions(!showMoreQuestions)}
                className="flex items-center gap-1 text-xs mt-2 px-3 py-1.5 glass glass-hover rounded-lg text-purple-400 hover:text-purple-300 transition-all mx-auto"
              >
                {showMoreQuestions ? (
                  <>
                    <ChevronUp size={14} />
                    Show less
                  </>
                ) : (
                  <>
                    <ChevronDown size={14} />
                    Show more questions
                  </>
                )}
              </button>
            </div>

            {/* Input */}
            <div className="p-4 bg-slate-900/50 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about my experience..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

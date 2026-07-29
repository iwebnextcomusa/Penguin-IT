import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2, PhoneCall } from 'lucide-react';
import { ChatMessage } from '../types';

interface ChatbotProps {
  isDarkMode: boolean;
}

export const Chatbot: React.FC<ChatbotProps> = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      text: 'Hello! Welcome to Penguin IT. I am your 24/7 Virtual Assistant. How can I assist you with Managed IT, Cybersecurity, Cloud Solutions, or technical support today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ role: m.role, text: m.text }))
        })
      });

      const data = await response.json();

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: data.reply || 'Thank you for reaching out to Penguin IT. You can also email us directly at support@penguinit.com!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Error sending chatbot message:', err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: 'I experienced a brief connectivity delay. Our Penguin IT engineers are always on call—please feel free to email support@penguinit.com or phone +1 (800) 555-PENGUIN directly!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    'Tell me about Managed IT Services',
    'How do I request an IT audit?',
    'What is your helpdesk SLA?',
    'Cloud Migration details'
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Chat Widget Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          id="floating-chatbot-btn"
          aria-label="Open AI Assistant Chatbot"
          className="relative group p-4 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold shadow-2xl shadow-cyan-500/50 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
        >
          {/* Ping Glow Ring */}
          <span className="absolute -inset-1 rounded-full bg-cyan-400 opacity-75 animate-ping pointer-events-none"></span>
          
          <Bot className="w-7 h-7 relative z-10" />

          {/* Quick Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-mono font-medium whitespace-nowrap shadow-xl border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with Penguin AI
          </span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className={`w-[92vw] sm:w-[400px] h-[550px] rounded-3xl border shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300 ${
          isDarkMode ? 'bg-slate-950/95 border-cyan-500/40 text-white backdrop-blur-xl' : 'bg-white/95 border-slate-300 text-slate-900 backdrop-blur-xl'
        }`}>
          
          {/* Header */}
          <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold font-display text-white flex items-center gap-1.5">
                  <span>Penguin AI Support</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Online • Gemini 3.6 Engine</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`p-2 rounded-xl shrink-0 ${
                    isUser ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-cyan-400'
                  }`}>
                    {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  <div className={`max-w-[78%] p-3.5 rounded-2xl ${
                    isUser
                      ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-none'
                      : isDarkMode
                      ? 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                      : 'bg-slate-100 border border-slate-200 text-slate-800 rounded-tl-none'
                  }`}>
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    <span className={`block text-[9px] font-mono mt-1 ${
                      isUser ? 'text-slate-900/70 text-right' : 'text-slate-400 text-left'
                    }`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 p-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Penguin AI is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-4 py-2 border-t border-slate-800/60 bg-slate-900/40 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-slate-800 text-cyan-300 border border-slate-700 hover:border-cyan-500 hover:bg-slate-700 whitespace-nowrap transition"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask Penguin IT virtual assistant..."
              className="flex-1 px-3.5 py-2.5 rounded-xl text-xs bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputMessage.trim()}
              className="p-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 disabled:opacity-50 transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

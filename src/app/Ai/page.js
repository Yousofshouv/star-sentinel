'use client';

import { useState, useEffect, useRef } from 'react';

export default function SpaceWeatherTeacher() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const welcomeMessage = {
      id: Date.now(),
      content: `<h3>🌟 Welcome to Space Weather Teacher!</h3>
        <p>I'm your AI space weather instructor, ready to explore the fascinating world of solar storms and space weather with you!</p>
        <ul>
          <li><strong>Solar Flares:</strong> Explosive bursts of energy from the Sun</li>
          <li><strong>Coronal Mass Ejections (CMEs):</strong> Massive clouds of solar material</li>
          <li><strong>Space Weather Impacts:</strong> How solar activity affects Earth</li>
          <li><strong>Technology Effects:</strong> GPS, satellites, power grids, and communication</li>
          <li><strong>Beautiful Auroras:</strong> The stunning light shows caused by space weather</li>
        </ul>
        <p><strong>Ready to learn about space weather?</strong> Ask me anything about solar storms, or click on the topic buttons to get started!</p>`,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages([welcomeMessage]);
    setIsReady(true);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addSparkles = () => {
    for (let i = 0; i < 6; i++) {
      const sparkle = document.createElement('div');
      sparkle.innerHTML = ['✨', '⭐', '🌟', '💫', '⚡', '🔥'][Math.floor(Math.random() * 6)];
      sparkle.style.position = 'fixed';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animation = 'magicalFloat 4s ease-in-out infinite';
      sparkle.style.animationDelay = Math.random() * 2 + 's';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.zIndex = '9999';
      sparkle.style.fontSize = '1.5rem';
      document.body.appendChild(sparkle);
      
      setTimeout(() => {
        if (document.body.contains(sparkle)) {
          document.body.removeChild(sparkle);
        }
      }, 4000);
    }
  };

  const askQuestion = (question) => {
    setInputValue(question);
    setTimeout(() => sendMessage(question), 100);
  };

  const sendMessage = async (predefinedMessage = null) => {
    const message = predefinedMessage || inputValue.trim();
    if (!message) return;

    const userMessage = {
      id: Date.now(),
      content: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    try {
      const response = await fetch('/api/Ai-teacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      
      const botMessage = {
        id: Date.now() + 1,
        content: data.response || 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      addSparkles();
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        content: 'Sorry, I encountered an error while processing your question. Please try again.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (content) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/###\s(.*?)(\n|$)/g, '<h3>$1</h3>')
      .replace(/##\s(.*?)(\n|$)/g, '<h3>$1</h3>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^/, '<p>')
      .replace(/$/, '</p>')
      .replace(/\n-\s(.*?)(?=\n|$)/g, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
      .replace(/<p><\/p>/g, '')
      .replace(/\n/g, '<br>');
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        @keyframes magicalFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 1; }
          90% { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 69, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 69, 255, 0.6); }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-3px); }
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(135deg, #0f0f23 0%, #16213e 25%, #1a1a2e 50%, #2d1b69 75%, #0f0f23 100%);
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 0% 100%; }
          75% { background-position: 100% 0%; }
          100% { background-position: 0% 50%; }
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 10% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }

        .app-container {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem;
          gap: 2rem;
        }

        .header-section {
          text-align: center;
          padding: 3rem 2rem;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(25px);
          border-radius: 30px;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.05);
          animation: fadeInUp 1s ease-out;
          position: relative;
          overflow: hidden;
        }

        .home-button {
          position: absolute;
          top: 2rem;
          left: 2rem;
          padding: 0.75rem 1.25rem;
          background: linear-gradient(135deg, #00d4ff, #ffd700);
          color: #0f0f23;
          border: none;
          border-radius: 15px;
          font-size: 0.95rem;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 8px 20px -5px rgba(0, 212, 255, 0.3);
        }

        .home-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 15px 30px -5px rgba(0, 212, 255, 0.5);
        }

        .header-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          animation: shimmer 3s infinite;
        }

        .header-section h1 {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #00d4ff, #ffd700, #ff6b6b, #4ecdc4);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          animation: gradientShift 8s ease infinite;
          position: relative;
          z-index: 1;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .header-section p {
          color: #e0e7ff;
          font-size: 1.25rem;
          font-weight: 500;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .main-content {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 2rem;
          flex: 1;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .sidebar-panel {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .facts-card, .topics-card {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(25px);
          border-radius: 25px;
          padding: 2rem;
          box-shadow: 
            0 20px 25px -5px rgba(0, 0, 0, 0.3),
            0 10px 10px -5px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          animation: slideInLeft 0.8s ease-out;
        }

        .facts-card:hover, .topics-card:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 32px 64px -12px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.15);
        }

        .facts-card h3, .topics-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .facts-card p {
          color: #d1d5db;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
          font-weight: 400;
        }

        .facts-card p::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #00d4ff;
          font-size: 0.8rem;
        }

        .topic-button {
          width: 100%;
          padding: 1rem 1.5rem;
          margin-bottom: 0.75rem;
          border: none;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.3);
          color: #ffffff;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 600;
          font-family: inherit;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .topic-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .topic-button:hover::before {
          left: 100%;
        }

        .topic-button:hover {
          background: linear-gradient(135deg, #00d4ff, #ffd700);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(0, 212, 255, 0.4);
          color: #0f0f23;
          font-weight: 700;
        }

        .chat-panel {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(25px);
          border-radius: 30px;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          height: calc(100vh - 250px);
          min-height: 600px;
          animation: slideInRight 0.8s ease-out;
          overflow: hidden;
        }

        .chat-header {
          padding: 2rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .chat-header h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .chat-header p {
          color: #d1d5db;
          font-size: 1rem;
          font-weight: 500;
        }

        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 2rem;
          scroll-behavior: smooth;
        }

        .messages-container::-webkit-scrollbar {
          width: 8px;
        }

        .messages-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        .messages-container::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #8b45ff, #3b82f6);
          border-radius: 10px;
        }

        .message-wrapper {
          margin-bottom: 2rem;
          animation: fadeInUp 0.5s ease-out;
        }

        .message-wrapper.user {
          display: flex;
          justify-content: flex-end;
        }

        .message-wrapper.bot {
          display: flex;
          justify-content: flex-start;
        }

        .message-bubble {
          max-width: 75%;
          padding: 1.5rem 2rem;
          border-radius: 25px;
          font-size: 1rem;
          line-height: 1.7;
          position: relative;
          font-weight: 500;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .message-bubble.user {
          background: linear-gradient(135deg, #8b45ff, #3b82f6);
          color: white;
          border-bottom-right-radius: 8px;
          animation: slideInRight 0.5s ease-out;
        }

        .message-bubble.bot {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom-left-radius: 8px;
          animation: slideInLeft 0.5s ease-out;
        }

        .message-bubble h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .message-bubble.bot h3 {
          color: #8b45ff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .message-bubble ul {
          margin-left: 2rem;
          margin-bottom: 1rem;
        }

        .message-bubble li {
          margin-bottom: 0.5rem;
        }

        .message-bubble strong {
          font-weight: 700;
        }

        .message-bubble.user strong {
          color: #fbbf24;
        }

        .message-bubble.bot strong {
          color: #06b6d4;
        }

        .loading-indicator {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          border-bottom-left-radius: 8px;
          max-width: 250px;
          animation: pulse 2s infinite;
        }

        .loading-dots {
          display: flex;
          gap: 0.5rem;
        }

        .loading-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b45ff, #3b82f6);
          animation: bounce 1.4s ease-in-out infinite;
        }

        .loading-dot:nth-child(1) { animation-delay: -0.32s; }
        .loading-dot:nth-child(2) { animation-delay: -0.16s; }
        .loading-dot:nth-child(3) { animation-delay: 0s; }

        .loading-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          font-weight: 500;
        }

        .input-section {
          padding: 2rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          gap: 1rem;
          align-items: flex-end;
        }

        .input-field {
          flex: 1;
          min-height: 60px;
          max-height: 140px;
          padding: 1rem 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          font-size: 1rem;
          font-family: inherit;
          font-weight: 500;
          resize: none;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: rgba(255, 255, 255, 0.9);
        }

        .input-field:focus {
          outline: none;
          border-color: #8b45ff;
          box-shadow: 0 0 0 4px rgba(139, 69, 255, 0.2);
          background: rgba(255, 255, 255, 0.15);
        }

        .input-field::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .send-button {
          width: 60px;
          height: 60px;
          border: none;
          border-radius: 20px;
          background: linear-gradient(135deg, #8b45ff, #3b82f6);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          font-size: 1.5rem;
          box-shadow: 0 10px 20px -5px rgba(139, 69, 255, 0.4);
          animation: glow 2s infinite;
        }

        .send-button:hover:not(:disabled) {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 20px 40px -5px rgba(139, 69, 255, 0.6);
        }

        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
          animation: none;
        }

        @media (max-width: 1024px) {
          .main-content {
            grid-template-columns: 320px 1fr;
            gap: 1.5rem;
          }

          .header-section h1 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .app-container {
            padding: 1rem;
          }

          .main-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .sidebar-panel {
            order: 2;
            flex-direction: row;
            overflow-x: auto;
            gap: 1rem;
          }

          .facts-card, .topics-card {
            min-width: 300px;
            flex-shrink: 0;
          }

          .chat-panel {
            order: 1;
            height: calc(100vh - 400px);
            min-height: 500px;
          }

          .header-section {
            padding: 2rem 1.5rem;
          }

          .header-section h1 {
            font-size: 2rem;
          }

          .home-button {
            top: 1rem;
            left: 1rem;
            padding: 0.6rem 1rem;
            font-size: 0.85rem;
          }

          .message-bubble {
            max-width: 85%;
          }
        }

        @media (max-width: 480px) {
          .header-section h1 {
            font-size: 1.75rem;
          }

          .sidebar-panel {
            flex-direction: column;
          }

          .facts-card, .topics-card {
            min-width: auto;
          }

          .input-section {
            padding: 1.5rem;
          }

          .message-bubble {
            max-width: 90%;
          }

          .send-button {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>

      <div className="app-container">
        <div className="header-section">
          <button 
            className="home-button" 
            onClick={() => window.history.back()}
            title="Go back to home"
          >
            🏠 Home
          </button>
          <h1>Space Weather Learning Hub</h1>
          <p>Discover the fascinating world of solar storms and space weather phenomena</p>
        </div>

        <div className="main-content">
          <div className="sidebar-panel">
            <div className="facts-card">
              <h3>⚡ Quick Facts</h3>
              <p>Solar flares travel at light speed to Earth</p>
              <p>CMEs take 1-3 days to reach our planet</p>
              <p>Can disrupt GPS, radio, and satellites</p>
              <p>May cause power grid fluctuations</p>
              <p>Create beautiful auroras at poles</p>
              <p>Affect astronauts in space</p>
            </div>

            <div className="topics-card">
              <h3>🚀 Learning Topics</h3>
              
              <button className="topic-button" onClick={() => askQuestion('What are solar flares and how do they affect Earth?')}>
                Solar Flares Explained
              </button>
              
              <button className="topic-button" onClick={() => askQuestion('Tell me about coronal mass ejections (CMEs)')}>
                Coronal Mass Ejections
              </button>
              
              <button className="topic-button" onClick={() => askQuestion('How does space weather affect satellites and GPS?')}>
                Technology Impacts
              </button>
              
              <button className="topic-button" onClick={() => askQuestion('What causes the beautiful northern and southern lights?')}>
                Aurora Formation
              </button>
              
              <button className="topic-button" onClick={() => askQuestion('How do we predict and monitor space weather?')}>
                Space Weather Forecasting
              </button>
              
              <button className="topic-button" onClick={() => askQuestion('Why does space weather follow an 11-year cycle?')}>
                Solar Cycle Explained
              </button>
              
              <button className="topic-button" onClick={() => askQuestion('How does space weather affect astronauts in space?')}>
                Astronaut Safety
              </button>
              
              <button className="topic-button" onClick={() => askQuestion('Can space weather cause power outages on Earth?')}>
                Power Grid Effects
              </button>
            </div>
          </div>

          <div className="chat-panel">
            <div className="chat-header">
              <h2>AI Learning Assistant</h2>
              <p>Ask questions about space weather and solar phenomena</p>
            </div>

            <div className="messages-container">
              {messages.map((message) => (
                <div key={message.id} className={`message-wrapper ${message.sender}`}>
                  <div 
                    className={`message-bubble ${message.sender}`}
                    dangerouslySetInnerHTML={{ 
                      __html: message.sender === 'bot' ? message.content : formatMessage(message.content)
                    }}
                  />
                </div>
              ))}
              
              {isLoading && (
                <div className="message-wrapper bot">
                  <div className="loading-indicator">
                    <div className="loading-dots">
                      <div className="loading-dot"></div>
                      <div className="loading-dot"></div>
                      <div className="loading-dot"></div>
                    </div>
                    <span className="loading-text">Thinking...</span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="input-section">
              <textarea
                ref={textareaRef}
                className="input-field"
                placeholder="Ask about solar storms, space weather impacts, or any cosmic phenomena..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                rows={1}
                disabled={!isReady}
              />
              <button
                className="send-button"
                onClick={() => sendMessage()}
                disabled={!isReady || isLoading || !inputValue.trim()}
              >
                ⚡
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}







//  'use client';

// import { useState, useEffect, useRef } from 'react';

// export default function SpaceWeatherTeacher() {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isReady, setIsReady] = useState(false);
//   const messagesEndRef = useRef(null);
//   const textareaRef = useRef(null);

//   useEffect(() => {
//     const welcomeMessage = {
//       id: Date.now(),
//       content: `<h3>🌟 Welcome to Space Weather Teacher!</h3>
//         <p>I'm your AI space weather instructor, ready to explore the fascinating world of solar storms and space weather with you!</p>
//         <ul>
//           <li><strong>Solar Flares:</strong> Explosive bursts of energy from the Sun</li>
//           <li><strong>Coronal Mass Ejections (CMEs):</strong> Massive clouds of solar material</li>
//           <li><strong>Space Weather Impacts:</strong> How solar activity affects Earth</li>
//           <li><strong>Technology Effects:</strong> GPS, satellites, power grids, and communication</li>
//           <li><strong>Beautiful Auroras:</strong> The stunning light shows caused by space weather</li>
//         </ul>
//         <p><strong>Ready to learn about space weather?</strong> Ask me anything about solar storms, or click on the topic buttons to get started!</p>`,
//       sender: 'bot',
//       timestamp: new Date()
//     };
    
//     setMessages([welcomeMessage]);
//     setIsReady(true);
//   }, []);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const addSparkles = () => {
//     for (let i = 0; i < 6; i++) {
//       const sparkle = document.createElement('div');
//       sparkle.innerHTML = ['✨', '⭐', '🌟', '💫', '⚡', '🔥'][Math.floor(Math.random() * 6)];
//       sparkle.style.position = 'fixed';
//       sparkle.style.left = Math.random() * 100 + '%';
//       sparkle.style.top = Math.random() * 100 + '%';
//       sparkle.style.animation = 'magicalFloat 4s ease-in-out infinite';
//       sparkle.style.animationDelay = Math.random() * 2 + 's';
//       sparkle.style.pointerEvents = 'none';
//       sparkle.style.zIndex = '9999';
//       sparkle.style.fontSize = '1.5rem';
//       document.body.appendChild(sparkle);
      
//       setTimeout(() => {
//         if (document.body.contains(sparkle)) {
//           document.body.removeChild(sparkle);
//         }
//       }, 4000);
//     }
//   };

//   const askQuestion = (question) => {
//     setInputValue(question);
//     setTimeout(() => sendMessage(question), 100);
//   };

//   const sendMessage = async (predefinedMessage = null) => {
//     const message = predefinedMessage || inputValue.trim();
//     if (!message) return;

//     const userMessage = {
//       id: Date.now(),
//       content: message,
//       sender: 'user',
//       timestamp: new Date()
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInputValue('');
//     setIsLoading(true);

//     if (textareaRef.current) {
//       textareaRef.current.style.height = 'auto';
//     }

//     try {
//       const response = await fetch('/api/Ai-teacher', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message }),
//       });

//       const data = await response.json();
      
//       const botMessage = {
//         id: Date.now() + 1,
//         content: data.response || 'Sorry, I encountered an error. Please try again.',
//         sender: 'bot',
//         timestamp: new Date()
//       };

//       setMessages(prev => [...prev, botMessage]);
//       addSparkles();
//     } catch (error) {
//       console.error('Error:', error);
//       const errorMessage = {
//         id: Date.now() + 1,
//         content: 'Sorry, I encountered an error while processing your question. Please try again.',
//         sender: 'bot',
//         timestamp: new Date()
//       };
//       setMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//     e.target.style.height = 'auto';
//     e.target.style.height = e.target.scrollHeight + 'px';
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   const formatMessage = (content) => {
//     return content
//       .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
//       .replace(/\*(.*?)\*/g, '<em>$1</em>')
//       .replace(/`(.*?)`/g, '<code>$1</code>')
//       .replace(/###\s(.*?)(\n|$)/g, '<h3>$1</h3>')
//       .replace(/##\s(.*?)(\n|$)/g, '<h3>$1</h3>')
//       .replace(/\n\n/g, '</p><p>')
//       .replace(/^/, '<p>')
//       .replace(/$/, '</p>')
//       .replace(/\n-\s(.*?)(?=\n|$)/g, '<li>$1</li>')
//       .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
//       .replace(/<p><\/p>/g, '')
//       .replace(/\n/g, '<br>');
//   };

//   return (
//     <>
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

//         @keyframes magicalFloat {
//           0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
//           10% { opacity: 1; }
//           50% { transform: translateY(-30px) rotate(180deg); opacity: 1; }
//           90% { opacity: 1; }
//         }

//         @keyframes shimmer {
//           0% { background-position: -200% center; }
//           100% { background-position: 200% center; }
//         }

//         @keyframes glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(139, 69, 255, 0.3); }
//           50% { box-shadow: 0 0 40px rgba(139, 69, 255, 0.6); }
//         }

//         @keyframes bounce {
//           0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//           40% { transform: translateY(-5px); }
//           60% { transform: translateY(-3px); }
//         }

//         @keyframes slideInLeft {
//           from { transform: translateX(-100px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }

//         @keyframes slideInRight {
//           from { transform: translateX(100px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }

//         @keyframes fadeInUp {
//           from { transform: translateY(30px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }

//         @keyframes pulse {
//           0%, 100% { opacity: 0.8; transform: scale(1); }
//           50% { opacity: 1; transform: scale(1.05); }
//         }

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
//           background: linear-gradient(135deg, #0f0f23 0%, #16213e 25%, #1a1a2e 50%, #2d1b69 75%, #0f0f23 100%);
//           background-size: 400% 400%;
//           animation: gradientShift 20s ease infinite;
//           min-height: 100vh;
//           color: #ffffff;
//           overflow-x: hidden;
//         }

//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           25% { background-position: 100% 50%; }
//           50% { background-position: 0% 100%; }
//           75% { background-position: 100% 0%; }
//           100% { background-position: 0% 50%; }
//         }

//         body::before {
//           content: '';
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: 
//             radial-gradient(circle at 10% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 30%),
//             radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 40%),
//             radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
//           pointer-events: none;
//           z-index: 1;
//         }

//         .app-container {
//           position: relative;
//           z-index: 2;
//           min-height: 100vh;
//           display: flex;
//           flex-direction: column;
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 1.5rem;
//           gap: 2rem;
//         }

//         .header-section {
//           text-align: center;
//           padding: 3rem 2rem;
//           background: rgba(0, 0, 0, 0.4);
//           backdrop-filter: blur(25px);
//           border-radius: 30px;
//           box-shadow: 
//             0 25px 50px -12px rgba(0, 0, 0, 0.4),
//             0 0 0 1px rgba(255, 255, 255, 0.1),
//             inset 0 1px 0 rgba(255, 255, 255, 0.1);
//           border: 2px solid rgba(255, 255, 255, 0.05);
//           animation: fadeInUp 1s ease-out;
//           position: relative;
//           overflow: hidden;
//         }

//         .header-section::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
//           animation: shimmer 3s infinite;
//         }

//         .header-section h1 {
//           font-size: 3.5rem;
//           font-weight: 800;
//           background: linear-gradient(135deg, #00d4ff, #ffd700, #ff6b6b, #4ecdc4);
//           background-size: 400% 400%;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           margin-bottom: 1rem;
//           animation: gradientShift 8s ease infinite;
//           position: relative;
//           z-index: 1;
//           text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
//         }

//         .header-section p {
//           color: #e0e7ff;
//           font-size: 1.25rem;
//           font-weight: 500;
//           text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
//         }

//         .main-content {
//           display: grid;
//           grid-template-columns: 380px 1fr;
//           gap: 2rem;
//           flex: 1;
//           animation: fadeInUp 1s ease-out 0.2s both;
//         }

//         .sidebar-panel {
//           display: flex;
//           flex-direction: column;
//           gap: 2rem;
//         }

//         .facts-card, .topics-card {
//           background: rgba(0, 0, 0, 0.5);
//           backdrop-filter: blur(25px);
//           border-radius: 25px;
//           padding: 2rem;
//           box-shadow: 
//             0 20px 25px -5px rgba(0, 0, 0, 0.3),
//             0 10px 10px -5px rgba(0, 0, 0, 0.1),
//             inset 0 1px 0 rgba(255, 255, 255, 0.05);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           transition: all 0.3s ease;
//           animation: slideInLeft 0.8s ease-out;
//         }

//         .facts-card:hover, .topics-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 
//             0 32px 64px -12px rgba(0, 0, 0, 0.4),
//             0 0 0 1px rgba(255, 255, 255, 0.15);
//         }

//         .facts-card h3, .topics-card h3 {
//           font-size: 1.4rem;
//           font-weight: 700;
//           color: #ffffff;
//           margin-bottom: 1.5rem;
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
//         }

//         .facts-card p {
//           color: #d1d5db;
//           font-size: 0.95rem;
//           line-height: 1.7;
//           margin-bottom: 0.75rem;
//           padding-left: 1.5rem;
//           position: relative;
//           font-weight: 400;
//         }

//         .facts-card p::before {
//           content: '▶';
//           position: absolute;
//           left: 0;
//           color: #00d4ff;
//           font-size: 0.8rem;
//         }

//         .topic-button {
//           width: 100%;
//           padding: 1rem 1.5rem;
//           margin-bottom: 0.75rem;
//           border: none;
//           border-radius: 20px;
//           background: rgba(0, 0, 0, 0.3);
//           color: #ffffff;
//           cursor: pointer;
//           font-size: 0.95rem;
//           font-weight: 600;
//           font-family: inherit;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           text-align: left;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           position: relative;
//           overflow: hidden;
//         }

//         .topic-button::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
//           transition: left 0.5s ease;
//         }

//         .topic-button:hover::before {
//           left: 100%;
//         }

//         .topic-button:hover {
//           background: linear-gradient(135deg, #00d4ff, #ffd700);
//           transform: translateY(-3px) scale(1.02);
//           box-shadow: 0 20px 25px -5px rgba(0, 212, 255, 0.4);
//           color: #0f0f23;
//           font-weight: 700;
//         }

//         .chat-panel {
//           background: rgba(0, 0, 0, 0.5);
//           backdrop-filter: blur(25px);
//           border-radius: 30px;
//           box-shadow: 
//             0 25px 50px -12px rgba(0, 0, 0, 0.4),
//             inset 0 1px 0 rgba(255, 255, 255, 0.05);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           display: flex;
//           flex-direction: column;
//           height: calc(100vh - 250px);
//           min-height: 600px;
//           animation: slideInRight 0.8s ease-out;
//           overflow: hidden;
//         }

//         .chat-header {
//           padding: 2rem;
//           text-align: center;
//           background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
//           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .chat-header h2 {
//           font-size: 1.8rem;
//           font-weight: 700;
//           color: #ffffff;
//           margin-bottom: 0.5rem;
//           text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
//         }

//         .chat-header p {
//           color: #d1d5db;
//           font-size: 1rem;
//           font-weight: 500;
//         }

//         .messages-container {
//           flex: 1;
//           overflow-y: auto;
//           padding: 2rem;
//           scroll-behavior: smooth;
//         }

//         .messages-container::-webkit-scrollbar {
//           width: 8px;
//         }

//         .messages-container::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 10px;
//         }

//         .messages-container::-webkit-scrollbar-thumb {
//           background: linear-gradient(135deg, #8b45ff, #3b82f6);
//           border-radius: 10px;
//         }

//         .message-wrapper {
//           margin-bottom: 2rem;
//           animation: fadeInUp 0.5s ease-out;
//         }

//         .message-wrapper.user {
//           display: flex;
//           justify-content: flex-end;
//         }

//         .message-wrapper.bot {
//           display: flex;
//           justify-content: flex-start;
//         }

//         .message-bubble {
//           max-width: 75%;
//           padding: 1.5rem 2rem;
//           border-radius: 25px;
//           font-size: 1rem;
//           line-height: 1.7;
//           position: relative;
//           font-weight: 500;
//           box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
//         }

//         .message-bubble.user {
//           background: linear-gradient(135deg, #8b45ff, #3b82f6);
//           color: white;
//           border-bottom-right-radius: 8px;
//           animation: slideInRight 0.5s ease-out;
//         }

//         .message-bubble.bot {
//           background: rgba(255, 255, 255, 0.15);
//           backdrop-filter: blur(10px);
//           color: rgba(255, 255, 255, 0.9);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           border-bottom-left-radius: 8px;
//           animation: slideInLeft 0.5s ease-out;
//         }

//         .message-bubble h3 {
//           font-size: 1.2rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//         }

//         .message-bubble.bot h3 {
//           color: #8b45ff;
//           text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         }

//         .message-bubble ul {
//           margin-left: 2rem;
//           margin-bottom: 1rem;
//         }

//         .message-bubble li {
//           margin-bottom: 0.5rem;
//         }

//         .message-bubble strong {
//           font-weight: 700;
//         }

//         .message-bubble.user strong {
//           color: #fbbf24;
//         }

//         .message-bubble.bot strong {
//           color: #06b6d4;
//         }

//         .loading-indicator {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           padding: 1.5rem 2rem;
//           background: rgba(255, 255, 255, 0.15);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           border-radius: 25px;
//           border-bottom-left-radius: 8px;
//           max-width: 250px;
//           animation: pulse 2s infinite;
//         }

//         .loading-dots {
//           display: flex;
//           gap: 0.5rem;
//         }

//         .loading-dot {
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #8b45ff, #3b82f6);
//           animation: bounce 1.4s ease-in-out infinite;
//         }

//         .loading-dot:nth-child(1) { animation-delay: -0.32s; }
//         .loading-dot:nth-child(2) { animation-delay: -0.16s; }
//         .loading-dot:nth-child(3) { animation-delay: 0s; }

//         .loading-text {
//           color: rgba(255, 255, 255, 0.8);
//           font-size: 1rem;
//           font-weight: 500;
//         }

//         .input-section {
//           padding: 2rem;
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
//           border-top: 1px solid rgba(255, 255, 255, 0.1);
//           display: flex;
//           gap: 1rem;
//           align-items: flex-end;
//         }

//         .input-field {
//           flex: 1;
//           min-height: 60px;
//           max-height: 140px;
//           padding: 1rem 1.5rem;
//           border: 2px solid rgba(255, 255, 255, 0.2);
//           border-radius: 20px;
//           font-size: 1rem;
//           font-family: inherit;
//           font-weight: 500;
//           resize: none;
//           transition: all 0.3s ease;
//           background: rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(10px);
//           color: rgba(255, 255, 255, 0.9);
//         }

//         .input-field:focus {
//           outline: none;
//           border-color: #8b45ff;
//           box-shadow: 0 0 0 4px rgba(139, 69, 255, 0.2);
//           background: rgba(255, 255, 255, 0.15);
//         }

//         .input-field::placeholder {
//           color: rgba(255, 255, 255, 0.6);
//         }

//         .send-button {
//           width: 60px;
//           height: 60px;
//           border: none;
//           border-radius: 20px;
//           background: linear-gradient(135deg, #8b45ff, #3b82f6);
//           color: white;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//           font-size: 1.5rem;
//           box-shadow: 0 10px 20px -5px rgba(139, 69, 255, 0.4);
//           animation: glow 2s infinite;
//         }

//         .send-button:hover:not(:disabled) {
//           transform: translateY(-3px) scale(1.05);
//           box-shadow: 0 20px 40px -5px rgba(139, 69, 255, 0.6);
//         }

//         .send-button:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//           transform: none;
//           animation: none;
//         }

//         @media (max-width: 1024px) {
//           .main-content {
//             grid-template-columns: 320px 1fr;
//             gap: 1.5rem;
//           }

//           .header-section h1 {
//             font-size: 2.5rem;
//           }
//         }

//         @media (max-width: 768px) {
//           .app-container {
//             padding: 1rem;
//           }

//           .main-content {
//             grid-template-columns: 1fr;
//             gap: 1.5rem;
//           }

//           .sidebar-panel {
//             order: 2;
//             flex-direction: row;
//             overflow-x: auto;
//             gap: 1rem;
//           }

//           .facts-card, .topics-card {
//             min-width: 300px;
//             flex-shrink: 0;
//           }

//           .chat-panel {
//             order: 1;
//             height: calc(100vh - 400px);
//             min-height: 500px;
//           }

//           .header-section {
//             padding: 2rem 1.5rem;
//           }

//           .header-section h1 {
//             font-size: 2rem;
//           }

//           .message-bubble {
//             max-width: 85%;
//           }
//         }

//         @media (max-width: 480px) {
//           .header-section h1 {
//             font-size: 1.75rem;
//           }

//           .sidebar-panel {
//             flex-direction: column;
//           }

//           .facts-card, .topics-card {
//             min-width: auto;
//           }

//           .input-section {
//             padding: 1.5rem;
//           }

//           .message-bubble {
//             max-width: 90%;
//           }

//           .send-button {
//             width: 50px;
//             height: 50px;
//           }
//         }
//       `}</style>

//       <div className="app-container">
//         <div className="header-section">
//           <h1>Space Weather Learning Hub</h1>
//           <p>Discover the fascinating world of solar storms and space weather phenomena</p>
//         </div>

//         <div className="main-content">
//           <div className="sidebar-panel">
//             <div className="facts-card">
//               <h3>⚡ Quick Facts</h3>
//               <p>Solar flares travel at light speed to Earth</p>
//               <p>CMEs take 1-3 days to reach our planet</p>
//               <p>Can disrupt GPS, radio, and satellites</p>
//               <p>May cause power grid fluctuations</p>
//               <p>Create beautiful auroras at poles</p>
//               <p>Affect astronauts in space</p>
//             </div>

//             <div className="topics-card">
//               <h3>🚀 Learning Topics</h3>
              
//               <button className="topic-button" onClick={() => askQuestion('What are solar flares and how do they affect Earth?')}>
//                 Solar Flares Explained
//               </button>
              
//               <button className="topic-button" onClick={() => askQuestion('Tell me about coronal mass ejections (CMEs)')}>
//                 Coronal Mass Ejections
//               </button>
              
//               <button className="topic-button" onClick={() => askQuestion('How does space weather affect satellites and GPS?')}>
//                 Technology Impacts
//               </button>
              
//               <button className="topic-button" onClick={() => askQuestion('What causes the beautiful northern and southern lights?')}>
//                 Aurora Formation
//               </button>
              
//               <button className="topic-button" onClick={() => askQuestion('How do we predict and monitor space weather?')}>
//                 Space Weather Forecasting
//               </button>
              
//               <button className="topic-button" onClick={() => askQuestion('Why does space weather follow an 11-year cycle?')}>
//                 Solar Cycle Explained
//               </button>
              
//               <button className="topic-button" onClick={() => askQuestion('How does space weather affect astronauts in space?')}>
//                 Astronaut Safety
//               </button>
              
//               <button className="topic-button" onClick={() => askQuestion('Can space weather cause power outages on Earth?')}>
//                 Power Grid Effects
//               </button>
//             </div>
//           </div>

//           <div className="chat-panel">
//             <div className="chat-header">
//               <h2>AI Learning Assistant</h2>
//               <p>Ask questions about space weather and solar phenomena</p>
//             </div>

//             <div className="messages-container">
//               {messages.map((message) => (
//                 <div key={message.id} className={`message-wrapper ${message.sender}`}>
//                   <div 
//                     className={`message-bubble ${message.sender}`}
//                     dangerouslySetInnerHTML={{ 
//                       __html: message.sender === 'bot' ? message.content : formatMessage(message.content)
//                     }}
//                   />
//                 </div>
//               ))}
              
//               {isLoading && (
//                 <div className="message-wrapper bot">
//                   <div className="loading-indicator">
//                     <div className="loading-dots">
//                       <div className="loading-dot"></div>
//                       <div className="loading-dot"></div>
//                       <div className="loading-dot"></div>
//                     </div>
//                     <span className="loading-text">Thinking...</span>
//                   </div>
//                 </div>
//               )}
              
//               <div ref={messagesEndRef} />
//             </div>

//             <div className="input-section">
//               <textarea
//                 ref={textareaRef}
//                 className="input-field"
//                 placeholder="Ask about solar storms, space weather impacts, or any cosmic phenomena..."
//                 value={inputValue}
//                 onChange={handleInputChange}
//                 onKeyDown={handleKeyDown}
//                 rows={1}
//                 disabled={!isReady}
//               />
//               <button
//                 className="send-button"
//                 onClick={() => sendMessage()}
//                 disabled={!isReady || isLoading || !inputValue.trim()}
//               >
//                 ⚡
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
'use client'

import React, { useState, useEffect, useMemo } from 'react';

import { 
  Home, Zap, Satellite, Car, Radio, Shield, Sun, Earth, Star, Sparkles, 
  Trophy, BookOpen, Brain, CheckCircle, XCircle, Lightbulb,
  Rocket, Award, Target, PlayCircle
} from 'lucide-react';

const SpaceWeatherForKids = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [score, setScore] = useState(0);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const darkMode = true;
  const [animateScore, setAnimateScore] = useState(false);

  const handleSectionComplete = (sectionKey) => {
    if (!completedSections.has(sectionKey)) {
      setCompletedSections(prev => new Set([...prev, sectionKey]));
      setScore(prev => prev + 10);
      setAnimateScore(true);
      setTimeout(() => setAnimateScore(false), 600);
    }
  };

  const quizQuestions = [
    {
      question: "What happened in Quebec in 1989 due to space weather?",
      options: ["It rained for 9 hours", "The power went out for 9 hours", "It snowed for 9 days", "Nothing happened"],
      correct: 1,
      explanation: "A massive space weather event caused a blackout that left 6 million people without power for 9 hours! This shows how powerful space weather can be."
    },
    {
      question: "What are space weather particles like?",
      options: ["Raindrops from space", "Sparks from a campfire", "Snow from the moon", "Wind from Earth"],
      correct: 1,
      explanation: "Space particles are like invisible sparks thrown out by our Sun's campfire! They travel incredibly fast through space."
    },
    {
      question: "How can space weather affect GPS?",
      options: ["It makes cars go faster", "It changes your location reading", "It breaks car windows", "It makes music louder"],
      correct: 1,
      explanation: "Space weather can slow down or speed up GPS signals, making your location appear wrong by several meters!"
    },
    {
      question: "What protects pipelines from space weather damage?",
      options: ["Magic shields", "Cathodic protection systems", "Plastic covers", "Underground burial"],
      correct: 1,
      explanation: "Engineers use cathodic protection systems - special electrical devices that act like invisible shields for metal pipes!"
    },
    {
      question: "Which historical communication system caught fire from space weather?",
      options: ["Cell phones", "Telegraph wires", "TV antennas", "Smoke signals"],
      correct: 1,
      explanation: "In 1852, telegraph paper actually caught fire from the electrical currents induced by space weather! It was so powerful that flames followed the pen."
    }
  ];

  const handleQuizAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    const newAnswers = [...quizAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setQuizAnswers(newAnswers);

    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setScore(prev => prev + 20);
      setAnimateScore(true);
      setTimeout(() => setAnimateScore(false), 600);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const resetQuiz = () => {
    setShowQuiz(false);
    setCurrentQuestion(0);
    setQuizAnswers([]);
    setSelectedAnswer(null);
  };

  const [particles, setParticles] = useState([]);
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Enhanced star field
    setStars(
      Array.from({ length: 100 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: `${Math.random() * 3}s`,
        duration: `${2 + Math.random() * 3}s`
      }))
    );
    
    // Cosmic particles
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${3 + Math.random() * 3}s`
      }))
    );
  }, []);

  const themeClasses = {
    bg: darkMode ? 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900' : 'bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200',
    cardBg: darkMode ? 'bg-slate-800/90 backdrop-blur-md' : 'bg-gradient-to-br from-cyan-50 via-blue-100 to-purple-100',
    text: darkMode ? 'text-slate-100' : 'text-indigo-900',
    textSecondary: darkMode ? 'text-slate-300' : 'text-purple-700'
  };

  const sections = {
    intro: {
      title: "What is Space Weather?",
      icon: <Sun className="w-8 h-8 text-white" />,
      color: "from-amber-500 to-orange-600",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block p-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-4 animate-pulse shadow-lg shadow-orange-500/50">
              <Sun className="w-12 h-12 text-white" />
            </div>
          </div>
          <p className="text-xl leading-relaxed">
            Hey young explorers! Did you know that space has weather just like Earth? 
            But instead of rain and snow, space weather involves invisible particles 
            from the Sun zooming through space at incredible speeds!
          </p>
          <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 p-6 rounded-xl border-l-4 border-amber-500 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <p className="font-semibold text-amber-200">
              The Sun is like a giant campfire that sometimes throws sparks! 
              These "sparks" are actually tiny particles that travel super fast through space - 
              some moving at over 1 million miles per hour!
            </p>
          </div>
          <p className="text-lg">
            When these particles reach Earth, they can affect our technology in amazing ways. 
            Let's explore how space weather impacts the gadgets and systems we use every day!
          </p>
          <div className="bg-gradient-to-r from-cyan-900/40 to-teal-900/40 p-4 rounded-lg border border-teal-500/50 backdrop-blur-sm">
            <p className="text-sm text-teal-300">
              <strong>Data Source:</strong> This information comes from Space Weather Canada's 
              research on how solar particles interact with Earth's magnetic field and atmosphere.
            </p>
          </div>
        </div>
      )
    },
    power: {
      title: "Power Systems",
      icon: <Zap className="w-8 h-8 text-white" />,
      color: "from-blue-600 to-indigo-700",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block p-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mb-4 animate-bounce shadow-lg shadow-blue-500/50">
              <Zap className="w-12 h-12 text-white" />
            </div>
          </div>
          <p className="text-xl leading-relaxed">
            Imagine if space weather could turn off all the lights in your city! 
            That's exactly what happened in Quebec, Canada in 1989 when 6 million people 
            lost power for 9 hours!
          </p>
          <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
            <h4 className="font-bold text-blue-300 mb-3 text-lg">How does this happen?</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-2 bg-slate-900/50 rounded-lg backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <span>Space particles create invisible electric currents in power lines</span>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-slate-900/50 rounded-lg backdrop-blur-sm">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
                <span>These currents overheat transformers (giant electrical boxes)</span>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-slate-900/50 rounded-lg backdrop-blur-sm">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
                <span>When transformers break, whole cities lose power!</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 p-6 rounded-xl border-l-4 border-emerald-500 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <p className="text-emerald-200 text-lg">
              <strong>Amazing Fact:</strong> One transformer at a nuclear plant cost 
              $17 million to replace - more than buying a mansion! 
              And it took a whole year to build a new one.
            </p>
          </div>
        </div>
      )
    },
    satellites: {
      title: "Satellites - Space Robots",
      icon: <Satellite className="w-8 h-8 text-white" />,
      color: "from-purple-600 to-pink-600",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4 shadow-lg shadow-purple-500/50">
              <Satellite className="w-12 h-12 text-white animate-spin-slow" />
            </div>
          </div>
          <p className="text-xl leading-relaxed">
            Satellites are like super-smart robots floating in space that help us with 
            TV shows, internet, weather forecasts, and GPS directions!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm border border-purple-500/30">
              <h4 className="font-bold text-purple-300 mb-4 text-lg flex items-center">
                <XCircle className="w-5 h-5 mr-2" />
                What can go wrong?
              </h4>
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-3 rounded-lg flex items-center space-x-3 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span>Satellites get "confused" and follow wrong commands</span>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg flex items-center space-x-3 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span>Their electronic brains get "zapped"</span>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg flex items-center space-x-3 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Sometimes they stop working completely!</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm border border-orange-500/30">
              <h4 className="font-bold text-orange-300 mb-4 text-lg flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Why does this happen?
              </h4>
              <p className="text-orange-200 leading-relaxed">
                High-energy space particles are like tiny invisible bullets that can 
                damage satellite computers, just like how water damages your phone! 
                In 1994, multiple satellites malfunctioned on the same days due to 
                space weather storms.
              </p>
            </div>
          </div>
        </div>
      )
    },
    gps: {
      title: "GPS Navigation",
      icon: <Car className="w-8 h-8 text-white" />,
      color: "from-emerald-600 to-teal-600",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mb-4 animate-pulse shadow-lg shadow-emerald-500/50">
              <Car className="w-12 h-12 text-white" />
            </div>
          </div>
          <p className="text-xl leading-relaxed">
            GPS is like having a super-smart friend in space who always knows where you are! 
            But space weather can make this friend give wrong directions.
          </p>
          <div className="bg-gradient-to-r from-teal-900/40 to-emerald-900/40 p-6 rounded-xl border-l-4 border-teal-500 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
            <h4 className="font-bold text-teal-300 mb-4 text-lg">How GPS Usually Works:</h4>
            <div className="space-y-3">
              {[
                "Satellites send invisible signals to Earth",
                "Your GPS device catches these signals",
                "It calculates where you are by timing the signals"
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-slate-900/50 rounded-lg transform hover:scale-105 transition-all duration-200 backdrop-blur-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <span className="text-teal-200">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 p-6 rounded-xl border-l-4 border-amber-500 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <p className="text-amber-200 text-lg">
              <strong>Space Weather Problem:</strong> When space particles mess with 
              the air high above Earth, GPS signals get confused and can show you're 
              in the wrong place - sometimes by several city blocks!
            </p>
          </div>
        </div>
      )
    },
    pipelines: {
      title: "Underground Pipelines",
      icon: <Shield className="w-8 h-8 text-white" />,
      color: "from-cyan-600 to-blue-700",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block p-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full mb-4 animate-bounce shadow-lg shadow-cyan-500/50">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <p className="text-xl leading-relaxed">
            Deep underground, there are massive metal pipes that carry oil and gas 
            across entire countries - like giant straws that stretch for hundreds of miles!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 p-6 rounded-xl hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-red-500/30">
              <h4 className="font-bold text-red-300 mb-4 text-lg flex items-center">
                <XCircle className="w-5 h-5 mr-2" />
                The Problem
              </h4>
              <p className="text-red-200 leading-relaxed">
                Space weather creates electric currents in these long metal pipes. 
                These currents make the pipes rust faster, like when you leave 
                a battery in a toy for too long and it gets all corroded and yucky!
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 p-6 rounded-xl hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-emerald-500/30">
              <h4 className="font-bold text-emerald-300 mb-4 text-lg flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                The Solution
              </h4>
              <p className="text-emerald-200 leading-relaxed">
                Smart engineers use cathodic protection systems - special electrical 
                devices that create an invisible electric shield around the pipes 
                to keep them safe from space weather damage!
              </p>
            </div>
          </div>
        </div>
      )
    },
    radio: {
      title: "Communications",
      icon: <Radio className="w-8 h-8 text-white" />,
      color: "from-indigo-600 to-violet-700",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block p-4 bg-gradient-to-r from-indigo-600 to-violet-700 rounded-full mb-4 animate-pulse shadow-lg shadow-indigo-500/50">
              <Radio className="w-12 h-12 text-white" />
            </div>
          </div>
          <p className="text-xl leading-relaxed">
            Long ago, people used telegraph wires to send messages across the world. 
            Sometimes space weather made these wires so energetic that they caught fire!
          </p>
          <div className="bg-gradient-to-r from-indigo-900/40 to-violet-900/40 p-6 rounded-xl hover:shadow-lg transition-all duration-300 backdrop-blur-sm border border-indigo-500/30">
            <h4 className="font-bold text-indigo-300 mb-4 text-lg">Amazing Historical Facts:</h4>
            <div className="space-y-4">
              {[
                { year: "1852", fact: "Telegraph paper caught fire from space electricity!" },
                { year: "1940s", fact: "Operators sent messages using only 'space power'" },
                { year: "Today", fact: "Internet cables still need protection from space weather" }
              ].map((item, index) => (
                <div key={index} className="bg-slate-900/50 p-4 rounded-lg flex items-center space-x-4 transform hover:scale-105 transition-all duration-200 backdrop-blur-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {item.year}
                  </div>
                  <span className="text-slate-200">{item.fact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  };

  const totalSections = Object.keys(sections).length;
  const maxPoints = totalSections * 10 + quizQuestions.length * 20;

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses.bg} relative overflow-hidden`}>
      {/* Enhanced Star Field Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              animationDuration: star.duration,
              opacity: 0.6
            }}
          />
        ))}
        {particles.map((particle, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
        {/* Nebula effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-pink-900/80 text-white p-4 md:p-6 relative overflow-hidden backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.history.back()}
                className="group flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 px-4 md:px-6 py-3 rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-lg border-2 border-orange-400/50"
              >
                <Home className="w-5 md:w-6 h-5 md:h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                <span className="font-semibold text-white">Home</span>
              </button>
            </div>
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg">
                Space Weather for Young Explorers
              </h1>
              <p className="text-blue-200 text-sm md:text-lg">Discover how space affects our everyday technology</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-6 relative z-10">
        {/* Score Display */}
        <div className="mb-8 bg-gradient-to-r from-purple-700/80 via-pink-700/80 to-red-700/80 text-white p-4 md:p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md border border-purple-400/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className={`p-3 bg-white/20 rounded-full ${animateScore ? 'animate-spin' : ''} transition-all duration-600 backdrop-blur-sm`}>
                <Star className="w-6 md:w-8 h-6 md:h-8" />
              </div>
              <div>
                <span className={`text-xl md:text-2xl font-bold ${animateScore ? 'animate-pulse' : ''}`}>
                  Space Explorer Score: {score} points
                </span>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2 backdrop-blur-sm">
                  <div 
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-500 ease-out shadow-lg shadow-yellow-400/50"
                    style={{ width: `${Math.min((score / maxPoints) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 animate-spin" />
                <span className="text-lg md:text-xl font-semibold">{completedSections.size}/{totalSections} sections</span>
              </div>
            </div>
          </div>
          
          {completedSections.size === totalSections && (
            <div className="mt-4 p-4 bg-white/20 rounded-xl animate-bounce backdrop-blur-sm">
              <p className="text-center text-lg md:text-xl mb-3">Congratulations! You're now a Space Weather Expert!</p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 md:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-bold text-sm md:text-lg hover:scale-105 flex items-center space-x-2 shadow-lg shadow-orange-500/50"
                >
                  <Brain className="w-5 md:w-6 h-5 md:h-6" />
                  <span>Take Expert Quiz!</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`group p-4 md:p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm ${
                activeSection === key
                  ? `border-transparent bg-gradient-to-r ${section.color} text-white shadow-2xl scale-105`
                  : `border-slate-600/50 bg-slate-800/60 hover:border-purple-400/50 hover:shadow-lg`
              }`}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="relative">
                  <div className={`p-3 rounded-full transition-all duration-300 shadow-lg ${
                    activeSection === key 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-slate-700/80 group-hover:bg-slate-600/80 backdrop-blur-sm'
                  }`}>
                    {section.icon}
                  </div>
                  {completedSections.has(key) && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-emerald-500/50">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <span className={`text-xs md:text-sm font-bold text-center ${activeSection === key ? 'text-white' : themeClasses.text}`}>
                  {section.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Quiz Modal */}
        {showQuiz && (
          <div className="fixed inset-0 bg-slate-950/95 flex items-center justify-center z-50 backdrop-blur-md p-4">
            <div className="bg-slate-800/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 max-w-2xl mx-4 shadow-3xl border-2 border-purple-500/50 relative overflow-hidden max-h-[90vh] overflow-y-auto">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-300 flex items-center space-x-3">
                    <Brain className="w-6 md:w-8 h-6 md:h-8 text-purple-400" />
                    <span>Space Weather Quiz!</span>
                  </h3>
                  <div className="text-xs md:text-sm bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 md:px-4 py-2 rounded-full font-bold shadow-lg">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </div>
                </div>

                {currentQuestion < quizQuestions.length ? (
                  <div className="space-y-6">
                    <div className="w-full bg-slate-700/50 rounded-full h-4 border-2 border-purple-500/50 backdrop-blur-sm">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-blue-500 h-full rounded-full transition-all duration-500 shadow-lg"
                        style={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
                      />
                    </div>
                    
                    <p className="text-lg md:text-xl font-semibold text-slate-100 leading-relaxed">
                      {quizQuestions[currentQuestion].question}
                    </p>
                    
                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map((option, index) => {
                        let buttonClass = "w-full text-left p-3 md:p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ";
                        
                        if (selectedAnswer === null) {
                          buttonClass += "border-purple-400/50 hover:border-orange-400 bg-slate-700/50 hover:bg-slate-600/60 hover:shadow-lg text-slate-100";
                        } else if (index === quizQuestions[currentQuestion].correct) {
                          buttonClass += "border-emerald-500 bg-emerald-600/30 text-emerald-200 shadow-lg shadow-emerald-500/30";
                        } else if (index === selectedAnswer && index !== quizQuestions[currentQuestion].correct) {
                          buttonClass += "border-red-500 bg-red-600/30 text-red-200 shadow-lg shadow-red-500/30";
                        } else {
                          buttonClass += "border-slate-600/50 bg-slate-700/30 text-slate-300";
                        }

                        return (
                          <button
                            key={index}
                            onClick={() => selectedAnswer === null && handleQuizAnswer(index)}
                            className={buttonClass}
                            disabled={selectedAnswer !== null}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-6 md:w-8 h-6 md:h-8 rounded-full flex items-center justify-center font-bold text-white text-sm md:text-base shadow-lg ${
                                selectedAnswer === null ? 'bg-purple-500' :
                                index === quizQuestions[currentQuestion].correct ? 'bg-emerald-500' :
                                index === selectedAnswer ? 'bg-red-500' : 'bg-slate-600'
                              }`}>
                                {String.fromCharCode(65 + index)}
                              </div>
                              <span className="flex-1 text-sm md:text-base">{option}</span>
                              {selectedAnswer !== null && index === quizQuestions[currentQuestion].correct && (
                                <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-emerald-400" />
                              )}
                              {selectedAnswer === index && index !== quizQuestions[currentQuestion].correct && (
                                <XCircle className="w-5 md:w-6 h-5 md:h-6 text-red-400" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {showExplanation && (
                      <div className="bg-cyan-900/40 p-4 md:p-6 rounded-xl border-l-4 border-cyan-500 animate-fadeIn backdrop-blur-sm">
                        <h4 className="font-bold text-cyan-300 mb-2 flex items-center text-sm md:text-base">
                          <Lightbulb className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                          Explanation:
                        </h4>
                        <p className="text-cyan-200 leading-relaxed text-sm md:text-base">
                          {quizQuestions[currentQuestion].explanation}
                        </p>
                        <div className="mt-4 flex justify-center">
                          <button
                            onClick={nextQuestion}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 md:px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-bold flex items-center space-x-2 hover:scale-105 border-2 border-purple-400/50 text-sm md:text-base shadow-lg shadow-purple-500/30"
                          >
                            <span>Next Question</span>
                            <PlayCircle className="w-4 md:w-5 h-4 md:h-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="inline-block p-6 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mb-4 shadow-lg shadow-orange-500/50">
                      <Trophy className="w-12 md:w-16 h-12 md:h-16 text-white animate-bounce" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-purple-300">Quiz Complete!</h4>
                    <div className="bg-emerald-900/40 p-4 md:p-6 rounded-xl border-2 border-emerald-500/50 backdrop-blur-sm">
                      <p className="text-xl md:text-2xl mb-4 text-emerald-200">
                        You scored {quizAnswers.reduce((score, answer, index) => 
                          answer === quizQuestions[index].correct ? score + 1 : score, 0
                        )} out of {quizQuestions.length} questions correct!
                      </p>
                      <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
                        <button
                          onClick={resetQuiz}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-bold hover:scale-105 flex items-center justify-center space-x-2 border-2 border-blue-400/50 text-sm md:text-base shadow-lg shadow-blue-500/30"
                        >
                          <Rocket className="w-4 md:w-5 h-4 md:h-5" />
                          <span>Try Again</span>
                        </button>
                        <button
                          onClick={() => setShowQuiz(false)}
                          className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 md:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-bold hover:scale-105 border-2 border-orange-400/50 text-sm md:text-base shadow-lg shadow-orange-500/30"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-slate-800/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8 border-2 border-purple-400/30 hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-600/20 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-8">
              <div className={`p-4 bg-gradient-to-r ${sections[activeSection].color} rounded-2xl shadow-lg`}>
                {sections[activeSection].icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
                {sections[activeSection].title}
              </h2>
            </div>
            
            <div className={themeClasses.text}>
              {sections[activeSection].content}
            </div>

            <div className="mt-8 flex justify-center">
              <button 
                onClick={() => handleSectionComplete(activeSection)}
                disabled={completedSections.has(activeSection)}
                className={`px-6 md:px-8 py-4 rounded-full font-bold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 border-2 ${
                  completedSections.has(activeSection)
                    ? 'bg-emerald-600 text-white cursor-not-allowed border-emerald-400/50 shadow-lg shadow-emerald-500/30'
                    : `bg-gradient-to-r ${sections[activeSection].color} text-white hover:shadow-lg border-purple-300/50 shadow-lg`
                }`}
              >
                {completedSections.has(activeSection) ? (
                  <>
                    <CheckCircle className="w-5 md:w-6 h-5 md:h-6" />
                    <span>Completed!</span>
                  </>
                ) : (
                  <>
                    <Target className="w-5 md:w-6 h-5 md:h-6" />
                    <span>Mark Complete This tab (Complete all to appear for an interactive quiz) </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Fun Facts */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-amber-500/30 backdrop-blur-md">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg">
                <Star className="w-5 md:w-6 h-5 md:h-6 text-white animate-spin-slow" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-amber-300">Did You Know?</h3>
            </div>
            <p className="text-amber-200 leading-relaxed text-base md:text-lg">
              Astronauts in space can see beautiful auroras (Northern Lights) from above! 
              These colorful dancing lights happen when space particles hit Earth's atmosphere 
              and make it glow like a giant cosmic disco ball!
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-teal-500/30 backdrop-blur-md">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-lg">
                <BookOpen className="w-5 md:w-6 h-5 md:h-6 text-white animate-pulse" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-teal-300">Space Weather Scientists</h3>
            </div>
            <p className="text-teal-200 leading-relaxed text-base md:text-lg">
              Scientists use super cool satellites and special instruments to watch space weather 
              24/7! They're like weather forecasters for space, helping protect our technology 
              by warning us when space storms are heading our way!
            </p>
          </div>
        </div>

        {/* NASA Video Section */}
        <div className="mt-12 bg-gradient-to-r from-red-900/80 via-red-800/80 to-red-900/80 text-white p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-red-500/50 backdrop-blur-md">
          <div className="text-center mb-6">
            <div className="inline-block p-4 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
              <PlayCircle className="w-10 md:w-12 h-10 md:h-12 animate-pulse" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">NASA Space Weather Video</h3>
            <p className="text-red-200 text-base md:text-lg">
              Watch this amazing NASA video about "Human Activity Impacted Space Weather"
            </p>
          </div>

          <div className="bg-gradient-to-r from-emerald-800/40 to-cyan-800/40 p-4 md:p-6 rounded-2xl mb-6 border-2 border-emerald-500/50 backdrop-blur-sm">
            <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl flex items-center justify-center mb-4 border-4 border-cyan-500/50">
              <video 
                controls 
                className="w-full h-full rounded-xl"
                poster="/api/placeholder/800/450"
              >
                <source src="/video-01.m4v" type="video/mp4" />
                <p className="text-cyan-200">Your browser doesn't support video playback.</p>
              </video>
            </div>
            <p className="text-emerald-200 text-center italic font-semibold text-base md:text-lg">
              "Human Activity Impacted Space Weather" - NASA's Goddard Space Flight Center
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-4 md:p-6 rounded-2xl border-2 border-blue-500/50 backdrop-blur-sm">
            <h4 className="font-bold text-xl md:text-2xl mb-4 text-center text-purple-200 flex items-center justify-center">
              <Trophy className="w-5 md:w-6 h-5 md:h-6 mr-2" />
              Complete NASA Video Credits
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm">
              <div className="bg-cyan-900/40 p-4 rounded-xl border border-cyan-500/30 backdrop-blur-sm">
                <h5 className="font-bold text-cyan-300 mb-3">Production Team:</h5>
                <div className="space-y-2">
                  <p className="text-cyan-200"><strong>Producer:</strong> Genna Duberstein (USRA)</p>
                  <p className="text-cyan-200"><strong>Animator:</strong> Krystofer Kim (USRA)</p>
                  <p className="text-cyan-200"><strong>Graphic Designer:</strong> Mary P. Hrybyk-Keith (TRAX International)</p>
                  <p className="text-cyan-200"><strong>Narrator:</strong> Scott Wiessinger (USRA)</p>
                </div>
              </div>
              <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-500/30 backdrop-blur-sm">
                <h5 className="font-bold text-emerald-300 mb-3">Research Team:</h5>
                <div className="space-y-2">
                  <p className="text-emerald-200"><strong>Lead Scientist:</strong> Dr. Dan Baker (University of Colorado)</p>
                  <p className="text-emerald-200"><strong>Science Writer:</strong> Mara Johnson-Groh (Wyle Information Systems)</p>
                  <p className="text-emerald-200"><strong>Technical Support:</strong> Karen Fox (ADNET Systems, Inc.)</p>
                  <p className="text-emerald-200"><strong>Institution:</strong> NASA Goddard Space Flight Center</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://svs.gsfc.nasa.gov/12593/#section_credits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 md:px-8 py-4 rounded-full font-bold hover:from-red-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-red-400/50 text-sm md:text-base"
              >
                <PlayCircle className="w-5 md:w-6 h-5 md:h-6" />
                <span>Visit Official NASA Source</span>
                <div className="w-3 h-3 bg-cyan-300 rounded-full animate-ping"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="mt-12 bg-gradient-to-r from-slate-900/90 to-slate-800/90 text-white p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-slate-700/50">
          <div className="text-center mb-6">
            <div className="inline-block p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 shadow-lg">
              <BookOpen className="w-8 md:w-10 h-8 md:h-10" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Scientific Data Sources & References</h3>
            <p className="text-slate-300 text-base md:text-lg">
              All the amazing facts you learned come from real scientific research and documented events!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-4 md:p-6 rounded-2xl backdrop-blur-sm border border-blue-500/30">
              <h4 className="font-bold text-lg md:text-xl mb-3 flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                  🏛️
                </div>
                Primary Government Source
              </h4>
              <p className="text-blue-200 mb-4 leading-relaxed text-sm md:text-base">
                Space Weather Canada - Official government research division studying 
                solar-terrestrial physics and space weather effects on technology
              </p>
              <a 
                href="https://www.spaceweather.gc.ca/tech/index-en.php" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-yellow-500 text-slate-900 px-4 md:px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg text-xs md:text-sm"
              >
                <span>Visit Official Research Site</span>
                <div className="w-2 h-2 bg-slate-900 rounded-full animate-ping"></div>
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 p-4 md:p-6 rounded-2xl backdrop-blur-sm border border-emerald-500/30">
              <h4 className="font-bold text-lg md:text-xl mb-3 flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                  🔬
                </div>
                Real Scientific Research Areas
              </h4>
              <ul className="text-emerald-200 space-y-2 text-sm md:text-base">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Geomagnetic disturbances & technological impacts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Solar energetic particle effects on satellites</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Power grid vulnerability studies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>GPS signal propagation research</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 p-4 md:p-6 rounded-2xl border border-slate-600/50 backdrop-blur-sm">
            <div className="text-center">
              <h4 className="font-bold text-base md:text-lg mb-3">Educational Transformation Note</h4>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                This interactive learning platform transforms complex scientific research and documented 
                space weather events into engaging, age-appropriate content for young explorers. 
                All examples, statistics, and case studies are based on verified scientific data 
                and real-world technological impacts from space weather phenomena.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 md:gap-4">
                <div className="flex items-center space-x-2 bg-slate-700/50 px-3 md:px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-3 md:w-4 h-3 md:h-4 text-emerald-400" />
                  <span className="text-xs md:text-sm">Scientifically Accurate</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-700/50 px-3 md:px-4 py-2 rounded-full backdrop-blur-sm">
                  <Star className="w-3 md:w-4 h-3 md:h-4 text-yellow-400" />
                  <span className="text-xs md:text-sm">Kid-Friendly</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-700/50 px-3 md:px-4 py-2 rounded-full backdrop-blur-sm">
                  <Rocket className="w-3 md:w-4 h-3 md:h-4 text-blue-400" />
                  <span className="text-xs md:text-sm">Interactive Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
        }
        
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }
        
        .backdrop-blur-md {
          backdrop-filter: blur(12px);
        }
        
        .backdrop-blur-xl {
          backdrop-filter: blur(20px);
        }
      `}</style>
    </div>
  );
};

export default SpaceWeatherForKids; 






















//  'use client'

// import React, { useState, useEffect, useMemo } from 'react';

// import { 
//   Home, Zap, Satellite, Car, Radio, Shield, Sun, Earth, Star, Sparkles, 
//   Trophy, BookOpen, Brain, CheckCircle, XCircle, Lightbulb,
//   Rocket, Award, Target, PlayCircle
// } from 'lucide-react';

// const SpaceWeatherForKids = () => {
//   const [activeSection, setActiveSection] = useState('intro');
//   const [score, setScore] = useState(0);
//   const [completedSections, setCompletedSections] = useState(new Set());
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [quizAnswers, setQuizAnswers] = useState([]);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [showExplanation, setShowExplanation] = useState(false);
//   const darkMode = true; // Always use night mode
//   const [animateScore, setAnimateScore] = useState(false);

//   const handleSectionComplete = (sectionKey) => {
//     if (!completedSections.has(sectionKey)) {
//       setCompletedSections(prev => new Set([...prev, sectionKey]));
//       setScore(prev => prev + 10);
//       setAnimateScore(true);
//       setTimeout(() => setAnimateScore(false), 600);
//     }
//   };

//   const quizQuestions = [
//     {
//       question: "What happened in Quebec in 1989 due to space weather?",
//       options: ["It rained for 9 hours", "The power went out for 9 hours", "It snowed for 9 days", "Nothing happened"],
//       correct: 1,
//       explanation: "A massive space weather event caused a blackout that left 6 million people without power for 9 hours! This shows how powerful space weather can be."
//     },
//     {
//       question: "What are space weather particles like?",
//       options: ["Raindrops from space", "Sparks from a campfire", "Snow from the moon", "Wind from Earth"],
//       correct: 1,
//       explanation: "Space particles are like invisible sparks thrown out by our Sun's campfire! They travel incredibly fast through space."
//     },
//     {
//       question: "How can space weather affect GPS?",
//       options: ["It makes cars go faster", "It changes your location reading", "It breaks car windows", "It makes music louder"],
//       correct: 1,
//       explanation: "Space weather can slow down or speed up GPS signals, making your location appear wrong by several meters!"
//     },
//     {
//       question: "What protects pipelines from space weather damage?",
//       options: ["Magic shields", "Cathodic protection systems", "Plastic covers", "Underground burial"],
//       correct: 1,
//       explanation: "Engineers use cathodic protection systems - special electrical devices that act like invisible shields for metal pipes!"
//     },
//     {
//       question: "Which historical communication system caught fire from space weather?",
//       options: ["Cell phones", "Telegraph wires", "TV antennas", "Smoke signals"],
//       correct: 1,
//       explanation: "In 1852, telegraph paper actually caught fire from the electrical currents induced by space weather! It was so powerful that flames followed the pen."
//     }
//   ];

//   const handleQuizAnswer = (answerIndex) => {
//     setSelectedAnswer(answerIndex);
//     setShowExplanation(true);
    
//     const newAnswers = [...quizAnswers];
//     newAnswers[currentQuestion] = answerIndex;
//     setQuizAnswers(newAnswers);

//     if (answerIndex === quizQuestions[currentQuestion].correct) {
//       setScore(prev => prev + 20);
//       setAnimateScore(true);
//       setTimeout(() => setAnimateScore(false), 600);
//     }
//   };

//   const nextQuestion = () => {
//     setCurrentQuestion(prev => prev + 1);
//     setSelectedAnswer(null);
//     setShowExplanation(false);
//   };

//   const resetQuiz = () => {
//     setShowQuiz(false);
//     setCurrentQuestion(0);
//     setQuizAnswers([]);
//     setSelectedAnswer(null);
 
//   };



//   const [particles, setParticles] = useState([]);
// useEffect(() => {
//   setParticles(
//     Array.from({ length: 12 }, (_, i) => ({
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       delay: `${Math.random() * 2}s`,
//       duration: `${2 + Math.random() * 2}s`
//     }))
//   );
// }, []);


//   // Fixed: Generate particles once using useMemo to prevent re-renders
//   // const particles = useMemo(() => 
//   //   Array.from({ length: 12 }, (_, i) => ({
//   //     left: `${Math.random() * 100}%`,
//   //     top: `${Math.random() * 100}%`,
//   //     delay: `${Math.random() * 2}s`,
//   //     duration: `${2 + Math.random() * 2}s`
//   //   })), []
//   // );



//   const themeClasses = {
//     bg: darkMode ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900' : 'bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200',
//     cardBg: darkMode ? 'bg-gradient-to-br from-purple-800 to-blue-800' : 'bg-gradient-to-br from-cyan-50 via-blue-100 to-purple-100',
//     text: darkMode ? 'text-cyan-100' : 'text-indigo-900',
//     textSecondary: darkMode ? 'text-purple-300' : 'text-purple-700'
//   };

//   const sections = {
//     intro: {
//       title: "🌟 What is Space Weather?",
//       icon: <Sun className="w-8 h-8" />,
//       color: "from-yellow-400 to-orange-500",
//       content: (
//         <div className="space-y-6">
//           <div className="text-center">
//             <div className="inline-block p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4 animate-pulse">
//               <Sun className="w-12 h-12 text-white" />
//             </div>
//           </div>
//           <p className="text-xl leading-relaxed">
//             Hey young explorers! Did you know that space has weather just like Earth? 
//             But instead of rain and snow, space weather involves invisible particles 
//             from the Sun zooming through space at incredible speeds!
//           </p>
//           <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500 transform hover:scale-105 transition-all duration-300">
//             <p className="font-semibold text-orange-800">
//               🌞 The Sun is like a giant campfire that sometimes throws sparks! 
//               These "sparks" are actually tiny particles that travel super fast through space - 
//               some moving at over 1 million miles per hour!
//             </p>
//           </div>
//           <p className="text-lg">
//             When these particles reach Earth, they can affect our technology in amazing ways. 
//             Let's explore how space weather impacts the gadgets and systems we use every day!
//           </p>
//           <div className="bg-gradient-to-r from-cyan-100 to-teal-100 p-4 rounded-lg border border-teal-300">
//             <p className="text-sm text-teal-800">
//               📊 <strong>Data Source:</strong> This information comes from Space Weather Canada's 
//               research on how solar particles interact with Earth's magnetic field and atmosphere.
//             </p>
//           </div>
//         </div>
//       )
//     },
//     power: {
//       title: "⚡ Power Systems",
//       icon: <Zap className="w-8 h-8" />,
//       color: "from-blue-500 to-purple-600",
//       content: (
//         <div className="space-y-6">
//           <div className="text-center">
//             <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 animate-bounce">
//               <Zap className="w-12 h-12 text-white" />
//             </div>
//           </div>
//           <p className="text-xl leading-relaxed">
//             Imagine if space weather could turn off all the lights in your city! 
//             That's exactly what happened in Quebec, Canada in 1989 when 6 million people 
//             lost power for 9 hours!
//           </p>
//           <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
//             <h4 className="font-bold text-blue-800 mb-3 text-lg">How does this happen?</h4>
//             <div className="space-y-3">
//               <div className={`flex items-center space-x-3 p-2 ${darkMode ? 'bg-black' : 'bg-gradient-to-r from-cyan-100 to-blue-200'} rounded-lg`}>
//                 <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
//                 <span>Space particles create invisible electric currents in power lines</span>
//               </div>
//               <div className={`flex items-center space-x-3 p-2 ${darkMode ? 'bg-black' : 'bg-gradient-to-r from-purple-100 to-pink-200'} rounded-lg`}>
//                 <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
//                 <span>These currents overheat transformers (giant electrical boxes)</span>
//               </div>
//               <div className={`flex items-center space-x-3 p-2 ${darkMode ? 'bg-black' : 'bg-gradient-to-r from-red-100 to-orange-200'} rounded-lg`}>
//                 <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
//                 <span>When transformers break, whole cities lose power!</span>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl border-l-4 border-green-500 transform hover:scale-105 transition-all duration-300">
//             <p className="text-green-800 text-lg">
//               💡 <strong>Amazing Fact:</strong> One transformer at a nuclear plant cost 
//               $17 million to replace - more than buying a mansion! 
//               And it took a whole year to build a new one.
//             </p>
//           </div>
//         </div>
//       )
//     },
//     satellites: {
//       title: "🛰️ Satellites - Space Robots",
//       icon: <Satellite className="w-8 h-8" />,
//       color: "from-purple-500 to-pink-500",
//       content: (
//         <div className="space-y-6">
//           <div className="text-center">
//             <div className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 animate-spin-slow">
//               <Satellite className="w-12 h-12 text-white" />
//             </div>
//           </div>
//           <p className="text-xl leading-relaxed">
//             Satellites are like super-smart robots floating in space that help us with 
//             TV shows, internet, weather forecasts, and GPS directions!
//           </p>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//               <h4 className="font-bold text-purple-800 mb-4 text-lg flex items-center">
//                 <XCircle className="w-5 h-5 mr-2" />
//                 What can go wrong?
//               </h4>
//               <div className="space-y-3">
//                 <div className={`${darkMode ? 'bg-black' : 'bg-gradient-to-r from-emerald-100 to-teal-200'} p-3 rounded-lg flex items-center space-x-3`}>
//                   <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                   <span>Satellites get "confused" and follow wrong commands</span>
//                 </div>
//                 <div className={`${darkMode ? 'bg-black' : 'bg-gradient-to-r from-orange-100 to-yellow-200'} p-3 rounded-lg flex items-center space-x-3`}>
//                   <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
//                   <span>Their electronic brains get "zapped"</span>
//                 </div>
//                 <div className={`${darkMode ? 'bg-black' : 'bg-gradient-to-r from-purple-100 to-indigo-200'} p-3 rounded-lg flex items-center space-x-3`}>
//                   <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
//                   <span>Sometimes they stop working completely!</span>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//               <h4 className="font-bold text-orange-800 mb-4 text-lg flex items-center">
//                 <Lightbulb className="w-5 h-5 mr-2" />
//                 Why does this happen?
//               </h4>
//               <p className="text-orange-700 leading-relaxed">
//                 High-energy space particles are like tiny invisible bullets that can 
//                 damage satellite computers, just like how water damages your phone! 
//                 In 1994, multiple satellites malfunctioned on the same days due to 
//                 space weather storms.
//               </p>
//             </div>
//           </div>
//         </div>
//       )
//     },
//     gps: {
//       title: "🗺️ GPS Navigation",
//       icon: <Car className="w-8 h-8" />,
//       color: "from-green-400 to-blue-500",
//       content: (
//         <div className="space-y-6">
//           <div className="text-center">
//             <div className="inline-block p-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4 animate-pulse">
//               <Car className="w-12 h-12 text-white" />
//             </div>
//           </div>
//           <p className="text-xl leading-relaxed">
//             GPS is like having a super-smart friend in space who always knows where you are! 
//             But space weather can make this friend give wrong directions.
//           </p>
//           <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
//             <h4 className="font-bold text-blue-800 mb-4 text-lg">How GPS Usually Works:</h4>
//             <div className="space-y-3">
//               {[
//                 "Satellites send invisible signals to Earth",
//                 "Your GPS device catches these signals",
//                 "It calculates where you are by timing the signals"
//               ].map((step, index) => (
//                 <div key={index} className="flex items-center space-x-4 p-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg transform hover:scale-105 transition-all duration-200">
//                   <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center text-purple-100 font-bold">
//                     {index + 1}
//                   </div>
//                   <span className="text-blue-800">{step}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="bg-gradient-to-r from-yellow-100 to-red-100 p-6 rounded-xl border-l-4 border-yellow-500 transform hover:scale-105 transition-all duration-300">
//             <p className="text-yellow-800 text-lg">
//               ⚠️ <strong>Space Weather Problem:</strong> When space particles mess with 
//               the air high above Earth, GPS signals get confused and can show you're 
//               in the wrong place - sometimes by several city blocks!
//             </p>
//           </div>
//         </div>
//       )
//     },
//     pipelines: {
//       title: "🚰 Underground Pipelines",
//       icon: <Shield className="w-8 h-8" />,
//       color: "from-teal-400 to-cyan-500",
//       content: (
//         <div className="space-y-6">
//           <div className="text-center">
//             <div className="inline-block p-4 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mb-4 animate-bounce">
//               <Shield className="w-12 h-12 text-white" />
//             </div>
//           </div>
//           <p className="text-xl leading-relaxed">
//             Deep underground, there are massive metal pipes that carry oil and gas 
//             across entire countries - like giant straws that stretch for hundreds of miles!
//           </p>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-gradient-to-br from-red-100 to-orange-100 p-6 rounded-xl hover:shadow-xl transition-all duration-300">
//               <h4 className="font-bold text-red-800 mb-4 text-lg flex items-center">
//                 <XCircle className="w-5 h-5 mr-2" />
//                 The Problem
//               </h4>
//               <p className="text-red-700 leading-relaxed">
//                 Space weather creates electric currents in these long metal pipes. 
//                 These currents make the pipes rust faster, like when you leave 
//                 a battery in a toy for too long and it gets all corroded and yucky!
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-green-100 to-teal-100 p-6 rounded-xl hover:shadow-xl transition-all duration-300">
//               <h4 className="font-bold text-green-800 mb-4 text-lg flex items-center">
//                 <CheckCircle className="w-5 h-5 mr-2" />
//                 The Solution
//               </h4>
//               <p className="text-green-700 leading-relaxed">
//                 Smart engineers use cathodic protection systems - special electrical 
//                 devices that create an invisible electric shield around the pipes 
//                 to keep them safe from space weather damage!
//               </p>
//             </div>
//           </div>
//         </div>
//       )
//     },
//     radio: {
//       title: "📻 Communications",
//       icon: <Radio className="w-8 h-8" />,
//       color: "from-indigo-500 to-purple-600",
//       content: (
//         <div className="space-y-6">
//           <div className="text-center">
//             <div className="inline-block p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4 animate-pulse">
//               <Radio className="w-12 h-12 text-white" />
//             </div>
//           </div>
//           <p className="text-xl leading-relaxed">
//             Long ago, people used telegraph wires to send messages across the world. 
//             Sometimes space weather made these wires so energetic that they caught fire!
//           </p>
//           <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
//             <h4 className="font-bold text-purple-800 mb-4 text-lg">🔥 Amazing Historical Facts:</h4>
//             <div className="space-y-4">
//               {[
//                 { year: "1852", fact: "Telegraph paper caught fire from space electricity!" },
//                 { year: "1940s", fact: "Operators sent messages using only 'space power'" },
//                 { year: "Today", fact: "Internet cables still need protection from space weather" }
//               ].map((item, index) => (
//                 <div key={index} className={`${darkMode ? 'bg-white' : 'bg-gradient-to-r from-blue-200 to-purple-200'} p-4 rounded-lg flex items-center space-x-4 transform hover:scale-105 transition-all duration-200`}>
//                   <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
//                     {item.year}
//                   </div>
//                   <span className="text-gray-700">{item.fact}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )
//     }
//   };

//   // Fixed: Calculate dynamic max points and total sections
//   const totalSections = Object.keys(sections).length;
//   const maxPoints = totalSections * 10 + quizQuestions.length * 20;

//   return (
//     <div className={`min-h-screen transition-all duration-500 ${themeClasses.bg}`}>
//       {/* Fixed: Floating Particles Background with useMemo */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {particles.map((particle, i) => (
//           <div
//             key={i}
//             className={`absolute w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-gradient-to-r from-purple-400 to-pink-400'} rounded-full opacity-30 animate-bounce`}
//             style={{
//               left: particle.left,
//               top: particle.top,
//               animationDelay: particle.delay,
//               animationDuration: particle.duration
//             }}
//           />
//         ))}
//       </div>

//       {/* Header */}
//       <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-4 md:p-6 relative overflow-hidden">
//         <div className="max-w-6xl mx-auto relative z-10">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="flex items-center space-x-4">
//               <button 
//                 onClick={() => window.history.back()}
//                 className="group flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-red-500 px-4 md:px-6 py-3 rounded-full hover:from-orange-500 hover:to-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-lg border-2 border-white"
//               >
//                 <Home className="w-5 md:w-6 h-5 md:h-6 text-white group-hover:scale-110 transition-transform duration-200" />
//                 <span className="font-semibold text-white">Home</span>
//               </button>
//             </div>
//             <div className="text-center">
//               <h1 className="text-2xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
//                 Space Weather for Young Explorers! 🚀
//               </h1>
//               <p className="text-blue-100 text-sm md:text-lg">Discover how space affects our everyday technology</p>
//             </div>
//           </div>
//         </div>
//         {/* Animated background elements */}
//         <div className="absolute top-0 left-0 w-full h-full opacity-10">
//           <div className="absolute top-4 left-1/4 w-8 h-8 bg-white rounded-full animate-ping"></div>
//           <div className="absolute bottom-4 right-1/3 w-6 h-6 bg-yellow-300 rounded-full animate-bounce"></div>
//           <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-pink-300 rounded-full animate-pulse"></div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto p-4 md:p-6 relative z-10">
//         {/* Fixed: Score Display with dynamic calculations */}
//         <div className="mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 md:p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="flex items-center space-x-4">
//               <div className={`p-3 bg-white bg-opacity-20 rounded-full ${animateScore ? 'animate-spin' : ''} transition-all duration-600`}>
//                 <Star className="w-6 md:w-8 h-6 md:h-8" />
//               </div>
//               <div>
//                 <span className={`text-xl md:text-2xl font-bold ${animateScore ? 'animate-pulse' : ''}`}>
//                   Space Explorer Score: {score} points
//                 </span>
//                 <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mt-2">
//                   <div 
//                     className="bg-yellow-400 h-2 rounded-full transition-all duration-500 ease-out"
//                     style={{ width: `${Math.min((score / maxPoints) * 100, 100)}%` }}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-2">
//                 <Sparkles className="w-6 h-6 animate-spin" />
//                 <span className="text-lg md:text-xl font-semibold">{completedSections.size}/{totalSections} sections</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Fixed: Use dynamic section count */}
//           {completedSections.size === totalSections && (
//             <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-xl animate-bounce">
//               <p className="text-center text-lg md:text-xl mb-3">🏆 Congratulations! You're now a Space Weather Expert!</p>
//               <div className="flex justify-center space-x-4">
//                 <button 
//                   onClick={() => setShowQuiz(true)}
//                   className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 md:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-bold text-sm md:text-lg hover:scale-105 flex items-center space-x-2"
//                 >
//                   <Brain className="w-5 md:w-6 h-5 md:h-6" />
//                   <span>Take Expert Quiz!</span>
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
//           {Object.entries(sections).map(([key, section]) => (
//             <button
//               key={key}
//               onClick={() => setActiveSection(key)}
//               className={`group p-4 md:p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
//                 activeSection === key
//                   ? `border-transparent bg-gradient-to-r ${section.color} text-white shadow-2xl scale-105`
//                   : `border-gray-200 ${themeClasses.cardBg} hover:border-purple-300 hover:shadow-lg`
//               }`}
//             >
//               <div className="flex flex-col items-center space-y-3">
//                 <div className="relative">
//                   <div className={`p-3 rounded-full transition-all duration-300 ${
//                     activeSection === key 
//                       ? 'bg-white bg-opacity-20' 
//                       : 'bg-gradient-to-r from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200'
//                   }`}>
//                     {section.icon}
//                   </div>
//                   {completedSections.has(key) && (
//                     <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
//                       <CheckCircle className="w-4 h-4 text-white" />
//                     </div>
//                   )}
//                 </div>
//                 <span className={`text-xs md:text-sm font-bold text-center ${activeSection === key ? 'text-white' : themeClasses.text}`}>
//                   {section.title}
//                 </span>
//               </div>
//             </button>
//           ))}
//         </div>

//         {/* Fixed: Quiz Modal - removed duplicate code */}
//         {showQuiz && (
//           <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 bg-opacity-90 flex items-center justify-center z-50 backdrop-blur-sm p-4">
//             <div className={`bg-gradient-to-br from-cyan-100 to-purple-200 rounded-3xl p-6 md:p-8 max-w-2xl mx-4 shadow-3xl border-4 border-purple-400 relative overflow-hidden max-h-[90vh] overflow-y-auto`}>
//               {/* Background decoration */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-300 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              
//               <div className="relative z-10">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className={`text-2xl md:text-3xl font-bold text-purple-900 flex items-center space-x-3`}>
//                     <Brain className="w-6 md:w-8 h-6 md:h-8 text-purple-600" />
//                     <span>Space Weather Quiz!</span>
//                   </h3>
//                   <div className="text-xs md:text-sm bg-gradient-to-r from-orange-400 to-red-500 text-purple-100 px-3 md:px-4 py-2 rounded-full font-bold">
//                     Question {currentQuestion + 1} of {quizQuestions.length}
//                   </div>
//                 </div>

//                 {currentQuestion < quizQuestions.length ? (
//                   <div className="space-y-6">
//                     <div className="w-full bg-gradient-to-r from-purple-300 to-pink-300 rounded-full h-4 border-2 border-purple-500">
//                       <div 
//                         className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-500"
//                         style={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
//                       />
//                     </div>
                    
//                     <p className={`text-lg md:text-xl font-semibold text-purple-900 leading-relaxed`}>
//                       {quizQuestions[currentQuestion].question}
//                     </p>
                    
//                     <div className="space-y-3">
//                       {quizQuestions[currentQuestion].options.map((option, index) => {
//                         let buttonClass = "w-full text-left p-3 md:p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ";
                        
//                         if (selectedAnswer === null) {
//                           buttonClass += "border-purple-400 hover:border-orange-400 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-orange-100 hover:to-yellow-100 hover:shadow-lg text-blue-800";
//                         } else if (index === quizQuestions[currentQuestion].correct) {
//                           buttonClass += "border-green-500 bg-gradient-to-r from-green-200 to-emerald-200 text-green-800 shadow-lg";
//                         } else if (index === selectedAnswer && index !== quizQuestions[currentQuestion].correct) {
//                           buttonClass += "border-red-500 bg-gradient-to-r from-red-200 to-pink-200 text-red-800 shadow-lg";
//                         } else {
//                           buttonClass += "border-purple-300 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600";
//                         }

//                         return (
//                           <button
//                             key={index}
//                             onClick={() => selectedAnswer === null && handleQuizAnswer(index)}
//                             className={buttonClass}
//                             disabled={selectedAnswer !== null}
//                           >
//                             <div className="flex items-center space-x-3">
//                               <div className={`w-6 md:w-8 h-6 md:h-8 rounded-full flex items-center justify-center font-bold text-purple-100 text-sm md:text-base ${
//                                 selectedAnswer === null ? 'bg-purple-400' :
//                                 index === quizQuestions[currentQuestion].correct ? 'bg-green-500' :
//                                 index === selectedAnswer ? 'bg-red-500' : 'bg-purple-300'
//                               }`}>
//                                 {String.fromCharCode(65 + index)}
//                               </div>
//                               <span className="flex-1 text-sm md:text-base">{option}</span>
//                               {selectedAnswer !== null && index === quizQuestions[currentQuestion].correct && (
//                                 <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-green-500" />
//                               )}
//                               {selectedAnswer === index && index !== quizQuestions[currentQuestion].correct && (
//                                 <XCircle className="w-5 md:w-6 h-5 md:h-6 text-red-500" />
//                               )}
//                             </div>
//                           </button>
//                         );
//                       })}
//                     </div>

//                     {showExplanation && (
//                       <div className="bg-gradient-to-r from-cyan-200 to-blue-200 p-4 md:p-6 rounded-xl border-l-4 border-blue-500 animate-fadeIn">
//                         <h4 className="font-bold text-blue-800 mb-2 flex items-center text-sm md:text-base">
//                           <Lightbulb className="w-4 md:w-5 h-4 md:h-5 mr-2" />
//                           Explanation:
//                         </h4>
//                         <p className="text-blue-700 leading-relaxed text-sm md:text-base">
//                           {quizQuestions[currentQuestion].explanation}
//                         </p>
//                         <div className="mt-4 flex justify-center">
//                           <button
//                             onClick={nextQuestion}
//                             className="bg-gradient-to-r from-purple-500 to-pink-500 text-cyan-100 px-4 md:px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-bold flex items-center space-x-2 hover:scale-105 border-2 border-purple-300 text-sm md:text-base"
//                           >
//                             <span>Next Question</span>
//                             <PlayCircle className="w-4 md:w-5 h-4 md:h-5" />
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <div className="text-center space-y-6">
//                     <div className="inline-block p-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
//                       <Trophy className="w-12 md:w-16 h-12 md:h-16 text-purple-100 animate-bounce" />
//                     </div>
//                     <h4 className={`text-2xl md:text-3xl font-bold text-purple-900`}>Quiz Complete! 🎉</h4>
//                     <div className="bg-gradient-to-r from-green-200 to-blue-200 p-4 md:p-6 rounded-xl border-2 border-green-400">
//                       <p className="text-xl md:text-2xl mb-4 text-green-800">
//                         You scored {quizAnswers.reduce((score, answer, index) => 
//                           answer === quizQuestions[index].correct ? score + 1 : score, 0
//                         )} out of {quizQuestions.length} questions correct!
//                       </p>
//                       <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
//                         <button
//                           onClick={resetQuiz}
//                           className="bg-gradient-to-r from-blue-500 to-purple-500 text-cyan-100 px-6 md:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-bold hover:scale-105 flex items-center justify-center space-x-2 border-2 border-blue-400 text-sm md:text-base"
//                         >
//                           <Rocket className="w-4 md:w-5 h-4 md:h-5" />
//                           <span>Try Again</span>
//                         </button>
//                         <button
//                           onClick={() => setShowQuiz(false)}
//                           className="bg-gradient-to-r from-orange-500 to-red-500 text-cyan-100 px-6 md:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-bold hover:scale-105 border-2 border-orange-400 text-sm md:text-base"
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Main Content */}
//         <div className={`${themeClasses.cardBg} rounded-3xl shadow-2xl p-6 md:p-8 border-2 border-purple-300 hover:shadow-3xl transition-all duration-300 relative overflow-hidden`}>
//           {/* Background decoration */}
//           <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${sections[activeSection].color} opacity-10 rounded-full -translate-y-20 translate-x-20`}></div>
          
//           <div className="relative z-10">
//             <div className="flex items-center space-x-4 mb-8">
//               <div className={`p-4 bg-gradient-to-r ${sections[activeSection].color} rounded-2xl shadow-lg`}>
//                 {sections[activeSection].icon}
//               </div>
//               <h2 className={`text-2xl md:text-3xl font-bold ${themeClasses.text}`}>
//                 {sections[activeSection].title}
//               </h2>
//             </div>
            
//             <div className={themeClasses.text}>
//               {sections[activeSection].content}
//             </div>

//             <div className="mt-8 flex justify-center">
//               <button 
//                 onClick={() => handleSectionComplete(activeSection)}
//                 disabled={completedSections.has(activeSection)}
//                 className={`px-6 md:px-8 py-4 rounded-full font-bold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 border-2 ${
//                   completedSections.has(activeSection)
//                     ? 'bg-green-500 text-cyan-100 cursor-not-allowed border-green-300'
//                     : `bg-gradient-to-r ${sections[activeSection].color} text-cyan-100 hover:shadow-lg border-purple-300`
//                 }`}
//               >
//                 {completedSections.has(activeSection) ? (
//                   <>
//                     <CheckCircle className="w-5 md:w-6 h-5 md:h-6" />
//                     <span>Completed!</span>
//                   </>
//                 ) : (
//                   <>
//                     <Target className="w-5 md:w-6 h-5 md:h-6" />
//                     <span>Mark Complete</span>
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Interactive Fun Facts */}
//         <div className="mt-8 grid md:grid-cols-2 gap-6">
//           <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-yellow-200">
//             <div className="flex items-center space-x-3 mb-4">
//               <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
//                 <Star className="w-5 md:w-6 h-5 md:h-6 text-white animate-spin-slow" />
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold text-orange-800">Did You Know?</h3>
//             </div>
//             <p className="text-orange-700 leading-relaxed text-base md:text-lg">
//               Astronauts in space can see beautiful auroras (Northern Lights) from above! 
//               These colorful dancing lights happen when space particles hit Earth's atmosphere 
//               and make it glow like a giant cosmic disco ball! 🌈✨
//             </p>
//           </div>
          
//           <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-200">
//             <div className="flex items-center space-x-3 mb-4">
//               <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
//                 <BookOpen className="w-5 md:w-6 h-5 md:h-6 text-white animate-pulse" />
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold text-blue-800">Space Weather Scientists</h3>
//             </div>
//             <p className="text-blue-700 leading-relaxed text-base md:text-lg">
//               Scientists use super cool satellites and special instruments to watch space weather 
//               24/7! They're like weather forecasters for space, helping protect our technology 
//               by warning us when space storms are heading our way! 🛰️🔬
//             </p>
//           </div>
//         </div>

//         {/* Additional Quiz Sections */}
//         {/* <div className="mt-12 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white p-6 md:p-8 rounded-3xl shadow-2xl">
//           <div className="text-center mb-6">
//             <div className="inline-block p-4 bg-white bg-opacity-20 rounded-full mb-4">
//               <Award className="w-10 md:w-12 h-10 md:h-12 animate-bounce" />
//             </div>
//             <h3 className="text-2xl md:text-3xl font-bold mb-4">🎯 Quick Knowledge Challenges</h3>
//             <p className="text-base md:text-lg text-purple-100 mb-6">
//               Test what you've learned with these mini-quizzes for each section!
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-4">
//             {Object.entries(sections).map(([key, section]) => (
//               <div key={key} className="bg-white bg-opacity-10 p-4 md:p-6 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
//                 <div className="text-center">
//                   <div className="p-3 bg-white bg-opacity-20 rounded-full inline-block mb-3">
//                     {section.icon}
//                   </div>
//                   <h4 className={`font-bold text-base md:text-lg mb-3 bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
//                     {section.title}
//                   </h4>
//                   <button 
//                     onClick={() => setShowQuiz(true)}
//                     className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors font-semibold text-xs md:text-sm hover:scale-105 transform duration-200"
//                   >
//                     Quick Quiz
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}

//         {/* NASA Video Section */}
//         <div className="mt-12 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white p-6 md:p-8 rounded-3xl shadow-2xl border-4 border-red-500">
//           <div className="text-center mb-6">
//             <div className="inline-block p-4 bg-white bg-opacity-20 rounded-full mb-4">
//               <PlayCircle className="w-10 md:w-12 h-10 md:h-12 animate-pulse" />
//             </div>
//             <h3 className="text-2xl md:text-3xl font-bold mb-2">🚀 NASA Space Weather Video</h3>
//             <p className="text-red-100 text-base md:text-lg">
//               Watch this amazing NASA video about "Human Activity Impacted Space Weather"
//             </p>
//           </div>

//           <div className="bg-gradient-to-r from-emerald-200 to-cyan-200 p-4 md:p-6 rounded-2xl mb-6 border-2 border-emerald-400">
//             <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center mb-4 border-4 border-cyan-400">
//               <video 
//                 controls 
//                 className="w-full h-full rounded-xl"
//                 poster="/api/placeholder/800/450"
//               >
//                 <source src="/video-01.m4v" type="video/mp4" />
//                 <p className="text-cyan-200">Your browser doesn't support video playback.</p>
//               </video>
//             </div>
//             <p className="text-emerald-800 text-center italic font-semibold text-base md:text-lg">
//               🎬 "Human Activity Impacted Space Weather" - NASA's Goddard Space Flight Center
//             </p>
//           </div>

//           <div className="bg-gradient-to-br from-blue-200 to-purple-200 p-4 md:p-6 rounded-2xl border-2 border-blue-400">
//             <h4 className="font-bold text-xl md:text-2xl mb-4 text-center text-purple-800 flex items-center justify-center">
//               <Trophy className="w-5 md:w-6 h-5 md:h-6 mr-2" />
//               🏛️ Complete NASA Video Credits
//             </h4>
//             <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm">
//               <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-4 rounded-xl border border-cyan-300">
//                 <h5 className="font-bold text-blue-800 mb-3">🎥 Production Team:</h5>
//                 <div className="space-y-2">
//                   <p className="text-blue-700"><strong>Producer:</strong> Genna Duberstein (USRA)</p>
//                   <p className="text-blue-700"><strong>Animator:</strong> Krystofer Kim (USRA)</p>
//                   <p className="text-blue-700"><strong>Graphic Designer:</strong> Mary P. Hrybyk-Keith (TRAX International)</p>
//                   <p className="text-blue-700"><strong>Narrator:</strong> Scott Wiessinger (USRA)</p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-br from-green-100 to-teal-100 p-4 rounded-xl border border-green-300">
//                 <h5 className="font-bold text-teal-800 mb-3">🔬 Research Team:</h5>
//                 <div className="space-y-2">
//                   <p className="text-teal-700"><strong>Lead Scientist:</strong> Dr. Dan Baker (University of Colorado)</p>
//                   <p className="text-teal-700"><strong>Science Writer:</strong> Mara Johnson-Groh (Wyle Information Systems)</p>
//                   <p className="text-teal-700"><strong>Technical Support:</strong> Karen Fox (ADNET Systems, Inc.)</p>
//                   <p className="text-teal-700"><strong>Institution:</strong> NASA Goddard Space Flight Center</p>
//                 </div>
//               </div>
//             </div>
//             <div className="text-center mt-6">
//               <a 
//                 href="https://svs.gsfc.nasa.gov/12593/#section_credits" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-pink-500 text-cyan-100 px-6 md:px-8 py-4 rounded-full font-bold hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-red-300 text-sm md:text-base"
//               >
//                 <PlayCircle className="w-5 md:w-6 h-5 md:h-6" />
//                 <span>Visit Official NASA Source</span>
//                 <div className="w-3 h-3 bg-cyan-300 rounded-full animate-ping"></div>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Footer with Separate Data Sources */}
//         <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-2xl">
//           <div className="text-center mb-6">
//             <div className="inline-block p-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4">
//               <BookOpen className="w-8 md:w-10 h-8 md:h-10" />
//             </div>
//             <h3 className="text-2xl md:text-3xl font-bold mb-2">📚 Scientific Data Sources & References</h3>
//             <p className="text-slate-300 text-base md:text-lg">
//               All the amazing facts you learned come from real scientific research and documented events!
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-6 mb-6">
//             <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 md:p-6 rounded-2xl">
//               <h4 className="font-bold text-lg md:text-xl mb-3 flex items-center">
//                 <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
//                   🏛️
//                 </div>
//                 Primary Government Source
//               </h4>
//               <p className="text-blue-100 mb-4 leading-relaxed text-sm md:text-base">
//                 Space Weather Canada - Official government research division studying 
//                 solar-terrestrial physics and space weather effects on technology
//               </p>
//               <a 
//                 href="https://www.spaceweather.gc.ca/tech/index-en.php" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center space-x-2 bg-yellow-400 text-slate-800 px-4 md:px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg text-xs md:text-sm"
//               >
//                 <span>Visit Official Research Site</span>
//                 <div className="w-2 h-2 bg-slate-800 rounded-full animate-ping"></div>
//               </a>
//             </div>
            
//             <div className="bg-gradient-to-br from-green-600 to-teal-600 p-4 md:p-6 rounded-2xl">
//               <h4 className="font-bold text-lg md:text-xl mb-3 flex items-center">
//                 <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
//                   🔬
//                 </div>
//                 Real Scientific Research Areas
//               </h4>
//               <ul className="text-green-100 space-y-2 text-sm md:text-base">
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-green-300 rounded-full"></div>
//                   <span>Geomagnetic disturbances & technological impacts</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-green-300 rounded-full"></div>
//                   <span>Solar energetic particle effects on satellites</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-green-300 rounded-full"></div>
//                   <span>Power grid vulnerability studies</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-green-300 rounded-full"></div>
//                   <span>GPS signal propagation research</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-4 md:p-6 rounded-2xl border border-slate-600">
//             <div className="text-center">
//               <h4 className="font-bold text-base md:text-lg mb-3">🎓 Educational Transformation Note</h4>
//               <p className="text-slate-300 leading-relaxed text-sm md:text-base">
//                 This interactive learning platform transforms complex scientific research and documented 
//                 space weather events into engaging, age-appropriate content for young explorers. 
//                 All examples, statistics, and case studies are based on verified scientific data 
//                 and real-world technological impacts from space weather phenomena.
//               </p>
//               <div className="mt-4 flex flex-wrap justify-center gap-2 md:gap-4">
//                 <div className="flex items-center space-x-2 bg-slate-600 px-3 md:px-4 py-2 rounded-full">
//                   <CheckCircle className="w-3 md:w-4 h-3 md:h-4 text-green-400" />
//                   <span className="text-xs md:text-sm">Scientifically Accurate</span>
//                 </div>
//                 <div className="flex items-center space-x-2 bg-slate-600 px-3 md:px-4 py-2 rounded-full">
//                   <Star className="w-3 md:w-4 h-3 md:h-4 text-yellow-400" />
//                   <span className="text-xs md:text-sm">Kid-Friendly</span>
//                 </div>
//                 <div className="flex items-center space-x-2 bg-slate-600 px-3 md:px-4 py-2 rounded-full">
//                   <Rocket className="w-3 md:w-4 h-3 md:h-4 text-blue-400" />
//                   <span className="text-xs md:text-sm">Interactive Learning</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 3s linear infinite;
//         }
        
//         .shadow-3xl {
//           box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
//         }
        
//         .backdrop-blur-sm {
//           backdrop-filter: blur(4px);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SpaceWeatherForKids;




 
 


 'use client';

 
import React, { useState, useEffect, useMemo } from 'react';
import { Home, Globe, Sparkles, Atom, Wind, Zap, ArrowLeft, Languages } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AuroraPage = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();


  const particles = useMemo(() => 
    [...Array(100)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2
    })), 
  []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const content = {
    english: {
      title: "Aurora Borealis",
      subtitle: "The Cosmic Dance of Light",
      description: "High above our planet, near the silent poles, a cosmic dance unfolds — **auroras**, the Earth's very own light symphony. Scientifically, they are born when charged particles from the **Sun's solar wind** race across space and collide with **Earth's magnetic field**. Guided by invisible magnetic lines, these particles dive into the upper atmosphere, striking oxygen and nitrogen molecules. The collision excites these atoms, and when they calm, they release glowing curtains of light — green, pink, violet, and red — that ripple across the polar skies.",
      poetic: "But beyond science, auroras are **poetry written by the universe**. They swirl like celestial rivers, painting darkness with hope and wonder. For humans who watch them from icy lands of the **Arctic or Antarctic**, the sight is humbling — a reminder of our bond with the cosmos. Under their shimmering glow, time slows, hearts soften, and we feel the pulse of a living universe embracing us in light.",
      scienceTitle: "The Science Behind Aurora",
      sciencePoints: [
        "Solar wind particles travel from the Sun at incredible speeds",
        "Earth's magnetic field deflects most particles but channels some toward the poles",
        "Particles collide with oxygen and nitrogen in the upper atmosphere",
        "Energy from collisions causes atoms to emit light of different colors",
        "Green (oxygen at 100-300 km), Pink/Red (oxygen at higher altitudes), Blue/Purple (nitrogen)"
      ],
      formationTitle: "How Auroras Form",
      appearanceTitle: "Aurora Appearance",
      appearance: "Auroras appear as dancing curtains, arcs, or spirals of light that can stretch for hundreds of kilometers across the sky. They move and pulse with ethereal grace, creating one of nature's most spectacular light shows."
    },
    bengali: {
      title: "অরোরা বোরিয়ালিস",
      subtitle: "মহাজাগতিক আলোর নৃত্য",
      description: "পৃথিবীর নীরব মেরু আকাশে ঘটে এক অলৌকিক নৃত্য — **অরোরা**, মহাবিশ্বের নিজস্ব আলোর সিম্ফনি। বৈজ্ঞানিকভাবে, সূর্যের **সৌর বাতাসের চার্জযুক্ত কণাগুলি** পৃথিবীর **চৌম্বক ক্ষেত্রের সাথে সংঘর্ষে** লিপ্ত হয়। এই অদৃশ্য চৌম্বক রেখা ধরে কণাগুলি উঁচু বায়ুমণ্ডলে প্রবেশ করে, অক্সিজেন ও নাইট্রোজেন অণুর সঙ্গে সংঘর্ষ ঘটায়। উত্তেজিত হয়ে তারা আলো নির্গত করে — সবুজ, গোলাপি, বেগুনি ও লাল রঙের পর্দা আকাশ জুড়ে নৃত্য করে।",
      poetic: "কিন্তু বিজ্ঞান ছাড়িয়ে, অরোরা হলো **মহাবিশ্বের লেখা এক কবিতা**। তারা আকাশে তরঙ্গ তোলে, আঁকে আশার রঙ। **আর্কটিক বা অ্যান্টার্কটিকার** বরফঢাকা ভূমি থেকে যারা দেখে, তাদের হৃদয়ে জাগে বিনয় ও বিস্ময়। সেই আলোর কোমল ছোঁয়ায় সময় থেমে যায়, মন প্রশান্ত হয়, আর আমরা বুঝতে পারি — মহাবিশ্ব আমাদের আলোর আলিঙ্গনে ধারণ করেছে।",
      scienceTitle: "অরোরার পেছনের বিজ্ঞান",
      sciencePoints: [
        "সূর্য থেকে সৌর বাতাসের কণা অবিশ্বাস্য গতিতে ছুটে আসে",
        "পৃথিবীর চৌম্বক ক্ষেত্র বেশিরভাগ কণাকে বিচ্যুত করে কিছু মেরুর দিকে পাঠায়",
        "উঁচু বায়ুমণ্ডলে কণাগুলি অক্সিজেন ও নাইট্রোজেনের সাথে সংঘর্ষ করে",
        "সংঘর্ষের শক্তি পরমাণুকে বিভিন্ন রঙের আলো নির্গত করায়",
        "সবুজ (১০০-৩০০ কিমি অক্সিজেন), গোলাপি/লাল (উঁচু অক্সিজেন), নীল/বেগুনি (নাইট্রোজেন)"
      ],
      formationTitle: "অরোরা কিভাবে সৃষ্টি হয়",
      appearanceTitle: "অরোরার চেহারা",
      appearance: "অরোরা আকাশে নাচানো পর্দা, চাপ বা সর্পিল আলোর রূপ নেয় যা আকাশ জুড়ে শত শত কিলোমিটার বিস্তৃত হতে পারে। তারা অলৌকিক গ্রেসের সাথে নড়ে ও স্পন্দিত হয়, প্রকৃতির অন্যতম দর্শনীয় আলোর প্রদর্শনী সৃষ্টি করে।"
    }
  };

  const currentContent = isEnglish ? content.english : content.bengali;

  const renderDescription = (text) => {
    return text.split('**').map((part, index) => 
      index % 2 === 0 ? part : <strong key={index} className="text-cyan-300 font-bold">{part}</strong>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-black text-white">
      {/* Animated Background Stars */}
      {/* <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-1 h-1 text-blue-300" />
          </div>
        ))}
      </div> */}



      {/* Animated Background Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          >
            <Sparkles className="w-1 h-1 text-blue-300" />
          </div>
        ))}
      </div>

      {/* Header with Home Button */}
      <header className="relative z-10 p-6 flex items-center justify-between">
        <button 
          onClick={() => router.push('/')}
          className="group flex items-center space-x-3 px-6 py-3 bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />
          <Home className="w-5 h-5 text-cyan-400 group-hover:animate-bounce" />
          <span className="font-semibold text-cyan-300 group-hover:text-white">
            {isEnglish ? 'Home' : 'হোম'}
          </span>
        </button>

        {/* Language Toggle */}
        <button
          onClick={() => setIsEnglish(!isEnglish)}
          className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <Languages className="w-5 h-5 group-hover:animate-spin" />
          <span className="font-bold">
            {isEnglish ? 'বাংলা' : 'English'}
          </span>
        </button>
      </header>

      {/* Main Content */}
      <main className={`relative z-10 max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-green-300 to-purple-300 bg-clip-text text-transparent animate-pulse">
            {currentContent.title}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Aurora Image */}
        <div className="relative mb-12 group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-cyan-400/20 to-purple-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-3xl p-4 group-hover:border-green-300/50 transition-all duration-500">
            <img 
              src="/aurora.png" 
              alt="Aurora Borealis" 
              className="w-full h-96 md:h-[42rem] lg:h-[48rem] object-cover rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-4 bg-gradient-to-t from-black/50 to-transparent rounded-2xl pointer-events-none"></div>
            
            {/* Floating particles effect */}
            <div className="absolute top-8 left-8 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute top-16 right-12 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-12 left-16 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Scientific Description */}
          <div className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-500">
            <div className="flex items-center space-x-3 mb-6">
              <Atom className="w-8 h-8 text-blue-400 animate-spin" style={{animationDuration: '4s'}} />
              <h2 className="text-3xl font-bold text-blue-300">
                {currentContent.scienceTitle}
              </h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              {renderDescription(currentContent.description)}
            </p>

            <div className="space-y-3">
              {currentContent.sciencePoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <Zap className="w-5 h-5 text-yellow-400 mt-1 group-hover:animate-pulse" />
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Poetic Description */}
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-500">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
              <h2 className="text-3xl font-bold text-purple-300">
                {isEnglish ? "The Poetry of Aurora" : "অরোরার কবিতা"}
              </h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg italic">
              {renderDescription(currentContent.poetic)}
            </p>

            {/* Aurora Colors */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-purple-300 mb-4">
                {isEnglish ? "Aurora Colors" : "অরোরার রং"}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">{isEnglish ? "Green - Oxygen" : "সবুজ - অক্সিজেন"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-sm text-gray-300">{isEnglish ? "Pink - Oxygen" : "গোলাপি - অক্সিজেন"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-sm text-gray-300">{isEnglish ? "Blue - Nitrogen" : "নীল - নাইট্রোজেন"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <span className="text-sm text-gray-300">{isEnglish ? "Red - Oxygen" : "লাল - অক্সিজেন"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formation Process */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-3xl p-8 mb-12 border border-indigo-500/30">
          <div className="flex items-center space-x-3 mb-8 justify-center">
            <Wind className="w-10 h-10 text-indigo-400 animate-bounce" />
            <h2 className="text-4xl font-bold text-indigo-300 text-center">
              {currentContent.formationTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:animate-pulse">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                {isEnglish ? "1. Solar Wind" : "১. সৌর বাতাস"}
              </h3>
              <p className="text-gray-300 text-sm">
                {isEnglish ? "Charged particles from the Sun" : "সূর্য থেকে চার্জযুক্ত কণা"}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:animate-spin">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">
                {isEnglish ? "2. Magnetic Field" : "২. চৌম্বক ক্ষেত্র"}
              </h3>
              <p className="text-gray-300 text-sm">
                {isEnglish ? "Earth guides particles to poles" : "পৃথিবী কণাদের মেরুতে পাঠায়"}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:animate-bounce">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-green-300 mb-2">
                {isEnglish ? "3. Light Show" : "৩. আলোর প্রদর্শনী"}
              </h3>
              <p className="text-gray-300 text-sm">
                {isEnglish ? "Collisions create beautiful auroras" : "সংঘর্ষে সুন্দর অরোরা সৃষ্টি"}
              </p>
            </div>
          </div>
        </div>

        {/* Appearance Section */}
        <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 mb-12 hover:border-green-400/50 transition-all duration-500">
          <h2 className="text-3xl font-bold text-green-300 mb-6 text-center">
            {currentContent.appearanceTitle}
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg text-center max-w-4xl mx-auto">
            {currentContent.appearance}
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-purple-500/30">
        <p className="text-gray-400">
          {isEnglish 
            ? "Experience the wonder of cosmic phenomena through science and poetry" 
            : "বিজ্ঞান ও কবিতার মাধ্যমে মহাজাগতিক ঘটনার বিস্ময় অনুভব করুন"
          }
        </p>
      </footer>
    </div>
  );
};

export default AuroraPage;


 
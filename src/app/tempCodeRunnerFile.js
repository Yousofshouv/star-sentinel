'use client';
 
import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Globe, Rocket, Tractor, Radio, Users, ChevronRight, Play, Menu, X, Home, BookOpen, Telescope } from 'lucide-react';
import { useRouter } from 'next/navigation'; 

const SpaceWeatherLanding = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const stats = [
    { number: "93M", unit: "miles away", desc: "The Sun affects us from space" },
    { number: "100+", unit: "countries", desc: "Experience space weather impacts" },
    { number: "24/7", unit: "monitoring", desc: "Scientists track space weather" }
  ];

  const impacts = [
    {
      icon: <Tractor className="w-12 h-12" />,
      title: "Farmers",
      desc: "GPS systems fail during planting season",
      color: "from-green-400 to-emerald-600",
      videoSrc: "/farm.mp4"
    },
    {
      icon: <Radio className="w-12 h-12" />,
      title: "Pilots",
      desc: "Radio communications get disrupted",
      color: "from-blue-400 to-cyan-600",
      videoSrc: "/pilot.mp4"
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Astronauts",
      desc: "Face dangerous radiation in space",
      color: "from-purple-400 to-violet-600",
      videoSrc: "/astra.mp4"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Power Operators",
      desc: "Electrical grids become unstable",
      color: "from-yellow-400 to-orange-600",
      videoSrc: "/engineer.mp4"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Everyone",
      desc: "Internet and GPS services affected",
      color: "from-pink-400 to-rose-600",
      videoSrc: "/everyone.mp4"
    }
  ];

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-black text-white overflow-hidden">
      {/* Interactive Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-purple-500/50 shadow-2xl shadow-purple-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <Globe className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 animate-spin" style={{animationDuration: '15s'}} />
                <Sparkles className="w-5 h-5 text-yellow-400 absolute -top-2 -right-2 animate-pulse group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md group-hover:bg-cyan-300/30 transition-all duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                  Flarestorm
                </span>
                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Space Weather Adventure</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="group flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-purple-500/20 transition-all duration-300">
                <Home className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 group-hover:animate-pulse" />
                <span className="text-gray-300 group-hover:text-white font-medium">Home</span>
              </a>
              <a href="#impacts" className="group flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-purple-500/20 transition-all duration-300">
                <Users className="w-5 h-5 text-purple-400 group-hover:text-purple-300 group-hover:animate-pulse" />
                <span className="text-gray-300 group-hover:text-white font-medium">Characters</span>
              </a>
              <a href="#learn" className="group flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-purple-500/20 transition-all duration-300">
                <BookOpen className="w-5 h-5 text-pink-400 group-hover:text-pink-300 group-hover:animate-pulse" />
                <span className="text-gray-300 group-hover:text-white font-medium">Learn</span>
              </a>
              <button onClick={()=>router.push('/FLARE')} className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                <Telescope className="w-5 h-5 group-hover:animate-pulse" />
                <span className="font-bold">Live Weather</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 space-y-4 border-t border-purple-500/30">
              <a href="#hero" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-purple-500/20 transition-all duration-300">
                <Home className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Home</span>
              </a>
              <a href="#impacts" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-purple-500/20 transition-all duration-300">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Characters</span>
              </a>
              <a href="#learn" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-purple-500/20 transition-all duration-300">
                <BookOpen className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">Learn</span>
              </a>
              <button onClick={()=>router.push('/FLARE')} className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <Telescope className="w-5 h-5" />
                <span className="font-bold">Live Weather</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Animated Background Stars */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-2 h-2 text-blue-300" />
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        {/* Animated Sun */}
        <div className="absolute top-32 right-10 w-32 h-32 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full animate-pulse shadow-2xl shadow-orange-500/50">
          <div className="absolute inset-2 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full animate-spin" style={{animationDuration: '20s'}} />
          <div className="absolute inset-4 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full" />
          {/* Solar flares */}
          <div className="absolute -top-2 left-1/2 w-1 h-8 bg-gradient-to-t from-orange-400 to-transparent transform -translate-x-1/2 animate-pulse" />
          <div className="absolute -right-2 top-1/2 h-1 w-8 bg-gradient-to-r from-orange-400 to-transparent transform -translate-y-1/2 animate-pulse" />
          <div className="absolute -bottom-2 left-1/3 w-1 h-6 bg-gradient-to-b from-red-400 to-transparent animate-pulse" />
        </div>

        {/* Earth */}
        <div className="absolute bottom-32 left-10 w-24 h-24 bg-gradient-to-br from-blue-400 via-green-400 to-blue-600 rounded-full shadow-xl">
          <div className="absolute inset-1 bg-gradient-to-br from-blue-300 to-green-500 rounded-full">
            <div className="absolute top-2 left-3 w-3 h-4 bg-green-600 rounded-full opacity-80" />
            <div className="absolute bottom-3 right-2 w-4 h-2 bg-green-600 rounded-full opacity-80" />
            <div className="absolute top-1/2 left-1 w-2 h-3 bg-green-600 rounded-full opacity-80" />
          </div>
          {/* Aurora effect */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-t from-green-400 to-transparent animate-pulse opacity-70" />
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-6 animate-bounce">
            <div className="inline-block p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
              <Globe className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
            Flarestorm
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-200">
            An Interactive Story Adventure
          </h2>
          
          <p className="relative text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto text-center 
                       text-gray-200 tracking-wide font-light">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
              Discover how solar flares and space storms
            </span>{" "}
            affect farmers, pilots, astronauts, and everyone on our planet.  

            <span className="block mt-4 text-yellow-300 font-bold animate-pulse drop-shadow-[0_0_10px_rgba(255,255,0,0.6)]">
              🌞 The Sun is 93 million miles away, but it touches your life every day!
            </span>

            <span
            className="block mt-2 font-semibold text-transparent bg-clip-text 
                       bg-gradient-to-r from-red-400 via-orange-400 to-pink-500
                       relative
                       after:content-[''] after:block after:h-[3px] after:w-0 
                       after:bg-gradient-to-r after:from-red-400 after:via-orange-400 after:to-pink-500 
                       after:transition-all after:duration-500 after:hover:w-full after:mx-auto
                       hover:drop-shadow-[0_0_10px_rgba(255,100,100,0.7)]">
            🚨 Learn how it could affect your life – through interactive stories,  
            and never forget to check your knowledge!
          </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button onClick={()=>router.push('/Animation')} className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <Play className="w-6 h-6 group-hover:animate-pulse" />
              Start the Adventure
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button onClick={()=>router.push('/aurora')} className="group bg-transparent border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 flex items-center gap-3">
              <Sparkles className="w-6 h-6 group-hover:animate-spin" />
              Explore Auroras
            </button>
          </div>

          {/* Dynamic Stats */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
            <div className="text-center transition-all duration-500">
              <div className="text-4xl font-bold text-cyan-300 mb-2">
                {stats[currentStat].number}
              </div>
              <div className="text-lg text-purple-300 mb-1">
                {stats[currentStat].unit}
              </div>
              <div className="text-gray-400">
                {stats[currentStat].desc}
              </div>
            </div>
          </div>
        </div>

        {/* Animated energy waves */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-96 h-96 border border-purple-500/20 rounded-full animate-ping" style={{animationDuration: '4s'}} />
          <div className="absolute inset-8 border border-blue-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}} />
          <div className="absolute inset-16 border border-pink-500/20 rounded-full animate-ping" style={{animationDuration: '2s', animationDelay: '2s'}} />
        </div>
      </div>

      {/* Who Gets Affected Section with Video Backgrounds */}
      <section id="impacts" className={`py-20 px-4 transition-all duration-1000 ${isVisible.impacts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            Who Does Space Weather Affect?
          </h2>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Space weather doesn't just stay in space! It reaches down to Earth and affects real people doing real jobs. 
            Let's meet some of the heroes whose lives are touched by the Sun's incredible power.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <div 
                key={impact.title}
                onClick={() => {
                  if (impact.title === "Farmers") {
                    router.push('/Farmer');
                  } else if (impact.title === "Pilots") {
                    router.push('/pilots');
                  } else if (impact.title === "Astronauts") {
                    router.push('/Astronaut');
                  } else if (impact.title === "Power Operators") {
                    router.push('/PowerOperator');
                  } else if (impact.title === "Everyone") {
                    router.push('/Everyone');
                  }
                }}
                className={`group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-700 cursor-pointer h-96 w-full`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Video Background */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={impact.videoSrc} type="video/mp4" />
                  {/* Fallback gradient if video fails */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${impact.color}`} />
                </video>

                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
                
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${impact.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div className="text-white mb-4 group-hover:animate-bounce transition-all duration-300">
                    {impact.icon}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg">
                      {impact.title}
                    </h3>
                    <p className="text-gray-200 group-hover:text-white transition-colors duration-300 text-lg leading-relaxed drop-shadow-md">
                      {impact.desc}
                    </p>
                    
                    {/* Story indicator */}
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                        {impact.title} Story
                      </span>
                      <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-2 group-hover:text-cyan-300 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${impact.color} blur-xl opacity-30`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section id="learn" className={`py-20 px-4 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 transition-all duration-1000 ${isVisible.learn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            What You'll Discover
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group">
              <div className="text-6xl mb-4 group-hover:animate-pulse">🌟</div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">What is Space Weather?</h3>
              <p className="text-gray-300">Learn how the Sun creates invisible storms that travel through space and reach our planet!</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30 hover:border-pink-400 transition-all duration-300 group">
              <div className="text-6xl mb-4 group-hover:animate-bounce">🚀</div>
              <h3 className="text-2xl font-bold text-pink-300 mb-4">Real-World Impact</h3>
              <p className="text-gray-300">Discover how space weather affects technology, communication, and people's daily work!</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 group">
              <div className="text-6xl mb-4 group-hover:animate-spin">⚡</div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Solar Flares & CMEs</h3>
              <p className="text-gray-300">Meet solar flares and coronal mass ejections - the Sun's most powerful phenomena!</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400 transition-all duration-300 group">
              <div className="text-6xl mb-4 group-hover:animate-pulse">🌍</div>
              <h3 className="text-2xl font-bold text-green-300 mb-4">Earth's Protection</h3>
              <p className="text-gray-300">See how our planet's magnetic field creates beautiful auroras while protecting us!</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready for an Amazing Journey?</h3>
            <p className="text-xl text-indigo-100 mb-6">
              From NASA's real research to interactive storytelling - this adventure combines 
              actual space science with engaging characters and stunning visuals!
            </p>
            <button onClick={()=>router.push('/FLARE')} className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get real world Space weather update And Ai assistance 🌟
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Based on real NASA research and space weather data
          </p>
          <p className="text-sm text-gray-500">
            Educational content designed to inspire young minds about space science
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SpaceWeatherLanding;








//  'use client';
 
// import React, { useState, useEffect } from 'react';
// import { Sparkles, Zap, Globe, Rocket, Tractor, Radio, Users, ChevronRight, Play, Menu, X, Home, BookOpen, Telescope } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// // Import video files
// import farmVideo from './farm.mp4';
// import pilotVideo from './pilot.mp4';
// import astraVideo from './astra.mp4';
// import engineerVideo from './engineer.mp4';
// import everyoneVideo from './everyone.mp4'; 

// const SpaceWeatherLanding = () => {
//   const [currentStat, setCurrentStat] = useState(0);
//   const [isVisible, setIsVisible] = useState({});
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const router = useRouter();

//   const stats = [
//     { number: "93M", unit: "miles away", desc: "The Sun affects us from space" },
//     { number: "100+", unit: "countries", desc: "Experience space weather impacts" },
//     { number: "24/7", unit: "monitoring", desc: "Scientists track space weather" }
//   ];

//   const impacts = [
//     {
//       icon: <Tractor className="w-12 h-12" />,
//       title: "Farmers",
//       desc: "GPS systems fail during planting season",
//       color: "from-green-400 to-emerald-600",
//       videoSrc: farmVideo
//     },
//     {
//       icon: <Radio className="w-12 h-12" />,
//       title: "Pilots",
//       desc: "Radio communications get disrupted",
//       color: "from-blue-400 to-cyan-600",
//       videoSrc: pilotVideo
//     },
//     {
//       icon: <Rocket className="w-12 h-12" />,
//       title: "Astronauts",
//       desc: "Face dangerous radiation in space",
//       color: "from-purple-400 to-violet-600",
//       videoSrc: astraVideo
//     },
//     {
//       icon: <Zap className="w-12 h-12" />,
//       title: "Power Operators",
//       desc: "Electrical grids become unstable",
//       color: "from-yellow-400 to-orange-600",
//       videoSrc: engineerVideo
//     },
//     {
//       icon: <Users className="w-12 h-12" />,
//       title: "Everyone",
//       desc: "Internet and GPS services affected",
//       color: "from-pink-400 to-rose-600",
//       videoSrc: everyoneVideo
//     }
//   ];

//   // Handle scroll for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentStat((prev) => (prev + 1) % stats.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsVisible(prev => ({
//             ...prev,
//             [entry.target.id]: entry.isIntersecting
//           }));
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-black text-white overflow-hidden">
//       {/* Interactive Navbar */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-purple-500/50 shadow-2xl shadow-purple-500/20' : 'bg-transparent'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <div className="flex items-center space-x-3 group cursor-pointer">
//               <div className="relative">
//                 <Globe className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 animate-spin" style={{animationDuration: '15s'}} />
//                 <Sparkles className="w-5 h-5 text-yellow-400 absolute -top-2 -right-2 animate-pulse group-hover:animate-bounce" />
//                 <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md group-hover:bg-cyan-300/30 transition-all duration-300"></div>
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
//                   Flarestorm
//                 </span>
//                 <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Space Weather Adventure</span>
//               </div>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#hero" className="group flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-purple-500/20 transition-all duration-300">
//                 <Home className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 group-hover:animate-pulse" />
//                 <span className="text-gray-300 group-hover:text-white font-medium">Home</span>
//               </a>
//               <a href="#impacts" className="group flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-purple-500/20 transition-all duration-300">
//                 <Users className="w-5 h-5 text-purple-400 group-hover:text-purple-300 group-hover:animate-pulse" />
//                 <span className="text-gray-300 group-hover:text-white font-medium">Characters</span>
//               </a>
//               <a href="#learn" className="group flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-purple-500/20 transition-all duration-300">
//                 <BookOpen className="w-5 h-5 text-pink-400 group-hover:text-pink-300 group-hover:animate-pulse" />
//                 <span className="text-gray-300 group-hover:text-white font-medium">Learn</span>
//               </a>
//               <button onClick={()=>router.push('/FLARE')} className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
//                 <Telescope className="w-5 h-5 group-hover:animate-pulse" />
//                 <span className="font-bold">Live Weather</span>
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-all duration-300"
//               >
//                 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
//             <div className="py-4 space-y-4 border-t border-purple-500/30">
//               <a href="#hero" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-purple-500/20 transition-all duration-300">
//                 <Home className="w-5 h-5 text-cyan-400" />
//                 <span className="text-gray-300">Home</span>
//               </a>
//               <a href="#impacts" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-purple-500/20 transition-all duration-300">
//                 <Users className="w-5 h-5 text-purple-400" />
//                 <span className="text-gray-300">Characters</span>
//               </a>
//               <a href="#learn" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-purple-500/20 transition-all duration-300">
//                 <BookOpen className="w-5 h-5 text-pink-400" />
//                 <span className="text-gray-300">Learn</span>
//               </a>
//               <button onClick={()=>router.push('/FLARE')} className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
//                 <Telescope className="w-5 h-5" />
//                 <span className="font-bold">Live Weather</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Animated Background Stars */}
//       <div className="fixed inset-0 pointer-events-none">
//         {[...Array(50)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 2}s`
//             }}
//           >
//             <Sparkles className="w-2 h-2 text-blue-300" />
//           </div>
//         ))}
//       </div>

//       {/* Hero Section */}
//       <div id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
//         {/* Animated Sun */}
//         <div className="absolute top-32 right-10 w-32 h-32 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full animate-pulse shadow-2xl shadow-orange-500/50">
//           <div className="absolute inset-2 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full animate-spin" style={{animationDuration: '20s'}} />
//           <div className="absolute inset-4 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full" />
//           {/* Solar flares */}
//           <div className="absolute -top-2 left-1/2 w-1 h-8 bg-gradient-to-t from-orange-400 to-transparent transform -translate-x-1/2 animate-pulse" />
//           <div className="absolute -right-2 top-1/2 h-1 w-8 bg-gradient-to-r from-orange-400 to-transparent transform -translate-y-1/2 animate-pulse" />
//           <div className="absolute -bottom-2 left-1/3 w-1 h-6 bg-gradient-to-b from-red-400 to-transparent animate-pulse" />
//         </div>

//         {/* Earth */}
//         <div className="absolute bottom-32 left-10 w-24 h-24 bg-gradient-to-br from-blue-400 via-green-400 to-blue-600 rounded-full shadow-xl">
//           <div className="absolute inset-1 bg-gradient-to-br from-blue-300 to-green-500 rounded-full">
//             <div className="absolute top-2 left-3 w-3 h-4 bg-green-600 rounded-full opacity-80" />
//             <div className="absolute bottom-3 right-2 w-4 h-2 bg-green-600 rounded-full opacity-80" />
//             <div className="absolute top-1/2 left-1 w-2 h-3 bg-green-600 rounded-full opacity-80" />
//           </div>
//           {/* Aurora effect */}
//           <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-t from-green-400 to-transparent animate-pulse opacity-70" />
//         </div>

//         <div className="text-center z-10 max-w-4xl mx-auto">
//           <div className="mb-6 animate-bounce">
//             <div className="inline-block p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
//               <Globe className="w-12 h-12" />
//             </div>
//           </div>
//           <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
//             Flarestorm
//           </h1>

//           <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-200">
//             An Interactive Story Adventure
//           </h2>
          
//           <p className="relative text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto text-center 
//                        text-gray-200 tracking-wide font-light">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
//               Discover how solar flares and space storms
//             </span>{" "}
//             affect farmers, pilots, astronauts, and everyone on our planet.  

//             <span className="block mt-4 text-yellow-300 font-bold animate-pulse drop-shadow-[0_0_10px_rgba(255,255,0,0.6)]">
//               🌞 The Sun is 93 million miles away, but it touches your life every day!
//             </span>

//             <span
//             className="block mt-2 font-semibold text-transparent bg-clip-text 
//                        bg-gradient-to-r from-red-400 via-orange-400 to-pink-500
//                        relative
//                        after:content-[''] after:block after:h-[3px] after:w-0 
//                        after:bg-gradient-to-r after:from-red-400 after:via-orange-400 after:to-pink-500 
//                        after:transition-all after:duration-500 after:hover:w-full after:mx-auto
//                        hover:drop-shadow-[0_0_10px_rgba(255,100,100,0.7)]">
//             🚨 Learn how it could affect your life – through interactive stories,  
//             and never forget to check your knowledge!
//           </span>
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <button onClick={()=>router.push('/Animation')} className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
//               <Play className="w-6 h-6 group-hover:animate-pulse" />
//               Start the Adventure
//               <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//             </button>
            
//             <button className="group bg-transparent border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 flex items-center gap-3">
//               <Sparkles className="w-6 h-6 group-hover:animate-spin" />
//               Explore Characters
//             </button>
//           </div>

//           {/* Dynamic Stats */}
//           <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
//             <div className="text-center transition-all duration-500">
//               <div className="text-4xl font-bold text-cyan-300 mb-2">
//                 {stats[currentStat].number}
//               </div>
//               <div className="text-lg text-purple-300 mb-1">
//                 {stats[currentStat].unit}
//               </div>
//               <div className="text-gray-400">
//                 {stats[currentStat].desc}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Animated energy waves */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
//           <div className="w-96 h-96 border border-purple-500/20 rounded-full animate-ping" style={{animationDuration: '4s'}} />
//           <div className="absolute inset-8 border border-blue-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}} />
//           <div className="absolute inset-16 border border-pink-500/20 rounded-full animate-ping" style={{animationDuration: '2s', animationDelay: '2s'}} />
//         </div>
//       </div>

//       {/* Who Gets Affected Section with Video Backgrounds */}
//       <section id="impacts" className={`py-20 px-4 transition-all duration-1000 ${isVisible.impacts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
//             Who Does Space Weather Affect?
//           </h2>
//           <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
//             Space weather doesn't just stay in space! It reaches down to Earth and affects real people doing real jobs. 
//             Let's meet some of the heroes whose lives are touched by the Sun's incredible power.
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {impacts.map((impact, index) => (
//               <div 
//                 key={impact.title}
//                 onClick={() => {
//                   if (impact.title === "Farmers") {
//                     router.push('/Farmer');
//                   } else if (impact.title === "Pilots") {
//                     router.push('/pilots');
//                   } else if (impact.title === "Astronauts") {
//                     router.push('/Astronaut');
//                   } else if (impact.title === "Power Operators") {
//                     router.push('/PowerOperator');
//                   } else if (impact.title === "Everyone") {
//                     router.push('/Everyone');
//                   }
//                 }}
//                 className={`group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-700 cursor-pointer h-96 w-full`}
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 {/* Video Background */}
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="absolute inset-0 w-full h-full object-cover"
//                 >
//                   <source src={impact.videoSrc} type="video/mp4" />
//                   {/* Fallback gradient if video fails */}
//                   <div className={`absolute inset-0 bg-gradient-to-br ${impact.color}`} />
//                 </video>

//                 {/* Overlay for better text readability */}
//                 <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
                
//                 {/* Gradient border effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${impact.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

//                 {/* Content */}
//                 <div className="relative h-full p-8 flex flex-col justify-between">
//                   <div className="text-white mb-4 group-hover:animate-bounce transition-all duration-300">
//                     {impact.icon}
//                   </div>
                  
//                   <div className="space-y-4">
//                     <h3 className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg">
//                       {impact.title}
//                     </h3>
//                     <p className="text-gray-200 group-hover:text-white transition-colors duration-300 text-lg leading-relaxed drop-shadow-md">
//                       {impact.desc}
//                     </p>
                    
//                     {/* Story indicator */}
//                     <div className="flex items-center justify-between">
//                       <span className="text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
//                         {impact.title} Story
//                       </span>
//                       <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-2 group-hover:text-cyan-300 transition-all duration-300" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Hover glow effect */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div className={`absolute inset-0 bg-gradient-to-r ${impact.color} blur-xl opacity-30`} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* What You'll Learn Section */}
//       <section id="learn" className={`py-20 px-4 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 transition-all duration-1000 ${isVisible.learn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
//             What You'll Discover
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group">
//               <div className="text-6xl mb-4 group-hover:animate-pulse">🌟</div>
//               <h3 className="text-2xl font-bold text-cyan-300 mb-4">What is Space Weather?</h3>
//               <p className="text-gray-300">Learn how the Sun creates invisible storms that travel through space and reach our planet!</p>
//             </div>
            
//             <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30 hover:border-pink-400 transition-all duration-300 group">
//               <div className="text-6xl mb-4 group-hover:animate-bounce">🚀</div>
//               <h3 className="text-2xl font-bold text-pink-300 mb-4">Real-World Impact</h3>
//               <p className="text-gray-300">Discover how space weather affects technology, communication, and people's daily work!</p>
//             </div>
            
//             <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 group">
//               <div className="text-6xl mb-4 group-hover:animate-spin">⚡</div>
//               <h3 className="text-2xl font-bold text-purple-300 mb-4">Solar Flares & CMEs</h3>
//               <p className="text-gray-300">Meet solar flares and coronal mass ejections - the Sun's most powerful phenomena!</p>
//             </div>
            
//             <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400 transition-all duration-300 group">
//               <div className="text-6xl mb-4 group-hover:animate-pulse">🌍</div>
//               <h3 className="text-2xl font-bold text-green-300 mb-4">Earth's Protection</h3>
//               <p className="text-gray-300">See how our planet's magnetic field creates beautiful auroras while protecting us!</p>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
//             <h3 className="text-3xl font-bold mb-4 text-white">Ready for an Amazing Journey?</h3>
//             <p className="text-xl text-indigo-100 mb-6">
//               From NASA's real research to interactive storytelling - this adventure combines 
//               actual space science with engaging characters and stunning visuals!
//             </p>
//             <button onClick={()=>router.push('/FLARE')} className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
//               Get real world Space weather update And Ai assistance 🌟
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 px-4 border-t border-purple-500/30">
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="text-gray-400 mb-4">
//             Based on real NASA research and space weather data
//           </p>
//           <p className="text-sm text-gray-500">
//             Educational content designed to inspire young minds about space science
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default SpaceWeatherLanding;



//  'use client';
 
//  import React, { useState, useEffect } from 'react';
// import { Sparkles, Zap, Globe, Rocket, Tractor, Radio, Users, ChevronRight, Play } from 'lucide-react';
// import { useRouter } from 'next/navigation'; 

// const SpaceWeatherLanding = () => {
//   const [currentStat, setCurrentStat] = useState(0);
//   const [isVisible, setIsVisible] = useState({});
//       const router = useRouter();


//   const stats = [
//     { number: "93M", unit: "miles away", desc: "The Sun affects us from space" },
//     { number: "100+", unit: "countries", desc: "Experience space weather impacts" },
//     { number: "24/7", unit: "monitoring", desc: "Scientists track space weather" }
//   ];

//   const impacts = [
//     {
//       icon: <Tractor className="w-8 h-8" />,
//       title: "Farmers",
//       desc: "GPS systems fail during planting season",
//       color: "from-green-400 to-emerald-600"
//     },
//     {
//       icon: <Radio className="w-8 h-8" />,
//       title: "Pilots",
//       desc: "Radio communications get disrupted",
//       color: "from-blue-400 to-cyan-600"
//     },
//     {
//       icon: <Rocket className="w-8 h-8" />,
//       title: "Astronauts",
//       desc: "Face dangerous radiation in space",
//       color: "from-purple-400 to-violet-600"
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "Power Operators",
//       desc: "Electrical grids become unstable",
//       color: "from-yellow-400 to-orange-600"
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Everyone",
//       desc: "Internet and GPS services affected",
//       color: "from-pink-400 to-rose-600"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentStat((prev) => (prev + 1) % stats.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsVisible(prev => ({
//             ...prev,
//             [entry.target.id]: entry.isIntersecting
//           }));
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (

 


   
//     <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-black text-white overflow-hidden">
//       {/* Animated Background Stars */}
//       <div className="fixed inset-0 pointer-events-none">
//         {[...Array(50)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 2}s`
//             }}
//           >
//             <Sparkles className="w-2 h-2 text-blue-300" />
//           </div>
//         ))}
//       </div>

//       {/* Hero Section */}
//       <div className="relative min-h-screen flex items-center justify-center px-4">
//         {/* Animated Sun */}
//         <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full animate-pulse shadow-2xl shadow-orange-500/50">
//           <div className="absolute inset-2 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full animate-spin" style={{animationDuration: '20s'}} />
//           <div className="absolute inset-4 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full" />
//           {/* Solar flares */}
//           <div className="absolute -top-2 left-1/2 w-1 h-8 bg-gradient-to-t from-orange-400 to-transparent transform -translate-x-1/2 animate-pulse" />
//           <div className="absolute -right-2 top-1/2 h-1 w-8 bg-gradient-to-r from-orange-400 to-transparent transform -translate-y-1/2 animate-pulse" />
//           <div className="absolute -bottom-2 left-1/3 w-1 h-6 bg-gradient-to-b from-red-400 to-transparent animate-pulse" />
//         </div>

//         {/* Earth */}
//         <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-400 via-green-400 to-blue-600 rounded-full shadow-xl">
//           <div className="absolute inset-1 bg-gradient-to-br from-blue-300 to-green-500 rounded-full">
//             <div className="absolute top-2 left-3 w-3 h-4 bg-green-600 rounded-full opacity-80" />
//             <div className="absolute bottom-3 right-2 w-4 h-2 bg-green-600 rounded-full opacity-80" />
//             <div className="absolute top-1/2 left-1 w-2 h-3 bg-green-600 rounded-full opacity-80" />
//           </div>
//           {/* Aurora effect */}
//           <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-t from-green-400 to-transparent animate-pulse opacity-70" />
//         </div>

//         <div className="text-center z-10 max-w-4xl mx-auto">
//           <div className="mb-6 animate-bounce">
//             <div className="inline-block p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
//               <Globe className="w-12 h-12" />
//             </div>
//           </div>
//                     <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
//          Flarestorm
//           </h1>

// {/*           
//           <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
//             Space Weather
//           </h1>
//            */}
//           <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-200">
//             An Interactive Story Adventure
//           </h2>
          
//  <p className="relative text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto text-center 
//                text-gray-200 tracking-wide font-light">
//   <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
//     Discover how solar flares and space storms
//   </span>{" "}
//   affect farmers, pilots, astronauts, and everyone on our planet.  

//   <span className="block mt-4 text-yellow-300 font-bold animate-pulse drop-shadow-[0_0_10px_rgba(255,255,0,0.6)]">
//     🌞 The Sun is 93 million miles away, but it touches your life every day!
//   </span>

//   <span
//   className="block mt-2 font-semibold text-transparent bg-clip-text 
//              bg-gradient-to-r from-red-400 via-orange-400 to-pink-500
//              relative
//              after:content-[''] after:block after:h-[3px] after:w-0 
//              after:bg-gradient-to-r after:from-red-400 after:via-orange-400 after:to-pink-500 
//              after:transition-all after:duration-500 after:hover:w-full after:mx-auto
//              hover:drop-shadow-[0_0_10px_rgba(255,100,100,0.7)]">
//   🚨 Learn how it could affect your life – through interactive stories,  
//   and never forget to check your knowledge!
// </span>


//   {/* <span className="block mt-2 text-red-500 font-semibold relative after:content-[''] after:block after:h-[3px] after:w-0 
//                   after:bg-red-500 after:transition-all after:duration-500 after:hover:w-full after:mx-auto">
//     🚨 Learn how it could affect your life – through interactive stories,
//     and never forget to check your knowledge!
//   </span> */}
// </p>


//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <button onClick={()=>router.push('/Animation')} className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
//               <Play className="w-6 h-6 group-hover:animate-pulse" />
//               Start the Adventure
//               <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//             </button>
            
//             <button className="group bg-transparent border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 flex items-center gap-3">
//               <Sparkles className="w-6 h-6 group-hover:animate-spin" />
//               Explore Characters
//             </button>
//           </div>

//           {/* Dynamic Stats */}
//           <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
//             <div className="text-center transition-all duration-500">
//               <div className="text-4xl font-bold text-cyan-300 mb-2">
//                 {stats[currentStat].number}
//               </div>
//               <div className="text-lg text-purple-300 mb-1">
//                 {stats[currentStat].unit}
//               </div>
//               <div className="text-gray-400">
//                 {stats[currentStat].desc}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Animated energy waves */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
//           <div className="w-96 h-96 border border-purple-500/20 rounded-full animate-ping" style={{animationDuration: '4s'}} />
//           <div className="absolute inset-8 border border-blue-500/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}} />
//           <div className="absolute inset-16 border border-pink-500/20 rounded-full animate-ping" style={{animationDuration: '2s', animationDelay: '2s'}} />
//         </div>
//       </div>

//       {/* Who Gets Affected Section */}
//       <section id="impacts" className={`py-20 px-4 transition-all duration-1000 ${isVisible.impacts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
//             Who Does Space Weather Affect?
//           </h2>
//           <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
//             Space weather doesn't just stay in space! It reaches down to Earth and affects real people doing real jobs. 
//             Let's meet some of the heroes whose lives are touched by the Sun's incredible power.
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {impacts.map((impact, index) => (
//               <div onClick={() =>  {
//                 if (impact.title === "Farmers") {
//                   router.push('/Farmer');
//                 }else if (impact.title === "Pilots") {
//                   router.push('/pilots');
//                 }else if (impact.title === "Astronauts") {
//                   router.push('/Astronaut');
//                 }else if (impact.title === "Power Operators") {
//                   router.push('/PowerOperator');
//                 }else if (impact.title === "Everyone") {
//                   router.push('/Everyone');
//                 }
//               }}
//                 key={impact.title}
//                 className={`group bg-gradient-to-br ${impact.color} p-1 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500`}
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="bg-black/80 rounded-2xl p-6 h-full backdrop-blur-sm">
//                   <div className="text-white mb-4 group-hover:animate-bounce">
//                     {impact.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
//                     {impact.title}
//                   </h3>
//                   <p className="text-gray-300 group-hover:text-white transition-colors">
//                     {impact.desc}
//                   </p>
//                   <div className="mt-4 text-right">
//                     <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-2 transition-transform inline" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* What You'll Learn Section */}
//       <section id="learn" className={`py-20 px-4 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 transition-all duration-1000 ${isVisible.learn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
//             What You'll Discover
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group">
//               <div className="text-6xl mb-4 group-hover:animate-pulse">🌟</div>
//               <h3 className="text-2xl font-bold text-cyan-300 mb-4">What is Space Weather?</h3>
//               <p className="text-gray-300">Learn how the Sun creates invisible storms that travel through space and reach our planet!</p>
//             </div>
            
//             <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30 hover:border-pink-400 transition-all duration-300 group">
//               <div className="text-6xl mb-4 group-hover:animate-bounce">🚀</div>
//               <h3 className="text-2xl font-bold text-pink-300 mb-4">Real-World Impact</h3>
//               <p className="text-gray-300">Discover how space weather affects technology, communication, and people's daily work!</p>
//             </div>
            
//             <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 group">
//               <div className="text-6xl mb-4 group-hover:animate-spin">⚡</div>
//               <h3 className="text-2xl font-bold text-purple-300 mb-4">Solar Flares & CMEs</h3>
//               <p className="text-gray-300">Meet solar flares and coronal mass ejections - the Sun's most powerful phenomena!</p>
//             </div>
            
//             <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400 transition-all duration-300 group">
//               <div className="text-6xl mb-4 group-hover:animate-pulse">🌍</div>
//               <h3 className="text-2xl font-bold text-green-300 mb-4">Earth's Protection</h3>
//               <p className="text-gray-300">See how our planet's magnetic field creates beautiful auroras while protecting us!</p>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
//             <h3 className="text-3xl font-bold mb-4 text-white">Ready for an Amazing Journey?</h3>
//             <p className="text-xl text-indigo-100 mb-6">
//               From NASA's real research to interactive storytelling - this adventure combines 
//               actual space science with engaging characters and stunning visuals!
//             </p>
//             <button onClick={()=>router.push('/FLARE')} className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
//               Get real world Space weather update And Ai assistance 🌟
//             </button>
//           </div>
 
//         </div>
        
//      </section>

//       {/* Footer */}
//       <footer className="py-12 px-4 border-t border-purple-500/30">
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="text-gray-400 mb-4">
//                Based on real NASA research and space weather data
//            </p>
//            <p className="text-sm text-gray-500">
//              Educational content designed to inspire young minds about space science
//            </p>
//          </div>
//        </footer>
//     </div>
//   );
// };

// export default SpaceWeatherLanding
 'use client';

import React, { useState, useEffect } from 'react';
import { Tractor, Navigation, AlertTriangle, MapPin, Clock, ArrowLeft, ArrowRight, CheckCircle, XCircle, Zap, User, Globe, Home } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Import all images
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import image8 from './image8.png';

const FarmersImpactStory = () => {
  const router = useRouter();
  const [currentScene, setCurrentScene] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isBengali, setIsBengali] = useState(false);
  
  // Quiz functionality
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizScore, setQuizScore] = useState(null);

  const scenes = [
    {
      id: 'introduction',
      title: "Meet Farmer Dwane",
      titleBn: "কৃষক ডোয়েনের সাথে পরিচয়",
      image: image1,
      content: "Hi, I'm Jake, and I want to tell you about my neighbor, Farmer Dwane Roth from Kansas. Dwane has been farming for over 30 years, and he's seen technology transform agriculture from simple tractors to computer-controlled precision machines. His 2,000-acre farm grows corn and soybeans, and during planting season, every single day matters. Modern farming isn't just about dropping seeds in the ground anymore - it's about placing each seed in exactly the right spot, at exactly the right depth, with mathematical precision.",
      contentBn: "হ্যালো, আমি জেক, এবং আমি আপনাদের আমার প্রতিবেশী, ক্যানসাসের কৃষক ডোয়েন রথের কথা বলতে চাই। ডোয়েন ৩০ বছরেরও বেশি সময় ধরে চাষাবাদ করছেন, এবং তিনি দেখেছেন কীভাবে প্রযুক্তি কৃষিকে সাধারণ ট্রাক্টর থেকে কম্পিউটার-নিয়ন্ত্রিত নির্ভুল যন্ত্রে রূপান্তরিত করেছে। তার ২,০০০ একর খামারে ভুট্টা এবং সয়াবিন জন্মায়, এবং রোপণের মৌসুমে প্রতিটি দিনই গুরুত্বপূর্ণ।আধুনিক কৃষি আর শুধু মাটিতে বীজ ছুঁড়ে দেওয়ার বিষয় নয় — এটি হলো প্রতিটি বীজকে একেবারে সঠিক জায়গায়, সঠিক গভীরতায়, এবং গাণিতিক নিখুঁততার সাথে স্থাপন করার এক সূক্ষ্ম প্রক্রিয়া।",
      status: "normal",
      narrator: "Jake introduces us to his farming neighbor",
      narratorBn: "জেক আমাদের তার চাষী প্রতিবেশীর সাথে পরিচয় করিয়ে দেয়"
    },
    {
      id: 'modern_farming',
      title: "The Age of Precision Agriculture",
      titleBn: "নির্ভুল কৃষির যুগ",
      image: image2,
      content: "Let me show you how incredible modern farming has become. Dwane's autonomous tractor uses GPS satellites orbiting 12,500 miles above Earth to guide itself with accuracy down to one inch. Think about that - from space to a Kansas cornfield with pinpoint precision! The tractor knows exactly where it planted last year, can follow pre-programmed routes, and spaces each row precisely 30 inches apart. This isn't just fancy technology - it's economics. Precision planting can increase crop yields by 3-5%, which means thousands of extra dollars per field. For a farm Dwane's size, that precision means the difference between profit and loss.",
      contentBn: "আমি তোমাকে দেখাতে চাই আধুনিক কৃষি কতটা অবিশ্বাস্য হয়ে উঠেছে। ডুয়েনের স্বয়ংক্রিয় ট্র্যাক্টরটি পৃথিবীর প্রায় ১২,৫০০ মাইল উপরে কক্ষপথে থাকা জিপিএস স্যাটেলাইট ব্যবহার করে নিজেকে এমনভাবে পরিচালনা করে যে তার নির্ভুলতা প্রায় এক ইঞ্চি পর্যন্ত। ভাবো তো — মহাকাশ থেকে শুরু করে ক্যানসাসের ভুট্টাক্ষেত পর্যন্ত, এতটা সূক্ষ্ম নিয়ন্ত্রণ!এই ট্র্যাক্টরটি ঠিক জানে গত বছর কোথায় বীজ রোপণ করা হয়েছিল, এটি পূর্বনির্ধারিত রুট অনুসরণ করতে পারে, এবং প্রতিটি সারির মধ্যে ঠিক ৩০ ইঞ্চি ফাঁকা রেখে রোপণ করে।এটি শুধুই ঝকঝকে প্রযুক্তি নয় এটি অর্থনীতির বিষয়। এমন নিখুঁত রোপণ ফসলের উৎপাদন ৩–৫% পর্যন্ত বাড়াতে পারে, যা প্রতি জমিতে হাজার হাজার ডলার অতিরিক্ত আয় বোঝায়। ডুয়েনের মতো বড় খামারের জন্য, এই নিখুঁততা মানে হলো লাভ ও ক্ষতির মধ্যকার পার্থক্য।",
      status: "normal",
      narrator: "Jake explains the technology that makes modern farming possible",
      narratorBn: "জেক ব্যাখ্যা করে কোন প্রযুক্তি আধুনিক চাষাবাদ সম্ভব করে তুলেছে"
    },
    {
      id: 'critical_season',
      title: "May 10th, 2024 - Planting Season",
      titleBn: "১০ মে, ২০২৪ - রোপণের মৌসুম",
      image: image3,
      content: "It was 5:30 AM on May 10th, 2024, and Dwane was starting what farmers call 'the sprint' - the critical two-week window when corn must be planted for optimal yield. The weather forecast looked perfect: warm soil, no rain predicted for three days. Dwane had already been delayed by spring rains, so every hour counted. As he fired up his $500,000 precision planter, everything seemed normal. The GPS showed its usual rock-solid signal, the computer displayed field maps with surgical precision, and the planter was ready to cover 200 acres that day. What Dwane didn't know was that 93 million miles away, our Sun was about to unleash one of the most powerful solar storms in 20 years.",
      contentBn: "২০২৪ সালের ১০ মে সকাল ৫:৩০-এ ডুয়েন শুরু করেছিল কৃষকদের ভাষায় পরিচিত সেই দৌড়—ভুট্টা রোপণের জন্য সবচেয়ে গুরুত্বপূর্ণ দুই সপ্তাহের সময়, যখন সঠিক সময়ে বীজ বপন করলেই সর্বোচ্চ ফলন নিশ্চিত হয়। আবহাওয়ার পূর্বাভাস ছিল একেবারে আদর্শ: মাটি ছিল উষ্ণ, আর পরবর্তী তিন দিন কোনো বৃষ্টির সম্ভাবনা ছিল না। বসন্তের বৃষ্টিতে সে আগেই অনেকটা সময় হারিয়েছিল, তাই প্রতিটি মুহূর্ত তখন ছিল অত্যন্ত মূল্যবান। যখন সে তার ৫ লক্ষ ডলারের আধুনিক প্রিসিশন প্ল্যান্টার চালু করল, সবকিছু স্বাভাবিকই মনে হচ্ছিল। জিপিএস দেখাচ্ছিল আগের মতো স্থিতিশীল সিগন্যাল, কম্পিউটার স্ক্রিনে জমির মানচিত্র ফুটে উঠেছিল অস্ত্রোপচার কক্ষের মতো নিখুঁতভাবে, আর প্ল্যান্টারটি সেদিন ২০০ একর জমিতে বীজ বপনের জন্য সম্পূর্ণ প্রস্তুত ছিল। কিন্তু ডুয়েন তখনও জানত না, তার খামার থেকে ৯৩ মিলিয়ন মাইল দূরে, সূর্য প্রস্তুত হচ্ছে গত ২০ বছরের মধ্যে অন্যতম শক্তিশালী সৌরঝড় ছেড়ে দেওয়ার জন্য—যা মুহূর্তের মধ্যেই তার নিখুঁত পরিকল্পনাকে ওলটপালট করে দিতে পারে",
      status: "normal",
      narrator: "Jake sets the scene for the fateful day",
      narratorBn: "জেক ভাগ্যবান দিনের দৃশ্য তৈরি করে"
    },
    {
      id: 'sun_erupts',
      title: "10:30 AM - The Sun Strikes",
      titleBn: "সকাল ১০:৩০ - সূর্যের আঘাত",
      image: image4,
      content: "At exactly 10:30 AM, a massive solar flare erupted from the Sun's surface - what scientists later called an X5.8 class flare, one of the most powerful types. Imagine an explosion releasing the energy of billions of hydrogen bombs in just minutes. This wasn't just any solar flare; it was part of what became known as the Gannon Storm, the most intense space weather event in two decades. The electromagnetic energy raced through space at the speed of light, taking just 8 minutes and 20 seconds to reach Earth. When it hit our planet's upper atmosphere - the ionosphere - it was like throwing a stone into a calm pond, creating ripples and disturbances that would affect technology across the globe.",
      contentBn: "ঠিক সকাল **১০:৩০**-এ সূর্যের পৃষ্ঠ থেকে একটি বিশাল **সৌর ফ্লেয়ার** ছড়িয়ে পড়ল—যাকে বিজ্ঞানীরা পরে **X5.8 শ্রেণীর ফ্লেয়ার** হিসেবে চিহ্নিত করলেন, সবচেয়ে শক্তিশালী ধরনের মধ্যে একটি। কল্পনা করুন এক বিশাল বিস্ফোরণ, যা মাত্র কয়েক মিনিটের মধ্যে কোটি কোটি **হাইড্রোজেন বোমার শক্তি** মুক্ত করে। এটি কোনো সাধারণ সৌর ফ্লেয়ার ছিল না; এটি সেই ঘটনার অংশ যা পরে **গ্যানন ঝড় (Gannon Storm)** নামে পরিচিত হয়, গত **কোটি দুই দশকের মধ্যে সবচেয়ে প্রবল মহাকাশ আবহাওয়ার ঘটনা**।এই **ইলেক্ট্রোম্যাগনেটিক শক্তি** আলো গতির সমান গতিতে মহাকাশে ছড়িয়ে পড়ল, এবং মাত্র **৮ মিনিট ২০ সেকেন্ডে পৃথিবীতে পৌঁছাল**। যখন এটি আমাদের গ্রহের **উপরি বায়ুমণ্ডল—আইওনোস্ফিয়ার**-এ আঘাত করল, তখন তা যেন শান্ত জলাশয়ে পাথর ছোঁড়ার মতো প্রভাব ফেলল, সৃষ্টি করল তরঙ্গ এবং বিঘ্ন, যা পৃথিবী জুড়ে প্রযুক্তির উপর প্রভাব ফেলল।",
      status: "warning",
      narrator: "Jake describes the solar eruption with dramatic detail",
      narratorBn: "জেক নাটকীয় বিস্তারিত সহ সৌর বিস্ফোরণের বর্ণনা দেয়"
    },
    {
      id: 'technology_fails',
      title: "10:45 AM - When Precision Becomes Chaos",
      titleBn: "সকাল ১০:৪৫ - যখন নির্ভুলতা বিশৃঙ্খলা হয়ে ওঠে",
      image: image5,
      content: "Dwane was halfway through his morning planting run when his world turned upside down. The GPS display, which normally showed his position within an inch, suddenly started jumping around wildly. One moment it said he was in the middle of the field, the next it showed him 30 feet away in his neighbor's property. The autonomous tractor, confused by the conflicting signals, began weaving erratically. Instead of straight, precise rows, Dwane watched in horror as his expensive planter created zigzag patterns, overlapping some areas while leaving gaps in others. The GPS wasn't broken - it was being scrambled by the storm raging in the ionosphere 50 miles above his head. Radio waves from GPS satellites were bouncing unpredictably, creating positioning errors of 10 to 30 feet instead of the usual 1-inch accuracy.",
      contentBn: "ডুয়েন তখন তার সকালবেলার বীজবপনের কাজের মাঝপথে ছিল, ঠিক তখনই তার পুরো পৃথিবী উল্টে গেল। জিপিএস স্ক্রিন, যা সাধারণত তার অবস্থান **প্রায় এক ইঞ্চির নির্ভুলতায়** দেখাতো, হঠাৎ অস্থির হয়ে উঠল। এক মুহূর্তে দেখাচ্ছিল সে মাঠের মাঝখানে আছে, পরের মুহূর্তে দেখাচ্ছিল প্রতিবেশীর জমিতে **৩০ ফুট দূরে**। স্বয়ংক্রিয় ট্র্যাক্টরটি, এই বিরোধী সংকেত দেখে বিভ্রান্ত হয়ে, **অস্বাভাবিকভাবে দুলতে** শুরু করল। সরু, নিখুঁত সারির পরিবর্তে, ডুয়েন আতঙ্কিত চোখে দেখল তার **মূল্যবান প্ল্যান্টার** জিগজ্যাগ প্যাটার্ন তৈরি করছে, কিছু এলাকায় ওভারল্যাপ হচ্ছে আর কিছু অংশ ফাঁকা রয়ে যাচ্ছে। জিপিএস ভাঙেনি—এটি **৫০ মাইল ওপরে তার মাথার ওপর বিরাজমান আইওনোস্ফিয়ারে ঝড়** দ্বারা বিভ্রান্ত হয়ে যাচ্ছিল। জিপিএস স্যাটেলাইট থেকে আসা **রেডিও তরঙ্গগুলো অনিয়মিতভাবে প্রতিফলিত** হচ্ছিল, যার ফলে অবস্থান নির্ধারণের ভুল হয় **১০ থেকে ৩০ ফুট** পর্যন্ত, যেখানে সাধারণত এটি **প্রায় এক ইঞ্চির নির্ভুলতা** দেখাতো।",
      status: "error",
      narrator: "Jake describes the moment everything goes wrong",
      narratorBn: "জেক সবকিছু ভুল হয়ে যাওয়ার মুহূর্তের বর্ণনা দেয়"
    },
    {
      id: 'the_decision',
      title: "11:00 AM - An Impossible Choice",
      titleBn: "সকাল ১১:০০ - একটি অসম্ভব পছন্দ",
      image: image6,
      content: "Dwane faced a gut-wrenching decision that no farmer should have to make. Option one: Stop planting and wait for the space weather to clear, potentially missing the narrow planting window and facing reduced yields worth tens of thousands of dollars. Option two: Continue planting with the faulty GPS, wasting expensive seed, creating uneven rows, and making harvest nearly impossible. Option three: Switch to manual steering, but after 30 years of precision agriculture, the old visual markers were gone, and manual planting would mean much lower efficiency and accuracy. Across Kansas, Nebraska, Iowa, and throughout the Corn Belt, hundreds of farmers faced this same impossible choice. Some stopped entirely, others tried to plant manually, and some continued with the faulty GPS, hoping the storm would pass quickly. It didn't.",
      contentBn: "ডুয়েন এমন এক ভয়ঙ্কর সিদ্ধান্তের মুখোমুখি হল যা কোনো কৃষকের উচিত নয় নিতে। বিকল্প এক: বীজ বপন বন্ধ করে বসন্তের **সংকীর্ণ সময়সীমা** শেষ হওয়া পর্যন্ত অপেক্ষা করা, যার ফলে ফসলের উৎপাদন হ্রাস পেতে পারে এবং লক্ষাধিক ডলারের ক্ষতি হতে পারে। বিকল্প দুই: ত্রুটিপূর্ণ জিপিএস ব্যবহার করে বীজ বপন চালিয়ে যাওয়া, যার ফলে মূল্যবান বীজ নষ্ট হবে, সারিগুলো অগোছালো হবে এবং ফসল কাটার কাজ প্রায় অসম্ভব হয়ে উঠবে। বিকল্প তিন: ম্যানুয়াল স্টিয়ারিং ব্যবহার করা, কিন্তু ৩০ বছরের **প্রিসিশন এগ্রিকালচারের** পর পুরানো ভিজ্যুয়াল মার্কারগুলো চলে গেছে, আর ম্যানুয়াল বপন মানে অনেক কম দক্ষতা ও কম নির্ভুলতা।ক্যানসাস, নেব্রাস্কা, আইওয়া এবং পুরো **কর্ন বেল্ট** জুড়ে শত শত কৃষক একই অসম্ভব সিদ্ধান্তের মুখোমুখি হয়েছিল। কেউ পুরোপুরি থেমে গিয়েছিল, কেউ ম্যানুয়ালি বপনের চেষ্টা করেছিল, এবং কেউ ত্রুটিপূর্ণ জিপিএস নিয়ে বীজ বপন চালিয়ে গিয়েছিল, আশায় যে ঝড়টি দ্রুত শেষ হবে। কিন্তু তা হলো না।",
      status: "critical",
      narrator: "Jake explains the devastating choice farmers had to make",
      narratorBn: "জেক ব্যাখ্যা করে কৃষকদের যে বিধ্বংসী পছন্দ করতে হয়েছিল"
    },
    {
      id: 'widespread_impact',
      title: "The Day's End - Counting the Cost",
      titleBn: "দিনের শেষ - খরচ গণনা",
      image: image7,
      content: "By sunset on May 10th, the agricultural impact was staggering. Dwane managed to plant only 50 acres instead of his planned 200, and even those were planted with significant errors. Across the United States and Canada, farmers reported millions of dollars in losses. Misaligned rows meant inefficient harvesting later in the year. Wasted seed meant higher costs. Missed planting windows meant reduced yields. Some farmers lost entire days of critical planting time. The Gannon Storm lasted several days, and each day of disruption multiplied the economic impact. What made it worse was that this happened during a rain-delayed planting season - farmers were already behind schedule, and the space weather made a bad situation catastrophic.",
      contentBn: "মে ১০-এর সূর্যাস্তের সময় কৃষি ক্ষতি ছিল চমকপ্রদ। ডুয়েন তার পরিকল্পিত ২০০ একরের মধ্যে মাত্র ৫০ একর বীজ রোপণ করতে সক্ষম হয়েছিল, এবং সেগুলোও বড় ধরনের ত্রুটিপূর্ণভাবে রোপিত হয়েছিল। যুক্তরাষ্ট্র এবং কানাডা জুড়ে কৃষকরা লক্ষ লক্ষ ডলারের ক্ষতির রিপোর্ট করেছিল। সারিগুলোর অগোছালো বিন্যাসের কারণে বছরের পরে ফসল কাটা অদক্ষ হয়ে গেল। নষ্ট হওয়া বীজ মানে উচ্চতর খরচ। মিস হওয়া বীজ বপনের সময় মানে কম ফলন। কেউ কেউ গুরুত্বপূর্ণ বীজ বপনের পুরো দিন হারিয়েছিল। গ্যানন ঝড় (Gannon Storm) কয়েক দিন স্থায়ী হয়েছিল, এবং প্রতিটি বিঘ্নিত দিন অর্থনৈতিক প্রভাবকে বহুগুণ বাড়িয়েছিল। আরও খারাপ হলো, এটি ঘটল বৃষ্টির কারণে বিলম্বিত বীজ বপনের মৌসুমে—কৃষকরা ইতিমধ্যেই সময়ের পিছনে ছিল, আর মহাকাশ আবহাওয়া পরিস্থিতিকে ভয়াবহ সংকটে রূপান্তরিত করল।",
      status: "aftermath",
      narrator: "Jake reveals the full scope of the agricultural disaster",
      narratorBn: "জেক কৃষি বিপর্যয়ের সম্পূর্ণ পরিসর প্রকাশ করে"
    },
    {
      id: 'lessons_learned',
      title: "Understanding Our Cosmic Connection",
      titleBn: "আমাদের মহাজাগতিক সংযোগ বোঝা",
      image: image8,
      content: "This story shows something incredible about our modern world - a farmer in Kansas is directly connected to our Sun, 93 million miles away. Dwane's livelihood depends on satellites orbiting Earth, which depend on radio waves that can be disrupted by solar storms. It's a reminder that we live in a solar system, not just on Earth. The Gannon Storm taught us that space weather isn't some distant scientific curiosity - it's a real threat to food production, affecting the farmers who feed our nation. Today, scientists work around the clock to predict these storms and warn farmers when GPS might fail. But as our agriculture becomes more dependent on precision technology, understanding and preparing for space weather becomes more critical than ever.",
      contentBn: "এই গল্প আমাদের আধুনিক বিশ্বের এক অসাধারণ দিক দেখায়—ক্যানসাসের একজন কৃষক সরাসরি আমাদের সূর্যের সাথে সংযুক্ত, যা **৯৩ মিলিয়ন মাইল দূরে** অবস্থিত। ডুয়েনের জীবিকা নির্ভর করে পৃথিবীর কক্ষপথে থাকা স্যাটেলাইটগুলোর উপর, যা নির্ভর করে **রেডিও তরঙ্গের উপর**, যা সৌর ঝড় দ্বারা বিঘ্নিত হতে পারে। এটি আমাদের মনে করায় যে আমরা কেবল পৃথিবীতে বাস করি না, আমরা একটি **সৌরজগতের অংশ**। গ্যানন ঝড় আমাদের শিখিয়েছে যে মহাকাশ আবহাওয়া কোনো দূরবর্তী বৈজ্ঞানিক কৌতূহল নয়—এটি খাদ্য উৎপাদনের জন্য একটি বাস্তব হুমকি, যা আমাদের জাতিকে খাদ্য সরবরাহকারী কৃষকদের প্রভাবিত করে। আজকাল বিজ্ঞানীরা প্রতিনিয়ত কাজ করছেন এই ঝড়গুলো পূর্বাভাস দেওয়ার জন্য এবং কৃষকদের সতর্ক করার জন্য যখন জিপিএস ব্যর্থ হতে পারে। কিন্তু যেমন আমাদের কৃষি ক্রমেই **নিখুঁত প্রযুক্তির উপর নির্ভরশীল** হচ্ছে, মহাকাশ আবহাওয়া বোঝা এবং তার জন্য প্রস্তুত থাকা আগের চেয়ে অনেক বেশি গুরুত্বপূর্ণ হয়ে উঠেছে।",
      status: "reflection",
      narrator: "Jake reflects on the deeper meaning of the story",
      narratorBn: "জেক গল্পের গভীর অর্থের উপর প্রতিফলন করে"
    }
  ];

  // Quiz questions
  const quizQuestions = {
    english: [
      {
        question: "How long has Farmer Dwane been farming?",
        options: ["Over 20 years", "Over 30 years", "Over 40 years", "Over 25 years"],
        correctAnswer: 1
      },
      {
        question: "How many acres is Dwane's farm?",
        options: ["1,500 acres", "2,000 acres", "2,500 acres", "1,800 acres"],
        correctAnswer: 1
      },
      {
        question: "What time did Dwane start planting on May 10th, 2024?",
        options: ["5:00 AM", "5:30 AM", "6:00 AM", "6:30 AM"],
        correctAnswer: 1
      },
      {
        question: "How much did Dwane's precision planter cost?",
        options: ["$300,000", "$400,000", "$500,000", "$600,000"],
        correctAnswer: 2
      },
      {
        question: "What time did the solar flare erupt?",
        options: ["10:00 AM", "10:30 AM", "11:00 AM", "10:15 AM"],
        correctAnswer: 1
      },
      {
        question: "What class of solar flare was it?",
        options: ["X4.8", "X5.8", "X6.8", "X7.8"],
        correctAnswer: 1
      },
      {
        question: "How many acres did Dwane manage to plant instead of his planned 200?",
        options: ["30 acres", "40 acres", "50 acres", "60 acres"],
        correctAnswer: 2
      },
      {
        question: "How far above Earth do GPS satellites orbit?",
        options: ["10,500 miles", "12,500 miles", "15,000 miles", "18,000 miles"],
        correctAnswer: 1
      }
    ],
    bengali: [
      {
        question: "কৃষক ডোয়েন কত বছর ধরে চাষাবাদ করছেন?",
        options: ["২০ বছরেরও বেশি", "৩০ বছরেরও বেশি", "৪০ বছরেরও বেশি", "২৫ বছরেরও বেশি"],
        correctAnswer: 1
      },
      {
        question: "ডোয়েনের খামার কত একর?",
        options: ["১,৫০০ একর", "২,০০০ একর", "২,৫০০ একর", "১,৮০০ একর"],
        correctAnswer: 1
      },
      {
        question: "১০ মে, ২০২৪ তারিখে ডোয়েন কখন রোপণ শুরু করেছিলেন?",
        options: ["সকাল ৫:০০", "সকাল ৫:৩০", "সকাল ৬:০০", "সকাল ৬:৩০"],
        correctAnswer: 1
      },
      {
        question: "ডোয়েনের নির্ভুল রোপণকারী যন্ত্রের দাম কত ছিল?",
        options: ["$৩০০,০০০", "$৪০০,০০০", "$৫০০,০০০", "$৬০০,০০০"],
        correctAnswer: 2
      },
      {
        question: "সৌর শিখা কখন বিস্ফোরিত হয়েছিল?",
        options: ["সকাল ১০:০০", "সকাল ১০:৩০", "সকাল ১১:০০", "সকাল ১০:১৫"],
        correctAnswer: 1
      },
      {
        question: "এটি কোন শ্রেণীর সৌর শিখা ছিল?",
        options: ["X4.8", "X5.8", "X6.8", "X7.8"],
        correctAnswer: 1
      },
      {
        question: "ডোয়েন তার পরিকল্পিত ২০০ একরের পরিবর্তে কত একর রোপণ করতে পেরেছিলেন?",
        options: ["৩০ একর", "৪০ একর", "৫০ একর", "৬০ একর"],
        correctAnswer: 2
      },
      {
        question: "জিপিএস স্যাটেলাইটগুলি পৃথিবীর কত মাইল উপরে প্রদক্ষিণ করে?",
        options: ["১০,৫০০ মাইল", "১২,৫০০ মাইল", "১৫,০০০ মাইল", "১৮,০০০ মাইল"],
        correctAnswer: 1
      }
    ]
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentScene(prev => (prev + 1) % scenes.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, scenes.length]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'normal': return 'from-green-500 to-blue-500';
      case 'warning': return 'from-yellow-500 to-orange-500';
      case 'error': return 'from-red-500 to-pink-500';
      case 'critical': return 'from-purple-500 to-red-600';
      case 'aftermath': return 'from-gray-600 to-gray-800';
      case 'reflection': return 'from-blue-600 to-purple-600';
      default: return 'from-blue-500 to-purple-500';
    }
  };

  const nextScene = () => {
    setCurrentScene((prev) => (prev + 1) % scenes.length);
    setIsAutoPlaying(false);
  };

  const prevScene = () => {
    setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const goHome = () => {
    router.push('/');
  };

  const toggleLanguage = () => {
    setIsBengali(!isBengali);
  };

  // Quiz functions
  const startQuiz = () => {
    setShowQuiz(true);
    setCurrentQuizQuestion(0);
    setQuizAnswers([]);
    setQuizScore(null);
  };

  const answerQuiz = (answer) => {
    const newAnswers = [...quizAnswers, answer];
    setQuizAnswers(newAnswers);

    const currentQuestions = isBengali ? quizQuestions.bengali : quizQuestions.english;

    if (currentQuizQuestion < currentQuestions.length - 1) {
      setCurrentQuizQuestion(prev => prev + 1);
    } else {
      // Calculate score
      const correctAnswers = newAnswers.filter((answer, index) => 
        answer === currentQuestions[index].correctAnswer
      ).length;
      setQuizScore(correctAnswers);
    }
  };

  const resetQuiz = () => {
    setShowQuiz(false);
    setCurrentQuizQuestion(0);
    setQuizAnswers([]);
    setQuizScore(null);
  };

  const currentSceneData = scenes[currentScene];
  const currentQuestions = isBengali ? quizQuestions.bengali : quizQuestions.english;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-yellow-900 to-brown-900 text-white">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-green-500/30 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={goHome}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              {isBengali ? 'হোমে যান' : 'Go to Home'}
            </button>
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 rounded-lg transition-colors"
            >
              <Globe className="w-5 h-5" />
              {isBengali ? 'English' : 'বাংলা'}
            </button>
          </div>
          
          {/* Main Header */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full">
              <Tractor className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-green-300">
                {isBengali ? 'যেদিন জিপিএস ব্যর্থ হয়েছিল' : 'The Day the GPS Failed'}
              </h1>
              <p className="text-xl text-gray-300">
                {isBengali ? 'মহাকাশের আবহাওয়া এবং আধুনিক চাষাবাদের একটি সত্য গল্প' : 'A True Story of Space Weather and Modern Farming'}
              </p>
              <p className="text-gray-400 flex items-center gap-2 mt-2">
                <User className="w-4 h-4" />
                {isBengali ? 'বর্ণিত: জেক, বয়স ১৬' : 'Told by Jake, age 16'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Scene Navigator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-green-300">
              {isBengali ? `অধ্যায় ${currentScene + 1} এর ${scenes.length}` : `Chapter ${currentScene + 1} of ${scenes.length}`}
            </h2>
            <button
              onClick={toggleAutoPlay}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isAutoPlaying
                  ? 'bg-yellow-600 hover:bg-yellow-500 text-white'
                  : 'bg-gray-600 hover:bg-gray-500 text-gray-200'
              }`}
            >
              {isAutoPlaying 
                ? (isBengali ? 'স্বয়ংক্রিয় পড়া' : 'Auto Reading') 
                : (isBengali ? 'ম্যানুয়াল মোড' : 'Manual Mode')
              }
            </button>
          </div>
          <div className="bg-gray-800 rounded-full h-3 mb-6">
            <div
              className="bg-gradient-to-r from-green-400 to-yellow-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentScene + 1) / scenes.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Story Display */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Image Display */}
          <div className="lg:col-span-1">
            <div className={`bg-gradient-to-br ${getStatusColor(currentSceneData.status)} p-1 rounded-2xl`}>
              <Image
                src={currentSceneData.image}
                alt={isBengali ? currentSceneData.titleBn : currentSceneData.title}
                width={600}
                height={700}
                className="h-100 w-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Story Content */}
          <div className="lg:col-span-2">
            <div className={`bg-gradient-to-br ${getStatusColor(currentSceneData.status)} p-1 rounded-2xl`}>
              <div className="bg-black/80 rounded-2xl p-8 h-full">
                <h3 className="text-3xl font-bold mb-4 text-yellow-300">
                  {isBengali ? currentSceneData.titleBn : currentSceneData.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 italic">
                  {isBengali ? currentSceneData.narratorBn : currentSceneData.narrator}
                </p>
                <p className="text-lg text-gray-100 leading-relaxed line-height-loose">
                  {isBengali ? currentSceneData.contentBn : currentSceneData.content}
                </p>

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevScene}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    {isBengali ? 'পূর্ববর্তী অধ্যায়' : 'Previous Chapter'}
                  </button>
                  <button
                    onClick={nextScene}
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg transition-colors"
                  >
                    {isBengali ? 'পরবর্তী অধ্যায়' : 'Next Chapter'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter Summary and Facts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30">
            <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {isBengali ? 'সময়রেখা: ১০ মে, ২০২ৄ' : 'Timeline: May 10, 2024'}
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'সকাল ৫:৩০' : '5:30 AM'}</span>
                <span className="text-green-400">{isBengali ? 'স্বাভাবিক কার্যক্রম শুরু' : 'Normal Operations Begin'}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'সকাল ১০:৩০' : '10:30 AM'}</span>
                <span className="text-yellow-400">{isBengali ? 'সৌর শিখা বিস্ফোরণ' : 'Solar Flare Erupts'}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'সকাল ১০:৪৫' : '10:45 AM'}</span>
                <span className="text-red-400">{isBengali ? 'জিপিএস সিস্টেম ব্যর্থ' : 'GPS Systems Fail'}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'সন্ধ্যা' : 'Evening'}</span>
                <span className="text-purple-400">{isBengali ? 'বিশাল ক্ষতির রিপোর্ট' : 'Massive Losses Reported'}</span>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
            <h3 className="text-xl font-bold text-green-300 mb-4">
              {isBengali ? 'চমৎকার খামারের তথ্য' : 'Amazing Farm Facts'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'আধুনিক ট্রাক্টর ১ ইঞ্চি নির্ভুলতার জন্য ২৪টি জিপিএস স্যাটেলাইট ব্যবহার করে'
                    : 'Modern tractors use 24 GPS satellites for 1-inch accuracy'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'নির্ভুল চাষাবাদ প্রতি ক্ষেত্রে ৩-৫% ফলন বৃদ্ধি করে'
                    : 'Precision farming increases yields by 3-5% per field'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? '২,০০০ একর খামার রোপণ বিলম্বের কারণে $১০০,০০০+ হারাতে পারে'
                    : 'A 2,000-acre farm can lose $100,000+ from planting delays'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'সৌর ঝড় ঘন্টা বা এমনকি দিনের জন্য জিপিএস ব্যাহত করতে পারে'
                    : 'Solar storms can disrupt GPS for hours or even days'
                  }
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Real Science */}
        <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-8 border border-yellow-500/30 mb-8">
          <h3 className="text-3xl font-bold text-yellow-300 mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8" />
            {isBengali ? 'গল্পের পিছনে প্রকৃত বিজ্ঞান' : 'The Real Science Behind the Story'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-orange-300 mb-4">
                {isBengali ? 'জিপিএস কীভাবে কাজ করে' : 'How GPS Works'}
              </h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                {isBengali 
                  ? 'জিপিএস পৃথিবীর ১২,৫০০ মাইল উপরে স্যাটেলাইট থেকে রেডিও সংকেতের উপর নির্ভর করে। এই সংকেতগুলি আয়নোস্ফিয়ারের মধ্য দিয়ে ভ্রমণ করে, যা ৫০-৪০০ মাইল উপরে চার্জযুক্ত কণার একটি স্তর। মহাকাশের আবহাওয়ার ঘটনাগুলির সময়, সৌর বিকিরণ আয়নোস্ফিয়ারকে উত্তেজিত করে, যার ফলে এটি জিপিএস সংকেতগুলিকে অনির্দেশ্যভাবে বাঁকায় এবং বিলম্বিত করে।'
                  : 'GPS relies on radio signals from satellites 12,500 miles above Earth. These signals travel through the ionosphere, a layer of charged particles 50-400 miles up. During space weather events, solar radiation energizes the ionosphere, causing it to bend and delay GPS signals unpredictably.'
                }
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-orange-300 mb-4">
                {isBengali ? 'গ্যানন ঝড়ের প্রভাব' : 'The Gannon Storm Impact'}
              </h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                {isBengali 
                  ? 'মে ২০২৪ এর গ্যানন ঝড় ছিল ২০ বছরের সবচেয়ে তীব্র মহাকাশ আবহাওয়া ঘটনা। এটি গুরুত্বপূর্ণ রোপণ মৌসুমে উত্তর আমেরিকা জুড়ে ১০-৩০ ফুট জিপিএস ত্রুটির কারণ হয়েছিল, হাজার হাজার খামারকে প্রভাবিত করে এবং কৃষিতে লক্ষ লক্ষ ডলার ক্ষতির কারণ হয়েছিল।'
                  : 'The May 2024 Gannon Storm was the most intense space weather event in 20 years. It caused GPS errors of 10-30 feet across North America during critical planting season, affecting thousands of farms and causing millions in agricultural losses.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-500 hover:to-yellow-500 px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105">
            {isBengali ? 'আরও গল্প পড়ুন' : 'Read More Stories'}
          </button>
          <button className="bg-transparent border-2 border-green-400 hover:bg-green-400 hover:text-black px-8 py-4 rounded-full text-xl font-bold transition-all duration-300">
            {isBengali ? 'মহাকাশের আবহাওয়া সম্পর্কে জানুন' : 'Learn About Space Weather'}
          </button>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-green-500/30 mt-8">
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-center text-green-300 mb-8">
            {isBengali ? 'গল্পের কুইজ' : 'Story Quiz'}
          </h2>
          
          {/* Quiz Toggle Button */}
          {!showQuiz && (
            <div className="flex justify-center mb-8">
              <button 
                onClick={startQuiz}
                className="px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-500 hover:to-yellow-500 text-white"
              >
                🧠 {isBengali ? 'কুইজ শুরু করুন' : 'Start Quiz'}
              </button>
            </div>
          )}

          {/* Quiz Interface */}
          {showQuiz && (
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                {isBengali ? 'গল্পের কুইজ' : 'Story Quiz'}
              </h3>
              
              {quizScore !== null ? (
                // Quiz Results
                <div className="text-center py-8">
                  <h4 className="text-3xl font-bold text-green-300 mb-4">
                    {isBengali ? 'কুইজ সম্পন্ন!' : 'Quiz Complete!'}
                  </h4>
                  <p className="text-2xl text-white mb-6">
                    {isBengali ? 'আপনার স্কোর' : 'Your Score'}: {quizScore}/{currentQuestions.length}
                  </p>
                  <div className="mb-6">
                    <div className="text-lg text-gray-300 mb-4">
                      {quizScore === currentQuestions.length ? 
                        (isBengali ? '🎉 চমৎকার! সব ঠিক!' : '🎉 Perfect! All correct!') :
                        quizScore >= currentQuestions.length * 0.8 ?
                        (isBengali ? '👏 খুব ভাল!' : '👏 Great job!') :
                        quizScore >= currentQuestions.length * 0.6 ?
                        (isBengali ? '👍 ভাল চেষ্টা!' : '👍 Good effort!') :
                        (isBengali ? '📚 আরও অনুশীলন করুন!' : '📚 Keep practicing!')
                      }
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={resetQuiz}
                      className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg transition-colors"
                    >
                      {isBengali ? 'আবার চেষ্টা করুন' : 'Try Again'}
                    </button>
                    <button
                      onClick={() => setShowQuiz(false)}
                      className="px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors"
                    >
                      {isBengali ? 'বন্ধ করুন' : 'Close'}
                    </button>
                  </div>
                </div>
              ) : (
                // Quiz Question
                <div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">
                      {isBengali ? 'প্রশ্ন' : 'Question'} {currentQuizQuestion + 1} {isBengali ? 'এর' : 'of'} {currentQuestions.length}
                    </p>
                    <div className="bg-gray-700 rounded-full h-2 mb-4">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuizQuestion + 1) / currentQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-6">
                    {currentQuestions[currentQuizQuestion]?.question}
                  </h4>
                  
                  <div className="grid gap-3">
                    {currentQuestions[currentQuizQuestion]?.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => answerQuiz(index)}
                        className="p-4 bg-gray-800 hover:bg-green-700 border border-gray-600 hover:border-green-500 rounded-lg text-left transition-all duration-200 transform hover:scale-[1.02]"
                      >
                        <span className="font-medium text-green-400 mr-3">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Source Citation Footer */}
      <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm border-t border-gray-500/30 mt-8">
        <div className="max-w-6xl mx-auto p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-300 mb-4">
              {isBengali ? 'গবেষণা সূত্র' : 'Research Source'}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              {isBengali 
                ? 'এই গল্পটি অনুপ্রাণিত হয়েছে থেকে:'
                : 'This story is inspired by:'
              }
            </p>
            <div className="inline-block bg-gray-800/50 border border-gray-600/50 rounded-lg p-4">
              <p className="text-green-400 font-mono text-sm">
                Results-of-the-First-National-Survey-of-User-Needs-for-Space-Weather-2024.pdf
              </p>
              <p className="text-gray-500 text-xs mt-2">
                {isBengali 
                  ? 'মহাকাশ আবহাওয়া ব্যবহারকারীদের প্রয়োজন সম্পর্কে প্রথম জাতীয় সমীক্ষার ফলাফল ২০২৪'
                  : 'Results of the First National Survey of User Needs for Space Weather 2024'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmersImpactStory;

 
 

'use client';

import React, { useState, useEffect } from 'react';
import { Globe, Plane, Radio, AlertTriangle, Navigation, Clock, ArrowLeft, ArrowRight, CheckCircle, Zap, User, WifiOff, Home } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Import all images
// Note: These paths are placeholders. Ensure your images are in the correct directory.
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import image8 from './image8.png';

const PilotsImpactStory = () => {
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
    title: "Meet Captain Sarah Chen",
    titleBn: "ক্যাপ্টেন সারাহ চেনের সাথে পরিচয়",
    image: image1,
    content: "Hey there! I'm Emma, and I'm going to tell you about Captain Sarah Chen, one of the coolest pilots I know. She's been flying commercial jets for United Airlines for 15 years, and she's taken millions of passengers safely across the world. Sarah specializes in polar routes - those amazing flights that go over the top of the world to save time and fuel. Flying from San Francisco to Paris normally takes her right over the North Pole, cruising at 40,000 feet through some of the most beautiful but dangerous airspace on Earth. These polar flights save hours of travel time, but they come with unique challenges that most people never think about.",
    contentBn: "হ্যালো! আমি এমা, এবং আমি আপনাদের ক্যাপ্টেন সারাহ চেন সম্পর্কে বলতে যাচ্ছি, যিনি আমার পরিচিত সবচেয়ে দুর্দান্ত পাইলটদের একজন। তিনি ১৫ বছর ধরে ইউনাইটেড এয়ারলাইন্সে বাণিজ্যিক জেট উড়াচ্ছেন এবং লক্ষ লক্ষ যাত্রীকে নিরাপদে বিশ্বজুড়ে নিয়ে গেছেন। সারাহ মেরু পথে বিশেষত্ব রাখেন - যে অসাধারণ ফ্লাইটগুলি সময় এবং জ্বালানি সাশ্রয়ের জন্য বিশ্বের উপর দিয়ে যায়। স্যান ফ্রান্সিসকো থেকে প্যারিসে ফ্লাইট সাধারণত উত্তর মেরুর উপর দিয়ে যায়, ৪০,০০০ ফুট উচ্চতায় পৃথিবীর সবচেয়ে সুন্দর কিন্তু বিপজ্জনক আকাশসীমার মধ্য দিয়ে। এই মেরু ফ্লাইটগুলি ভ্রমণের সময় ঘণ্টা সাশ্রয় করে, কিন্তু এগুলো অনন্য চ্যালেঞ্জ নিয়ে আসে যা বেশিরভাগ মানুষ কখনো ভাবে না।",
    status: "normal",
    narrator: "Emma introduces us to an experienced polar route pilot",
    narratorBn: "এমা আমাদের একজন অভিজ্ঞ মেরু পথের পাইলটের সাথে পরিচয় করিয়ে দেয়"
  },
  {
    id: 'polar_routes',
    title: "The Magic and Danger of Polar Flying",
    titleBn: "মেরু উড়ানের জাদু এবং বিপদ",
    image: image2,
    content: "Polar flights are incredible engineering marvels. Sarah's Boeing 777 can fly over the North Pole because it takes the shortest path between two points on our round Earth - what we call a 'great circle route.' But flying over the poles isn't just about navigation; it's about survival in one of Earth's harshest environments. At 70 degrees North latitude, if something goes wrong, the nearest airport might be 1,000 miles away. That's why polar flights require special equipment, extra fuel, and constant communication with air traffic control. Sarah's plane has multiple backup radios, satellite communication systems, and emergency supplies. The crew is specially trained for extreme cold weather survival, and every system is designed with redundancy in mind.",
    contentBn: "মেরু ফ্লাইটগুলি অবিশ্বাস্য প্রকৌশল বিস্ময়। সারাহের বোয়িং ৭৭৭ উত্তর মেরুর উপর দিয়ে উড়তে পারে কারণ এটি আমাদের গোলাকার পৃথিবীতে দুটি বিন্দুর মধ্যে সবচেয়ে ছোট পথ নেয় - যাকে আমরা 'গ্রেট সার্কেল রুট' বলি। কিন্তু মেরুর উপর দিয়ে উড়ান শুধু নেভিগেশন নিয়ে নয়; এটি পৃথিবীর সবচেয়ে কঠিন পরিবেশে বেঁচে থাকার বিষয়। ৭০ ডিগ্রি উত্তর অক্ষাংশে, যদি কিছু ভুল হয়ে যায়, তাহলে নিকটতম বিমানবন্দর ১,০০০ মাইল দূরে হতে পারে। এজন্যই মেরু ফ্লাইটগুলির বিশেষ সরঞ্জাম, অতিরিক্ত জ্বালানি এবং এয়ার ট্রাফিক কন্ট্রোলের সাথে নিরন্তর যোগাযোগ প্রয়োজন। সারাহের বিমানে একাধিক ব্যাকআপ রেডিও, স্যাটেলাইট যোগাযোগ ব্যবস্থা এবং জরুরি সরবরাহ রয়েছে। ক্রুরা চরম ঠান্ড আবহাওয়ায় বেঁচে থাকার জন্য বিশেষভাবে প্রশিক্ষিত, এবং প্রতিটি সিস্টেম অতিরিক্ত নিরাপত্তা মাথায় রেখে ডিজাইন করা।",
    status: "normal",
    narrator: "Emma explains the complexity and risks of polar aviation",
    narratorBn: "এমা মেরু বিমান চালনার জটিলতা এবং ঝুঁকি ব্যাখ্যা করে"
  },
  {
    id: 'may_tenth_departure',
    title: "May 10th, 2024 - The Flight Dream Prepares",
    titleBn: "১০ মে, ২০২৪ - ফ্লাইট ড্রিম প্রস্তুতি নেয়",
    image: image3,
    content: "It was a beautiful evening at San Francisco International Airport when Sarah began her pre-flight preparations for Flight Dream to Paris. The weather looked perfect - clear skies all the way to Europe. Her planned route would take them over Seattle, across Canada's Hudson Bay, over Greenland, past Iceland, and into Paris. Flying time: 10 hours and 45 minutes at altitudes between 38,000 and 40,000 feet. Sarah had made this exact flight hundreds of times. As she reviewed the flight plan with her co-pilot, everything seemed routine. The passengers - 300 people including families, business travelers, and a few scientists - were boarding normally. None of them knew they were about to experience one of the most dramatic flight path changes in modern aviation history.",
    contentBn: "স্যান ফ্রান্সিসকো আন্তর্জাতিক বিমানবন্দরে এটি একটি সুন্দর সন্ধ্যা ছিল যখন সারাহ প্যারিসগামী ফ্লাইট ড্রিমের জন্য তার প্রি-ফ্লাইট প্রস্তুতি শুরু করেছিলেন। আবহাওয়া নিখুঁত দেখাচ্ছিল - ইউরোপ পর্যন্ত সর্বত্র পরিষ্কার আকাশ। তার পরিকল্পিত পথ তাদের সিয়াটলের উপর দিয়ে, কানাডার হাডসন উপসাগর অতিক্রম করে, গ্রিনল্যান্ডের উপর দিয়ে, আইসল্যান্ড অতিক্রম করে প্যারিসে নিয়ে যাবে। ফ্লাইটের সময়: ৩৮,০০০ থেকে ৪০,০০০ ফুট উচ্চতায় ১০ ঘন্টা ৪৫ মিনিট। সারাহ এই একই ফ্লাইট শত শত বার করেছেন। তিনি যখন তার সহ-পাইলটের সাথে ফ্লাইট প্ল্যান পর্যালোচনা করছিলেন, সবকিছুই রুটিনের মত মনে হচ্ছিল। যাত্রীরা - পরিবার, ব্যবসায়িক ভ্রমণকারী এবং কয়েকজন বিজ্ঞানী সহ ৩০০ জন - স্বাভাবিকভাবে বোর্ড করছিলেন। তাদের কেউই জানতেন না যে তারা আধুনিক বিমান চালনার ইতিহাসে সবচেয়ে নাটকীয় ফ্লাইট পথ পরিবর্তনের একটি অভিজ্ঞতা করতে চলেছেন।",
    status: "normal",
    narrator: "Emma sets up the routine beginning of an extraordinary flight",
    narratorBn: "এমা একটি অসাধারণ ফ্লাইটের রুটিন শুরুর পরিস্থিতি তৈরি করে"
  },
  {
    id: 'storm_brewing',
    title: "The Sun Unleashes Its Fury",
    titleBn: "সূর্য তার ক্রোধ উন্মোচন করে",
    image: image4,
    content: "While Sarah was conducting her final checks, something extraordinary was happening 93 million miles away. The Sun was building up to release what would become the most powerful space weather event in 20 years - the Gannon Storm. Solar flares had been erupting all day, sending massive bursts of electromagnetic energy racing toward Earth at the speed of light. These weren't ordinary solar flares; they were X-class monsters, each one carrying the energy of billions of hydrogen bombs. The charged particles would take 1-3 days to reach Earth, but the electromagnetic radiation was already disrupting radio communications around the globe. Flight operations centers worldwide were starting to see the first signs of trouble.",
    contentBn: "সারাহ যখন তার চূড়ান্ত পরীক্ষাগুলি পরিচালনা করছিলেন, তখন ৯৩ মিলিয়ন মাইল দূরে কিছু অসাধারণ ঘটনা ঘটছিল। সূর্য ২০ বছরের সবচেয়ে শক্তিশালী মহাকাশ আবহাওয়া ঘটনা - গ্যানন ঝড় - মুক্ত করার জন্য শক্তি সঞ্চয় করছিল। সারাদিন ধরে সৌর অগ্ন্যুৎপাত ঘটছিল, আলোর গতিতে পৃথিবীর দিকে বিশাল ইলেক্ট্রোম্যাগনেটিক শক্তির বিস্ফোরণ পাঠাচ্ছিল। এগুলি সাধারণ সৌর অগ্ন্যুৎপাত ছিল না; এগুলি ছিল X-শ্রেণীর দানব, প্রতিটি বিলিয়ন হাইড্রোজেন বোমার শক্তি বহন করছিল। চার্জযুক্ত কণাগুলো পৃথিবীতে পৌঁছাতে ১-৩ দিন সময় নেবে, কিন্তু ইলেক্ট্রোম্যাগনেটিক বিকিরণ ইতিমধ্যে বিশ্বজুড়ে রেডিও যোগাযোগ ব্যাহত করছিল। বিশ্বব্যাপী ফ্লাইট অপারেশন কেন্দ্রগুলো সমস্যার প্রথম লক্ষণ দেখতে শুরু করেছিল।",
    status: "warning",
    narrator: "Emma describes the cosmic forces building toward disaster",
    narratorBn: "এমা বিপর্যয়ের দিকে তৈরি হওয়া মহাজাগতিক শক্তির বর্ণনা দেয়"
  },
  {
    id: 'communications_fail',
    title: "10:30 PM - Radio Silence Over the Arctic",
    titleBn: "রাত ১০:৩০ - আর্কটিকের উপর রেডিও নীরবতা",
    image: image5,
    content: "Sarah was three hours into her flight, cruising peacefully over northern Canada, when her radio crackled with static and then went completely silent. She tried switching frequencies - nothing. Her co-pilot attempted to contact air traffic control on backup radios - more static. For a pilot, losing radio communication is like driving blindfolded. Sarah couldn't talk to air traffic controllers who guide planes safely around each other, couldn't receive weather updates, and couldn't coordinate with her airline's operations center. The high-frequency radios that work so well at lower latitudes become unreliable near the poles during space weather events. The solar radiation was wreaking havoc on the ionosphere - the layer of atmosphere that radio waves bounce off to travel long distances.",
    contentBn: "সারাহ তার ফ্লাইটের তিন ঘন্টা অতিবাহিত করেছেন, উত্তর কানাডার উপর শান্তিতে ভ্রমণ করছিলেন, যখন তার রেডিও স্ট্যাটিক শব্দ করে এবং তারপর সম্পূর্ণ নীরব হয়ে যায়। তিনি ফ্রিকোয়েন্সি পরিবর্তন করার চেষ্টা করলেন - কিছুই নেই। তার সহ-পাইলট ব্যাকআপ রেডিওতে এয়ার ট্রাফিক কন্ট্রোলের সাথে যোগাযোগের চেষ্টা করলেন - আরও স্ট্যাটিক। একজন পাইলটের জন্য, রেডিও যোগাযোগ হারানো চোখ বেঁধে গাড়ি চালানোর মতো। সারাহ এয়ার ট্রাফিক কন্ট্রোলারদের সাথে কথা বলতে পারছিলেন না যারা বিমানগুলিকে একে অপরের চারপাশে নিরাপদে পরিচালনা করেন, আবহাওয়ার আপডেট পেতে পারছিলেন না, এবং তার এয়ারলাইনের অপারেশন কেন্দ্রের সাথে সমন্বয় করতে পারছিলেন না। নিম্ন অক্ষাংশে যে উচ্চ-ফ্রিকোয়েন্সি রেডিওগুলো খুব ভাল কাজ করে সেগুলো মহাকাশ আবহাওয়ার ঘটনার সময় মেরুর কাছে অবিশ্বস্ত হয়ে ওঠে। সৌর বিকিরণ আয়নোস্ফিয়ারে তাণ্ডব সৃষ্টি করছিল - বায়ুমণ্ডলের সেই স্তর যা থেকে রেডিও তরঙ্গ প্রতিফলিত হয়ে দীর্ঘ দূরত্ব ভ্রমণ করে।",
    status: "critical",
    narrator: "Emma describes the terrifying moment communications failed",
    narratorBn: "এমা যোগাযোগ ব্যর্থ হওয়ার ভয়ংকর মুহূর্তের বর্ণনা দেয়"
  },
  {
    id: 'critical_decision',
    title: "The Flight Path That Changed Everything",
    titleBn: "ফ্লাইট পথ যা সবকিছু বদলে দিয়েছিল",
    image: image6,
    content: "Faced with complete radio silence over one of Earth's most remote regions, Sarah had to make a split-second decision that would affect 300 lives. She could continue on her planned polar route and hope communications would return, risking flying 'blind' over the Arctic for hours. Or she could execute an emergency diversion to a more southern route where backup communication systems might work. Sarah chose safety over efficiency. Instead of flying at 70 degrees North over the pole, she turned south to fly at just 43 degrees North - roughly the latitude of Chicago. This meant flying 40 degrees further south than planned, adding hundreds of miles to the journey and consuming precious fuel. The new route took them across the continental United States, well south of Canada, and across the Atlantic at a much lower latitude.",
    contentBn: "পৃথিবীর সবচেয়ে দূরবর্তী অঞ্চলগুলির একটিতে সম্পূর্ণ রেডিও নীরবতার মুখে, সারাহকে একটি তাৎক্ষণিক সিদ্ধান্ত নিতে হয়েছিল যা ৩০০ জনের জীবনকে প্রভাবিত করবে। তিনি তার পরিকল্পিত মেরু পথে চালিয়ে যেতে পারতেন এবং আশা করতে পারতেন যে যোগাযোগ ফিরে আসবে, ঘন্টার পর ঘন্টা আর্কটিকের উপর 'অন্ধ' উড়ানের ঝুঁকি নিয়ে। অথবা তিনি আরও দক্ষিণ পথে জরুরি বিপথগমন সম্পাদন করতে পারতেন যেখানে ব্যাকআপ যোগাযোগ ব্যবস্থা কাজ করতে পারে। সারাহ দক্ষতার চেয়ে নিরাপত্তা বেছে নিলেন। মেরুর উপর ৭০ ডিগ্রি উত্তরে উড়ানের পরিবর্তে, তিনি দক্ষিণে ঘুরে মাত্র ৪৩ ডিগ্রি উত্তরে - মোটামুটি শিকাগোর অক্ষাংশে উড়লেন। এর মানে পরিকল্পিত থেকে ৄ০ ডিগ্রি বেশি দক্ষিণে উড়ান, যাত্রায় শত শত মাইল যোগ করা এবং মূল্যবান জ্বালানি খরচ করা। নতুন পথ তাদের কন্টিনেন্টাল যুক্তরাষ্ট্র জুড়ে, কানাডার অনেক দক্ষিণে এবং অনেক কম অক্ষাংশে আটলান্টিক জুড়ে নিয়ে গেল।",
    status: "critical",
    narrator: "Emma explains the life-saving decision Sarah had to make",
    narratorBn: "এমা সারাহকে যে জীবনরক্ষাকারী সিদ্ধান্ত নিতে হয়েছিল তা ব্যাখ্যা করে"
  },
  {
    id: 'radiation_concerns',
    title: "Hidden Danger: Cosmic Radiation",
    titleBn: "লুকানো বিপদ: মহাজাগতিক বিকিরণ",
    image: image7,
    content: "What passengers didn't realize was that Sarah's route change wasn't just about communication - it was also about radiation safety. During severe space weather events, cosmic radiation increases dramatically, especially at high altitudes and polar regions. At 40,000 feet near the North Pole, radiation levels during the Gannon Storm reached dangerous levels. A scientist on board Sarah's flight was actually monitoring radiation with special equipment, and the readings were concerning. By flying at lower latitudes, Sarah reduced everyone's radiation exposure significantly. The southern route meant longer flight time but much safer radiation levels. This is why airlines have special procedures for space weather - pilot safety training includes understanding when to avoid polar routes to protect passengers and crew from excessive radiation exposure.",
    contentBn: "যাত্রীরা যা বুঝতে পারেননি তা হল সারাহের পথ পরিবর্তন শুধু যোগাযোগের বিষয়ে ছিল না - এটি বিকিরণ নিরাপত্তার বিষয়েও ছিল। গুরুতর মহাকাশ আবহাওয়ার ঘটনাগুলির সময়, মহাজাগতিক বিকিরণ নাটকীয়ভাবে বৃদ্ধি পায়, বিশেষ করে উচ্চ উচ্চতা এবং মেরু অঞ্চলে। উত্তর মেরুর কাছে  ৪০,০০০ ফুট উচ্চতায়, গ্যানন ঝড়ের সময় বিকিরণের মাত্রা বিপজ্জনক পর্যায়ে পৌঁছেছিল। সারাহের ফ্লাইটে থাকা একজন বিজ্ঞানী আসলে বিশেষ সরঞ্জাম দিয়ে বিকিরণ পর্যবেক্ষণ করছিলেন, এবং রিডিংগুলি উদ্বেগজনক ছিল। নিম্ন অক্ষাংশে উড়ে, সারাহ সকলের বিকিরণ এক্সপোজার উল্লেখযোগ্যভাবে কমিয়েছিলেন। দক্ষিণ পথের মানে দীর্ঘ ফ্লাইট সময় কিন্তু অনেক নিরাপদ বিকিরণের মাত্রা। এজন্যই এয়ারলাইনগুলোর মহাকাশ আবহাওয়ার জন্য বিশেষ পদ্ধতি রয়েছে - পাইলট নিরাপত্তা প্রশিক্ষণে অতিরিক্ত বিকিরণ এক্সপোজার থেকে যাত্রী এবং ক্রুদের রক্ষা করার জন্য কখন মেরু পথ এড়াতে হবে তা বোঝা অন্তর্ভুক্ত।",
    status: "critical",
    narrator: "Emma reveals the hidden radiation danger most people never know about",
    narratorBn: "এমা লুকানো বিকিরণ বিপদ প্রকাশ করে যা বেশিরভাগ মানুষ জানে না"
  },
  {
    id: 'successful_landing',
    title: "Safe Landing and Lessons Learned",
    titleBn: "নিরাপদ অবতরণ এবং শেখা পাঠ",
    image: image8,
    content: "Thanks to favorable tailwinds over the Atlantic, Sarah's diverted Flight Dream actually arrived in Paris on time despite the longer route. But the experience highlighted how vulnerable modern aviation is to space weather. Across the aviation industry that day, dozens of flights were diverted, delayed, or cancelled. Pilots reported communication blackouts lasting hours, GPS navigation errors, and radiation exposure concerns. The Federal Aviation Administration issued advisories warning of potential communication outages and navigation disruptions. Airlines activated their space weather protocols, and many flights avoided polar routes for several days. Sarah's quick thinking and proper training turned a potentially dangerous situation into a routine landing, but it showed how space weather - something most people never think about - can dramatically affect air travel.",
    contentBn: "আটলান্টিকের উপর অনুকূল পিছনের বাতাসের জন্য ধন্যবাদ, সারাহের বিপথগামী ফ্লাইট ড্রিম দীর্ঘ পথ সত্ত্বেও আসলে সময়মতো প্যারিসে পৌঁছেছিল। কিন্তু অভিজ্ঞতা তুলে ধরেছিল যে আধুনিক বিমান চালনা মহাকাশের আবহাওয়ার কাছে কতটা দুর্বল। সেদিন বিমান চালনা শিল্প জুড়ে, কয়েক ডজন ফ্লাইট বিপথগামী, বিলম্বিত বা বাতিল হয়েছিল। পাইলটরা ঘন্টার পর ঘন্টা যোগাযোগ বিপর্যয়, জিপিএস নেভিগেশন ত্রুটি এবং বিকিরণ এক্সপোজার উদ্বেগের রিপোর্ট করেছেন। ফেডারেল এভিয়েশন অ্যাডমিনিস্ট্রেশন সম্ভাব্য যোগাযোগ বিপর্যয় এবং নেভিগেশন ব্যাঘাতের সতর্কতা জারি করেছে। এয়ারলাইনগুলো তাদের মহাকাশ আবহাওয়া প্রোটোকল চালু করেছে, এবং অনেক ফ্লাইট কয়েকদিন ধরে মেরু পথ এড়িয়েছে। সারাহের দ্রুত চিন্তাভাবনা এবং যথাযথ প্রশিক্ষণ একটি সম্ভাব্য বিপজ্জনক পরিস্থিতিকে রুটিন অবতরণে পরিণত করেছে, কিন্তু এটি দেখিয়েছে যে মহাকাশ আবহাওয়া - যা বেশিরভাগ মানুষ কখনো ভাবে না - বিমান ভ্রমণে নাটকীয়ভাবে প্রভাব ফেলতে পারে।",
    status: "resolution",
    narrator: "Emma concludes with the successful outcome and important lessons",
    narratorBn: "এমা সফল ফলাফল এবং গুরুত্বপূর্ণ শিক্ষা দিয়ে শেষ করে"
  }
];
  // Quiz questions
  const quizQuestions = {
    english: [
      {
        question: "How long has Captain Sarah Chen been flying commercial jets?",
        options: ["10 years", "15 years", "20 years", "25 years"],
        correctAnswer: 1
      },
      {
        question: "What type of routes does Sarah specialize in?",
        options: ["Tropical routes", "Polar routes", "Desert routes", "Oceanic routes"],
        correctAnswer: 1
      },
      {
        question: "At what latitude did Sarah's planned polar route fly?",
        options: ["60 degrees North", "70 degrees North", "80 degrees North", "90 degrees North"],
        correctAnswer: 1
      },
      {
        question: "What time did the radio communications fail?",
        options: ["9:30 PM", "10:30 PM", "11:30 PM", "12:30 AM"],
        correctAnswer: 1
      },
      {
        question: "To what latitude did Sarah divert her flight for safety?",
        options: ["35 degrees North", "43 degrees North", "50 degrees North", "55 degrees North"],
        correctAnswer: 1
      },
      {
        question: "How many passengers were on Dream Flight?",
        options: ["250 people", "300 people", "350 people", "400 people"],
        correctAnswer: 1
      },
      {
        question: "What was the planned flying time to Paris?",
        options: ["9 hours 30 minutes", "10 hours 45 minutes", "11 hours 15 minutes", "12 hours"],
        correctAnswer: 1
      },
      {
        question: "Despite the longer route, when did the flight arrive in Paris?",
        options: ["2 hours late", "1 hour late", "On time", "1 hour early"],
        correctAnswer: 2
      }
    ],
    bengali: [
      {
        question: "ক্যাপ্টেন সারাহ চেন কত বছর ধরে বাণিজ্যিক জেট উড়াচ্ছেন?",
        options: ["১০ বছর", "১৫ বছর", "২০ বছর", "২৫ বছর"],
        correctAnswer: 1
      },
      {
        question: "সারাহ কোন ধরনের পথে বিশেষত্ব রাখেন?",
        options: ["গ্রীষ্মমণ্ডলীয় পথ", "মেরু পথ", "মরুভূমির পথ", "সমুদ্রের পথ"],
        correctAnswer: 1
      },
      {
        question: "সারাহের পরিকল্পিত মেরু পথ কোন অক্ষাংশে উড়েছিল?",
        options: ["৬০ ডিগ্রি উত্তর", "৭০ ডিগ্রি উত্তর", "৮০ ডিগ্রি উত্তর", "৯০ ডিগ্রি উত্তর"],
        correctAnswer: 1
      },
      {
        question: "রেডিও যোগাযোগ কখন ব্যর্থ হয়েছিল?",
        options: ["রাত ৯:৩০", "রাত ১০:৩০", "রাত ১১:৩০", "রাত ১২:৩০"],
        correctAnswer: 1
      },
      {
        question: "নিরাপত্তার জন্য সারাহ কোন অক্ষাংশে তার ফ্লাইট ঘুরিয়ে নিয়েছিলেন?",
        options: ["৩৫ ডিগ্রি উত্তর", "৪৩ ডিগ্রি উত্তর", "৫০ ডিগ্রি উত্তর", "৫৫ ডিগ্রি উত্তর"],
        correctAnswer: 1
      },
      {
        question:" Dream ফ্লাইট  এ কতজন যাত্রী ছিলেন?",
        options: ["২৫০ জন", "৩০০ জন", "৩৫০ জন", "৪০০ জন"],
        correctAnswer: 1
      },
      {
        question: "প্যারিসে পরিকল্পিত উড়ানের সময় ছিল কত?",
        options: ["৯ ঘন্টা ৩০ মিনিট", "১০ ঘন্টা ৪৫ মিনিট", "১১ ঘন্টা ১৫ মিনিট", "১২ ঘন্টা"],
        correctAnswer: 1
      },
      {
        question: "দীর্ঘ পথ সত্ত্বেও ফ্লাইট প্যারিসে কখন পৌঁছেছিল?",
        options: ["২ ঘন্টা দেরি", "১ ঘন্টা দেরি", "সময়মতো", "১ ঘন্টা আগে"],
        correctAnswer: 2
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
      case 'normal': return 'from-blue-500 to-cyan-500';
      case 'warning': return 'from-yellow-500 to-orange-500';
      case 'critical': return 'from-red-500 to-pink-500';
      case 'resolution': return 'from-green-600 to-blue-600';
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
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-blue-500/30 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={goHome}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              {isBengali ? 'হোমে যান' : 'Go to Home'}
            </button>
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
            >
              <Globe className="w-5 h-5" />
              {isBengali ? 'English' : 'বাংলা'}
            </button>
          </div>
          
          {/* Main Header */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-blue-300">
                {isBengali ? 'নীরব আকাশ' : 'Silent Skies'}
              </h1>
              <p className="text-xl text-gray-300">
                {isBengali ? 'যখন মহাকাশের আবহাওয়া যোগাযোগ বন্ধ করে দেয়' : 'When Space Weather Grounds Communication'}
              </p>
              <p className="text-gray-400 flex items-center gap-2 mt-2">
                <User className="w-4 h-4" />
                {isBengali ? 'বর্ণিত: এমা, বয়স ১৫' : 'Told by Emma, age 15'}
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
            <h2 className="text-2xl font-semibold text-blue-300">
              {isBengali ? `অধ্যায় ${currentScene + 1} এর ${scenes.length}` : `Chapter ${currentScene + 1} of ${scenes.length}`}
            </h2>
            <button 
              onClick={toggleAutoPlay}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isAutoPlaying 
                  ? 'bg-cyan-600 hover:bg-cyan-500 text-white' 
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
              className="bg-gradient-to-r from-blue-400 to-cyan-400 h-3 rounded-full transition-all duration-500"
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
                height={400}
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Story Content */}
          <div className="lg:col-span-2">
            <div className={`bg-gradient-to-br ${getStatusColor(currentSceneData.status)} p-1 rounded-2xl`}>
              <div className="bg-black/80 rounded-2xl p-8 h-full">
                <h3 className="text-3xl font-bold mb-4 text-cyan-300">
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
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    {isBengali ? 'পরবর্তী অধ্যায়' : 'Next Chapter'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flight Details and Facts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
            <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
              <Navigation className="w-5 h-5" />
              {isBengali ? 'ফ্লাইটের বিবরণ: Dream Flight ' : 'Flight Details: Dream Flight'}
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'পরিকল্পিত পথ' : 'Planned Route'}</span>
                <span className="text-blue-400">{isBengali ? 'মেরু (৭০°উত্তর)' : 'Polar (70°N)'}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'প্রকৃত পথ' : 'Actual Route'}</span>
                <span className="text-yellow-400">{isBengali ? 'দক্ষিণ (৪৩°উত্তর)' : 'Southern (43°N)'}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'ফ্লাইট সময়' : 'Flight Time'}</span>
                <span className="text-green-400">{isBengali ? 'নির্ধারিত সময়ে' : 'On Schedule'}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'রেডিও অবস্থা' : 'Radio Status'}</span>
                <span className="text-red-400">{isBengali ? 'ঘন্টার পর ঘন্টা ব্যর্থ' : 'Failed for Hours'}</span>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
            <h3 className="text-xl font-bold text-blue-300 mb-4">
              {isBengali ? 'বিমান নিরাপত্তার তথ্য' : 'Aviation Safety Facts'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'মেরু ফ্লাইটের জন্য বিশেষ জরুরি সরঞ্জাম এবং প্রশিক্ষণ প্রয়োজন'
                    : 'Polar flights require special emergency equipment and training'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'মেরুর কাছে রেডিও ব্ল্যাকআউট ঝড়ের সময় কয়েক ঘন্টা স্থায়ী হতে পারে'
                    : 'Radio blackouts near poles can last several hours during storms'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'সৌর ঝড়ের সময় ফ্লাইট উচ্চতায় মহাজাগতিক বিকিরণ ১০০ গুণ বৃদ্ধি পায়'
                    : 'Cosmic radiation increases 100x at flight altitudes during solar storms'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'এয়ারলাইনস ফ্লাইট নিরাপত্তার সিদ্ধান্তের জন্য ২৪/৭ মহাকাশের আবহাওয়া ট্র্যাক করে'
                    : 'Airlines track space weather 24/7 for flight safety decisions'
                  }
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Real Science */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-500/30 mb-8">
          <h3 className="text-3xl font-bold text-cyan-300 mb-6 flex items-center gap-3">
            <Radio className="w-8 h-8" />
            {isBengali ? 'রেডিও যোগাযোগের বিজ্ঞান' : 'The Science of Radio Communication'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-4">
                {isBengali ? 'রেডিও তরঙ্গ কীভাবে কাজ করে' : 'How Radio Waves Work'}
              </h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                {isBengali 
                  ? 'বিমানে ব্যবহৃত উচ্চ-ফ্রিকোয়েন্সি রেডিও তরঙ্গ দূর দূরত্বে ভ্রমণের জন্য আয়নোস্ফিয়ার থেকে প্রতিফলিত হয়। মহাকাশের আবহাওয়ার ঘটনাগুলির সময়, সৌর বিকিরণ আয়নোস্ফিয়ারকে শক্তিশালী করে, এটিকে অস্থির এবং অপ্রত্যাশিত করে তোলে, যার ফলে রেডিও সংকেতগুলি ছড়িয়ে পড়ে বা সম্পূর্ণভাবে অদৃশ্য হয়ে যায়।'
                  : 'High-frequency radio waves used by aircraft bounce off the ionosphere to travel long distances. During space weather events, solar radiation energizes the ionosphere, making it unstable and unpredictable, causing radio signals to scatter or disappear completely.'
                }
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-4">
                {isBengali ? 'উচ্চতায় বিকিরণ' : 'Radiation at Altitude'}
              </h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                {isBengali 
                  ? '৪০,০০০ ফুট উচ্চতায়, যাত্রীরা সমুদ্র পৃষ্ঠের তুলনায় ১০০ গুণ বেশি মহাজাগতিক বিকিরণ পান। গ্যানন ঝড়ের মতো গুরুতর মহাকাশ আবহাওয়ার ঘটনাগুলির সময়, বিকিরণের মাত্রা বিপজ্জনক হয়ে উঠতে পারে, বিশেষ করে মেরু পথে যেখানে পৃথিবীর চৌম্বকীয় ক্ষেত্র কম সুরক্ষা প্রদান করে।'
                  : 'At 40,000 feet, passengers receive 100 times more cosmic radiation than at sea level. During severe space weather events like the Gannon Storm, radiation levels can become dangerous, especially on polar routes where Earth\'s magnetic field provides less protection.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105">
            {isBengali ? 'আরও গল্প পড়ুন' : 'Read More Stories'}
          </button>
          <button className="bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 rounded-full text-xl font-bold transition-all duration-300">
            {isBengali ? 'বিমান নিরাপত্তা সম্পর্কে জানুন' : 'Learn About Aviation Safety'}
          </button>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-blue-500/30 mt-8">
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-center text-blue-300 mb-8">
            {isBengali ? 'গল্পের কুইজ' : 'Story Quiz'}
          </h2>
          
          {/* Quiz Toggle Button */}
          {!showQuiz && (
            <div className="flex justify-center mb-8">
              <button 
                onClick={startQuiz}
                className="px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white"
              >
                ✈️ {isBengali ? 'কুইজ শুরু করুন' : 'Start Quiz'}
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
                ? 'এই গল্পটি নাসার ডেটাসেট থেকে অনুপ্রাণিত। সমস্ত চরিত্র কাল্পনিক এবং ভাল গল্প বলার জন্য তৈরি।'
                : 'This story is inspired by NASA datasets. All characters are fictitious and created for good storytelling.'
              }
            </p>
            <div className="inline-block bg-gray-800/50 border border-gray-600/50 rounded-lg p-4">
              <p className="text-blue-400 font-mono text-sm">
                  Results-of-the-First-National-Survey-of-User-Needs-for-Space-Weather-2024
              </p>
              <p className="text-gray-500 text-xs mt-2">
                {isBengali 
                  ? ' মহাকাশ আবহাওয়া ব্যবহারকারীদের প্রয়োজন সম্পর্কে প্রথম জাতীয় সমীক্ষার ফলাফল ২০২৪'
                  : '  Results-of-the-First-National-Survey-of-User-Needs-for-Space-Weather-2024'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PilotsImpactStory;


















 
 
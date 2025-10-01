 'use client';

import React, { useState, useEffect } from 'react';
import { Rocket, Shield, AlertTriangle, Activity, Clock, ArrowLeft, ArrowRight, CheckCircle, Zap, User, Home, Globe } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

 import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import image8 from './image8.png';

const AstronautsImpactStory = () => {
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
    title: "Meet Commander Martinez",
    titleBn: "কমান্ডার মার্টিনেজের সঙ্গে পরিচয়",
    image: image1,
    content: "Hi everyone! I'm Alex, and I want to tell you about Commander Elena Martinez, one of the bravest people I know. She's been an astronaut for 12 years and has spent over 400 days in space aboard the International Space Station. Elena grew up dreaming of exploring the cosmos, studying astrophysics in college, and training for years to become an astronaut. What most people don't realize is that astronauts face dangers that go far beyond rocket launches and spacewalks. In space, 250 miles above Earth, astronauts are exposed to deadly cosmic radiation that would be lethal without proper protection. Elena has dedicated her career to understanding these invisible threats and keeping her fellow astronauts safe.",
    contentBn: "হ্যালো সবাই! আমি অ্যালেক্স, এবং আজ আমি আপনাদের পরিচয় করিয়ে দিতে চাই কমান্ডার এলেনা মার্টিনেজের সঙ্গে, যিনি আমার জানা সবচেয়ে সাহসী মানুষদের একজন। তিনি ১২ বছর ধরে মহাকাশচারী হিসেবে কাজ করছেন এবং আন্তর্জাতিক মহাকাশ স্টেশনে ৪০০ দিনেরও বেশি সময় কাটিয়েছেন। এলেনা ছোটবেলা থেকেই মহাকাশ অন্বেষণের স্বপ্ন দেখতেন, কলেজে জ্যোতির্বিজ্ঞান পড়েছেন এবং মহাকাশচারী হওয়ার জন্য দীর্ঘদিন কঠোর প্রশিক্ষণ নিয়েছেন। অধিকাংশ মানুষ জানে না যে মহাকাশচারীরা রকেট উৎক্ষেপণ বা স্পেসওয়াকের চেয়ে অনেক বড় বিপদের মুখোমুখি হন। পৃথিবী থেকে ২৫০ মাইল উপরে মহাকাশে, মহাকাশচারীরা মারাত্মক মহাজাগতিক বিকিরণের সংস্পর্শে আসেন, যা সঠিক সুরক্ষা ছাড়া প্রাণঘাতী। এলেনা তার পুরো জীবন উৎসর্গ করেছেন এই অদৃশ্য বিপদগুলো বোঝার এবং সহকর্মী মহাকাশচারীদের নিরাপদ রাখার জন্য।",
    status: "normal",
    narrator: "Alex introduces us to a veteran space explorer",
    narratorBn: "অ্যালেক্স আমাদের একজন অভিজ্ঞ মহাকাশ অভিযাত্রীকে চিনিয়ে দেন"
  },
  {
    id: 'space_environment',
    title: "The Invisible Danger Above",
    titleBn: "উপরে লুকানো বিপদ",
    image: image2,
    content: "Space might look empty and peaceful from Earth, but it's actually filled with invisible, deadly radiation zooming around at incredible speeds. Think of space as being like the ocean - it looks calm on the surface, but there are powerful currents underneath that can be dangerous. Every second, billions of high-energy particles from deep space and from our Sun are racing through the solar system. On Earth, we're protected by our planet's magnetic field and thick atmosphere - they're like a giant invisible shield. But astronauts on the International Space Station are above most of this protection, exposed to radiation levels that would be illegal for nuclear power plant workers on Earth. Elena and her crewmates receive more radiation in one day in space than most people get in an entire year on Earth.",
    contentBn: "পৃথিবী থেকে মহাকাশ খালি ও শান্ত মনে হতে পারে, কিন্তু আসলে এটি অদৃশ্য এবং প্রাণঘাতী বিকিরণে ভরে আছে, যা অবিশ্বাস্য গতিতে ছুটে বেড়াচ্ছে। মহাকাশকে সমুদ্রের সঙ্গে তুলনা করুন — পৃষ্ঠে শান্ত, কিন্তু নিচে বিপজ্জনক প্রবাহ রয়েছে। প্রতি সেকেন্ডে, গভীর মহাকাশ এবং সূর্য থেকে কোটি কোটি উচ্চ-শক্তির কণা সৌরজগতে ছুটে চলেছে। পৃথিবীতে, আমাদের গ্রহের চৌম্বক ক্ষেত্র এবং ঘন বায়ুমণ্ডল আমাদের রক্ষা করে — এটি যেন একটি বিশাল অদৃশ্য ঢাল। কিন্তু আন্তর্জাতিক মহাকাশ স্টেশনের মহাকাশচারীরা এই সুরক্ষার অধিকাংশের বাইরে, এমন বিকিরণের মধ্যে রয়েছেন যা পৃথিবীর পারমাণবিক কেন্দ্রের কর্মীদের জন্য নিষিদ্ধ। এলেনা এবং তার সহকর্মীরা একদিনে এমন বিকিরণ পান যা সাধারণ মানুষ পুরো বছরেই পায় না।",
    status: "normal",
    narrator: "Alex explains the hidden dangers of the space environment",
    narratorBn: "অ্যালেক্স মহাকাশ পরিবেশের লুকানো বিপদগুলো ব্যাখ্যা করেন"
  },
  {
    id: 'may_mission',
    title: "May 10th, 2024 - A Routine Spacewalk",
    titleBn: "১০ মে, ২০২৪ - একটি নিয়মিত স্পেসওয়াক",
    image: image3,
    content: "Elena was preparing for what should have been a routine spacewalk outside the International Space Station. She and her partner, Dr. Kim Sato, were scheduled to spend six hours outside replacing a faulty antenna and conducting scientific experiments. They had trained for months for this EVA (extravehicular activity), practicing every move in underwater pools and virtual reality simulators. Elena was excited - this would be her 8th spacewalk, and she loved the incredible view of Earth from outside the station. The crew had checked all their equipment: spacesuits with built-in radiation monitoring, tools, tethers, and emergency systems. Everything looked perfect for a successful day of work in the vacuum of space. But 93 million miles away, the Sun was building up to unleash something that would change their plans completely.",
    contentBn: "এলেনা আন্তর্জাতিক মহাকাশ স্টেশনের বাইরে যা একটি নিয়মিত স্পেসওয়াক হওয়ার কথা ছিল তার জন্য প্রস্তুতি নিচ্ছিলেন। তিনি এবং তার সঙ্গী, ডাঃ কিম সাতো, ছয় ঘণ্টা সময় কাটানোর কথা ছিল ত্রুটিপূর্ণ অ্যান্টেনা প্রতিস্থাপন এবং বৈজ্ঞানিক পরীক্ষা-নিরীক্ষা করার জন্য। তারা এই ইভিএ (এক্সট্রাভেহিকুলার অ্যাক্টিভিটি) এর জন্য মাসের পর মাস প্রশিক্ষণ নিয়েছিলেন, পানির নিচে এবং ভার্চুয়াল রিয়েলিটি সিমুলেটরে প্রতিটি নড়াচড়া অনুশীলন করে। এলেনা উত্সাহিত ছিলেন — এটি তার অষ্টম স্পেসওয়াক হবে, এবং তিনি স্টেশনের বাইরে থেকে পৃথিবীর অসাধারণ দৃশ্য দেখতে ভালোবাসতেন। ক্রু তাদের সমস্ত যন্ত্রপাতি পরীক্ষা করেছিল: রেডিয়েশন মনিটরিং যুক্ত স্পেসস্যুট, সরঞ্জাম, টেদার এবং জরুরি সিস্টেম। সবকিছু নিখুঁত মনে হচ্ছিল। কিন্তু ৯৩ মিলিয়ন মাইল দূরে সূর্য এমন কিছু ঘটাতে যাচ্ছিল যা তাদের পরিকল্পনাকে সম্পূর্ণভাবে বদলে দেবে।",
    status: "normal",
    narrator: "Alex sets up what should have been a normal day in space",
    narratorBn: "অ্যালেক্স মহাকাশে যে স্বাভাবিক দিনের পরিকল্পনা ছিল তা আমাদের সামনে তুলে ধরেন"
  },
  {
    id: 'solar_storm_hits',
    title: "10:30 AM - When the Sun Exploded",
    titleBn: "সকাল ১০:৩০ - যখন সূর্য বিস্ফোরিত হলো",
    image: image4,
    content: "At exactly 10:30 AM, the largest solar flare in 20 years erupted from the Sun's surface - an X5.8 class monster that released more energy in minutes than humanity uses in an entire year. This was the beginning of the Gannon Storm, and its effects reached the International Space Station in just minutes. Elena was suiting up for her spacewalk when alarms started blaring throughout the station. The radiation monitoring systems were going crazy, showing particle levels shooting up to dangerous levels. Mission Control in Houston immediately called up to the station: 'ISS, this is Houston. We're showing extreme radiation levels. Abort the EVA immediately and get to the shelter!' Elena and her crewmates had trained for this moment, but experiencing a real radiation storm in space was terrifying and awe-inspiring at the same time.",
    contentBn: "ঠিক সকাল ১০:৩০ মিনিটে, ২০ বছরের মধ্যে সবচেয়ে বড় সৌর শিখা সূর্যের পৃষ্ঠ থেকে বিস্ফোরিত হলো — একটি X5.8 শ্রেণীর দৈত্য যা মিনিটের মধ্যে মানবজাতির এক বছরের চেয়ে বেশি শক্তি ছেড়ে দিল। এটি ছিল গ্যানন ঝড়ের সূচনা, এবং এর প্রভাব মাত্র কয়েক মিনিটে আন্তর্জাতিক মহাকাশ স্টেশনে পৌঁছাল। এলেনা তার স্পেসওয়াকের জন্য পোশাক পরছিলেন যখন স্টেশন জুড়ে অ্যালার্ম বাজতে শুরু করল। রেডিয়েশন মনিটরিং সিস্টেমগুলি ক্রমাগত বিপজ্জনক মাত্রা দেখাচ্ছিল। হিউস্টনের মিশন কন্ট্রোল সঙ্গে সঙ্গে স্টেশনে কল করল: 'আইএসএস, এটি হিউস্টন। আমরা চরম বিকিরণের মাত্রা দেখাচ্ছি। অবিলম্বে ইভিএ বন্ধ করুন এবং আশ্রয়ে যান!' এলেনা এবং তার সহকর্মীরা এই মুহূর্তের জন্য প্রশিক্ষণ নিয়েছিলেন, কিন্তু বাস্তব মহাজাগতিক ঝড়ের মুখোমুখি হওয়া একদিকে ভয়ঙ্কর, অন্যদিকে বিস্ময়কর অভিজ্ঞতা হয়ে উঠেছিল।",
    status: "warning",
    narrator: "Alex describes the moment space became deadly",
    narratorBn: "অ্যালেক্স সেই মুহূর্তের বর্ণনা দেন যখন মহাকাশ প্রাণঘাতী হয়ে উঠল"
  },
  {
    id: 'seeking_shelter',
    title: "Emergency: Taking Shelter in Space",
    titleBn: "জরুরি: মহাকাশে আশ্রয় নেওয়া",
    image: image5,
    content: "When astronauts face dangerous radiation, they don't have a basement to hide in - they have to create their own shelter using the station itself. Elena and her five crewmates quickly moved to the most protected part of the ISS, a small area surrounded by equipment, water tanks, and the station's thickest walls. Water is an excellent radiation shield, so they positioned themselves near the water recycling systems. For the next 18 hours, all six astronauts had to stay cramped in an area smaller than a closet, monitoring radiation levels and waiting for the storm to pass. Elena watched through the small windows as the aurora - normally only visible near the poles - danced all around the station in brilliant green and red curtains. It was beautiful but terrifying, knowing that those lights represented deadly particles that could damage their DNA and cause cancer.",
    contentBn: "যখন মহাকাশচারীরা বিপজ্জনক বিকিরণের মুখোমুখি হন, তাদের লুকানোর জন্য কোনো বেসমেন্ট নেই — তারা স্টেশনকে ব্যবহার করে নিজেদের আশ্রয় তৈরি করতে হয়। এলেনা এবং তার পাঁচ সহকর্মী দ্রুত আইএসএসের সবচেয়ে সুরক্ষিত অংশে চলে গেলেন, একটি ছোট এলাকা যা যন্ত্রপাতি, পানির ট্যাঙ্ক এবং স্টেশনের সবচেয়ে মোটা দেয়াল দ্বারা ঘেরা। পানি একটি চমৎকার বিকিরণ ঢাল, তাই তারা পানি পুনর্ব্যবহার ব্যবস্থার কাছে অবস্থান নিল। পরবর্তী ১৮ ঘন্টা, ছয়জন মহাকাশচারীকে একটি আলমারির চেয়েও ছোট স্থানে সংকুচিত অবস্থায় থাকতে হলো, বিকিরণের মাত্রা পর্যবেক্ষণ করতে এবং ঝড় কেটে যাওয়ার অপেক্ষা করতে। ছোট জানালা দিয়ে এলেনা দেখছিলেন অরোরা — সাধারণত মেরু অঞ্চলে দৃশ্যমান — স্টেশনের চারপাশে উজ্জ্বল সবুজ ও লাল পর্দার মতো নাচছিল। এটি সুন্দর ছিল, কিন্তু ভয়ঙ্করও, কারণ সেই আলোতে লুকানো ছিল প্রাণঘাতী কণা যা তাদের DNA ক্ষতিগ্রস্ত করতে এবং ক্যান্সার সৃষ্টি করতে পারে।",
    status: "critical",
    narrator: "Alex describes the astronauts' fight for survival",
    narratorBn: "অ্যালেক্স মহাকাশচারীদের বেঁচে থাকার সংগ্রামের বর্ণনা দেন"
  },
  {
    id: 'radiation_effects',
    title: "The Invisible Enemy Strikes",
    titleBn: "অদৃশ্য শত্রুর আক্রমণ",
    image: image6,
    content: "Even inside their makeshift shelter, Elena and her crewmates were being bombarded by radiation. Their personal dosimeters - devices that measure radiation exposure - were clicking constantly, recording levels far above normal. Elena knew that in just one day during the Gannon Storm, she received more radiation than she would normally get in a month in space. Long-term exposure to this kind of radiation can cause cancer, damage to the nervous system, and genetic mutations. Astronauts have career limits on radiation exposure, just like workers in nuclear power plants. Some astronauts have had to retire early because they reached their lifetime radiation limits. Elena worried that this single storm might force her to cut short her space career, but she also knew they had no choice but to wait it out and hope their shelter was adequate protection.",
    contentBn: "অস্থায়ী আশ্রয়ের ভিতরেও, এলেনা এবং তার সহকর্মীরা বিকিরণের হামলার শিকার হচ্ছিলেন। তাদের ব্যক্তিগত ডোজিমিটার — যন্ত্র যা বিকিরণ পরিমাপ করে — ক্রমাগত ক্লিক করছিল, স্বাভাবিকের চেয়ে অনেক বেশি মাত্রা রেকর্ড করছিল। এলেনা জানতেন যে গ্যানন ঝড়ের একদিনে তিনি মহাকাশে সাধারণত এক মাসে যে বিকিরণ পান তার চেয়ে বেশি বিকিরণ পেয়েছেন। দীর্ঘমেয়াদী বিকিরণ এক্সপোজার ক্যান্সার, স্নায়ুতন্ত্রের ক্ষতি এবং জেনেটিক মিউটেশন সৃষ্টি করতে পারে। মহাকাশচারীদেরও কারিয়ার ভিত্তিক বিকিরণ সীমা রয়েছে, ঠিক যেমন পারমাণবিক কেন্দ্রের কর্মীদের জন্য। কিছু মহাকাশচারীকে অল্পবয়সেই অবসর নিতে হয়েছে কারণ তারা তাদের জীবনকাল বিকিরণ সীমা অতিক্রম করেছে। এলেনা চিন্তিত ছিলেন যে এই একক ঝড় তার মহাকাশ জীবনকে সংক্ষিপ্ত করতে পারে, তবে তিনি জানতেন তাদের আর কোনো বিকল্প নেই, শুধু অপেক্ষা করা এবং আশ্রয় যথেষ্ট সুরক্ষা দিচ্ছে কি না তা আশা করা।",
    status: "critical",
    narrator: "Alex explains the long-term health consequences astronauts face",
    narratorBn: "অ্যালেক্স মহাকাশচারীদের দীর্ঘমেয়াদী স্বাস্থ্য ঝুঁকির ব্যাখ্যা দেন"
  },
  {
    id: 'mission_impact',
    title: "When Space Weather Changes Everything",
    titleBn: "যখন মহাকাশ আবহাওয়া সবকিছু বদলে দেয়",
    image: image7,
    content: "The Gannon Storm didn't just threaten the astronauts' health - it disrupted their entire mission. The planned spacewalk was cancelled, delaying critical maintenance work for weeks. Scientific experiments had to be shut down to protect sensitive equipment. The station's computers experienced glitches from radiation hits. Communication with Earth became spotty as the storm interfered with radio signals. Most frustratingly, Elena and her crew had to watch as months of careful mission planning went out the window. Space missions are planned down to the minute, with every activity scheduled precisely. When space weather forces astronauts to take shelter, it can delay experiments, maintenance, and even the return to Earth. Elena realized that despite all of humanity's technological advances, astronauts are still at the mercy of our temperamental Sun.",
    contentBn: "গ্যানন ঝড় শুধু মহাকাশচারীদের স্বাস্থ্যের জন্য হুমকি ছিল না — এটি তাদের পুরো মিশনকে ব্যাহত করেছিল। পরিকল্পিত স্পেসওয়াক বাতিল করা হয়েছিল, গুরুত্বপূর্ণ রক্ষণাবেক্ষণ কাজ সপ্তাহের পর সপ্তাহ পর্যন্ত স্থগিত হয়ে গেল। সংবেদনশীল যন্ত্রপাতি রক্ষা করার জন্য বৈজ্ঞানিক পরীক্ষা-নিরীক্ষা বন্ধ করতে হয়েছিল। স্টেশনের কম্পিউটারগুলো বিকিরণের আঘাতের কারণে ত্রুটি দেখাচ্ছিল। ঝড়ের কারণে রেডিও সংকেত ব্যাহত হওয়ায় পৃথিবীর সঙ্গে যোগাযোগও অস্থির হয়ে পড়ল। সবচেয়ে হতাশাজনকভাবে, এলেনা এবং তার দলকে দেখতেই হলো মাসের পর মাসের সতর্ক মিশন পরিকল্পনা বৃথা চলে যাচ্ছে। মহাকাশ মিশন মিনিটের হিসাব অনুযায়ী পরিকল্পিত হয়, প্রতিটি কার্যক্রম নিখুঁতভাবে নির্ধারিত থাকে। যখন মহাকাশ আবহাওয়া মহাকাশচারীদের আশ্রয় নিতে বাধ্য করে, তখন এটি পরীক্ষা-নিরীক্ষা, রক্ষণাবেক্ষণ এবং এমনকি পৃথিবীতে প্রত্যাবর্তন পর্যন্ত বিলম্বিত করতে পারে। এলেনা বুঝলেন যে মানবতার সকল প্রযুক্তিগত অগ্রগতির পরেও, মহাকাশচারীরা এখনও সূর্যের ইচ্ছার উপর নির্ভরশীল।",
    status: "aftermath",
    narrator: "Alex reveals how space weather disrupts entire space missions",
    narratorBn: "অ্যালেক্স প্রকাশ করেন কীভাবে মহাকাশের আবহাওয়া পুরো মিশনকে ব্যাহত করে"
  },
  {
    id: 'lessons_learned',
    title: "Heroes of the Cosmic Frontier",
    titleBn: "মহাজাগতিক সীমান্তের বীরগণ",
    image: image8,
    content: "After 18 hours, the radiation levels finally dropped enough for Elena and her crewmates to return to normal operations. They had survived one of the most intense space weather events in decades, but the experience changed how they think about space exploration. Elena became an advocate for better space weather prediction and improved radiation shielding for future missions. She knows that as humanity ventures further into space - to the Moon, Mars, and beyond - understanding and protecting against space radiation will become even more critical. Today, Elena works with scientists on Earth to develop new technologies that will keep future astronauts safe. Her courage and dedication remind us that space exploration isn't just about adventure and discovery - it's about brave people willingly facing invisible dangers to expand human knowledge and push the boundaries of what's possible.",
    contentBn: "১৮ ঘন্টা পর, বিকিরণের মাত্রা অবশেষে এত কমে গেল যে এলেনা এবং তার সহকর্মীরা স্বাভাবিক কার্যক্রমে ফিরে আসতে পারলেন। তারা কয়েক দশকের মধ্যে সবচেয়ে তীব্র মহাকাশ আবহাওয়ার ঘটনাগুলির মধ্যে বেঁচে গিয়েছিলেন, তবে এই অভিজ্ঞতা তাদের মহাকাশ অনুসন্ধান সম্পর্কে দৃষ্টিভঙ্গি পরিবর্তন করল। এলেনা ভবিষ্যতের মিশনের জন্য উন্নত বিকিরণ সুরক্ষা এবং আরও ভালো মহাকাশ আবহাওয়া পূর্বাভাসের প্রচারক হয়ে উঠলেন। তিনি জানেন, যখন মানবতা মহাকাশে আরও দূরে যাবে — চাঁদ, মঙ্গল এবং তারপরে — মহাকাশ বিকিরণ বোঝা এবং তার বিরুদ্ধে সুরক্ষা দেওয়া আরও গুরুত্বপূর্ণ হয়ে উঠবে। আজ, এলেনা পৃথিবীর বিজ্ঞানীদের সঙ্গে কাজ করছেন নতুন প্রযুক্তি উন্নয়নে, যা ভবিষ্যতের মহাকাশচারীদের নিরাপদ রাখবে। তার সাহস এবং উৎসর্গ আমাদের মনে করিয়ে দেয় যে মহাকাশ অনুসন্ধান শুধুই অভিযান ও আবিষ্কারের ব্যাপার নয় — এটি সাহসী মানুষদের অদৃশ্য বিপদের মুখোমুখি হয়ে মানব জ্ঞানের সীমা প্রসারিত করার গল্প।",
    status: "normal",
    narrator: "Alex honors the bravery and dedication of astronauts",
    narratorBn: "অ্যালেক্স মহাকাশচারীদের সাহস এবং উৎসর্গকে শ্রদ্ধা জানান"
  }
];



  // Static quiz questions
  const quizQuestions = {
    english: [
      {
        question: "How long did Elena and her crew stay in shelter during the Gannon Storm?",
        options: ["12 hours", "18 hours", "24 hours", "6 hours"],
        correctAnswer: 1
      },
      {
        question: "How much more radiation do ISS astronauts receive compared to people on Earth?",
        options: ["50x more", "100x more", "200x more", "10x more"],
        correctAnswer: 1
      },
      {
        question: "What class was the solar flare that caused the Gannon Storm?",
        options: ["X3.2", "X5.8", "X7.1", "X2.5"],
        correctAnswer: 1
      },
      {
        question: "What provides the best radiation shielding on the space station?",
        options: ["Steel", "Water", "Concrete", "Aluminum"],
        correctAnswer: 1
      },
      {
        question: "How many years has Elena been an astronaut?",
        options: ["8 years", "10 years", "12 years", "15 years"],
        correctAnswer: 2
      },
      {
        question: "What time did the solar flare erupt?",
        options: ["9:30 AM", "10:30 AM", "11:30 AM", "12:30 PM"],
        correctAnswer: 1
      },
      {
        question: "How many days has Elena spent in space?",
        options: ["300 days", "350 days", "400+ days", "450 days"],
        correctAnswer: 2
      },
      {
        question: "What was Elena's spacewalk partner's name?",
        options: ["Dr. Kim Sato", "Dr. John Smith", "Dr. Maria Lopez", "Dr. Sarah Chen"],
        correctAnswer: 0
      }
    ],
    bengali: [
      {
        question: "গ্যানন ঝড়ের সময় এলেনা কত ঘন্টা আশ্রয়ে ছিলেন?",
        options: ["১২ ঘন্টা", "১৮ ঘন্টা", "২৪ ঘন্টা", "৬ ঘন্টা"],
        correctAnswer: 1
      },
      {
        question: "মহাকাশচারীরা পৃথিবীর মানুষের চেয়ে কত গুণ বেশি বিকিরণ পান?",
        options: ["৫০ গুণ", "১০০ গুণ", "২০০ গুণ", "১০ গুণ"],
        correctAnswer: 1
      },
      {
        question: "X৫.৮ শ্রেণীর সৌর শিখা কী ছিল?",
        options: ["ছোট ঝড়", "মাঝারি ঝড়", "২০ বছরের মধ্যে সবচেয়ে বড়", "স্বাভাবিক ঘটনা"],
        correctAnswer: 2
      },
      {
        question: "মহাকাশ স্টেশনে সবচেয়ে ভাল বিকিরণ ঢাল কী?",
        options: ["ইস্পাত", "পানি", "কংক্রিট", "অ্যালুমিনিয়াম"],
        correctAnswer: 1
      },
      {
        question: "এলেনা কত বছর ধরে মহাকাশচারী?",
        options: ["৮ বছর", "১০ বছর", "১২ বছর", "১৫ বছর"],
        correctAnswer: 2
      },
      {
        question: "সৌর শিখা কখন বিস্ফোরিত হয়েছিল?",
        options: ["সকাল ৯:৩০", "সকাল ১০:৩০", "সকাল ১১:৩০", "দুপুর ১২:৩০"],
        correctAnswer: 1
      },
      {
        question: "এলেনা মহাকাশে কত দিন কাটিয়েছেন?",
        options: ["৩০০ দিন", "৩৫০ দিন", "৪০০+ দিন", "৪৫০ দিন"],
        correctAnswer: 2
      },
      {
        question: "এলেনার স্পেসওয়াক সঙ্গীর নাম কী ছিল?",
        options: ["ডাঃ কিম সাতো", "ডাঃ জন স্মিথ", "ডাঃ মারিয়া লোপেজ", "ডাঃ সারাহ চেন"],
        correctAnswer: 0
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
      case 'normal': return 'from-purple-500 to-blue-500';
      case 'warning': return 'from-yellow-500 to-orange-500';
      case 'critical': return 'from-red-500 to-pink-500';
      case 'aftermath': return 'from-gray-600 to-purple-600';
      case 'resolution': return 'from-green-600 to-blue-600';
      default: return 'from-purple-500 to-pink-500';
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-purple-500/30 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={goHome}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              {isBengali ? 'হোমে যান' : 'Go to Home'}
            </button>
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
            >
              <Globe className="w-5 h-5" />
              {isBengali ? 'English' : 'বাংলা'}
            </button>
          </div>
          
          {/* Main Header */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-purple-300">
                {isBengali ? 'বিকিরণ ঝড়' : 'Radiation Storm'}
              </h1>
              <p className="text-xl text-gray-300">
                {isBengali ? 'মহাকাশচারীরা সূর্যের প্রাণঘাতী ক্রোধের মুখোমুখি' : 'Astronauts Face the Sun\'s Deadly Fury'}
              </p>
              <p className="text-gray-400 flex items-center gap-2 mt-2">
                <User className="w-4 h-4" />
                {isBengali ? 'বর্ণিত: অ্যালেক্স, বয়স ১৭' : 'Told by Alex, age 17'}
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
            <h2 className="text-2xl font-semibold text-purple-300">
              {isBengali ? `অধ্যায় ${currentScene + 1} এর ${scenes.length}` : `Chapter ${currentScene + 1} of ${scenes.length}`}
            </h2>
            <button 
              onClick={toggleAutoPlay}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isAutoPlaying 
                  ? 'bg-pink-600 hover:bg-pink-500 text-white' 
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
              className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full transition-all duration-500"
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
                <h3 className="text-3xl font-bold mb-4 text-pink-300">
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
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                  >
                    {isBengali ? 'পরবর্তী অধ্যায়' : 'Next Chapter'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Data and Space Facts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30">
            <h3 className="text-xl font-bold text-pink-300 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              {isBengali ? 'বিকিরণ এক্সপোজার ডেটা' : 'Radiation Exposure Data'}
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'স্বাভাবিক আইএসএস দৈনিক' : 'Normal ISS Daily'}</span>
                <span className="text-green-400">0.5-1.0 mSv</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'ঝড়ের শিখর' : 'Storm Peak'}</span>
                <span className="text-yellow-400">15-20 mSv</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'কর্মজীবনের সীমা' : 'Career Limit'}</span>
                <span className="text-red-400">1,000 mSv</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'আশ্রয়ের সময়' : 'Shelter Time'}</span>
                <span className="text-purple-400">{isBengali ? '১৮ ঘন্টা' : '18 Hours'}</span>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
            <h3 className="text-xl font-bold text-purple-300 mb-4">
              {isBengali ? 'মহাকাশ বিকিরণের তথ্য' : 'Space Radiation Facts'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'আইএসএস মহাকাশচারীরা পৃথিবীর মানুষের চেয়ে ১০০ গুণ বেশি বিকিরণ পান'
                    : 'ISS astronauts receive 100x more radiation than people on Earth'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'কিছু মহাকাশচারী বিকিরণ এক্সপোজার সীমার কারণে তাড়াতাড়ি অবসর নেন'
                    : 'Some astronauts retire early due to radiation exposure limits'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'পানি এবং যন্ত্রপাতি সর্বোত্তম বিকিরণ ঢাল প্রদান করে'
                    : 'Water and equipment provide the best radiation shielding'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'মঙ্গল মিশন আরও বড় বিকিরণ চ্যালেঞ্জের মুখোমুখি হবে'
                    : 'Mars missions will face even greater radiation challenges'
                  }
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Real Science */}
        <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl p-8 border border-pink-500/30 mb-8">
          <h3 className="text-3xl font-bold text-pink-300 mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8" />
            {isBengali ? 'মহাকাশ বিকিরণের বিজ্ঞান' : 'The Science of Space Radiation'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-purple-300 mb-4">
                {isBengali ? 'মহাকাশ বিকিরণের প্রকারভেদ' : 'Types of Space Radiation'}
              </h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                {isBengali 
                  ? 'মহাকাশচারীরা তিন ধরনের বিকিরণের মুখোমুখি হন: গভীর মহাকাশ থেকে গ্যালাক্টিক মহাজাগতিক রশ্মি, সূর্য থেকে সৌর কণা ঘটনা এবং পৃথিবীর ভ্যান অ্যালেন বেল্টে আটকে পড়া বিকিরণ। সৌর ঝড়ের সময়, কণা বিকিরণ স্বাভাবিক মাত্রার ১০০০ গুণ বৃদ্ধি পেতে পারে, যার জন্য তাৎক্ষণিক আশ্রয় প্রয়োজন।'
                  : 'Astronauts face three types of radiation: galactic cosmic rays from deep space, solar particle events from the Sun, and trapped radiation in Earth\'s Van Allen belts. During solar storms, particle radiation can increase by 1000x normal levels, requiring immediate shelter.'
                }
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-300 mb-4">
                {isBengali ? 'স্বাস্থ্যের উপর প্রভাব' : 'Health Effects'}
              </h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                {isBengali 
                  ? 'উচ্চ-শক্তির কণা ডিএনএ ক্ষতি করতে পারে, ক্যান্সারের ঝুঁকি বাড়াতে পারে, ছানি সৃষ্টি করতে পারে এবং কেন্দ্রীয় স্নায়ুতন্ত্রকে প্রভাবিত করতে পারে। নাসা সাবধানে প্রতিটি মহাকাশচারীর ক্রমবর্ধমান এক্সপোজার নিরীক্ষণ করে এবং দীর্ঘমেয়াদী স্বাস্থ্য ঝুঁকি কমাতে কর্মজীবনের সীমা নির্ধারণ করে।'
                  : 'High-energy particles can damage DNA, increase cancer risk, cause cataracts, and affect the central nervous system. NASA carefully monitors each astronaut\'s cumulative exposure and sets career limits to minimize long-term health risks.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105">
            {isBengali ? 'আরও গল্প পড়ুন' : 'Read More Stories'}
          </button>
          <button className="bg-transparent border-2 border-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 rounded-full text-xl font-bold transition-all duration-300">
            {isBengali ? 'মহাকাশ অনুসন্ধান সম্পর্কে জানুন' : 'Learn About Space Exploration'}
          </button>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-purple-500/30 mt-8">
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-center text-purple-300 mb-8">
            {isBengali ? 'গল্পের কুইজ' : 'Story Quiz'}
          </h2>
          
          {/* Quiz Toggle Button */}
          {!showQuiz && (
            <div className="flex justify-center mb-8">
              <button 
                onClick={startQuiz}
                className="px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white"
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
              <p className="text-cyan-400 font-mono text-sm">
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
    </div>
  );
};

export default AstronautsImpactStory;

 
  'use client';

import React, { useState, useEffect } from 'react';
import { Globe, Zap, Activity, Power, ArrowLeft, ArrowRight, CheckCircle, User, AlertTriangle, Home } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Import all images for the story
// Note: These paths are placeholders. Ensure your images are in the correct directory.
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import image8 from './image8.png';

const PowerOperatorsStory = () => {
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
      title: "Meet Grid Operator Maria",
      titleBn: "গ্রিড অপারেটর মারিয়ার সাথে পরিচয়",
      image: image1,
      content: "Hey! I'm Sam, and I want to tell you about Maria Rodriguez, a power grid operator who keeps the lights on for millions of people. Maria works at the control center for the Northeast Power Grid, where she monitors electricity flowing through thousands of miles of power lines 24/7. She's been doing this job for 15 years, and she knows that keeping electricity reliable is literally a matter of life and death. Hospitals need power for life support machines, traffic lights keep cities safe, and millions of people depend on electricity for heating, cooling, and communication. Maria's job is to balance electricity supply and demand across multiple states, making sure power flows smoothly from generators to your home. But there's an invisible threat from space that can turn her routine day into a crisis that could affect millions of people.",
      contentBn: " হেই! আমি স্যাম, আর আজ আমি তোমাকে পরিচয় করিয়ে দেব মারিয়া রদ্রিগেজকে—একজন পাওয়ার গ্রিড অপারেটর, যিনি কোটি মানুষের ঘরে আলো জ্বালিয়ে রাখেন। মারিয়া কাজ করেন উত্তর-পূর্ব পাওয়ার গ্রিডের নিয়ন্ত্রণ কেন্দ্রে, যেখানে তিনি দিনে ২৪ ঘণ্টা বিদ্যুতের প্রবাহ পর্যবেক্ষণ করেন, যা হাজার হাজার মাইল জুড়ে বিদ্যুৎ লাইনের মাধ্যমে প্রবাহিত হয়। তিনি এই কাজ করছেন ১৫ বছর ধরে, এবং জানেন যে বিদ্যুৎ সরবরাহ নির্ভরযোগ্য রাখা মানে আসলে জীবন-মৃত্যুর প্রশ্ন। হাসপাতালের লাইফ সাপোর্ট মেশিন চালাতে বিদ্যুৎ দরকার, ট্রাফিক লাইট শহরকে নিরাপদ রাখে, আর কোটি মানুষ গরম, ঠান্ডা এবং যোগাযোগের জন্য বিদ্যুতের উপর নির্ভর করে। মারিয়ার কাজ হলো একাধিক অঙ্গরাজ্যের মধ্যে বিদ্যুৎ সরবরাহ ও চাহিদার ভারসাম্য বজায় রাখা, যেন বিদ্যুৎ উৎপাদন কেন্দ্র থেকে তোমার বাড়ি পর্যন্ত নিরবচ্ছিন্নভাবে পৌঁছাতে পারে। কিন্তু মহাকাশ থেকে আসা একটি অদৃশ্য হুমকি তার এই নিয়মিত দিনটিকে মুহূর্তেই এক ভয়াবহ সংকটে পরিণত করতে পারে, যা কোটি মানুষের জীবনে প্রভাব ফেলতে সক্ষম।",
      status: "normal",
      narrator: "Sam introduces us to the person who keeps our lights on",
      narratorBn: "স্যাম আমাদের সেই ব্যক্তির সাথে পরিচয় করিয়ে দেয় যিনি আমাদের আলো জ্বালিয়ে রাখেন"
    },
    {
      id: 'grid_operations',
      title: "The Invisible Network That Powers America",
      titleBn: "অদৃশ্য নেটওয়ার্ক যা আমেরিকাকে শক্তি দেয়",
      image: image2, 
      content: "The electrical grid that Maria operates is one of the most complex machines ever built by humans. Imagine a network of highways, but instead of cars, electricity is racing through power lines at nearly the speed of light. Power plants generate electricity that travels through high-voltage transmission lines - some carrying 765,000 volts - across hundreds of miles to reach cities and towns. Maria monitors this entire system from a control room that looks like NASA mission control, with giant screens showing the real-time flow of electricity across the Eastern United States. Every second, she has to balance supply and demand perfectly. If too much electricity tries to flow through a line, it could overheat and fail. If there's not enough, entire cities could lose power. It's like trying to conduct a symphony orchestra where every instrument must play in perfect harmony, and one wrong note could cause the whole performance to collapse.",
      contentBn: "মারিয়া যে বিদ্যুৎ গ্রিড পরিচালনা করেন, সেটি মানবজাতির তৈরি সবচেয়ে জটিল যন্ত্রগুলোর একটি। কল্পনা করো একটি বিশাল মহাসড়ক নেটওয়ার্ক, তবে সেখানে গাড়ির বদলে বিদ্যুৎ ছুটে চলছে প্রায় আলোর গতিতে। বিদ্যুৎকেন্দ্রগুলো বিদ্যুৎ উৎপন্ন করে, যা উচ্চ ভোল্টেজের ট্রান্সমিশন লাইনের মাধ্যমে — কিছু লাইনে ৭৬৫,০০০ ভোল্ট পর্যন্ত — শত শত মাইল পাড়ি দিয়ে শহর ও গ্রামে পৌঁছে যায়। মারিয়া পুরো এই সিস্টেমটি পর্যবেক্ষণ করেন একটি নিয়ন্ত্রণ কক্ষ থেকে, যা দেখতে অনেকটা নাসার মিশন কন্ট্রোল সেন্টারের মতো, যেখানে বিশাল স্ক্রিনে যুক্তরাষ্ট্রের পূর্বাঞ্চল জুড়ে বিদ্যুতের বাস্তবসময়ের প্রবাহ দেখানো হয়। প্রতি সেকেন্ডে তাকে সরবরাহ ও চাহিদার নিখুঁত ভারসাম্য বজায় রাখতে হয়। যদি অতিরিক্ত বিদ্যুৎ একটি লাইনের মাধ্যমে প্রবাহিত হয়, সেটি অতিরিক্ত গরম হয়ে নষ্ট হতে পারে। আর যদি বিদ্যুৎ কম থাকে, পুরো শহর অন্ধকারে ডুবে যেতে পারে। এটি অনেকটা এক বিশাল সিম্ফনি অর্কেস্ট্রা পরিচালনার মতো, যেখানে প্রতিটি বাদ্যযন্ত্রকে নিখুঁত সুরে বাজাতে হয় — একটিমাত্র ভুল সুর পুরো পরিবেশনা ভেঙে দিতে পারে।",
      status: "normal",
      narrator: "Sam explains the incredible complexity of the power grid",
      narratorBn: "স্যাম পাওয়ার গ্রিডের অবিশ্বাস্য জটিলতা ব্যাখ্যা করে"
    },
    {
      id: 'may_morning',
      title: "May 10th, 2024 - A Normal Friday Morning",
      titleBn: "১০ মে, ২০২৪ - একটি স্বাভাবিক শুক্রবার সকাল",
      image: image3,
      content: "At 6:00 AM on Friday, May 10th, 2024, Maria arrived at the control center for her 12-hour shift. Everything looked perfectly normal. Electricity demand was typical for a spring morning - people were waking up, turning on coffee makers, and getting ready for work. The massive transformers that step down high voltage power were humming quietly, and all the protective systems showed green lights. Maria had no idea that 93 million miles away, the Sun was building up to unleash one of the most powerful electromagnetic storms in 20 years. She checked the space weather alerts as part of her routine - NOAA had issued a G3 geomagnetic storm watch for the weekend, but those happened fairly regularly and the grid had handled them before. Maria focused on more immediate concerns: a planned maintenance outage in Ohio and managing the morning power demand peak as millions of people started their day.",
      contentBn: "২০২৪ সালের ১০ মে, শুক্রবার সকাল ৬টায় মারিয়া তার ১২ ঘণ্টার শিফটের জন্য নিয়ন্ত্রণ কেন্দ্রে পৌঁছালেন। সবকিছু একদম স্বাভাবিক দেখাচ্ছিল। বসন্তের এক সকাল হিসেবে বিদ্যুতের চাহিদাও ছিল স্বাভাবিক — মানুষ জেগে উঠছে, কফি মেশিন চালু করছে, কাজে যাওয়ার প্রস্তুতি নিচ্ছে। বিশাল ট্রান্সফরমারগুলো, যা উচ্চ ভোল্টেজ বিদ্যুৎকে কমিয়ে সরবরাহযোগ্য করে তোলে, নীরবে গুনগুন করছিল, আর সব সুরক্ষা ব্যবস্থা সবুজ আলো দেখাচ্ছিল। মারিয়ার ধারণাও ছিল না যে ৯৩ মিলিয়ন মাইল দূরে সূর্য বিশাল এক তড়িৎচুম্বকীয় ঝড় উন্মোচনের প্রস্তুতি নিচ্ছে — গত ২০ বছরের মধ্যে সবচেয়ে শক্তিশালীগুলোর একটি। তার নিয়মিত কাজের অংশ হিসেবে সে মহাকাশ আবহাওয়া সতর্কতা চেক করল — NOAA সপ্তাহান্তে একটি G3 মাত্রার ভূচুম্বকীয় ঝড়ের সতর্কতা জারি করেছিল, কিন্তু এমনটা প্রায়ই ঘটে এবং গ্রিড আগেও সেগুলো সামাল দিতে পেরেছিল। তাই মারিয়া মনোযোগ দিল আরও জরুরি বিষয়গুলোর দিকে: ওহাইওতে একটি নির্ধারিত রক্ষণাবেক্ষণ বন্ধ এবং সকালবেলায় কোটি মানুষের দিন শুরু হওয়ার সাথে সাথে বিদ্যুতের চাহিদার শীর্ষ নিয়ন্ত্রণ করা।",
      status: "normal", 
      narrator: "Sam describes the calm before the storm",
      narratorBn: "স্যাম ঝড়ের আগের শান্তির বর্ণনা দেয়"
    },
    {
      id: 'first_warnings',
      title: "10:30 AM - When Space Weather Became Real",
      titleBn: "সকাল ১০:৩০ - যখন মহাকাশের আবহাওয়া বাস্তব হয়ে উঠল",
      image: image4,
      content: "Maria was reviewing maintenance schedules when her computer started chiming with urgent alerts. The space weather monitoring system was showing readings she'd never seen before - a massive X5.8 solar flare had just erupted, and the electromagnetic pulse was already hitting Earth. Within minutes, NOAA upgraded their forecast to G4, then G5 - the highest level on the space weather scale. Maria's phone rang immediately. It was her supervisor: 'Maria, we're implementing GMD emergency procedures right now. This is not a drill.' GMD stands for Geomagnetic Disturbance, and Maria had trained for this scenario many times, but had never experienced a real G5 event. She immediately began activating the grid's space weather defenses: taking critical equipment out of service, preparing backup power supplies, and coordinating with other grid operators across North America.",
      contentBn: "মারিয়া রক্ষণাবেক্ষণ সূচি পর্যালোচনা করছিলেন, ঠিক তখনই তার কম্পিউটার জরুরি সতর্কবার্তায় টুংটাং করে বেজে উঠল। মহাকাশ আবহাওয়া পর্যবেক্ষণ সিস্টেম এমন ডেটা দেখাচ্ছিল যা সে আগে কখনও দেখেনি — একটি বিশাল X5.8 শ্রেণির সৌর বিস্ফোরণ (সোলার ফ্লেয়ার) সদ্য ঘটেছে, এবং তার তড়িৎচুম্বকীয় তরঙ্গ ইতিমধ্যেই পৃথিবীতে আঘাত হানছে। কয়েক মিনিটের মধ্যেই NOAA তাদের পূর্বাভাসকে G4-এ উন্নীত করল, এরপর G5-এ — যা মহাকাশ আবহাওয়ার স্কেলে সর্বোচ্চ মাত্রা। ঠিক তখনই মারিয়ার ফোন বেজে উঠল। ওপাশে তার সুপারভাইজার: “মারিয়া, আমরা এখনই GMD জরুরি প্রোটোকল কার্যকর করছি। এটা কোনো মহড়া নয়।GMD বা *Geomagnetic Disturbance* মানে ভূচুম্বকীয় বিপর্যয়, আর মারিয়া এই পরিস্থিতির জন্য বহুবার প্রশিক্ষণ নিয়েছে, কিন্তু বাস্তবে G5 মাত্রার ঘটনার মুখোমুখি সে কখনও হয়নি। সে সঙ্গে সঙ্গে গ্রিডের মহাকাশ ঝড় প্রতিরক্ষা ব্যবস্থা সক্রিয় করতে শুরু করল: গুরুত্বপূর্ণ যন্ত্রপাতি পরিষেবা থেকে সরিয়ে ফেলা, ব্যাকআপ বিদ্যুৎ সরবরাহ প্রস্তুত করা, এবং উত্তর আমেরিকা জুড়ে অন্যান্য গ্রিড অপারেটরদের সঙ্গে সমন্বয় সাধন করা।",
      status: "warning",
      narrator: "Sam describes the moment space weather became a crisis",
      narratorBn: "স্যাম সেই মুহূর্তের বর্ণনা দেয় যখন মহাকাশের আবহাওয়া সংকট হয়ে উঠেছিল"
    },
    {
      id: 'grid_under_attack',
      title: "The Invisible Enemy Strikes the Grid", 
      titleBn: "অদৃশ্য শত্রু গ্রিডে আঘাত হানে",
      image: image5,
      content: "By 11:00 AM, Maria could see the space weather attacking her power grid in real time. The geomagnetic storm was inducing powerful electrical currents in the Earth itself - something called Geomagnetically Induced Currents or GICs. These currents were flowing up through the grounding systems of power transformers, causing them to behave erratically. Maria watched her monitors as massive 500-ton transformers - each one costing millions of dollars - began showing dangerous heating patterns. The electrical current flowing through them was no longer the smooth 60-cycle alternating current they were designed for. Instead, it was distorted with harmonics that made the transformers work harder and consume more power. Some transformers started overheating, their cooling oil temperatures rising toward dangerous levels. If a transformer failed, it could take months to replace and would leave hundreds of thousands of people without power.",
      contentBn: "সকাল ১১টার মধ্যেই মারিয়া বাস্তব সময়ে দেখতে পাচ্ছিলেন যে মহাকাশ আবহাওয়া তার বিদ্যুৎ গ্রিডে আক্রমণ চালাচ্ছে। ভূচুম্বকীয় ঝড় পৃথিবীর ভেতরেই শক্তিশালী বৈদ্যুতিক প্রবাহ সৃষ্টি করছিল — যাকে বলা হয় *Geomagnetically Induced Currents* বা GICs। এই প্রবাহগুলো পাওয়ার ট্রান্সফরমারের গ্রাউন্ডিং সিস্টেম দিয়ে উপরের দিকে উঠছিল, যার ফলে সেগুলোর আচরণ অস্বাভাবিক হয়ে যাচ্ছিল। মারিয়া তার মনিটরে দেখছিলেন, বিশাল ৫০০ টন ওজনের ট্রান্সফরমারগুলো — যেগুলোর প্রতিটির দাম কোটি ডলার — বিপজ্জনক তাপমাত্রার প্যাটার্ন দেখাতে শুরু করেছে। এর মধ্য দিয়ে প্রবাহিত বিদ্যুৎ আর সেই পরিচিত মসৃণ ৬০-সাইকেলের বিকল্প প্রবাহ ছিল না, যার জন্য এগুলো তৈরি করা হয়েছিল। বরং তা বিকৃত হয়ে হরমনিক্স তৈরি করছিল, যা ট্রান্সফরমারগুলোকে আরও বেশি পরিশ্রম করতে বাধ্য করছিল এবং বেশি শক্তি খরচ করাচ্ছিল। কিছু ট্রান্সফরমার অতিরিক্ত গরম হতে শুরু করল, তাদের কুলিং তেলের তাপমাত্রা বিপজ্জনক মাত্রার দিকে বাড়তে লাগল। যদি একটি ট্রান্সফরমার ব্যর্থ হয়, তাহলে সেটি প্রতিস্থাপনে মাস লেগে যেতে পারে এবং লক্ষাধিক মানুষ বিদ্যুৎবিহীন হয়ে পড়বে।",
      status: "critical",
      narrator: "Sam reveals how space weather attacks the power grid",
      narratorBn: "স্যাম প্রকাশ করে কীভাবে মহাকাশের আবহাওয়া পাওয়ার গ্রিডে আক্রমণ করে"
    },
    {
      id: 'fighting_back',
      title: "Maria's Battle to Keep the Lights On",
      titleBn: "আলো জ্বালিয়ে রাখার জন্য মারিয়ার যুদ্ধ",
      image: image6, 
      content: "Maria and her team fought the space weather with everything they had. They activated GIC blocking devices - special equipment designed to stop the harmful currents from reaching transformers. They rerouted power flows to avoid the most vulnerable parts of the grid. They called up reserve generators and prepared to shed load - temporarily cutting power to some customers to protect the overall system. Maria was in constant communication with grid operators across the continent, sharing information about which areas were being hit hardest by the geomagnetic storm. The space weather wasn't affecting all areas equally - some regions saw GIC levels 10 times higher than others. Maria had to make split-second decisions about which equipment to protect and which risks to take. Every choice could mean the difference between keeping the power on for millions of people or facing a cascading blackout that could take days to restore.",
      contentBn: "মারিয়া ও তার দল তাদের সর্বশক্তি দিয়ে মহাকাশ ঝড়ের বিরুদ্ধে লড়াই করছিল। তারা সক্রিয় করল GIC ব্লকিং ডিভাইস — বিশেষ যন্ত্রপাতি যা ক্ষতিকারক প্রবাহকে ট্রান্সফরমারে পৌঁছানো থেকে আটকায়। তারা বিদ্যুৎ প্রবাহ পুনর্নির্দেশ করল যাতে গ্রিডের সবচেয়ে ঝুঁকিপূর্ণ অংশগুলো এড়িয়ে যাওয়া যায়। তারা রিজার্ভ জেনারেটর চালু করল এবং লোড শেডিংয়ের প্রস্তুতি নিল — সাময়িকভাবে কিছু গ্রাহকের বিদ্যুৎ সরবরাহ বন্ধ করে পুরো সিস্টেমকে রক্ষা করার জন্য। মারিয়া অবিরাম যোগাযোগ রাখছিলেন মহাদেশজুড়ে অন্যান্য গ্রিড অপারেটরদের সঙ্গে, শেয়ার করছিলেন কোন কোন এলাকা ভূচুম্বকীয় ঝড়ের সবচেয়ে বেশি আঘাত পাচ্ছে সেই তথ্য। মহাকাশ আবহাওয়া সব জায়গায় সমানভাবে প্রভাব ফেলছিল না — কিছু অঞ্চলে GIC স্তর অন্যদের তুলনায় ১০ গুণ পর্যন্ত বেশি ছিল। মারিয়াকে মুহূর্তের মধ্যেই সিদ্ধান্ত নিতে হচ্ছিল কোন যন্ত্রপাতিকে রক্ষা করা জরুরি এবং কোন ঝুঁকি নেওয়া যেতে পারে। প্রতিটি সিদ্ধান্তই নির্ধারণ করতে পারত — কোটি মানুষের জন্য বিদ্যুৎ চালু রাখা যাবে কি না, নাকি একের পর এক বন্ধ হয়ে পড়া ব্ল্যাকআউটের মুখোমুখি হতে হবে, যা পুনরুদ্ধার করতে কয়েকদিন সময় লাগতে পারে।",
      status: "critical",
      narrator: "Sam shows Maria's heroic efforts to maintain power",
      narratorBn: "স্যাম বিদ্যুৎ বজায় রাখার জন্য মারিয়ার বীরত্বপূর্ণ প্রচেষ্টা দেখায়"
    },
    {
      id: 'system_holds',
      title: "Victory Against the Storm",
      titleBn: "ঝড়ের বিরুদ্ধে বিজয়",
      image: image7,
      content: "After 18 hours of intense monitoring and constant adjustments, the Gannon Storm finally began to weaken. Maria's grid had survived! There were some tense moments - several transformers had overheated and needed to be temporarily taken out of service, causing minor power outages for about 50,000 customers. Some sensitive electronic equipment had tripped offline, and a few transmission lines had automatically disconnected when their protection systems detected abnormal conditions. But the bulk power system remained stable. No major blackouts occurred, no transformers were permanently damaged, and by Saturday evening, all systems were back to normal. Maria's expertise, combined with 10 years of space weather preparation following previous storms, had paid off. The grid operators' quick response and the billions of dollars invested in protective equipment had prevented what could have been a disaster affecting millions of people.",
      contentBn: "১৮ ঘণ্টার টানা নজরদারি ও নিরবচ্ছিন্ন সমন্বয়ের পর অবশেষে “গ্যানন ঝড়” দুর্বল হতে শুরু করল। মারিয়ার বিদ্যুৎ গ্রিড টিকে গেল! যদিও কিছু উত্তেজনাপূর্ণ মুহূর্ত ছিল — কয়েকটি ট্রান্সফরমার অতিরিক্ত গরম হয়ে সাময়িকভাবে পরিষেবা থেকে সরিয়ে নিতে হয়েছিল, যার ফলে প্রায় ৫০,০০০ গ্রাহকের জন্য ছোটখাটো বিদ্যুৎ বিভ্রাট ঘটে। কিছু সংবেদনশীল ইলেকট্রনিক যন্ত্রপাতি স্বয়ংক্রিয়ভাবে বন্ধ হয়ে যায়, এবং কয়েকটি ট্রান্সমিশন লাইন তাদের সুরক্ষা ব্যবস্থা অস্বাভাবিক অবস্থা শনাক্ত করার পর স্বয়ংক্রিয়ভাবে সংযোগ বিচ্ছিন্ন করে দেয়। কিন্তু মূল বিদ্যুৎ সরবরাহ ব্যবস্থা স্থিতিশীল ছিল। কোনো বড় ধরনের ব্ল্যাকআউট ঘটেনি, কোনো ট্রান্সফরমার স্থায়ীভাবে ক্ষতিগ্রস্ত হয়নি, এবং শনিবার সন্ধ্যার মধ্যেই সবকিছু স্বাভাবিক অবস্থায় ফিরে আসে। মারিয়ার দক্ষতা এবং আগের ঝড়গুলোর পর ১০ বছরের মহাকাশ আবহাওয়া প্রস্তুতির অভিজ্ঞতা সফলতা এনে দিল। গ্রিড অপারেটরদের দ্রুত পদক্ষেপ এবং সুরক্ষা যন্ত্রপাতিতে বিনিয়োগ করা বিলিয়ন ডলার মিলিয়ে সেই বিপর্যয়কে রোধ করল, যা অন্যথায় কোটি মানুষের জীবনে ভয়াবহ প্রভাব ফেলতে পারত।",
      status: "resolution",
      narrator: "Sam celebrates Maria's successful defense of the power grid",
      narratorBn: "স্যাম পাওয়ার গ্রিডের মারিয়ার সফল প্রতিরক্ষা উদযাপন করে"
    },
    {
      id: 'lessons_learned',
      title: "The Hidden Heroes of Modern Life",
      titleBn: "আধুনিক জীবনের লুকানো বীরেরা",
      image: image8,
      content: "Most people never knew how close they came to losing power during the Gannon Storm. They went about their Friday and weekend normally, never realizing that Maria and thousands of other power grid operators had worked around the clock to keep their lights on, their refrigerators running, and their phones charged. This event showed how vulnerable our modern technological society is to space weather, but also how effective preparation and skilled operators can prevent disaster. Maria continues to work as a grid operator, but now she's also involved in training other operators about space weather risks. She knows that as our society becomes more dependent on electricity, and as the solar cycle continues to produce powerful storms, her job will only become more challenging. The next time you flip a light switch and it works, remember Maria and the thousands of other grid operators who stand guard 24/7 against threats both earthly and cosmic.",
      contentBn: "বেশিরভাগ মানুষ কখনও জানতেই পারেনি “গ্যানন ঝড়”-এর সময় তারা কতটা কাছাকাছি চলে গিয়েছিল বিদ্যুৎ হারানোর। তারা তাদের শুক্রবার ও সপ্তাহান্ত একেবারে স্বাভাবিকভাবে কাটিয়েছে, বুঝতেই পারেনি যে মারিয়া এবং হাজার হাজার অন্যান্য পাওয়ার গ্রিড অপারেটর নিরবচ্ছিন্নভাবে কাজ করে গেছে — যেন তাদের ঘরের আলো জ্বলে থাকে, ফ্রিজ চালু থাকে, আর ফোন চার্জ থাকে। এই ঘটনাটি আমাদের আধুনিক প্রযুক্তিনির্ভর সমাজ কতটা মহাকাশ আবহাওয়ার কাছে দুর্বল, তা স্পষ্ট করে দিয়েছে, তবে এটাও প্রমাণ করেছে যে সঠিক প্রস্তুতি ও দক্ষ অপারেটররা বিপর্যয় ঠেকাতে কতটা কার্যকর হতে পারে।মারিয়া এখনো একজন গ্রিড অপারেটর হিসেবে কাজ করে যাচ্ছেন, তবে এখন তিনি অন্য অপারেটরদের মহাকাশ আবহাওয়ার ঝুঁকি সম্পর্কে প্রশিক্ষণ দেওয়ার কাজেও যুক্ত। তিনি জানেন, আমাদের সমাজ যত বিদ্যুতের উপর নির্ভরশীল হয়ে উঠছে এবং সৌর চক্র যত শক্তিশালী ঝড় সৃষ্টি করছে, তার কাজ ততই কঠিন হয়ে উঠবে।পরের বার তুমি যখন একটি সুইচ চাপবে আর আলো জ্বলে উঠবে, তখন মনে রেখো — মারিয়া এবং হাজার হাজার গ্রিড অপারেটর ২৪ ঘণ্টা তোমার পাশে প্রহরীর মতো দাঁড়িয়ে আছে, পৃথিবীর ও মহাকাশের হুমকির বিরুদ্ধে রক্ষা করছে তোমার জীবনযাত্রা।",
      status: "reflection",
      narrator: "Sam reflects on the hidden heroes who keep our modern world running",
      narratorBn: "স্যাম সেই লুকানো বীরদের নিয়ে প্রতিফলন করে যারা আমাদের আধুনিক বিশ্বকে চালু রাখে"
    }
  ];

  // Quiz questions
  const quizQuestions = {
    english: [
      {
        question: "How long has Maria Rodriguez been working as a power grid operator?",
        options: ["10 years", "15 years", "20 years", "25 years"],
        correctAnswer: 1
      },
      {
        question: "What time did Maria arrive for her shift on May 10th, 2024?",
        options: ["5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM"],
        correctAnswer: 1
      },
      {
        question: "What does GMD stand for in power grid operations?",
        options: ["Grid Management Directive", "Geomagnetic Disturbance", "Generator Maintenance Delay", "Grid Monitor Display"],
        correctAnswer: 1
      },
      {
        question: "What solar flare class hit Earth during the Gannon Storm?",
        options: ["X3.2", "X4.5", "X5.8", "X6.9"],
        correctAnswer: 2
      },
      {
        question: "How many customers were affected by minor power outages during the storm?",
        options: ["25,000", "50,000", "75,000", "100,000"],
        correctAnswer: 1
      },
      {
        question: "How much can a single power transformer cost?",
        options: ["$1+ million", "$5+ million", "$10+ million", "$20+ million"],
        correctAnswer: 2
      },
      {
        question: "What is the highest level on the geomagnetic storm scale?",
        options: ["G3", "G4", "G5", "G6"],
        correctAnswer: 2
      },
      {
        question: "How long did Maria and her team monitor the storm intensively?",
        options: ["12 hours", "15 hours", "18 hours", "24 hours"],
        correctAnswer: 2
      }
    ],
    bengali: [
      {
        question: "মারিয়া রডরিগেজ কত বছর ধরে পাওয়ার গ্রিড অপারেটর হিসেবে কাজ করছেন?",
        options: ["১০ বছর", "১৫ বছর", "২০ বছর", "২৫ বছর"],
        correctAnswer: 1
      },
      {
        question: "১০ মে, ২০২৪ তারিখে মারিয়া কখন তার শিফটের জন্য পৌঁছেছিলেন?",
        options: ["সকাল ৫:০০", "সকাল ৬:০০", "সকাল ৭:০০", "সকাল ৮:০০"],
        correctAnswer: 1
      },
      {
        question: "পাওয়ার গ্রিড অপারেশনে GMD এর অর্থ কী?",
        options: ["গ্রিড ম্যানেজমেন্ট ডাইরেক্টিভ", "জিওম্যাগনেটিক ডিস্টার্বেন্স", "জেনারেটর মেইনটেনেন্স ডিলে", "গ্রিড মনিটর ডিসপ্লে"],
        correctAnswer: 1
      },
      {
        question: "গ্যানন ঝড়ের সময় কোন শ্রেণীর সৌর অগ্ন্যুৎপাত পৃথিবীকে আঘাত করেছিল?",
        options: ["X3.2", "X4.5", "X5.8", "X6.9"],
        correctAnswer: 2
      },
      {
        question: "ঝড়ের সময় সামান্য বিদ্যুৎ বিভ্রাটে কতজন গ্রাহক প্রভাবিত হয়েছিল?",
        options: ["২৫,০০০", "৫০,০০০", "৭৫,০০০", "১,০০,০০০"],
        correctAnswer: 1
      },
      {
        question: "একটি একক পাওয়ার ট্রান্সফরমারের দাম কত হতে পারে?",
        options: ["১+ মিলিয়ন ডলার", "৫+ মিলিয়ন ডলার", "১০+ মিলিয়ন ডলার", "২০+ মিলিয়ন ডলার"],
        correctAnswer: 2
      },
      {
        question: "ভূচৌম্বকীয় ঝড় স্কেলে সর্বোচ্চ মাত্রা কী?",
        options: ["G3", "G4", "G5", "G6"],
        correctAnswer: 2
      },
      {
        question: "মারিয়া এবং তার দল কত ঘন্টা তীব্রভাবে ঝড় পর্যবেক্ষণ করেছিল?",
        options: ["১২ ঘন্টা", "১৫ ঘন্টা", "১৮ ঘন্টা", "২৪ ঘন্টা"],
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
      case 'normal': return 'from-blue-500 to-green-500';
      case 'warning': return 'from-yellow-500 to-orange-500';
      case 'critical': return 'from-red-500 to-pink-500';
      case 'resolution': return 'from-green-600 to-blue-600';
      case 'reflection': return 'from-purple-600 to-blue-600';
      default: return 'from-yellow-500 to-orange-500';
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 text-white">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-yellow-500/30 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={goHome}
              className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              {isBengali ? 'হোমে যান' : 'Go to Home'}
            </button>
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 rounded-lg transition-colors"
            >
              <Globe className="w-5 h-5" />
              {isBengali ?  'English':  'বাংলা' }
            </button>
          </div>
          
          {/* Main Header */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-yellow-300">
                {isBengali ? 'অবরুদ্ধ গ্রিড' : 'Grid Under Siege'}
              </h1>
              <p className="text-xl text-gray-300">
                {isBengali ? 'কীভাবে মহাকাশের আবহাওয়া আমাদের শক্তিকে হুমকি দেয়' : 'How Space Weather Threatens Our Power'}
              </p>
              <p className="text-gray-400 flex items-center gap-2 mt-2">
                <User className="w-4 h-4" />
                {isBengali ? 'বর্ণিত: স্যাম, বয়স ১৬' : 'Told by Sam, age 16'}
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
            <h2 className="text-2xl font-semibold text-yellow-300">
              {isBengali ? `অধ্যায় ${currentScene + 1} এর ${scenes.length}` : `Chapter ${currentScene + 1} of ${scenes.length}`}
            </h2>
            <button 
              onClick={toggleAutoPlay}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isAutoPlaying 
                  ? 'bg-orange-600 hover:bg-orange-500 text-white' 
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
              className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full transition-all duration-500"
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
                <h3 className="text-3xl font-bold mb-4 text-orange-300">
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
                    className="flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-500 rounded-lg transition-colors"
                  >
                    {isBengali ? 'পরবর্তী অধ্যায়' : 'Next Chapter'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Status and Power Facts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30">
            <h3 className="text-xl font-bold text-orange-300 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              {isBengali ? 'ঝড়ের সময় গ্রিডের অবস্থা' : 'Grid Status During Storm'}
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'সিস্টেম স্থিতিশীলতা' : 'System Stability'}</span>
                <span className="text-green-400">{isBengali ? 'বজায় রাখা হয়েছে' : 'MAINTAINED'}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'প্রভাবিত গ্রাহক' : 'Customers Affected'}</span>
                <span className="text-yellow-400">{isBengali ?  '৫০,০০০' : '50,000'}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'ঝড়ের মাত্রা' : 'Storm Level'}</span>
                <span className="text-red-400">{isBengali ? 'G5 চরম' : 'G5 EXTREME'}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'প্রতিক্রিয়ার সময়' : 'Response Time'}</span>
                <span className="text-blue-400">{isBengali ? '১৫ মিনিট' : '15 Minutes'}</span>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">
              {isBengali ? 'পাওয়ার গ্রিডের তথ্য' : 'Power Grid Facts'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'গ্রিড ৩৩৪ মিলিয়ন আমেরিকানদের ৯৯.৯৭% নির্ভরযোগ্যতার সাথে সেবা দেয়'
                    : 'The grid serves 334 million Americans with 99.97% reliability'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'পাওয়ার ট্রান্সফরমারের দাম ১০+ মিলিয়ন ডলার হতে পারে এবং প্রতিস্থাপনে মাস লাগে'
                    : 'Power transformers can cost $10+ million and take months to replace'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'গ্রিড অপারেটররা একাধিক রাজ্যে রিয়েল-টাইমে বিদ্যুৎ প্রবাহ পর্যবেক্ষণ করেন'
                    : 'Grid operators monitor electricity flow in real-time across multiple states'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'মহাকাশের আবহাওয়া সুরক্ষা ব্যবস্থার দাম বিলিয়ন ডলার কিন্তু বিপর্যয় প্রতিরোধ করে'
                    : 'Space weather protection systems cost billions but prevent disasters'
                  }
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* The Real Science */}
        <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-8 border border-orange-500/30 mb-8">
          <h3 className="text-3xl font-bold text-orange-300 mb-6 flex items-center gap-3">
            <Power className="w-8 h-8" />
            {isBengali ? 'কীভাবে মহাকাশের আবহাওয়া পাওয়ার গ্রিডে আক্রমণ করে' : 'How Space Weather Attacks Power Grids'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-yellow-300 mb-4">
                {isBengali ? 'ভূচৌম্বকীয়ভাবে প্রবাহিত স্রোত' : 'Geomagnetically Induced Currents'}
              </h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                {isBengali 
                  ? 'যখন ভূচৌম্বকীয় ঝড় পৃথিবীকে আঘাত করে, তারা পরিবর্তনশীল চৌম্বকীয় ক্ষেত্র তৈরি করে যা মাটিতে শক্তিশালী বৈদ্যুতিক স্রোত প্রবাহিত করে। এই স্রোতগুলি ট্রান্সফরমার গ্রাউন্ডিং সিস্টেমের মধ্য দিয়ে প্রবাহিত হয়, যার ফলে ট্রান্সফরমারগুলি অতিরিক্ত গরম হয় এবং সম্ভাব্য বিপর্যয়কর ব্যর্থতা ঘটে।'
                  : 'When geomagnetic storms hit Earth, they create changing magnetic fields that induce powerful electrical currents in the ground. These currents flow up through transformer grounding systems, causing transformers to overheat and potentially fail catastrophically.'
                }
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-yellow-300 mb-4">
                {isBengali ? 'গ্রিড সুরক্ষা ব্যবস্থা' : 'Grid Protection Systems'}
              </h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                {isBengali 
                  ? 'আধুনিক গ্রিডগুলি মহাকাশের আবহাওয়ার বিরুদ্ধে সুরক্ষার জন্য GIC ব্লকিং ডিভাইস, রিয়েল-টাইম পর্যবেক্ষণ এবং জরুরি পদ্ধতি ব্যবহার করে। ১৯৮৯ সালের কিউবেক ব্ল্যাকআউট শিল্পকে শিখিয়েছিল যে মহাকাশের আবহাওয়া একটি গুরুতর হুমকি যার জন্য ক্রমাগত সতর্কতা এবং ব্যয়বহুল সুরক্ষামূলক ব্যবস্থা প্রয়োজন।'
                  : 'Modern grids use GIC blocking devices, real-time monitoring, and emergency procedures to protect against space weather. The 1989 Quebec blackout taught the industry that space weather is a serious threat requiring constant vigilance and expensive protective measures.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105">
            {isBengali ? 'আরও গল্প পড়ুন' : 'Read More Stories'}
          </button>
          <button className="bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full text-xl font-bold transition-all duration-300">
            {isBengali ? 'পাওয়ার গ্রিড সম্পর্কে জানুন' : 'Learn About the Power Grid'}
          </button>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-yellow-500/30 mt-8">
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-center text-yellow-300 mb-8">
            {isBengali ? 'গল্পের কুইজ' : 'Story Quiz'}
          </h2>
          
          {/* Quiz Toggle Button */}
          {!showQuiz && (
            <div className="flex justify-center mb-8">
              <button 
                onClick={startQuiz}
                className="px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white"
              >
                ⚡ {isBengali ? 'কুইজ শুরু করুন' : 'Start Quiz'}
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
                ? 'এই গল্পটি  মহাকাশ আবহাওয়া ব্যবহারকারীদের প্রয়োজন সম্পর্কে প্রথম জাতীয় সমীক্ষার ফলাফল ২০২৪ থেকে অনুপ্রাণিত। সমস্ত চরিত্র কাল্পনিক।'
                : 'This story is inspired by   Results-of-the-First-National-Survey-of-User-Needs-for-Space-Weather-2024.pdf. All characters are fictitious.'
              }
            </p>
            <div className="inline-block bg-gray-800/50 border border-gray-600/50 rounded-lg p-4">
              <p className="text-orange-400 font-mono text-sm">
                 Results-of-the-First-National-Survey-of-User-Needs-for-Space-Weather-2024.pdf
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

export default PowerOperatorsStory;

 
'use client';

import React, { useState, useEffect } from 'react';
import { Globe, Wifi, Smartphone, Clock, ArrowLeft, ArrowRight, CheckCircle, Zap, User, WifiOff, Home } from 'lucide-react';
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

const EveryoneImpactStory = () => {
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
    title: "Meet the Connected World",
    titleBn: "সংযুক্ত বিশ্বের সঙ্গে পরিচয়",
    image: image1,
    content: "Hi, I'm Casey! Today I want to tell you about something that affects every single person on Earth, including you and me. It's about how space weather - storms on the Sun 93 million miles away - can suddenly disrupt the invisible digital world that connects us all. Think about your typical day: you wake up and check your phone, use GPS to navigate to school, stream videos, video chat with friends, and rely on the internet for almost everything. What most people don't realize is that all of these technologies depend on satellites orbiting Earth and radio waves traveling through space. When the Sun gets angry and throws a cosmic tantrum, it can disrupt the invisible infrastructure that makes modern life possible. This is the story of how everyone - from kids playing online games to grandparents video calling their families - can be affected by space weather.",
    contentBn: "হ্যালো, আমি কেসি! আজ আমি আপনাদের এমন কিছু সম্পর্কে বলতে চাই যা পৃথিবীর প্রতিটি মানুষকে প্রভাবিত করে, আপনিও এবং আমি সহ। এটি মহাকাশের আবহাওয়া নিয়ে—সূর্যের ঝড় যা ৯৩ মিলিয়ন মাইল দূরে ঘটে—যা হঠাৎ করে আমাদের সকলকে সংযুক্ত করা অদৃশ্য ডিজিটাল জগৎকে ব্যাহত করতে পারে। আপনার দৈনন্দিন দিনের কথা ভাবুন: আপনি ঘুম থেকে উঠেন, ফোন চেক করেন, স্কুলে যাওয়ার জন্য জিপিএস ব্যবহার করেন, ভিডিও স্ট্রিম দেখেন, বন্ধুদের সাথে ভিডিও চ্যাট করেন এবং প্রায় সবকিছুর জন্য ইন্টারনেটের উপর নির্ভর করেন। বেশিরভাগ মানুষ জানে না যে এই সমস্ত প্রযুক্তি পৃথিবীর চারপাশে প্রদক্ষিণরত স্যাটেলাইট এবং মহাকাশের মধ্য দিয়ে ভ্রমণকারী রেডিও তরঙ্গের ওপর নির্ভরশীল। যখন সূর্য রুষ্ট হয়ে মহাজাগতিক উত্তেজনা ছুড়ে ফেলে, তখন এটি সেই অদৃশ্য অবকাঠামোকে ব্যাহত করতে পারে যা আধুনিক জীবনকে সম্ভব করে তোলে। এটি সেই গল্প যেখানে সবাই—from অনলাইন গেম খেলা শিশুরা থেকে শুরু করে পরিবারের সাথে ভিডিও কল করা দাদা-দাদী পর্যন্ত—মহাকাশের আবহাওয়ায় প্রভাবিত হতে পারে।",
    status: "normal",
    narrator: "Casey introduces how space weather affects everyone's digital life",
    narratorBn: "কেসি ব্যাখ্যা করেন কীভাবে মহাকাশের আবহাওয়া সবার ডিজিটাল জীবনকে প্রভাবিত করে"
  },
  {
    id: 'digital_dependency',
    title: "Our Invisible Digital Lifeline",
    titleBn: "আমাদের অদৃশ্য ডিজিটাল জীবনরেখা",
    image: image2, 
    content: "Let me show you just how connected we really are. Right now, there are over 8,000 satellites orbiting Earth, providing GPS navigation, internet access, weather forecasting, and communication services. Every time you use your phone's maps, post on social media, stream a movie, or even use a credit card, you're relying on satellites and radio signals that travel through space. The internet that seems so reliable actually depends on a complex network of underwater cables, cell towers, and satellites all working together perfectly. GPS satellites orbiting 12,500 miles above Earth are constantly beaming timing signals that not only help you navigate but also synchronize everything from traffic lights to banking systems. Most people have no idea that their daily digital routine depends on technology that's vulnerable to storms happening on the Sun millions of miles away.",
    contentBn: "আমি আপনাদের দেখাই আমরা আসলে কতটা সংযুক্ত। এই মুহূর্তে, ৮,০০০-এরও বেশি স্যাটেলাইট পৃথিবীকে প্রদক্ষিণ করছে, জিপিএস নেভিগেশন, ইন্টারনেট অ্যাক্সেস, আবহাওয়ার পূর্বাভাস এবং যোগাযোগ সেবা প্রদান করছে। যখনই আপনি আপনার ফোনের ম্যাপ ব্যবহার করেন, সোশ্যাল মিডিয়ায় পোস্ট করেন, সিনেমা স্ট্রিম করেন, বা ক্রেডিট কার্ড ব্যবহার করেন, তখন আপনি স্যাটেলাইট এবং মহাকাশের মধ্য দিয়ে ভ্রমণকারী রেডিও সংকেতের উপর নির্ভর করছেন। যে ইন্টারনেটটি এত নির্ভরযোগ্য মনে হয়, তা আসলে জটিল পানির তলায় থাকা তার, সেল টাওয়ার এবং স্যাটেলাইটের এক সমন্বিত নেটওয়ার্কের ওপর নির্ভর করে। পৃথিবীর ১২,৫০০ মাইল উপরে প্রদক্ষিণরত GPS স্যাটেলাইটগুলি সময়ের সংকেত প্রেরণ করছে যা কেবল নেভিগেশনের জন্য নয়, ট্রাফিক লাইট থেকে ব্যাংকিং সিস্টেম পর্যন্ত সবকিছুকে সঠিকভাবে সমন্বয় করে। বেশিরভাগ মানুষ জানে না যে তাদের দৈনন্দিন ডিজিটাল রুটিন সেই প্রযুক্তির ওপর নির্ভর করছে যা সূর্যের লক্ষ লক্ষ মাইল দূরে ঘটমান ঝড়ের জন্য অসুরক্ষিত।",
    status: "normal",
    narrator: "Casey explains our hidden dependence on space-based technology",
    narratorBn: "কেসি আমাদের মহাকাশ-ভিত্তিক প্রযুক্তির প্রতি লুকানো নির্ভরশীলতা ব্যাখ্যা করেন"
  },
  {
    id: 'normal_friday',
    title: "May 10th, 2024 - Just Another Digital Day",
    titleBn: "১০ মে, ২০২৪ - আরেকটি ডিজিটাল দিন",
    image: image3,
    content: "Friday, May 10th, 2024 started like any other day for millions of people around the world. Kids were getting ready for school, checking social media and texting friends. Parents were using GPS to navigate through traffic while listening to streaming music. Office workers were joining video conferences and checking emails. Gamers were logging into online multiplayer games. Delivery drivers were using GPS apps to find addresses. Credit card transactions were processing normally at stores and restaurants. Emergency services were using GPS for rapid response. Everything seemed perfectly normal in our hyperconnected world. But 93 million miles away, the Sun was building up to release one of the most powerful electromagnetic storms in 20 years. Most people had never heard of 'space weather,' and they certainly didn't expect it to affect their smartphones, internet, or GPS navigation.",
    contentBn: "শুক্রবার, ১০ মে, ২০২৪ বিশ্বব্যাপী লক্ষ লক্ষ মানুষের জন্য অন্যান্য দিনের মতোই শুরু হয়েছিল। বাচ্চারা স্কুলের জন্য প্রস্তুতি নিচ্ছিল, সোশ্যাল মিডিয়া চেক করছিল এবং বন্ধুদের সাথে মেসেজিং করছিল। বাবা-মায়েরা ট্রাফিকের মধ্য দিয়ে নেভিগেট করতে জিপিএস ব্যবহার করছিল এবং স্ট্রিমিং মিউজিক উপভোগ করছিলেন। অফিসের কর্মীরা ভিডিও কনফারেন্সে যোগ দিচ্ছিল এবং ইমেইল চেক করছিল। গেমাররা অনলাইন মাল্টিপ্লেয়ার গেমে লগইন করছিল। ডেলিভারি ড্রাইভাররা ঠিকানা খুঁজতে GPS অ্যাপ ব্যবহার করছিল। দোকান এবং রেস্তোরাঁয় ক্রেডিট কার্ড লেনদেন স্বাভাবিকভাবে চলছিল। জরুরি সেবাগুলো দ্রুত প্রতিক্রিয়ার জন্য GPS ব্যবহার করছিল। আমাদের সুপার সংযুক্ত বিশ্বের সবকিছু স্বাভাবিক মনে হচ্ছিল। কিন্তু ৯৩ মিলিয়ন মাইল দূরে, সূর্য সবচেয়ে শক্তিশালী বৈদ্যুতচুম্বকীয় ঝড়ের একটির প্রস্তুতি নিচ্ছিল যা গত ২০ বছরে দেখা যায়নি। বেশিরভাগ মানুষ 'মহাকাশ আবহাওয়া' সম্পর্কে কখনও শোনেনি, এবং তারা আশা করতেও পারতেন না যে এটি তাদের স্মার্টফোন, ইন্টারনেট বা GPS নেভিগেশনে প্রভাব ফেলবে।",
    status: "normal", 
    narrator: "Casey describes a normal day in our connected world",
    narratorBn: "কেসি আমাদের সংযুক্ত বিশ্বে একটি স্বাভাবিক দিনের বর্ণনা দেন"
  },
  {
    id: 'storm_hits_everyone',
    title: "When the Digital World Started Glitching",
    titleBn: "যখন ডিজিটাল জগৎ বিঘ্নিত হতে শুরু করল",
    image: image4,
    content: "By 11:00 AM, people around the world started noticing something was wrong with their technology. GPS apps on phones began giving wildly inaccurate directions - some showing locations that were miles off. Drivers found themselves being directed into lakes or told they were in completely different countries. Ride-share apps couldn't accurately track driver locations. Delivery drivers got lost trying to find addresses. Cell phone service became spotty in many areas as communication satellites struggled with the electromagnetic interference. Internet speeds slowed down as satellite internet providers dealt with signal disruption. Some ATMs had trouble processing transactions because they rely on GPS time signals for security. Even the precise timing systems that keep cell phone networks synchronized began having problems. What started as minor digital hiccups quickly escalated into widespread technology frustration affecting billions of people worldwide.",
    contentBn: "সকাল ১১:০০ টার দিকে, বিশ্বজুড়ে মানুষ লক্ষ্য করতে শুরু করল যে তাদের প্রযুক্তিতে কিছু সমস্যা হচ্ছে। ফোনের GPS অ্যাপগুলি অত্যন্ত ভুল দিকনির্দেশনা দিতে শুরু করল—কিছু এমন স্থান দেখাচ্ছিল যা মাইলের পর মাইল দূরে। ড্রাইভাররা হঠাৎ হ্রদে বা পুরো ভিন্ন দেশে যাওয়ার নির্দেশনা পাচ্ছিল। রাইড-শেয়ার অ্যাপগুলি ড্রাইভারদের অবস্থান সঠিকভাবে ট্র্যাক করতে পারছিল না। ডেলিভারি ড্রাইভাররা ঠিকানা খুঁজতে গিয়ে হারিয়ে যাচ্ছিল। অনেক এলাকায় সেল ফোন সেবা স্থিতিশীল ছিল না কারণ যোগাযোগ স্যাটেলাইট বৈদ্যুতচুম্বকীয় ব্যাঘাতের সাথে লড়াই করছিল। স্যাটেলাইট ইন্টারনেট প্রদানকারীরা সিগন্যাল ব্যাঘাত সামলাতে গিয়ে ইন্টারনেটের গতি কমে গেল। কিছু এটিএম লেনদেন প্রক্রিয়ায় সমস্যা করল কারণ সেগুলি নিরাপত্তার জন্য GPS সময় সংকেতের উপর নির্ভর করে। এমনকি সেই সূক্ষ্ম সময় নির্ধারণ ব্যবস্থাও যা সেল ফোন নেটওয়ার্ককে সমন্বিত রাখে, সমস্যায় পড়ল। যা ছোটখাটো ডিজিটাল সমস্যা হিসাবে শুরু হয়েছিল তা দ্রুত বাড়তে শুরু করল এবং বিশ্বজুড়ে বিলিয়ন মানুষকে প্রযুক্তিগত বিভ্রান্তিতে ফেলল।",
    status: "warning",
    narrator: "Casey describes how space weather disrupted everyone's technology",
    narratorBn: "কেসি বর্ণনা করেন কীভাবে মহাকাশের আবহাওয়া সবার প্রযুক্তিকে বিঘ্নিত করেছিল"
  },
  {
    id: 'widespread_chaos',
    title: "The Day Technology Failed Everyone", 
    titleBn: "যেদিন প্রযুক্তি সবাইকে ব্যর্থ করল",
    image: image5,
    content: "As the Gannon Storm intensified, the effects on daily life became impossible to ignore. Students couldn't submit online assignments because school internet systems were struggling. Remote workers found their video calls constantly dropping out. Online gamers experienced massive lag and disconnections, with some gaming servers going offline entirely. Dating apps couldn't determine users' locations accurately. Food delivery services had drivers wandering around lost because GPS was unreliable. Parents trying to track their children's locations through phone apps were seeing wildly inaccurate information. Social media posts weren't uploading properly. Streaming services buffered constantly. Even simple things like using contactless payments at stores became problematic because the timing systems were disrupted. For the first time, millions of people experienced what life might be like if our satellite-dependent technology suddenly became unreliable.",
    contentBn: "গ্যানন ঝড় তীব্র হওয়ার সাথে সাথে, দৈনন্দিন জীবনে এর প্রভাব উপেক্ষা করা অসম্ভব হয়ে উঠল। ছাত্ররা অনলাইন অ্যাসাইনমেন্ট জমা দিতে পারছিল না কারণ স্কুলের ইন্টারনেট সিস্টেম সমস্যায় পড়েছিল। দূরবর্তী কর্মীদের ভিডিও কল ক্রমাগত বিচ্ছিন্ন হচ্ছিল। অনলাইন গেমাররা বিশাল ল্যাগ এবং বিচ্ছিন্নতার মুখোমুখি হচ্ছিল, কিছু গেমিং সার্ভার সম্পূর্ণভাবে বন্ধ হয়ে গিয়েছিল। ডেটিং অ্যাপগুলি ব্যবহারকারীদের অবস্থান সঠিকভাবে নির্ধারণ করতে পারছিল না। খাবার ডেলিভারি সেবা অপ্রতিরোধ্য GPS কারণে ড্রাইভাররা হারিয়ে ঘুরছিল। বাবা-মায়েরা ফোন অ্যাপের মাধ্যমে তাদের সন্তানের অবস্থান ট্র্যাক করতে গিয়ে অত্যন্ত ভুল তথ্য দেখছিলেন। সোশ্যাল মিডিয়ার পোস্ট ঠিকমতো আপলোড হচ্ছিল না। স্ট্রিমিং সেবাগুলি ক্রমাগত বাফার করছিল। এমনকি দোকানে কন্ট্যাক্টলেস পেমেন্ট ব্যবহারের মতো সাধারণ কাজও সমস্যায় পড়ল কারণ সময় নির্ধারণ ব্যবস্থা ব্যাহত হয়েছে। প্রথমবারের মতো, লক্ষ লক্ষ মানুষ অনুভব করল যে যদি আমাদের স্যাটেলাইট-নির্ভর প্রযুক্তি হঠাৎ করে অবিশ্বস্ত হয়ে যায়, জীবন কেমন হতে পারে।",
    status: "critical",
    narrator: "Casey reveals the widespread impact on everyone's digital activities",
    narratorBn: "কেসি প্রকাশ করেন সবার ডিজিটাল কার্যক্রমের উপর ব্যাপক প্রভাব"
  },
  {
    id: 'adaptation_creativity',
    title: "How People Adapted and Overcame",
    titleBn: "মানুষ কীভাবে খাপ খাইয়ে নিয়েছিল এবং জয়ী হয়েছিল",
    image: image6, 
    content: "Faced with widespread technology failures, people showed amazing creativity and resilience. Students who couldn't submit assignments online started taking photos of their work and emailing them instead. Parents picked up physical maps from gas stations to navigate without GPS. Delivery drivers asked for directions the old-fashioned way - by talking to people on the street. Restaurants went back to paper menus when their digital ordering systems failed. Gamers organized local tournaments instead of playing online. People started actually calling each other instead of relying on messaging apps. Some families discovered they enjoyed spending time together without constant digital distractions. Young people taught older relatives how to use backup communication methods. Communities came together to help each other navigate and communicate when technology failed. It was a reminder that human ingenuity and community spirit can overcome even the most advanced technological challenges.",
    contentBn: "ব্যাপক প্রযুক্তিগত ব্যর্থতার মুখোমুখি হয়ে মানুষ অসাধারণ সৃজনশীলতা এবং স্থিতিশীলতা দেখিয়েছে। যে ছাত্ররা অনলাইনে অ্যাসাইনমেন্ট জমা দিতে পারছিল না তারা তাদের কাজের ছবি তুলে ইমেইল করতে শুরু করল। বাবা-মায়েরা জিপিএস ছাড়া নেভিগেট করার জন্য গ্যাস স্টেশন থেকে কাগজের মানচিত্র সংগ্রহ করলেন। ডেলিভারি ড্রাইভাররা পুরনো পদ্ধতিতে—রাস্তার মানুষের সঙ্গে কথা বলে—দিকনির্দেশনা জিজ্ঞেস করলেন। রেস্তোরাঁগুলি তাদের ডিজিটাল অর্ডারিং সিস্টেম ব্যর্থ হলে আবার কাগজের মেনুতে ফিরে গেল। গেমাররা অনলাইনে খেলার পরিবর্তে স্থানীয় টুর্নামেন্টের আয়োজন করল। মানুষ একে অপরকে মেসেজিং অ্যাপের পরিবর্তে ফোনে কল করতে শুরু করল। কিছু পরিবার আবিষ্কার করল যে তারা অবিরাম ডিজিটাল বিভ্রান্তি ছাড়া একসাথে সময় কাটাতে উপভোগ করছে। যুবকরা বড়দের ব্যাকআপ যোগাযোগ পদ্ধতি ব্যবহার শেখাল। সম্প্রদায়গুলো একত্রিত হয়ে প্রযুক্তি ব্যর্থ হলে একে অপরকে সাহায্য করতে এবং যোগাযোগ করতে সহায়তা করল। এটি মনে করিয়ে দেয় যে মানব সৃজনশীলতা এবং সম্প্রদায়িক মনোভাব এমনকি সর্বাধুনিক প্রযুক্তিগত চ্যালেঞ্জকেও জয় করতে পারে।",
    status: "adaptation",
    narrator: "Casey shows how people creatively adapted to technology failures",
    narratorBn: "কেসি দেখান মানুষ কীভাবে সৃজনশীলভাবে প্রযুক্তিগত ব্যর্থতার সঙ্গে খাপ খাইয়ে নিয়েছিল"
  },
  {
    id: 'services_restored',
    title: "The World Reconnects",
    titleBn: "বিশ্ব আবার সংযুক্ত হয়",
    image: image7,
    content: "By Sunday, May 12th, most services had returned to normal as the geomagnetic storm finally weakened. GPS accuracy improved back to normal levels. Internet speeds returned to expected performance. Cell phone service was restored in affected areas. Online gaming servers came back online to the relief of millions of players. Banking and payment systems resumed normal operation. Emergency services could once again rely on accurate GPS navigation. The digital world that people take for granted was functioning normally again. But the experience had taught millions of people around the world an important lesson: our modern, connected lifestyle depends on invisible infrastructure that can be disrupted by events happening millions of miles away in space. Many people started paying attention to space weather forecasts for the first time, realizing that what happens on the Sun can directly affect their daily digital lives.",
    contentBn: "রবিবার, ১২ মে-এ, ভূ-চৌম্বকীয় ঝড় শেষ পর্যন্ত দুর্বল হয়ে যাওয়ায় বেশিরভাগ সেবা স্বাভাবিক অবস্থায় ফিরে এসেছিল। GPS-এর নির্ভুলতা স্বাভাবিক পর্যায়ে ফিরে এসেছিল। ইন্টারনেটের গতি প্রত্যাশিত কর্মক্ষমতায় ফিরে এসেছে। প্রভাবিত এলাকায় সেলফোন সেবা পুনরুদ্ধার হয়েছে। অনলাইন গেমিং সার্ভার লক্ষ লক্ষ খেলোয়াড়ের স্বস্তিতে আবার অনলাইনে ফিরে এসেছে। ব্যাংকিং এবং পেমেন্ট সিস্টেম স্বাভাবিক কার্যক্রম পুনরায় শুরু করেছে। জরুরি সেবাগুলো আবারও নির্ভুল GPS নেভিগেশনের উপর নির্ভর করতে পারছে। মানুষ যে ডিজিটাল জগতকে স্বাভাবিক মনে করত, তা আবারও স্বাভাবিকভাবে কাজ করছে। কিন্তু এই অভিজ্ঞতা বিশ্বব্যাপী লক্ষ লক্ষ মানুষকে একটি গুরুত্বপূর্ণ শিক্ষা দিয়েছে: আমাদের আধুনিক, সংযুক্ত জীবনধারা অদৃশ্য অবকাঠামোর উপর নির্ভরশীল, যা লক্ষ লক্ষ মাইল দূরে মহাকাশে ঘটতে থাকা ঘটনার দ্বারা ব্যাহত হতে পারে। অনেক মানুষ প্রথমবারের মতো মহাকাশ আবহাওয়া পূর্বাভাসে মনোযোগ দিতে শুরু করেছে, বুঝতে পেরেছে সূর্য যা করে তা সরাসরি তাদের দৈনন্দিন ডিজিটাল জীবনে প্রভাব ফেলতে পারে।",
    status: "resolution",
    narrator: "Casey describes the restoration of global digital services",
    narratorBn: "কেসি বিশ্বব্যাপী ডিজিটাল সেবার পুনরুদ্ধারের বর্ণনা দেন"
  },
  {
    id: 'lessons_for_everyone',
    title: "What We All Learned About Our Connected World",
    titleBn: "আমরা আমাদের সংযুক্ত বিশ্ব থেকে যা শিখেছি",
    image: image8,
    content: "The Gannon Storm taught everyone an important lesson about our modern world: we're all connected not just to each other through technology, but to the Sun and space weather in ways most people never imagine. Your smartphone, your internet connection, your GPS navigation, and even your ability to use a credit card can all be affected by solar storms. This event showed that space weather isn't just something that affects astronauts and scientists - it affects everyone who uses modern technology. Today, space weather forecasting has become as important as regular weather forecasting for many industries and services. People learned to appreciate the complex, invisible infrastructure that makes modern life possible. Most importantly, we learned that we're all part of a connected world that extends far beyond Earth, linking us to our local star, the Sun, in ways that remind us we truly live in a solar system, not just on a planet.",
    contentBn: "গ্যানন ঝড় আমাদের আধুনিক জগৎ সম্পর্কে সবাইকে একটি গুরুত্বপূর্ণ শিক্ষা দিয়েছে: আমরা শুধু প্রযুক্তির মাধ্যমে একে অপরের সঙ্গে সংযুক্ত নই, বরং সূর্য এবং মহাকাশের আবহাওয়ার সঙ্গে এমনভাবে সংযুক্ত যা বেশিরভাগ মানুষ কল্পনাও করতে পারে না। আপনার স্মার্টফোন, ইন্টারনেট সংযোগ, GPS নেভিগেশন এবং এমনকি ক্রেডিট কার্ড ব্যবহারের ক্ষমতা সবই সৌর ঝড় দ্বারা প্রভাবিত হতে পারে। এই ঘটনা দেখিয়েছে যে মহাকাশ আবহাওয়া শুধুমাত্র মহাকাশচারী বা বিজ্ঞানীদের প্রভাবিত করে না—এটি আধুনিক প্রযুক্তি ব্যবহারকারী সবাইকে প্রভাবিত করে। আজকাল, মহাকাশ আবহাওয়া পূর্বাভাস অনেক শিল্প ও সেবার জন্য সাধারণ আবহাওয়া পূর্বাভাসের মতোই গুরুত্বপূর্ণ হয়ে উঠেছে। মানুষ এমন জটিল, অদৃশ্য অবকাঠামোর মূল্য বুঝতে শিখেছে যা আধুনিক জীবনকে সম্ভব করে। সবচেয়ে গুরুত্বপূর্ণ হলো, আমরা সবাই একটি সংযুক্ত বিশ্বের অংশ, যা পৃথিবীর অনেক দূরে বিস্তৃত, আমাদের স্থানীয় তারা সূর্যের সঙ্গে যুক্ত করে এমনভাবে যা স্মরণ করিয়ে দেয় আমরা সত্যিই একটি সৌরজগতে বাস করি, শুধুমাত্র একটি গ্রহে নয়।",
    status: "reflection",
    narrator: "Casey reflects on the universal lessons learned from space weather",
    narratorBn: "কেসি মহাকাশ আবহাওয়া থেকে শেখা সর্বজনীন শিক্ষার প্রতিফলন দেন"
  }
];


  // Quiz questions
  const quizQuestions = {
    english: [
      {
        question: "How many satellites currently orbit Earth providing services?",
        options: ["Over 5,000", "Over 8,000", "Over 10,000", "Over 15,000"],
        correctAnswer: 1
      },
      {
        question: "What day did the Gannon Storm begin affecting digital services?",
        options: ["May 9th, 2024", "May 10th, 2024", "May 11th, 2024", "May 12th, 2024"],
        correctAnswer: 1
      },
      {
        question: "What time did people start noticing technology problems?",
        options: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
        correctAnswer: 1
      },
      {
        question: "How high above Earth do GPS satellites orbit?",
        options: ["8,500 miles", "12,500 miles", "15,000 miles", "20,000 miles"],
        correctAnswer: 1
      },
      {
        question: "What creative solution did students use when they couldn't submit assignments online?",
        options: ["Used fax machines", "Took photos and emailed them", "Delivered them by hand", "Used carrier pigeons"],
        correctAnswer: 1
      },
      {
        question: "How many people were affected by the digital disruptions?",
        options: ["Millions", "Hundreds of millions", "Billions worldwide", "Only tech workers"],
        correctAnswer: 2
      },
      {
        question: "What did parents use when GPS navigation failed?",
        options: ["Asked for directions", "Physical maps from gas stations", "Compass navigation", "Memory only"],
        correctAnswer: 1
      },
      {
        question: "When did most services return to normal?",
        options: ["Saturday, May 11th", "Sunday, May 12th", "Monday, May 13th", "Tuesday, May 14th"],
        correctAnswer: 1
      }
    ],
    bengali: [
      {
        question: "বর্তমানে কতটি স্যাটেলাইট পৃথিবীর চারপাশে প্রদক্ষিণ করে সেবা প্রদান করছে?",
        options: ["৫,০০০ এর বেশি", "৮,০০০ এর বেশি", "১০,০০০ এর বেশি", "১৫,০০০ এর বেশি"],
        correctAnswer: 1
      },
      {
        question: "গ্যানন ঝড় কোন দিন ডিজিটাল সেবাকে প্রভাবিত করতে শুরু করেছিল?",
        options: ["৯ মে, ২০২৪", "১০ মে, ২০২৪", "১১ মে, ২০২৪", "১২ মে, ২০২৪"],
        correctAnswer: 1
      },
      {
        question: "মানুষ কখন প্রযুক্তিগত সমস্যা লক্ষ্য করতে শুরু করেছিল?",
        options: ["সকাল ১০:০০", "সকাল ১১:০০", "দুপুর ১২:০০", "দুপুর ১:০০"],
        correctAnswer: 1
      },
      {
        question: "জিপিএস স্যাটেলাইটগুলি পৃথিবী থেকে কত মাইল উপরে প্রদক্ষিণ করে?",
        options: ["৮,৫০০ মাইল", "১২,৫০০ মাইল", "১৫,০০০ মাইল", "২০,০০০ মাইল"],
        correctAnswer: 1
      },
      {
        question: "ছাত্ররা অনলাইনে অ্যাসাইনমেন্ট জমা দিতে না পারলে কী সৃজনশীল সমাধান ব্যবহার করেছিল?",
        options: ["ফ্যাক্স মেশিন ব্যবহার", "ছবি তুলে ইমেইল করেছিল", "হাতে পৌঁছে দিয়েছিল", "কবুতর দিয়ে পাঠিয়েছিল"],
        correctAnswer: 1
      },
      {
        question: "ডিজিটাল ব্যাঘাতের কারণে কত মানুষ প্রভাবিত হয়েছিল?",
        options: ["লক্ষ লক্ষ", "কোটি কোটি", "বিশ্বব্যাপী বিলিয়ন", "শুধু প্রযুক্তি কর্মীরা"],
        correctAnswer: 2
      },
      {
        question: "জিপিএস নেভিগেশন ব্যর্থ হলে বাবা-মায়েরা কী ব্যবহার করেছিলেন?",
        options: ["দিক জিজ্ঞেস করেছিলেন", "গ্যাস স্টেশন থেকে কাগজের মানচিত্র", "কম্পাস নেভিগেশন", "শুধু স্মৃতি"],
        correctAnswer: 1
      },
      {
        question: "বেশিরভাগ সেবা কখন স্বাভাবিক অবস্থায় ফিরে এসেছিল?",
        options: ["শনিবার, ১১ মে", "রবিবার, ১২ মে", "সোমবার, ১৩ মে", "মঙ্গলবার, ১৪ মে"],
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
      case 'critical': return 'from-red-500 to-pink-500';
      case 'adaptation': return 'from-purple-500 to-indigo-500';
      case 'resolution': return 'from-green-600 to-blue-600';
      case 'reflection': return 'from-blue-600 to-purple-600';
      default: return 'from-cyan-500 to-blue-500';
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-cyan-500/30 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={goHome}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              {isBengali ? 'হোমে যান' : 'Go to Home'}
            </button>
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
            >
              <Globe className="w-5 h-5" />
              {isBengali ? 'English' : 'বাংলা'}
            </button>
          </div>
          
          {/* Main Header */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-cyan-300">
                {isBengali ? 'যেদিন সবাই সংযোগ বিচ্ছিন্ন হয়েছিল' : 'The Day Everyone Got Disconnected'}
              </h1>
              <p className="text-xl text-gray-300">
                {isBengali ? 'কীভাবে মহাকাশের আবহাওয়া আমাদের ডিজিটাল জগৎকে ব্যাহত করেছিল' : 'How Space Weather Disrupted Our Digital World'}
              </p>
              <p className="text-gray-400 flex items-center gap-2 mt-2">
                <User className="w-4 h-4" />
                {isBengali ? 'বর্ণিত: কেসি, বয়স ১৪' : 'Told by Casey, age 14'}
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
            <h2 className="text-2xl font-semibold text-cyan-300">
              {isBengali ? `অধ্যায় ${currentScene + 1} এর ${scenes.length}` : `Chapter ${currentScene + 1} of ${scenes.length}`}
            </h2>
            <button 
              onClick={toggleAutoPlay}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isAutoPlaying 
                  ? 'bg-purple-600 hover:bg-purple-500 text-white' 
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
              className="bg-gradient-to-r from-cyan-400 to-purple-400 h-3 rounded-full transition-all duration-500"
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
                <h3 className="text-3xl font-bold mb-4 text-purple-300">
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
                    className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
                  >
                    {isBengali ? 'পরবর্তী অধ্যায়' : 'Next Chapter'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics and Digital Life Facts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
            <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
              <WifiOff className="w-5 h-5" />
              {isBengali ? 'বিশ্বব্যাপী ডিজিটাল প্রভাব' : 'Global Digital Impact'}
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-red-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'জিপিএস নির্ভুলতা' : 'GPS Accuracy'}</span>
                <span className="text-red-400">{isBengali ? '১০-৩০ ফুট ত্রুটি' : '10-30 feet errors'}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'ইন্টারনেট ধীরগতি' : 'Internet Slowdowns'}</span>
                <span className="text-yellow-400">{isBengali ? 'ব্যাপক' : 'Widespread'}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'সেল সেবা' : 'Cell Service'}</span>
                <span className="text-orange-400">{isBengali ? 'অস্থির কভারেজ' : 'Spotty Coverage'}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-900/50 rounded-lg">
                <span className="text-gray-200">{isBengali ? 'প্রভাবিত মানুষ' : 'People Affected'}</span>
                <span className="text-purple-400">{isBengali ? 'বিশ্বব্যাপী বিলিয়ন' : 'Billions Worldwide'}</span>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
            <h3 className="text-xl font-bold text-cyan-300 mb-4">
              {isBengali ? 'সংযুক্ত বিশ্বের তথ্য' : 'Connected World Facts'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? '৮,০০০ এর বেশি স্যাটেলাইট বর্তমানে পৃথিবী প্রদক্ষিণ করে সেবা প্রদান করছে'
                    : 'Over 8,000 satellites currently orbit Earth providing services'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'জিপিএস টাইমিং সংকেত ট্রাফিক লাইট থেকে ব্যাংকিং পর্যন্ত সবকিছু সিঙ্ক্রোনাইজ করে'
                    : 'GPS timing signals synchronize everything from traffic lights to banking'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? '৫ বিলিয়ন মানুষ বিশ্বব্যাপী প্রতিদিন ইন্টারনেট সংযোগের উপর নির্ভর করে'
                    : '5 billion people worldwide rely on internet connectivity daily'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-200">
                  {isBengali 
                    ? 'মহাকাশের আবহাওয়া ঘন্টা বা দিনের জন্য স্যাটেলাইট সেবা ব্যাহত করতে পারে'
                    : 'Space weather can disrupt satellite services for hours or days'
                  }
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Real Science */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-purple-500/30 mb-8">
          <h3 className="text-3xl font-bold text-purple-300 mb-6 flex items-center gap-3">
            <Smartphone className="w-8 h-8" />
            {isBengali ? 'কীভাবে মহাকাশের আবহাওয়া আপনার ডিজিটাল জীবনকে ব্যাহত করে' : 'How Space Weather Disrupts Your Digital Life'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-cyan-300 mb-4">
                {isBengali ? 'স্যাটেলাইট যোগাযোগ ব্যাঘাত' : 'Satellite Communication Disruption'}
              </h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                {isBengali 
                  ? 'মহাকাশের আবহাওয়া পৃথিবী এবং স্যাটেলাইটের মধ্যে ভ্রমণকারী রেডিও সংকেতে হস্তক্ষেপ করতে পারে, যার ফলে ইন্টারনেট ধীরগতি, জিপিএস ত্রুটি এবং সেল ফোন সেবা ব্যাঘাত হয়। সৌর ঝড়ের সময় আয়নোস্ফিয়ার অশান্ত হয়ে ওঠে, রেডিও তরঙ্গকে অপ্রত্যাশিতভাবে ছড়িয়ে দেয়।'
                  : 'Space weather can interfere with radio signals traveling between Earth and satellites, causing internet slowdowns, GPS errors, and cell phone service disruptions. The ionosphere becomes turbulent during solar storms, scattering radio waves unpredictably.'
                }
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-cyan-300 mb-4">
                {isBengali ? 'টাইমিং সিস্টেম ব্যর্থতা' : 'Timing System Failures'}
              </h4>
              <p className="text-gray-200 leading-relaxed mb-4">
                {isBengali 
                  ? 'আধুনিক ডিজিটাল সিস্টেমগুলি সিঙ্ক্রোনাইজেশনের জন্য নির্ভুল জিপিএস টাইমিং সংকেতের উপর নির্ভর করে। যখন মহাকাশের আবহাওয়া এই সংকেতগুলিকে ব্যাহত করে, তখন এটিএম থেকে সেল ফোন নেটওয়ার্ক পর্যন্ত সবকিছুই সমস্যার সম্মুখীন হতে পারে, যা দেখায় আমাদের ডিজিটাল জগত আসলে কতটা আন্তঃসংযুক্ত।'
                  : 'Modern digital systems rely on precise GPS timing signals for synchronization. When space weather disrupts these signals, everything from ATMs to cell phone networks can experience problems, showing how interconnected our digital world really is.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105">
            {isBengali ? 'আরও গল্প পড়ুন' : 'Read More Stories'}
          </button>
          <button className="bg-transparent border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full text-xl font-bold transition-all duration-300">
            {isBengali ? 'আমাদের সংযুক্ত বিশ্ব সম্পর্কে জানুন' : 'Learn About Our Connected World'}
          </button>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-cyan-500/30 mt-8">
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-center text-cyan-300 mb-8">
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
  );
};

export default EveryoneImpactStory;







 

// import React, { useState, useEffect } from 'react';
// import { Globe, Wifi, Smartphone, Clock, ArrowLeft, ArrowRight, CheckCircle, Zap, User, WifiOff } from 'lucide-react';
// import Image from 'next/image';

// // Import all images
// // Note: These paths are placeholders. Ensure your images are in the correct directory.
// import image1 from './image1.png';
// import image2 from './image2.png';
// import image3 from './image3.png';
// import image4 from './image4.png';
// import image5 from './image5.png';
// import image6 from './image6.png';
// import image7 from './image7.png';
// import image8 from './image8.png';

// const EveryoneImpactStory = () => {
//   const [currentScene, setCurrentScene] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  
//   const scenes = [
//     {
//       id: 'introduction',
//       title: "Meet the Connected World",
//       image: image1,
//       content: "Hi, I'm Casey! Today I want to tell you about something that affects every single person on Earth, including you and me. It's about how space weather - storms on the Sun 93 million miles away - can suddenly disrupt the invisible digital world that connects us all. Think about your typical day: you wake up and check your phone, use GPS to navigate to school, stream videos, video chat with friends, and rely on the internet for almost everything. What most people don't realize is that all of these technologies depend on satellites orbiting Earth and radio waves traveling through space. When the Sun gets angry and throws a cosmic tantrum, it can disrupt the invisible infrastructure that makes modern life possible. This is the story of how everyone - from kids playing online games to grandparents video calling their families - can be affected by space weather.",
//       status: "normal",
//       narrator: "Casey introduces how space weather affects everyone's digital life"
//     },
//     {
//       id: 'digital_dependency',
//       title: "Our Invisible Digital Lifeline",
//       image: image2, 
//       content: "Let me show you just how connected we really are. Right now, there are over 8,000 satellites orbiting Earth, providing GPS navigation, internet access, weather forecasting, and communication services. Every time you use your phone's maps, post on social media, stream a movie, or even use a credit card, you're relying on satellites and radio signals that travel through space. The internet that seems so reliable actually depends on a complex network of underwater cables, cell towers, and satellites all working together perfectly. GPS satellites orbiting 12,500 miles above Earth are constantly beaming timing signals that not only help you navigate but also synchronize everything from traffic lights to banking systems. Most people have no idea that their daily digital routine depends on technology that's vulnerable to storms happening on the Sun millions of miles away.",
//       status: "normal",
//       narrator: "Casey explains our hidden dependence on space-based technology"
//     },
//     {
//       id: 'normal_friday',
//       title: "May 10th, 2024 - Just Another Digital Day",
//       image: image3,
//       content: "Friday, May 10th, 2024 started like any other day for millions of people around the world. Kids were getting ready for school, checking social media and texting friends. Parents were using GPS to navigate through traffic while listening to streaming music. Office workers were joining video conferences and checking emails. Gamers were logging into online multiplayer games. Delivery drivers were using GPS apps to find addresses. Credit card transactions were processing normally at stores and restaurants. Emergency services were using GPS for rapid response. Everything seemed perfectly normal in our hyperconnected world. But 93 million miles away, the Sun was building up to release one of the most powerful electromagnetic storms in 20 years. Most people had never heard of 'space weather,' and they certainly didn't expect it to affect their smartphones, internet, or GPS navigation.",
//       status: "normal", 
//       narrator: "Casey describes a normal day in our connected world"
//     },
//     {
//       id: 'storm_hits_everyone',
//       title: "When the Digital World Started Glitching",
//       image: image4,
//       content: "By 11:00 AM, people around the world started noticing something was wrong with their technology. GPS apps on phones began giving wildly inaccurate directions - some showing locations that were miles off. Drivers found themselves being directed into lakes or told they were in completely different countries. Ride-share apps couldn't accurately track driver locations. Delivery drivers got lost trying to find addresses. Cell phone service became spotty in many areas as communication satellites struggled with the electromagnetic interference. Internet speeds slowed down as satellite internet providers dealt with signal disruption. Some ATMs had trouble processing transactions because they rely on GPS time signals for security. Even the precise timing systems that keep cell phone networks synchronized began having problems. What started as minor digital hiccups quickly escalated into widespread technology frustration affecting billions of people worldwide.",
//       status: "warning",
//       narrator: "Casey describes how space weather disrupted everyone's technology"
//     },
//     {
//       id: 'widespread_chaos',
//       title: "The Day Technology Failed Everyone", 
//       image: image5,
//       content: "As the Gannon Storm intensified, the effects on daily life became impossible to ignore. Students couldn't submit online assignments because school internet systems were struggling. Remote workers found their video calls constantly dropping out. Online gamers experienced massive lag and disconnections, with some gaming servers going offline entirely. Dating apps couldn't determine users' locations accurately. Food delivery services had drivers wandering around lost because GPS was unreliable. Parents trying to track their children's locations through phone apps were seeing wildly inaccurate information. Social media posts weren't uploading properly. Streaming services buffered constantly. Even simple things like using contactless payments at stores became problematic because the timing systems were disrupted. For the first time, millions of people experienced what life might be like if our satellite-dependent technology suddenly became unreliable.",
//       status: "critical",
//       narrator: "Casey reveals the widespread impact on everyone's digital activities"
//     },
//     {
//       id: 'adaptation_creativity',
//       title: "How People Adapted and Overcame",
//       image: image6, 
//       content: "Faced with widespread technology failures, people showed amazing creativity and resilience. Students who couldn't submit assignments online started taking photos of their work and emailing them instead. Parents picked up physical maps from gas stations to navigate without GPS. Delivery drivers asked for directions the old-fashioned way - by talking to people on the street. Restaurants went back to paper menus when their digital ordering systems failed. Gamers organized local tournaments instead of playing online. People started actually calling each other instead of relying on messaging apps. Some families discovered they enjoyed spending time together without constant digital distractions. Young people taught older relatives how to use backup communication methods. Communities came together to help each other navigate and communicate when technology failed. It was a reminder that human ingenuity and community spirit can overcome even the most advanced technological challenges.",
//       status: "adaptation",
//       narrator: "Casey shows how people creatively adapted to technology failures"
//     },
//     {
//       id: 'services_restored',
//       title: "The World Reconnects",
//       image: image7,
//       content: "By Sunday, May 12th, most services had returned to normal as the geomagnetic storm finally weakened. GPS accuracy improved back to normal levels. Internet speeds returned to expected performance. Cell phone service was restored in affected areas. Online gaming servers came back online to the relief of millions of players. Banking and payment systems resumed normal operation. Emergency services could once again rely on accurate GPS navigation. The digital world that people take for granted was functioning normally again. But the experience had taught millions of people around the world an important lesson: our modern, connected lifestyle depends on invisible infrastructure that can be disrupted by events happening millions of miles away in space. Many people started paying attention to space weather forecasts for the first time, realizing that what happens on the Sun can directly affect their daily digital lives.",
//       status: "resolution",
//       narrator: "Casey describes the restoration of global digital services"
//     },
//     {
//       id: 'lessons_for_everyone',
//       title: "What We All Learned About Our Connected World",
//       image: image8,
//       content: "The Gannon Storm taught everyone an important lesson about our modern world: we're all connected not just to each other through technology, but to the Sun and space weather in ways most people never imagine. Your smartphone, your internet connection, your GPS navigation, and even your ability to use a credit card can all be affected by solar storms. This event showed that space weather isn't just something that affects astronauts and scientists - it affects everyone who uses modern technology. Today, space weather forecasting has become as important as regular weather forecasting for many industries and services. People learned to appreciate the complex, invisible infrastructure that makes modern life possible. Most importantly, we learned that we're all part of a connected world that extends far beyond Earth, linking us to our local star, the Sun, in ways that remind us we truly live in a solar system, not just on a planet.",
//       status: "reflection",
//       narrator: "Casey reflects on the universal lessons learned from space weather"
//     }
//   ];

//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const timer = setInterval(() => {
//       setCurrentScene(prev => (prev + 1) % scenes.length);
//     }, 8000);
    
//     return () => clearInterval(timer);
//   }, [isAutoPlaying, scenes.length]);

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'normal': return 'from-green-500 to-blue-500';
//       case 'warning': return 'from-yellow-500 to-orange-500';
//       case 'critical': return 'from-red-500 to-pink-500';
//       case 'adaptation': return 'from-purple-500 to-indigo-500';
//       case 'resolution': return 'from-green-600 to-blue-600';
//       case 'reflection': return 'from-blue-600 to-purple-600';
//       default: return 'from-cyan-500 to-blue-500';
//     }
//   };

//   const nextScene = () => {
//     setCurrentScene((prev) => (prev + 1) % scenes.length);
//     setIsAutoPlaying(false);
//   };

//   const prevScene = () => {
//     setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length);
//     setIsAutoPlaying(false);
//   };

//   const toggleAutoPlay = () => {
//     setIsAutoPlaying(!isAutoPlaying);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 text-white">
//       {/* Header */}
//       <div className="bg-black/30 backdrop-blur-sm border-b border-cyan-500/30 p-6">
//         <div className="max-w-6xl mx-auto flex items-center gap-4">
//           <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
//             <Globe className="w-8 h-8 text-white" />
//           </div>
//           <div>
//             <h1 className="text-4xl font-bold text-cyan-300">The Day Everyone Got Disconnected</h1>
//             <p className="text-xl text-gray-300">How Space Weather Disrupted Our Digital World</p>
//             <p className="text-gray-400 flex items-center gap-2 mt-2">
//               <User className="w-4 h-4" />
//               Told by Casey, age 14
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Story Content */}
//       <div className="max-w-6xl mx-auto p-6">
//         {/* Scene Navigator */}
//         <div className="mb-8">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-semibold text-cyan-300">Chapter {currentScene + 1} of {scenes.length}</h2>
//             <button 
//               onClick={toggleAutoPlay}
//               className={`px-6 py-3 rounded-lg font-medium transition-colors ${
//                 isAutoPlaying 
//                   ? 'bg-purple-600 hover:bg-purple-500 text-white' 
//                   : 'bg-gray-600 hover:bg-gray-500 text-gray-200'
//               }`}
//             >
//               {isAutoPlaying ? 'Auto Reading' : 'Manual Mode'}
//             </button>
//           </div>
          
//           <div className="bg-gray-800 rounded-full h-3 mb-6">
//             <div 
//               className="bg-gradient-to-r from-cyan-400 to-purple-400 h-3 rounded-full transition-all duration-500"
//               style={{ width: `${((currentScene + 1) / scenes.length) * 100}%` }}
//             />
//           </div>
//         </div>

//         {/* Main Story Display */}
//         <div className="grid lg:grid-cols-3 gap-8 mb-8">
//           {/* Image Display */}
//           <div className="lg:col-span-1">
//             <div className={`bg-gradient-to-br ${getStatusColor(scenes[currentScene].status)} p-1 rounded-2xl`}>
//               <Image
//                 src={scenes[currentScene].image}
//                 alt={scenes[currentScene].title}
//                 width={600}
//                 height={400}
//                 className="w-full h-80 object-cover rounded-2xl"
//               />
//             </div>
//           </div>

//           {/* Story Content */}
//           <div className="lg:col-span-2">
//             <div className={`bg-gradient-to-br ${getStatusColor(scenes[currentScene].status)} p-1 rounded-2xl`}>
//               <div className="bg-black/80 rounded-2xl p-8 h-full">
//                 <h3 className="text-3xl font-bold mb-4 text-purple-300">
//                   {scenes[currentScene].title}
//                 </h3>
//                 <p className="text-sm text-gray-400 mb-4 italic">
//                   {scenes[currentScene].narrator}
//                 </p>
//                 <p className="text-lg text-gray-100 leading-relaxed line-height-loose">
//                   {scenes[currentScene].content}
//                 </p>
                
//                 {/* Navigation */}
//                 <div className="flex justify-between mt-8">
//                   <button 
//                     onClick={prevScene}
//                     className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
//                   >
//                     <ArrowLeft className="w-5 h-5" />
//                     Previous Chapter
//                   </button>
//                   <button 
//                     onClick={nextScene}
//                     className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
//                   >
//                     Next Chapter
//                     <ArrowRight className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Impact Statistics and Digital Life Facts */}
//         <div className="grid md:grid-cols-2 gap-6 mb-8">
//           <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
//             <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
//               <WifiOff className="w-5 h-5" />
//               Global Digital Impact
//             </h3>
            
//             <div className="space-y-3">
//               <div className="flex justify-between items-center p-3 bg-red-900/50 rounded-lg">
//                 <span className="text-gray-200">GPS Accuracy</span>
//                 <span className="text-red-400">10-30 feet errors</span>
//               </div>
//               <div className="flex justify-between items-center p-3 bg-yellow-900/50 rounded-lg">
//                 <span className="text-gray-200">Internet Slowdowns</span>
//                 <span className="text-yellow-400">Widespread</span>
//               </div>
//               <div className="flex justify-between items-center p-3 bg-orange-900/50 rounded-lg">
//                 <span className="text-gray-200">Cell Service</span>
//                 <span className="text-orange-400">Spotty Coverage</span>
//               </div>
//               <div className="flex justify-between items-center p-3 bg-purple-900/50 rounded-lg">
//                 <span className="text-gray-200">People Affected</span>
//                 <span className="text-purple-400">Billions Worldwide</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
//             <h3 className="text-xl font-bold text-cyan-300 mb-4">Connected World Facts</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-2">
//                 <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-200">Over 8,000 satellites currently orbit Earth providing services</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-200">GPS timing signals synchronize everything from traffic lights to banking</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-200">5 billion people worldwide rely on internet connectivity daily</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-200">Space weather can disrupt satellite services for hours or days</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         ---

//         ## The Real Science

//         <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-purple-500/30 mb-8">
//           <h3 className="text-3xl font-bold text-purple-300 mb-6 flex items-center gap-3">
//             <Smartphone className="w-8 h-8" />
//             How Space Weather Disrupts Your Digital Life
//           </h3>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h4 className="text-xl font-semibold text-cyan-300 mb-4">Satellite Communication Disruption</h4>
//               <p className="text-gray-200 leading-relaxed mb-4">
//                 Space weather can interfere with radio signals traveling between Earth and satellites, causing internet 
//                 slowdowns, GPS errors, and cell phone service disruptions. The ionosphere becomes turbulent during 
//                 solar storms, scattering radio waves unpredictably.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-xl font-semibold text-cyan-300 mb-4">Timing System Failures</h4>
//               <p className="text-gray-200 leading-relaxed mb-4">
//                 Modern digital systems rely on precise GPS timing signals for synchronization. When space weather 
//                 disrupts these signals, everything from ATMs to cell phone networks can experience problems, 
//                 showing how interconnected our digital world really is.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105">
//             Read More Stories
//           </button>
//           <button className="bg-transparent border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full text-xl font-bold transition-all duration-300">
//             Learn About Our Connected World
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EveryoneImpactStory;






// import React, { useState, useEffect } from 'react';
// import { Globe, Wifi, Smartphone, MapPin, Clock, ArrowLeft, ArrowRight, CheckCircle, Zap, User, WifiOff } from 'lucide-react';

// const EveryoneImpactStory = () => {
//   const [currentScene, setCurrentScene] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  
//   const scenes = [
//     {
//       id: 'introduction',
//       title: "Meet the Connected World",
//       image: "image1",
//       content: "Hi, I'm Casey! Today I want to tell you about something that affects every single person on Earth, including you and me. It's about how space weather - storms on the Sun 93 million miles away - can suddenly disrupt the invisible digital world that connects us all. Think about your typical day: you wake up and check your phone, use GPS to navigate to school, stream videos, video chat with friends, and rely on the internet for almost everything. What most people don't realize is that all of these technologies depend on satellites orbiting Earth and radio waves traveling through space. When the Sun gets angry and throws a cosmic tantrum, it can disrupt the invisible infrastructure that makes modern life possible. This is the story of how everyone - from kids playing online games to grandparents video calling their families - can be affected by space weather.",
//       status: "normal",
//       narrator: "Casey introduces how space weather affects everyone's digital life"
//     },
//     {
//       id: 'digital_dependency',
//       title: "Our Invisible Digital Lifeline",
//       image: "image2", 
//       content: "Let me show you just how connected we really are. Right now, there are over 8,000 satellites orbiting Earth, providing GPS navigation, internet access, weather forecasting, and communication services. Every time you use your phone's maps, post on social media, stream a movie, or even use a credit card, you're relying on satellites and radio signals that travel through space. The internet that seems so reliable actually depends on a complex network of underwater cables, cell towers, and satellites all working together perfectly. GPS satellites orbiting 12,500 miles above Earth are constantly beaming timing signals that not only help you navigate but also synchronize everything from traffic lights to banking systems. Most people have no idea that their daily digital routine depends on technology that's vulnerable to storms happening on the Sun millions of miles away.",
//       status: "normal",
//       narrator: "Casey explains our hidden dependence on space-based technology"
//     },
//     {
//       id: 'normal_friday',
//       title: "May 10th, 2024 - Just Another Digital Day",
//       image: "image3",
//       content: "Friday, May 10th, 2024 started like any other day for millions of people around the world. Kids were getting ready for school, checking social media and texting friends. Parents were using GPS to navigate through traffic while listening to streaming music. Office workers were joining video conferences and checking emails. Gamers were logging into online multiplayer games. Delivery drivers were using GPS apps to find addresses. Credit card transactions were processing normally at stores and restaurants. Emergency services were using GPS for rapid response. Everything seemed perfectly normal in our hyperconnected world. But 93 million miles away, the Sun was building up to release one of the most powerful electromagnetic storms in 20 years. Most people had never heard of 'space weather,' and they certainly didn't expect it to affect their smartphones, internet, or GPS navigation.",
//       status: "normal", 
//       narrator: "Casey describes a normal day in our connected world"
//     },
//     {
//       id: 'storm_hits_everyone',
//       title: "When the Digital World Started Glitching",
//       image: "image4",
//       content: "By 11:00 AM, people around the world started noticing something was wrong with their technology. GPS apps on phones began giving wildly inaccurate directions - some showing locations that were miles off. Drivers found themselves being directed into lakes or told they were in completely different countries. Ride-share apps couldn't accurately track driver locations. Delivery drivers got lost trying to find addresses. Cell phone service became spotty in many areas as communication satellites struggled with the electromagnetic interference. Internet speeds slowed down as satellite internet providers dealt with signal disruption. Some ATMs had trouble processing transactions because they rely on GPS time signals for security. Even the precise timing systems that keep cell phone networks synchronized began having problems. What started as minor digital hiccups quickly escalated into widespread technology frustration affecting billions of people worldwide.",
//       status: "warning",
//       narrator: "Casey describes how space weather disrupted everyone's technology"
//     },
//     {
//       id: 'widespread_chaos',
//       title: "The Day Technology Failed Everyone", 
//       image: "image5",
//       content: "As the Gannon Storm intensified, the effects on daily life became impossible to ignore. Students couldn't submit online assignments because school internet systems were struggling. Remote workers found their video calls constantly dropping out. Online gamers experienced massive lag and disconnections, with some gaming servers going offline entirely. Dating apps couldn't determine users' locations accurately. Food delivery services had drivers wandering around lost because GPS was unreliable. Parents trying to track their children's locations through phone apps were seeing wildly inaccurate information. Social media posts weren't uploading properly. Streaming services buffered constantly. Even simple things like using contactless payments at stores became problematic because the timing systems were disrupted. For the first time, millions of people experienced what life might be like if our satellite-dependent technology suddenly became unreliable.",
//       status: "critical",
//       narrator: "Casey reveals the widespread impact on everyone's digital activities"
//     },
//     {
//       id: 'adaptation_creativity',
//       title: "How People Adapted and Overcame",
//       image: "image6", 
//       content: "Faced with widespread technology failures, people showed amazing creativity and resilience. Students who couldn't submit assignments online started taking photos of their work and emailing them instead. Parents picked up physical maps from gas stations to navigate without GPS. Delivery drivers asked for directions the old-fashioned way - by talking to people on the street. Restaurants went back to paper menus when their digital ordering systems failed. Gamers organized local tournaments instead of playing online. People started actually calling each other instead of relying on messaging apps. Some families discovered they enjoyed spending time together without constant digital distractions. Young people taught older relatives how to use backup communication methods. Communities came together to help each other navigate and communicate when technology failed. It was a reminder that human ingenuity and community spirit can overcome even the most advanced technological challenges.",
//       status: "adaptation",
//       narrator: "Casey shows how people creatively adapted to technology failures"
//     },
//     {
//       id: 'services_restored',
//       title: "The World Reconnects",
//       image: "image1",
//       content: "By Sunday, May 12th, most services had returned to normal as the geomagnetic storm finally weakened. GPS accuracy improved back to normal levels. Internet speeds returned to expected performance. Cell phone service was restored in affected areas. Online gaming servers came back online to the relief of millions of players. Banking and payment systems resumed normal operation. Emergency services could once again rely on accurate GPS navigation. The digital world that people take for granted was functioning normally again. But the experience had taught millions of people around the world an important lesson: our modern, connected lifestyle depends on invisible infrastructure that can be disrupted by events happening millions of miles away in space. Many people started paying attention to space weather forecasts for the first time, realizing that what happens on the Sun can directly affect their daily digital lives.",
//       status: "resolution",
//       narrator: "Casey describes the restoration of global digital services"
//     },
//     {
//       id: 'lessons_for_everyone',
//       title: "What We All Learned About Our Connected World",
//       image: "image2",
//       content: "The Gannon Storm taught everyone an important lesson about our modern world: we're all connected not just to each other through technology, but to the Sun and space weather in ways most people never imagine. Your smartphone, your internet connection, your GPS navigation, and even your ability to use a credit card can all be affected by solar storms. This event showed that space weather isn't just something that affects astronauts and scientists - it affects everyone who uses modern technology. Today, space weather forecasting has become as important as regular weather forecasting for many industries and services. People learned to appreciate the complex, invisible infrastructure that makes modern life possible. Most importantly, we learned that we're all part of a connected world that extends far beyond Earth, linking us to our local star, the Sun, in ways that remind us we truly live in a solar system, not just on a planet.",
//       status: "reflection",
//       narrator: "Casey reflects on the universal lessons learned from space weather"
//     }
//   ];

//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const timer = setInterval(() => {
//       setCurrentScene(prev => (prev + 1) % scenes.length);
//     }, 8000);
    
//     return () => clearInterval(timer);
//   }, [isAutoPlaying, scenes.length]);

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'normal': return 'from-green-500 to-blue-500';
//       case 'warning': return 'from-yellow-500 to-orange-500';
//       case 'critical': return 'from-red-500 to-pink-500';
//       case 'adaptation': return 'from-purple-500 to-indigo-500';
//       case 'resolution': return 'from-green-600 to-blue-600';
//       case 'reflection': return 'from-blue-600 to-purple-600';
//       default: return 'from-cyan-500 to-blue-500';
//     }
//   };

//   const nextScene = () => {
//     setCurrentScene((prev) => (prev + 1) % scenes.length);
//     setIsAutoPlaying(false);
//   };

//   const prevScene = () => {
//     setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length);
//     setIsAutoPlaying(false);
//   };

//   const toggleAutoPlay = () => {
//     setIsAutoPlaying(!isAutoPlaying);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 text-white">
//       {/* Header */}
//       <div className="bg-black/30 backdrop-blur-sm border-b border-cyan-500/30 p-6">
//         <div className="max-w-6xl mx-auto flex items-center gap-4">
//           <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
//             <Globe className="w-8 h-8 text-white" />
//           </div>
//           <div>
//             <h1 className="text-4xl font-bold text-cyan-300">The Day Everyone Got Disconnected</h1>
//             <p className="text-xl text-gray-300">How Space Weather Disrupted Our Digital World</p>
//             <p className="text-gray-400 flex items-center gap-2 mt-2">
//               <User className="w-4 h-4" />
//               Told by Casey, age 14
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Story Content */}
//       <div className="max-w-6xl mx-auto p-6">
//         {/* Scene Navigator */}
//         <div className="mb-8">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-semibold text-cyan-300">Chapter {currentScene + 1} of {scenes.length}</h2>
//             <button 
//               onClick={toggleAutoPlay}
//               className={`px-6 py-3 rounded-lg font-medium transition-colors ${
//                 isAutoPlaying 
//                   ? 'bg-purple-600 hover:bg-purple-500 text-white' 
//                   : 'bg-gray-600 hover:bg-gray-500 text-gray-200'
//               }`}
//             >
//               {isAutoPlaying ? 'Auto Reading' : 'Manual Mode'}
//             </button>
//           </div>
          
//           <div className="bg-gray-800 rounded-full h-3 mb-6">
//             <div 
//               className="bg-gradient-to-r from-cyan-400 to-purple-400 h-3 rounded-full transition-all duration-500"
//               style={{ width: `${((currentScene + 1) / scenes.length) * 100}%` }}
//             />
//           </div>
//         </div>

//         {/* Main Story Display */}
//         <div className="grid lg:grid-cols-3 gap-8 mb-8">
//           {/* Image Placeholder */}
//           <div className="lg:col-span-1">
//             <div className={`bg-gradient-to-br ${getStatusColor(scenes[currentScene].status)} p-1 rounded-2xl`}>
//               <div className="bg-black/60 rounded-2xl p-8 h-80 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-6xl mb-4">🌐</div>
//                   <p className="text-lg font-semibold text-gray-200">{scenes[currentScene].image}</p>
//                   <p className="text-sm text-gray-400 mt-2">Image placeholder</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Story Content */}
//           <div className="lg:col-span-2">
//             <div className={`bg-gradient-to-br ${getStatusColor(scenes[currentScene].status)} p-1 rounded-2xl`}>
//               <div className="bg-black/80 rounded-2xl p-8 h-full">
//                 <h3 className="text-3xl font-bold mb-4 text-purple-300">
//                   {scenes[currentScene].title}
//                 </h3>
//                 <p className="text-sm text-gray-400 mb-4 italic">
//                   {scenes[currentScene].narrator}
//                 </p>
//                 <p className="text-lg text-gray-100 leading-relaxed line-height-loose">
//                   {scenes[currentScene].content}
//                 </p>
                
//                 {/* Navigation */}
//                 <div className="flex justify-between mt-8">
//                   <button 
//                     onClick={prevScene}
//                     className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
//                   >
//                     <ArrowLeft className="w-5 h-5" />
//                     Previous Chapter
//                   </button>
//                   <button 
//                     onClick={nextScene}
//                     className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
//                   >
//                     Next Chapter
//                     <ArrowRight className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Impact Statistics and Digital Life Facts */}
//         <div className="grid md:grid-cols-2 gap-6 mb-8">
//           <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
//             <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
//               <WifiOff className="w-5 h-5" />
//               Global Digital Impact
//             </h3>
            
//             <div className="space-y-3">
//               <div className="flex justify-between items-center p-3 bg-red-900/50 rounded-lg">
//                 <span className="text-gray-200">GPS Accuracy</span>
//                 <span className="text-red-400">10-30 feet errors</span>
//               </div>
//               <div className="flex justify-between items-center p-3 bg-yellow-900/50 rounded-lg">
//                 <span className="text-gray-200">Internet Slowdowns</span>
//                 <span className="text-yellow-400">Widespread</span>
//               </div>
//               <div className="flex justify-between items-center p-3 bg-orange-900/50 rounded-lg">
//                 <span className="text-gray-200">Cell Service</span>
//                 <span className="text-orange-400">Spotty Coverage</span>
//               </div>
//               <div className="flex justify-between items-center p-3 bg-purple-900/50 rounded-lg">
//                 <span className="text-gray-200">People Affected</span>
//                 <span className="text-purple-400">Billions Worldwide</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
//             <h3 className="text-xl font-bold text-cyan-300 mb-4">Connected World Facts</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-2">
//                 <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-200">Over 8,000 satellites currently orbit Earth providing services</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-200">GPS timing signals synchronize everything from traffic lights to banking</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-200">5 billion people worldwide rely on internet connectivity daily</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-200">Space weather can disrupt satellite services for hours or days</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* The Real Science */}
//         <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-purple-500/30 mb-8">
//           <h3 className="text-3xl font-bold text-purple-300 mb-6 flex items-center gap-3">
//             <Smartphone className="w-8 h-8" />
//             How Space Weather Disrupts Your Digital Life
//           </h3>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h4 className="text-xl font-semibold text-cyan-300 mb-4">Satellite Communication Disruption</h4>
//               <p className="text-gray-200 leading-relaxed mb-4">
//                 Space weather can interfere with radio signals traveling between Earth and satellites, causing internet 
//                 slowdowns, GPS errors, and cell phone service disruptions. The ionosphere becomes turbulent during 
//                 solar storms, scattering radio waves unpredictably.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-xl font-semibold text-cyan-300 mb-4">Timing System Failures</h4>
//               <p className="text-gray-200 leading-relaxed mb-4">
//                 Modern digital systems rely on precise GPS timing signals for synchronization. When space weather 
//                 disrupts these signals, everything from ATMs to cell phone networks can experience problems, 
//                 showing how interconnected our digital world really is.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105">
//             Read More Stories
//           </button>
//           <button className="bg-transparent border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full text-xl font-bold transition-all duration-300">
//             Learn About Our Connected World
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EveryoneImpactStory;
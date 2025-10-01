'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function EnhancedSpaceScene() {
  const mountRef = useRef(null);
  const [sceneReady, setSceneReady] = useState(false);
  const [currentMode, setCurrentMode] = useState('journey');
  const [language, setLanguage] = useState('english');
  const [astronautStep, setAstronautStep] = useState(0);
  const [magneticStep, setMagneticStep] = useState(0);
  const [showInfo, setShowInfo] = useState(true);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const objectsRef = useRef({
    magneticField: null,
    spacecraft: null,
    astronaut: null,
    mars: null
  });

  // Translation object
  const translations = {
    english: {
      loading: "Loading Solar Flare Journey...",
      homeButton: "🏠 Home",
      startAnimation: "🎬 Start",
      hideInfo: "Hide Info",
      showInfo: "Show Info",
      modes: {
        journey: "🌟 Journey",
        magnetic: "🛡️ Magnetic", 
        astronaut: "👨‍🚀 Mars"
      },
      modeInfo: {
        journey: {
          title: "Solar Flare Journey! 🌟",
          description: "Watch as energy particles from our Sun travel through space to Earth! When they reach Earth's protective atmosphere, they create beautiful colors - just like the Northern Lights! 🌈✨"
        },
        magnetic: {
          title: "Earth's Magnetic Shield! 🛡️", 
          description: "See how Earth's invisible magnetic field protects us! The green lines show our planet's magnetic field deflecting most solar particles away from us! 🧲💚"
        },
        astronaut: {
          title: "Mars Mission Danger! 👨‍🚀",
          description: "Follow an astronaut's journey to Mars and learn about the dangers of solar flares in deep space!"
        }
      },
      magneticSteps: [
        {
          title: "🌍 Our Beautiful Blue Planet",
          content: "Here's Earth, our blue home! But it's not just the oceans that protect us - there's an invisible superhero shield around our planet!"
        },
        {
          title: "🧲 Earth's Magnetic Superpower!",
          content: "Watch as Earth's magnetic field appears! These green lines show Earth's invisible magnetic force field that acts like a giant protective bubble around us!"
        },
        {
          title: "⚡ Solar Attack Begins!",
          content: "Oh no! Dangerous solar particles are coming! But watch how Earth's magnetic field deflects most of them away like a superhero shield!"
        },
        {
          title: "🛡️ Protection in Action!",
          content: "Amazing! The magnetic field pushes the harmful particles around Earth, keeping us safe! Only some particles get through at the poles, creating beautiful Northern Lights!"
        }
      ],
      astronautSteps: [
        {
          title: "🚀 Journey to Mars Begins!",
          content: "Our brave astronaut starts the journey from Earth to Mars. The spacecraft leaves Earth's protective magnetic field behind."
        },
        {
          title: "⚠️ Solar Flare Alert!",
          content: "Suddenly, the Sun erupts with a massive solar flare! High-energy particles (SEPs) race toward the spacecraft at incredible speeds."
        },
        {
          title: "🛡️ No Protection in Deep Space",
          content: "Unlike on Earth, there's no magnetic field or atmosphere to protect the astronaut. These particles can slice through metal and human tissue!"
        },
        {
          title: "🏥 Health Dangers",
          content: "Solar particles increase cancer risk, damage the nervous system, and can cause acute radiation sickness - the #1 danger for space travel!"
        },
        {
          title: "🔬 Future Solutions",
          content: "We need better forecasting, real-time monitoring, and stronger shielding. A few hours' warning could save lives by getting to storm shelters!"
        }
      ],
      nextStep: "Next →",
      prevStep: "← Prev",
      controls: "🎬 Use Next/Previous to learn step by step!\n🔥 Orange particles = Dangerous solar radiation\n🚀 White spacecraft = Mars mission\n👨‍🚀 Astronaut facing real space dangers"
    },
    bengali: {
      loading: "সৌর ঝড়ের যাত্রা লোড হচ্ছে...",
      homeButton: "🏠 হোম",
      startAnimation: "🎬 শুরু",
      hideInfo: "তথ্য লুকান",
      showInfo: "তথ্য দেখান",
      modes: {
        journey: "🌟 যাত্রা",
        magnetic: "🛡️ চুম্বক",
        astronaut: "👨‍🚀 মঙ্গল"
      },
      modeInfo: {
        journey: {
          title: "সৌর ঝড়ের যাত্রা! 🌟",
          description: "দেখুন কিভাবে সূর্য থেকে শক্তি কণা মহাকাশ দিয়ে পৃথিবীতে আসে! যখন তারা পৃথিবীর সুরক্ষিত বায়ুমণ্ডলে পৌঁছায়, তখন সুন্দর রঙ তৈরি করে - ঠিক উত্তর মেরুর আলোর মতো! 🌈✨"
        },
        magnetic: {
          title: "পৃথিবীর চুম্বক ঢাল! 🛡️",
          description: "দেখুন কিভাবে পৃথিবীর অদৃশ্য চুম্বক ক্ষেত্র আমাদের রক্ষা করে! সবুজ রেখাগুলো দেখায় আমাদের গ্রহের চুম্বক ক্ষেত্র কিভাবে বেশিরভাগ সৌর কণাকে দূরে ঠেলে দেয়! 🧲💚"
        },
        astronaut: {
          title: "মঙ্গল মিশনের বিপদ! 👨‍🚀",
          description: "একজন নভোচারীর মঙ্গল যাত্রা অনুসরণ করুন এবং গভীর মহাকাশে সৌর ঝড়ের বিপদ সম্পর্কে জানুন!"
        }
      },
      magneticSteps: [
        {
          title: "🌍 আমাদের সুন্দর নীল গ্রহ",
          content: "এই হল পৃথিবী, আমাদের নীল বাড়ি! কিন্তু শুধু সমুদ্র নয় - আমাদের গ্রহের চারপাশে একটি অদৃশ্য সুপারহিরো ঢাল আছে!"
        },
        {
          title: "🧲 পৃথিবীর চুম্বক শক্তি!",
          content: "দেখুন পৃথিবীর চুম্বক ক্ষেত্র কিভাবে দেখা দেয়! এই সবুজ রেখাগুলো পৃথিবীর অদৃশ্য চুম্বক শক্তি দেখায় যা আমাদের চারপাশে একটি বিশাল সুরক্ষা বুদবুদের মতো কাজ করে!"
        },
        {
          title: "⚡ সৌর আক্রমণ শুরু!",
          content: "ওহ না! বিপজ্জনক সৌর কণা আসছে! কিন্তু দেখুন কিভাবে পৃথিবীর চুম্বক ক্ষেত্র তাদের বেশিরভাগকে সুপারহিরো ঢালের মতো দূরে ঠেলে দেয়!"
        },
        {
          title: "🛡️ সুরক্ষা কাজে!",
          content: "অসাধারণ! চুম্বক ক্ষেত্র ক্ষতিকর কণাগুলোকে পৃথিবীর চারপাশে ঠেলে দেয়, আমাদের নিরাপদ রাখে! শুধু মেরুতে কিছু কণা ঢুকে সুন্দর উত্তর মেরুর আলো তৈরি করে!"
        }
      ],
      astronautSteps: [
        {
          title: "🚀 মঙ্গলে যাত্রা শুরু!",
          content: "আমাদের সাহসী নভোচারী পৃথিবী থেকে মঙ্গলের দিকে যাত্রা শুরু করেন। মহাকাশযান পৃথিবীর সুরক্ষিত চুম্বক ক্ষেত্র ছেড়ে চলে যায়।"
        },
        {
          title: "⚠️ সৌর ঝড়ের সতর্কতা!",
          content: "হঠাৎ, সূর্য একটি বিশাল সৌর ঝড় নিয়ে বিস্ফোরিত হয়! উচ্চ-শক্তির কণা (SEPs) অবিশ্বাস্য গতিতে মহাকাশযানের দিকে ছুটে আসে।"
        },
        {
          title: "🛡️ গভীর মহাকাশে কোনো সুরক্ষা নেই",
          content: "পৃথিবীর মতো নয়, এখানে নভোচারীকে রক্ষা করার জন্য কোনো চুম্বক ক্ষেত্র বা বায়ুমণ্ডল নেই। এই কণাগুলো ধাতু এবং মানুষের টিস্যু কেটে ফেলতে পারে!"
        },
        {
          title: "🏥 স্বাস্থ্য ঝুঁকি",
          content: "সৌর কণা ক্যান্সারের ঝুঁকি বাড়ায়, স্নায়ুতন্ত্রের ক্ষতি করে এবং তীব্র বিকিরণ অসুস্থতা সৃষ্টি করতে পারে - মহাকাশ ভ্রমণের #১ বিপদ!"
        },
        {
          title: "🔬 ভবিষ্যতের সমাধান",
          content: "আমাদের আরও ভাল পূর্ভাবাস, রিয়েল-টাইম মনিটরিং এবং শক্তিশালী ঢাল প্রয়োজন। কয়েক ঘন্টার সতর্কতা ঝড় আশ্রয়স্থলে পৌঁছে জীবন বাঁচাতে পারে!"
        }
      ],
      nextStep: "পরবর্তী →",
      prevStep: "← পূর্ববর্তী",
      controls: "🎬 ধাপে ধাপে শিখতে Next/Previous ব্যবহার করুন!\n🔥 কমলা কণা = বিপজ্জনক সৌর বিকিরণ\n🚀 সাদা মহাকাশযান = মঙ্গল মিশন\n👨‍🚀 নভোচারী প্রকৃত মহাকাশের বিপদের মুখোমুখি"
    }
  };

  const t = translations[language];

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // === Scene ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);
    sceneRef.current = scene;

    // === Camera ===
    const isMobile = window.innerWidth < 768;
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 60 : 45, //  field of view for mobile
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    // Better mobile camera position - 
    camera.position.set(0, isMobile ? 30 : 20, isMobile ? 120 : 80);
    cameraRef.current = camera;

    // === Renderer ===
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mount.appendChild(renderer.domElement);

    // Create starfield
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Create Sun
    const sunGeometry = new THREE.SphereGeometry(8, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffaa00,
      emissive: 0xff6600,
      emissiveIntensity: 0.3
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(-50, 0, 0);
    scene.add(sun);

    // Sun glow effect
    const sunGlowGeometry = new THREE.SphereGeometry(12, 32, 32);
    const sunGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.3,
      side: THREE.BackSide
    });
    const sunGlow = new THREE.Mesh(sunGlowGeometry, sunGlowMaterial);
    sunGlow.position.copy(sun.position);
    scene.add(sunGlow);

    // Create Earth - More blue and realistic
    const earthGeometry = new THREE.SphereGeometry(3, 32, 32);
    const earthMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x2266ff,
      emissive: 0x001144,
      emissiveIntensity: 0.1,
      shininess: 100
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(50, 0, 0);
    scene.add(earth);

    // Earth's atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(3.5, 32, 32);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x4488ff,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atmosphere.position.copy(earth.position);
    scene.add(atmosphere);

    // Create Mars
    const marsGeometry = new THREE.SphereGeometry(2, 32, 32);
    const marsMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xcc4422,
      emissive: 0x220000,
      emissiveIntensity: 0.1
    });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);
    mars.name = 'mars';
    mars.position.set(120, 0, 0);
    mars.visible = false;
    scene.add(mars);
    objectsRef.current.mars = mars;

    // Create Earth's Magnetic Field 
    const magneticFieldLines = [];
    const magneticFieldGroup = new THREE.Group();
    
    for (let layer = 0; layer < 3; layer++) {
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 15 + layer * 5 + Math.sin(angle * 2) * 2;
        const height = 8 + layer * 2 + Math.cos(angle * 2) * 1;
        
        const curve = new THREE.EllipseCurve(
          0, 0,
          radius,
          height,
          0, Math.PI * 2,
          false,
          0
        );
        
        const points = curve.getPoints(64);
        const geometry = new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(p.x, p.y, 0)));
        const material = new THREE.LineBasicMaterial({ 
          color: layer === 0 ? 0x00ff88 : layer === 1 ? 0x00ccaa : 0x0099cc,
          transparent: true,
          opacity: 0.8 - layer * 0.2
        });
        const line = new THREE.Line(geometry, material);
        line.rotation.x = Math.PI / 2;
        line.rotation.z = angle;
        magneticFieldLines.push(line);
        magneticFieldGroup.add(line);
      }
    }
    
    // Add magnetic poles
    const northPoleGeometry = new THREE.ConeGeometry(1, 3, 8);
    const southPoleGeometry = new THREE.ConeGeometry(1, 3, 8);
    const polesMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ffff,
      emissive: 0x004444,
      transparent: true,
      opacity: 0.7
    });
    const northPole = new THREE.Mesh(northPoleGeometry, polesMaterial);
    const southPole = new THREE.Mesh(southPoleGeometry, polesMaterial);
    
    northPole.position.set(0, 8, 0);
    southPole.position.set(0, -8, 0);
    southPole.rotation.x = Math.PI;
    
    magneticFieldGroup.add(northPole);
    magneticFieldGroup.add(southPole);
    magneticFieldGroup.name = 'magneticField';
    magneticFieldGroup.position.copy(earth.position);
    magneticFieldGroup.visible = false;
    scene.add(magneticFieldGroup);
    objectsRef.current.magneticField = magneticFieldGroup;

    // Create Spacecraft
    const spacecraftGroup = new THREE.Group();
    
    const bodyGeometry = new THREE.CylinderGeometry(1.5, 1.5, 6, 8);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc });
    const spacecraftBody = new THREE.Mesh(bodyGeometry, bodyMaterial);
    spacecraftBody.rotation.z = Math.PI / 2;
    
    const panelGeometry = new THREE.BoxGeometry(0.1, 4, 8);
    const panelMaterial = new THREE.MeshPhongMaterial({ color: 0x000044 });
    const leftPanel = new THREE.Mesh(panelGeometry, panelMaterial);
    const rightPanel = new THREE.Mesh(panelGeometry, panelMaterial);
    leftPanel.position.set(0, 3, 0);
    rightPanel.position.set(0, -3, 0);
    
    const engineGeometry = new THREE.ConeGeometry(1, 2, 8);
    const engineMaterial = new THREE.MeshPhongMaterial({ color: 0x444444 });
    const engine = new THREE.Mesh(engineGeometry, engineMaterial);
    engine.position.x = -4;
    engine.rotation.z = -Math.PI / 2;
    
    spacecraftGroup.add(spacecraftBody);
    spacecraftGroup.add(leftPanel);
    spacecraftGroup.add(rightPanel);
    spacecraftGroup.add(engine);
    spacecraftGroup.name = 'spacecraft';
    spacecraftGroup.position.set(70, 0, 0);
    spacecraftGroup.visible = false;
    scene.add(spacecraftGroup);
    objectsRef.current.spacecraft = spacecraftGroup;

    // Astronaut
    const astronautGroup = new THREE.Group();
    const bodyGeometry2 = new THREE.CylinderGeometry(0.4, 0.5, 1.5, 8);
    const headGeometry = new THREE.SphereGeometry(0.4, 16, 16);
    const helmetGeometry = new THREE.SphereGeometry(0.6, 16, 16);
    const astronautMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const headMaterial = new THREE.MeshPhongMaterial({ color: 0xffdbac });
    const helmetMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x888888, 
      transparent: true, 
      opacity: 0.8 
    });
    
    const body = new THREE.Mesh(bodyGeometry2, astronautMaterial);
    const head = new THREE.Mesh(headGeometry, headMaterial);
    const helmet = new THREE.Mesh(helmetGeometry, helmetMaterial);
    head.position.y = 1.0;
    helmet.position.y = 1.0;
    
    astronautGroup.add(body);
    astronautGroup.add(head);
    astronautGroup.add(helmet);
    astronautGroup.name = 'astronaut';
    astronautGroup.position.copy(spacecraftGroup.position);
    astronautGroup.visible = false;
    scene.add(astronautGroup);
    objectsRef.current.astronaut = astronautGroup;

    // Create solar flare particles
    const flareParticles = [];
    const flareGeometry = new THREE.SphereGeometry(0.2, 8, 8);
    const flareMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff4400,
      emissive: 0xff2200,
      emissiveIntensity: 0.5
    });

    for (let i = 0; i < 300; i++) {
      const particle = new THREE.Mesh(flareGeometry, flareMaterial.clone());
      particle.position.copy(sun.position);
      particle.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.3 + 1.2,
          (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.3
        ),
        life: Math.random() * 300 + 150,
        maxLife: Math.random() * 300 + 150,
        originalVelocity: new THREE.Vector3()
      };
      particle.userData.originalVelocity.copy(particle.userData.velocity);
      flareParticles.push(particle);
      scene.add(particle);
    }

    // === Lights ===
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xffaa00, 2, 200);
    sunLight.position.copy(sun.position);
    scene.add(sunLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    //   Animation Loop  
    const clock = new THREE.Clock();
    let time = 0;
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      time += delta;

      // Rotate celestial bodies
      sun.rotation.y += 0.01;
      sunGlow.rotation.y -= 0.005;
      earth.rotation.y += 0.02;
      atmosphere.rotation.y += 0.015;
      if (mars) mars.rotation.y += 0.015;

      // Animate starfield
      stars.rotation.y += 0.0002;

      // Animate magnetic field
      if (magneticFieldGroup && magneticFieldGroup.visible) {
        magneticFieldLines.forEach((line, index) => {
          const intensity = Math.sin(time * 2 + index * 0.3) * 0.3 + 0.7;
          line.material.opacity = intensity * (0.8 - Math.floor(index / 12) * 0.2);
          
          if (currentMode === 'magnetic' && magneticStep >= 2) {
            const pulseStrength = Math.sin(time * 4) * 0.2 + 1;
            line.scale.setScalar(pulseStrength);
          }
        });
        magneticFieldGroup.rotation.y += 0.005;
        
        const poles = magneticFieldGroup.children.filter(child => child.geometry && child.geometry.type === 'ConeGeometry');
        poles.forEach((pole, index) => {
          const pulse = Math.sin(time * 3 + index * Math.PI) * 0.3 + 1;
          pole.scale.setScalar(pulse);
          pole.material.emissiveIntensity = pulse * 0.3;
        });
      }

      // Animate spacecraft
      const spacecraft = objectsRef.current.spacecraft;
      const astronaut = objectsRef.current.astronaut;
      
      if (spacecraft && spacecraft.visible) {
        spacecraft.rotation.y += 0.01;
        if (astronaut) astronaut.rotation.y += 0.01;
        
        spacecraft.position.y = Math.sin(time * 1.5) * 0.5;
        if (astronaut) astronaut.position.y = spacecraft.position.y;
        
        if (currentMode === 'astronaut') {
          const progress = Math.min(astronautStep / 4, 1);
          const targetX = 70 + (progress * 30);
          spacecraft.position.x += (targetX - spacecraft.position.x) * 0.02;
          if (astronaut) astronaut.position.x = spacecraft.position.x;
        }
      }

      // Animate solar flare particles
      flareParticles.forEach((particle, index) => {
        //   magnetic deflection
        if (currentMode === 'magnetic' && magneticFieldGroup.visible && magneticStep >= 2) {
          const distanceToEarth = particle.position.distanceTo(earth.position);
          if (distanceToEarth < 25 && distanceToEarth > 4) {
            const toEarth = new THREE.Vector3().subVectors(earth.position, particle.position);
            const distance = toEarth.length();
            const deflectionStrength = (25 - distance) / 25;
            
            const deflection = new THREE.Vector3()
              .subVectors(particle.position, earth.position)
              .normalize()
              .multiplyScalar(deflectionStrength * 0.15);
            
            const perpendicular = new THREE.Vector3(-deflection.z, deflection.y, deflection.x);
            deflection.add(perpendicular.multiplyScalar(0.1));
            
            particle.userData.velocity.add(deflection);
            particle.material.color.setHSL(0.3, 1, 0.5);
          }
        }
        
        particle.position.add(particle.userData.velocity);
        
        particle.userData.life--;
        
        const lifeFactor = particle.userData.life / particle.userData.maxLife;
        particle.material.opacity = lifeFactor;
        
        const hue = 0.1 - (lifeFactor * 0.1);
        particle.material.color.setHSL(hue, 1, 0.5);
        
        if (particle.userData.life <= 0) {
          particle.position.copy(sun.position);
          particle.position.add(new THREE.Vector3(
            (Math.random() - 0.5) * 16,
            (Math.random() - 0.5) * 16,
            (Math.random() - 0.5) * 16
          ));
          particle.userData.velocity.copy(particle.userData.originalVelocity);
          particle.userData.life = particle.userData.maxLife;
          particle.material.opacity = 1;
        }
        
        // Spacecraft collision
        if (currentMode === 'astronaut' && astronautStep >= 2 && spacecraft && spacecraft.visible) {
          const distanceToSpacecraft = particle.position.distanceTo(spacecraft.position);
          if (distanceToSpacecraft < 8) {
            spacecraft.children[0].material.color.setHex(0xff4444);
            if (astronaut && astronaut.children[2]) {
              astronaut.children[2].material.color.setHex(0xff4444);
            }
            
            setTimeout(() => {
              if (spacecraft && spacecraft.children[0]) {
                spacecraft.children[0].material.color.setHex(0xcccccc);
              }
              if (astronaut && astronaut.children[2]) {
                astronaut.children[2].material.color.setHex(0x888888);
              }
            }, 500);
          }
        }
        
        // Earth collision
        const distanceToEarth = particle.position.distanceTo(earth.position);
        if (distanceToEarth < 4) {
          if (currentMode === 'magnetic' && magneticStep >= 3) {
            const particleDirection = new THREE.Vector3().subVectors(particle.position, earth.position).normalize();
            const isNearPole = Math.abs(particleDirection.y) > 0.7;
            
            if (isNearPole) {
              particle.material.color.setHex(0x00ff88);
              particle.scale.setScalar(3);
            } else {
              particle.material.color.setHex(0xff4444);
              particle.scale.setScalar(2);
            }
          } else {
            particle.material.color.setHex(0x00ff88);
            particle.scale.setScalar(2);
          }
          
          setTimeout(() => {
            particle.position.copy(sun.position);
            particle.userData.life = particle.userData.maxLife;
            particle.scale.setScalar(1);
            particle.material.color.setHSL(0.1, 1, 0.5);
          }, 100);
        }
      });

      // Camera behavior( Mobile optimized)
      const isMobileView = window.innerWidth < 768;
      
      if (currentMode === 'astronaut') {
        const spacecraft = objectsRef.current.spacecraft;
        if (spacecraft) {
          const targetX = spacecraft.position.x;
          const radius = isMobileView ? 60 : 40; // Larger radius for mobile
          const height = isMobileView ? 35 : 25; // Higher position for mobile
          
          camera.position.x = Math.cos(time * 0.05) * radius + targetX;
          camera.position.z = Math.sin(time * 0.05) * radius;
          camera.position.y = height;
          camera.lookAt(spacecraft.position);
        }
      } else {
        const radius = isMobileView ? 120 : 80; // Much larger radius for mobile
        const height = isMobileView ? 40 : 20; // Higher for mobile
        
        camera.position.x = Math.cos(time * 0.1) * radius;
        camera.position.z = Math.sin(time * 0.1) * radius;
        camera.position.y = height;
        camera.lookAt(0, 0, 0);
      }

      // Sun pulsing effect
      const pulse = Math.sin(time * 2) * 0.1 + 1;
      sunGlow.scale.setScalar(pulse);
      sunLight.intensity = 2 + Math.sin(time * 3) * 0.5;

      renderer.render(scene, camera);
    };

    animate();
    setSceneReady(true);

    //   Resize Handler 
    const handleResize = () => {
      if (!mount || !camera || !renderer) return;
      
      const isMobileView = window.innerWidth < 768;
      
      
      camera.fov = isMobileView ? 60 : 45;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      
      // Adjust camera position   on screen size
      if (currentMode !== 'astronaut') {
        const radius = isMobileView ? 120 : 80;
        const height = isMobileView ? 40 : 20;
        const currentAngle = Math.atan2(camera.position.z, camera.position.x);
        
        camera.position.x = Math.cos(currentAngle) * radius;
        camera.position.z = Math.sin(currentAngle) * radius;
        camera.position.y = height;
      }
      
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // === Cleanup ===
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      
      scene.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, []);

  // Update visibility 
  useEffect(() => {
    if (!objectsRef.current.magneticField || !objectsRef.current.spacecraft || !objectsRef.current.astronaut || !objectsRef.current.mars) return;

    // Reset all visibility first
    objectsRef.current.magneticField.visible = false;
    objectsRef.current.spacecraft.visible = false;
    objectsRef.current.astronaut.visible = false;
    objectsRef.current.mars.visible = false;

    // Show elements based on current mode
    switch (currentMode) {
      case 'journey':
        // Default journey mode - only basic elements visible
        break;
      case 'magnetic':
        if (magneticStep >= 1) {
          objectsRef.current.magneticField.visible = true;
        }
        break;
      case 'astronaut':
        objectsRef.current.spacecraft.visible = true;
        objectsRef.current.astronaut.visible = true;
        objectsRef.current.mars.visible = true;
        break;
    }
  }, [currentMode, magneticStep, astronautStep]);

  const goHome = () => {
    window.location.href = '/';
  };

  const nextMagneticStep = () => {
    if (magneticStep < 3) {
      setMagneticStep(magneticStep + 1);
    }
  };

  const prevMagneticStep = () => {
    if (magneticStep > 0) {
      setMagneticStep(magneticStep - 1);
    }
  };

  const nextStep = () => {
    if (astronautStep < 4) {
      setAstronautStep(astronautStep + 1);
    }
  };

  const prevStep = () => {
    if (astronautStep > 0) {
      setAstronautStep(astronautStep - 1);
    }
  };

  const getCurrentModeInfo = () => {
    if (currentMode === 'astronaut') {
      return {
        title: t.astronautSteps[astronautStep].title,
        description: t.astronautSteps[astronautStep].content
      };
    } else if (currentMode === 'magnetic') {
      return {
        title: t.magneticSteps[magneticStep].title,
        description: t.magneticSteps[magneticStep].content
      };
    }
    return t.modeInfo[currentMode];
  };

  const modeInfo = getCurrentModeInfo();

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {!sceneReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="text-white text-xl font-bold animate-pulse">
            {t.loading}
          </div>
        </div>
      )}

      {/*   Header - Mobile Responsive */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/90 to-transparent p-2 sm:p-4">
        
        {/* Top Row - Language & Home */}
        <div className="flex justify-between items-center mb-2 sm:mb-4">
          <button
            onClick={goHome}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-3 sm:py-3 sm:px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-yellow-300 text-xs sm:text-base"
          >
            {t.homeButton}
          </button>

          <button
            onClick={() => setLanguage(language === 'english' ? 'bengali' : 'english')}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-2 px-3 sm:py-2 sm:px-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-xs sm:text-base"
          >
            {language === 'english' ? '🇧🇩 বাংলা' : '🇺🇸 English'}
          </button>
        </div>

        {/* Mode Selection Buttons  */}
        <div className="grid grid-cols-4 gap-1 sm:gap-2 mb-2 sm:mb-4">
          <button
            onClick={() => {setCurrentMode('journey'); setAstronautStep(0); setMagneticStep(0);}}
            className={`py-2 px-1 sm:px-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 ${
              currentMode === 'journey'
                ? 'bg-orange-500 text-white border-2 border-yellow-300'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            {t.modes.journey}
          </button>

          <button  
            onClick={() => window.location.reload()} 
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-1 sm:px-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-xs sm:text-sm"
          >
            {t.startAnimation}
          </button>

          <button
            onClick={() => {setCurrentMode('magnetic'); setMagneticStep(0); setAstronautStep(0);}}
            className={`py-2 px-1 sm:px-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 ${
              currentMode === 'magnetic'
                ? 'bg-green-500 text-white border-2 border-yellow-300'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            {t.modes.magnetic}
          </button>

          <button
            onClick={() => {setCurrentMode('astronaut'); setAstronautStep(0); setMagneticStep(0);}}
            className={`py-2 px-1 sm:px-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 ${
              currentMode === 'astronaut'
                ? 'bg-purple-500 text-white border-2 border-yellow-300'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            {t.modes.astronaut}
          </button>
        </div>

        {/* Step Navigation - Conditional Display */}
        {currentMode === 'magnetic' && (
          <div className="flex justify-center items-center gap-1 sm:gap-2">
            <button
              onClick={prevMagneticStep}
              disabled={magneticStep === 0}
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                magneticStep === 0
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              {t.prevStep}
            </button>
            <span className="bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              {magneticStep + 1} / 4
            </span>
            <button
              onClick={nextMagneticStep}
              disabled={magneticStep === 3}
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                magneticStep === 3
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              {t.nextStep}
            </button>
          </div>
        )}

        {currentMode === 'astronaut' && (
          <div className="flex justify-center items-center gap-1 sm:gap-2">
            <button
              onClick={prevStep}
              disabled={astronautStep === 0}
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                astronautStep === 0
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {t.prevStep}
            </button>
            <span className="bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              {astronautStep + 1} / 5
            </span>
            <button
              onClick={nextStep}
              disabled={astronautStep === 4}
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                astronautStep === 4
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {t.nextStep}
            </button>
          </div>
        )}
      </div>

      {/* Educational Info Panel - Mobile Responsive */}
      <div className={`fixed top-32 sm:top-40 right-2 sm:right-6 z-20 max-w-[90vw] sm:max-w-md transition-all duration-300 ${showInfo ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="bg-black/95 backdrop-blur-sm text-white p-3 sm:p-4 rounded-lg border border-yellow-300/30">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm sm:text-lg font-bold text-yellow-300 flex-1 pr-2">{modeInfo.title}</h3>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs sm:text-sm flex-shrink-0"
            >
              {showInfo ? '✕' : 'ℹ️'}
            </button>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed">{modeInfo.description}</p>
        </div>
      </div>

      {/* Info Toggle   Mobile */}
      {!showInfo && (
        <button
          onClick={() => setShowInfo(true)}
          className="fixed top-32 sm:top-40 right-2 z-20 bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-2 rounded-full text-sm font-bold shadow-lg"
        >
          ℹ️ Info
        </button>
      )}

      {/* Controls Info - Bottom   */}
      <div className="fixed bottom-2 left-2 right-2 sm:bottom-6 sm:left-6 sm:right-auto z-20 bg-black/90 backdrop-blur-sm text-white p-2 sm:p-3 rounded-lg max-w-full sm:max-w-md border border-blue-300/30">
        <p className="text-xs sm:text-sm whitespace-pre-line leading-tight">{t.controls}</p>
      </div>

      <div
        ref={mountRef}
        className="w-full h-full"
      />
    </div>
  );
}





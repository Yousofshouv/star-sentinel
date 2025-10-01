// pages/index.js
'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation'; 


const countries = [
  { name: 'Afghanistan', code: 'AF', lat: 33.9391, lng: 67.7100 },
  { name: 'Albania', code: 'AL', lat: 41.1533, lng: 20.1683 },
  { name: 'Algeria', code: 'DZ', lat: 28.0339, lng: 1.6596 },
  { name: 'Andorra', code: 'AD', lat: 42.5063, lng: 1.5218 },
  { name: 'Angola', code: 'AO', lat: -11.2027, lng: 17.8739 },
  { name: 'Antigua and Barbuda', code: 'AG', lat: 17.0608, lng: -61.7964 },
  { name: 'Argentina', code: 'AR', lat: -38.4161, lng: -63.6167 },
  { name: 'Armenia', code: 'AM', lat: 40.0691, lng: 45.0382 },
  { name: 'Australia', code: 'AU', lat: -25.2744, lng: 133.7751 },
  { name: 'Austria', code: 'AT', lat: 47.5162, lng: 14.5501 },
  { name: 'Azerbaijan', code: 'AZ', lat: 40.1431, lng: 47.5769 },
  { name: 'Bahamas', code: 'BS', lat: 25.0343, lng: -77.3963 },
  { name: 'Bahrain', code: 'BH', lat: 26.0667, lng: 50.5577 },
  { name: 'Bangladesh', code: 'BD', lat: 23.6850, lng: 90.3563 },
  { name: 'Barbados', code: 'BB', lat: 13.1939, lng: -59.5432 },
  { name: 'Belarus', code: 'BY', lat: 53.7098, lng: 27.9534 },
  { name: 'Belgium', code: 'BE', lat: 50.5039, lng: 4.4699 },
  { name: 'Belize', code: 'BZ', lat: 17.1899, lng: -88.4976 },
  { name: 'Benin', code: 'BJ', lat: 9.3077, lng: 2.3158 },
  { name: 'Bhutan', code: 'BT', lat: 27.5142, lng: 90.4336 },
  { name: 'Bolivia', code: 'BO', lat: -16.2902, lng: -63.5887 },
  { name: 'Bosnia and Herzegovina', code: 'BA', lat: 43.9159, lng: 17.6791 },
  { name: 'Botswana', code: 'BW', lat: -22.3285, lng: 24.6849 },
  { name: 'Brazil', code: 'BR', lat: -14.2350, lng: -51.9253 },
  { name: 'Brunei', code: 'BN', lat: 4.5353, lng: 114.7277 },
  { name: 'Bulgaria', code: 'BG', lat: 42.7339, lng: 25.4858 },
  { name: 'Burkina Faso', code: 'BF', lat: 12.2383, lng: -1.5616 },
  { name: 'Burundi', code: 'BI', lat: -3.3731, lng: 29.9189 },
  { name: 'Cambodia', code: 'KH', lat: 12.5657, lng: 104.9910 },
  { name: 'Cameroon', code: 'CM', lat: 7.3697, lng: 12.3547 },
  { name: 'Canada', code: 'CA', lat: 56.1304, lng: -106.3468 },
  { name: 'Cape Verde', code: 'CV', lat: 16.5388, lng: -24.0132 },
  { name: 'Central African Republic', code: 'CF', lat: 6.6111, lng: 20.9394 },
  { name: 'Chad', code: 'TD', lat: 15.4542, lng: 18.7322 },
  { name: 'Chile', code: 'CL', lat: -35.6751, lng: -71.5430 },
  { name: 'China', code: 'CN', lat: 35.8617, lng: 104.1954 },
  { name: 'Colombia', code: 'CO', lat: 4.5709, lng: -74.2973 },
  { name: 'Comoros', code: 'KM', lat: -11.6455, lng: 43.3333 },
  { name: 'Congo', code: 'CG', lat: -0.2280, lng: 15.8277 },
  { name: 'Costa Rica', code: 'CR', lat: 9.7489, lng: -83.7534 },
  { name: 'Croatia', code: 'HR', lat: 45.1000, lng: 15.2000 },
  { name: 'Cuba', code: 'CU', lat: 21.5218, lng: -77.7812 },
  { name: 'Cyprus', code: 'CY', lat: 35.1264, lng: 33.4299 },
  { name: 'Czech Republic', code: 'CZ', lat: 49.8175, lng: 15.4730 },
  { name: 'Denmark', code: 'DK', lat: 56.2639, lng: 9.5018 },
  { name: 'Djibouti', code: 'DJ', lat: 11.8251, lng: 42.5903 },
  { name: 'Dominica', code: 'DM', lat: 15.4150, lng: -61.3710 },
  { name: 'Dominican Republic', code: 'DO', lat: 18.7357, lng: -70.1627 },
  { name: 'Ecuador', code: 'EC', lat: -1.8312, lng: -78.1834 },
  { name: 'Egypt', code: 'EG', lat: 26.0975, lng: 31.1333 },
  { name: 'El Salvador', code: 'SV', lat: 13.7942, lng: -88.8965 },
  { name: 'Equatorial Guinea', code: 'GQ', lat: 1.6508, lng: 10.2679 },
  { name: 'Eritrea', code: 'ER', lat: 15.1794, lng: 39.7823 },
  { name: 'Estonia', code: 'EE', lat: 58.5953, lng: 25.0136 },
  { name: 'Ethiopia', code: 'ET', lat: 9.1450, lng: 40.4897 },
  { name: 'Fiji', code: 'FJ', lat: -16.5780, lng: 179.4144 },
  { name: 'Finland', code: 'FI', lat: 61.9241, lng: 25.7482 },
  { name: 'France', code: 'FR', lat: 46.2276, lng: 2.2137 },
  { name: 'Gabon', code: 'GA', lat: -0.8037, lng: 11.6094 },
  { name: 'Gambia', code: 'GM', lat: 13.4432, lng: -15.3101 },
  { name: 'Georgia', code: 'GE', lat: 42.3154, lng: 43.3569 },
  { name: 'Germany', code: 'DE', lat: 51.1657, lng: 10.4515 },
  { name: 'Ghana', code: 'GH', lat: 7.9465, lng: -1.0232 },
  { name: 'Greece', code: 'GR', lat: 39.0742, lng: 21.8243 },
  { name: 'Grenada', code: 'GD', lat: 12.1165, lng: -61.6790 },
  { name: 'Guatemala', code: 'GT', lat: 15.7835, lng: -90.2308 },
  { name: 'Guinea', code: 'GN', lat: 9.9456, lng: -9.6966 },
  { name: 'Guinea-Bissau', code: 'GW', lat: 11.8037, lng: -15.1804 },
  { name: 'Guyana', code: 'GY', lat: 4.8604, lng: -58.9302 },
  { name: 'Haiti', code: 'HT', lat: 18.9712, lng: -72.2852 },
  { name: 'Honduras', code: 'HN', lat: 15.1994, lng: -86.2419 },
  { name: 'Hungary', code: 'HU', lat: 47.1625, lng: 19.5033 },
  { name: 'Iceland', code: 'IS', lat: 64.9631, lng: -19.0208 },
  { name: 'India', code: 'IN', lat: 20.5937, lng: 78.9629 },
  { name: 'Indonesia', code: 'ID', lat: -0.7893, lng: 113.9213 },
  { name: 'Iran', code: 'IR', lat: 32.4279, lng: 53.6880 },
  { name: 'Iraq', code: 'IQ', lat: 33.2232, lng: 43.6793 },
  { name: 'Ireland', code: 'IE', lat: 53.4129, lng: -8.2439 },
  { name: 'Israel', code: 'IL', lat: 31.0461, lng: 34.8516 },
  { name: 'Italy', code: 'IT', lat: 41.8719, lng: 12.5674 },
  { name: 'Jamaica', code: 'JM', lat: 18.1096, lng: -77.2975 },
  { name: 'Japan', code: 'JP', lat: 36.2048, lng: 138.2529 },
  { name: 'Jordan', code: 'JO', lat: 30.5852, lng: 36.2384 },
  { name: 'Kazakhstan', code: 'KZ', lat: 48.0196, lng: 66.9237 },
  { name: 'Kenya', code: 'KE', lat: -0.0236, lng: 37.9062 },
  { name: 'Kiribati', code: 'KI', lat: -3.3704, lng: -168.7340 },
  { name: 'Kuwait', code: 'KW', lat: 29.3117, lng: 47.4818 },
  { name: 'Kyrgyzstan', code: 'KG', lat: 41.2044, lng: 74.7661 },
  { name: 'Laos', code: 'LA', lat: 19.8563, lng: 102.4955 },
  { name: 'Latvia', code: 'LV', lat: 56.8796, lng: 24.6032 },
  { name: 'Lebanon', code: 'LB', lat: 33.8547, lng: 35.8623 },
  { name: 'Lesotho', code: 'LS', lat: -29.6097, lng: 28.2336 },
  { name: 'Liberia', code: 'LR', lat: 6.4281, lng: -9.4295 },
  { name: 'Libya', code: 'LY', lat: 26.3351, lng: 17.2283 },
  { name: 'Liechtenstein', code: 'LI', lat: 47.1660, lng: 9.5554 },
  { name: 'Lithuania', code: 'LT', lat: 55.1694, lng: 23.8813 },
  { name: 'Luxembourg', code: 'LU', lat: 49.8153, lng: 6.1296 },
  { name: 'Madagascar', code: 'MG', lat: -18.7669, lng: 46.8691 },
  { name: 'Malawi', code: 'MW', lat: -13.2543, lng: 34.3015 },
  { name: 'Malaysia', code: 'MY', lat: 4.2105, lng: 101.9758 },
  { name: 'Maldives', code: 'MV', lat: 3.2028, lng: 73.2207 },
  { name: 'Mali', code: 'ML', lat: 17.5707, lng: -3.9962 },
  { name: 'Malta', code: 'MT', lat: 35.9375, lng: 14.3754 },
  { name: 'Marshall Islands', code: 'MH', lat: 7.1315, lng: 171.1845 },
  { name: 'Mauritania', code: 'MR', lat: 21.0079, lng: -10.9408 },
  { name: 'Mauritius', code: 'MU', lat: -20.3484, lng: 57.5522 },
  { name: 'Mexico', code: 'MX', lat: 23.6345, lng: -102.5528 },
  { name: 'Micronesia', code: 'FM', lat: 7.4256, lng: 150.5508 },
  { name: 'Moldova', code: 'MD', lat: 47.4116, lng: 28.3699 },
  { name: 'Monaco', code: 'MC', lat: 43.7384, lng: 7.4246 },
  { name: 'Mongolia', code: 'MN', lat: 46.8625, lng: 103.8467 },
  { name: 'Montenegro', code: 'ME', lat: 42.7087, lng: 19.3744 },
  { name: 'Morocco', code: 'MA', lat: 31.7917, lng: -7.0926 },
  { name: 'Mozambique', code: 'MZ', lat: -18.6657, lng: 35.5296 },
  { name: 'Myanmar', code: 'MM', lat: 21.9162, lng: 95.9560 },
  { name: 'Namibia', code: 'NA', lat: -22.9576, lng: 18.4904 },
  { name: 'Nauru', code: 'NR', lat: -0.5228, lng: 166.9315 },
  { name: 'Nepal', code: 'NP', lat: 28.3949, lng: 84.1240 },
  { name: 'Netherlands', code: 'NL', lat: 52.1326, lng: 5.2913 },
  { name: 'New Zealand', code: 'NZ', lat: -40.9006, lng: 174.8860 },
  { name: 'Nicaragua', code: 'NI', lat: 12.8654, lng: -85.2072 },
  { name: 'Niger', code: 'NE', lat: 17.6078, lng: 8.0817 },
  { name: 'Nigeria', code: 'NG', lat: 9.0820, lng: 8.6753 },
  { name: 'North Korea', code: 'KP', lat: 40.3399, lng: 127.5101 },
  { name: 'North Macedonia', code: 'MK', lat: 41.6086, lng: 21.7453 },
  { name: 'Norway', code: 'NO', lat: 60.4720, lng: 8.4689 },
  { name: 'Oman', code: 'OM', lat: 21.4735, lng: 55.9754 },
  { name: 'Pakistan', code: 'PK', lat: 30.3753, lng: 69.3451 },
  { name: 'Palau', code: 'PW', lat: 7.5150, lng: 134.5825 },
  { name: 'Panama', code: 'PA', lat: 8.5380, lng: -80.7821 },
  { name: 'Papua New Guinea', code: 'PG', lat: -6.3140, lng: 143.9555 },
  { name: 'Paraguay', code: 'PY', lat: -23.4425, lng: -58.4438 },
  { name: 'Peru', code: 'PE', lat: -9.1900, lng: -75.0152 },
  { name: 'Philippines', code: 'PH', lat: 12.8797, lng: 121.7740 },
  { name: 'Poland', code: 'PL', lat: 51.9194, lng: 19.1451 },
  { name: 'Portugal', code: 'PT', lat: 39.3999, lng: -8.2245 },
  { name: 'Qatar', code: 'QA', lat: 25.3548, lng: 51.1839 },
  { name: 'Romania', code: 'RO', lat: 45.9432, lng: 24.9668 },
  { name: 'Russia', code: 'RU', lat: 61.5240, lng: 105.3188 },
  { name: 'Rwanda', code: 'RW', lat: -1.9403, lng: 29.8739 },
  { name: 'Saint Kitts and Nevis', code: 'KN', lat: 17.3578, lng: -62.7830 },
  { name: 'Saint Lucia', code: 'LC', lat: 13.9094, lng: -60.9789 },
  { name: 'Saint Vincent and the Grenadines', code: 'VC', lat: 12.9843, lng: -61.2872 },
  { name: 'Samoa', code: 'WS', lat: -13.7590, lng: -172.1046 },
  { name: 'San Marino', code: 'SM', lat: 43.9424, lng: 12.4578 },
  { name: 'Sao Tome and Principe', code: 'ST', lat: 0.1864, lng: 6.6131 },
  { name: 'Saudi Arabia', code: 'SA', lat: 23.8859, lng: 45.0792 },
  { name: 'Senegal', code: 'SN', lat: 14.4974, lng: -14.4524 },
  { name: 'Serbia', code: 'RS', lat: 44.0165, lng: 21.0059 },
  { name: 'Seychelles', code: 'SC', lat: -4.6796, lng: 55.4920 },
  { name: 'Sierra Leone', code: 'SL', lat: 8.4606, lng: -11.7799 },
  { name: 'Singapore', code: 'SG', lat: 1.3521, lng: 103.8198 },
  { name: 'Slovakia', code: 'SK', lat: 48.6690, lng: 19.6990 },
  { name: 'Slovenia', code: 'SI', lat: 46.1512, lng: 14.9955 },
  { name: 'Solomon Islands', code: 'SB', lat: -9.6457, lng: 160.1562 },
  { name: 'Somalia', code: 'SO', lat: 5.1521, lng: 46.1996 },
  { name: 'South Africa', code: 'ZA', lat: -30.5595, lng: 22.9375 },
  { name: 'South Korea', code: 'KR', lat: 35.9078, lng: 127.7669 },
  { name: 'South Sudan', code: 'SS', lat: 6.8770, lng: 31.3070 },
  { name: 'Spain', code: 'ES', lat: 40.4637, lng: -3.7492 },
  { name: 'Sri Lanka', code: 'LK', lat: 7.8731, lng: 80.7718 },
  { name: 'Sudan', code: 'SD', lat: 12.8628, lng: 30.2176 },
  { name: 'Suriname', code: 'SR', lat: 3.9193, lng: -56.0278 },
  { name: 'Sweden', code: 'SE', lat: 60.1282, lng: 18.6435 },
  { name: 'Switzerland', code: 'CH', lat: 46.8182, lng: 8.2275 },
  { name: 'Syria', code: 'SY', lat: 34.8021, lng: 38.9968 },
  { name: 'Taiwan', code: 'TW', lat: 23.6978, lng: 120.9605 },
  { name: 'Tajikistan', code: 'TJ', lat: 38.8610, lng: 71.2761 },
  { name: 'Tanzania', code: 'TZ', lat: -6.3690, lng: 34.8888 },
  { name: 'Thailand', code: 'TH', lat: 15.8700, lng: 100.9925 },
  { name: 'Timor-Leste', code: 'TL', lat: -8.8742, lng: 125.7275 },
  { name: 'Togo', code: 'TG', lat: 8.6195, lng: 0.8248 },
  { name: 'Tonga', code: 'TO', lat: -21.1789, lng: -175.1982 },
  { name: 'Trinidad and Tobago', code: 'TT', lat: 10.6918, lng: -61.2225 },
  { name: 'Tunisia', code: 'TN', lat: 33.8869, lng: 9.5375 },
  { name: 'Turkey', code: 'TR', lat: 38.9637, lng: 35.2433 },
  { name: 'Turkmenistan', code: 'TM', lat: 38.9697, lng: 59.5563 },
  { name: 'Tuvalu', code: 'TV', lat: -7.1095, lng: 177.6493 },
  { name: 'Uganda', code: 'UG', lat: 1.3733, lng: 32.2903 },
  { name: 'Ukraine', code: 'UA', lat: 48.3794, lng: 31.1656 },
  { name: 'United Arab Emirates', code: 'AE', lat: 23.4241, lng: 53.8478 },
  { name: 'United Kingdom', code: 'GB', lat: 55.3781, lng: -3.4360 },
  { name: 'United States', code: 'US', lat: 39.8283, lng: -98.5795 },
  { name: 'Uruguay', code: 'UY', lat: -32.5228, lng: -55.7658 },
  { name: 'Uzbekistan', code: 'UZ', lat: 41.3775, lng: 64.5853 },
  { name: 'Vanuatu', code: 'VU', lat: -15.3767, lng: 166.9592 },
  { name: 'Vatican City', code: 'VA', lat: 41.9029, lng: 12.4534 },
  { name: 'Venezuela', code: 'VE', lat: 6.4238, lng: -66.5897 },
  { name: 'Vietnam', code: 'VN', lat: 14.0583, lng: 108.2772 },
  { name: 'Yemen', code: 'YE', lat: 15.5527, lng: 48.5164 },
  { name: 'Zambia', code: 'ZM', lat: -13.1339, lng: 27.8493 },
  { name: 'Zimbabwe', code: 'ZW', lat: -19.0154, lng: 29.1549 }
];

export default function SolarFlareDetector() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [solarFlareData, setSolarFlareData] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    if (selectedLocation) {
      fetchSolarFlareData();
      const interval = setInterval(fetchSolarFlareData, 300000); // Update every 5 minutes
      return () => clearInterval(interval);
    }
  }, [selectedLocation]);

  const fetchSolarFlareData = async () => {
    if (!selectedLocation) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/solar-flares');
      if (!response.ok) throw new Error('Failed to fetch data');
      
      const data = await response.json();
      setSolarFlareData(data);
      processAlerts(data);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Error:', error);
      // Set mock data for demonstration
      const mockData = [
        {
          flrID: 'demo-1',
          classType: 'M5.2',
          beginTime: new Date(Date.now() - 3600000).toISOString(),
          sourceLocation: 'N15W25',
          note: 'Demo data - Configure your NASA_API_KEY'
        }
      ];
      setSolarFlareData(mockData);
      processAlerts(mockData);
      setLastUpdate(new Date());
    }
    setLoading(false);
  };

  const processAlerts = (flareData) => {
    if (!flareData || !selectedLocation) return;

    const newAlerts = [];
    const latitude = Math.abs(selectedLocation.lat);
    
    flareData.forEach(flare => {
      const flareClass = flare.classType?.charAt(0) || 'C';
      const flareNumber = parseFloat(flare.classType?.substring(1)) || 1;
      
      let alertLevel = 'info';
      let impact = 'Minimal';
      let recommendations = [];
      let riskScore = 0;

      // Calculate risk based on flare class and location
      if (flareClass === 'X') {
        alertLevel = 'critical';
        riskScore = 80 + (flareNumber * 5);
        if (latitude > 60) {
          impact = 'Extreme';
          riskScore += 15;
        } else if (latitude > 40) {
          impact = 'High';
          riskScore += 10;
        } else {
          impact = 'Moderate';
          riskScore += 5;
        }
        recommendations = [
          '🚨 Critical: Avoid GPS-dependent navigation',
          '📡 Monitor all radio communications closely',
          '⚡ Ensure backup power systems are ready',
          '🌌 Aurora likely visible tonight (high latitudes)',
          '🛰️ Satellite operations severely affected',
          '✈️ Flight delays possible (polar routes)'
        ];
      } else if (flareClass === 'M') {
        alertLevel = 'warning';
        riskScore = 40 + (flareNumber * 3);
        if (latitude > 60) {
          impact = 'High';
          riskScore += 10;
        } else if (latitude > 40) {
          impact = 'Moderate';
          riskScore += 5;
        } else {
          impact = 'Low';
        }
        recommendations = [
          '📡 Monitor radio communications',
          '🧭 GPS accuracy may be reduced',
          '🌌 Possible aurora at high latitudes',
          '📱 Minor mobile network disruptions possible',
          '🛰️ Some satellite operations affected'
        ];
      } else if (flareClass === 'C') {
        alertLevel = 'info';
        riskScore = 10 + flareNumber;
        impact = latitude > 70 ? 'Low' : 'Very Low';
        recommendations = [
          '✅ Minimal impact expected',
          '📊 Continue normal operations',
          '📡 Monitor space weather updates',
          '🌌 Possible minor aurora enhancement'
        ];
      }

      // Cap risk score at 100
      riskScore = Math.min(riskScore, 100);

      newAlerts.push({
        id: flare.flrID,
        level: alertLevel,
        title: `${flare.classType} Class Solar Flare`,
        message: `Detected at ${new Date(flare.beginTime).toLocaleString()}`,
        impact,
        riskScore,
        recommendations,
        flareData: flare,
        timestamp: flare.beginTime
      });
    });

    // Sort by risk score (highest first)
    newAlerts.sort((a, b) => b.riskScore - a.riskScore);
    setAlerts(newAlerts.slice(0, 5)); // Show top 5 alerts
  };

  const handleLocationSelect = (e) => {
    const selectedCountryName = e.target.value;
    if (!selectedCountryName) {
      setSelectedLocation(null);
      setAlerts([]);
      setSolarFlareData(null);
      return;
    }
    
    const country = countries.find(c => c.name === selectedCountryName);
    if (country) {
      setSelectedLocation(country);
    }
  };

  const handleHomeClick = () => {
    setSelectedLocation(null);
    setAlerts([]);
    setSolarFlareData(null);
    setShowChat(false);
    setChatMessages([]);
    setChatInput('');
    router.push('/');
  };

  const router = useRouter();
  

  const sendMessage = async () => {
    if (!chatInput.trim() || chatLoading) return;

    const userMessage = chatInput.trim();
    setChatInput('');
    setChatMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setChatLoading(true);

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          location: selectedLocation,
          alerts: alerts,
          solarData: solarFlareData
        })
      });

      const data = await response.json();
      setChatMessages(prev => [...prev, { type: 'ai', content: data.response || 'Sorry, I encountered an issue. Please try again.' }]);
    } catch (error) {
      console.error('Chat error:', error);
      setChatMessages(prev => [...prev, { 
        type: 'ai', 
        content: 'I encountered a technical issue. Please check your GEMINI_API_KEY and try again.' 
      }]);
    }
    setChatLoading(false);
  };

  const getAlertStyles = (level) => {
    switch (level) {
      case 'critical': return {
        bg: 'bg-red-500',
        border: 'border-red-600',
        text: 'text-red-50',
        icon: '🚨'
      };
      case 'warning': return {
        bg: 'bg-orange-500',
        border: 'border-orange-600', 
        text: 'text-orange-50',
        icon: '⚠️'
      };
      case 'info': return {
        bg: 'bg-blue-500',
        border: 'border-blue-600',
        text: 'text-blue-50', 
        icon: 'ℹ️'
      };
      default: return {
        bg: 'bg-gray-500',
        border: 'border-gray-600',
        text: 'text-gray-50',
        icon: '📋'
      };
    }
  };

  const getRiskColor = (score) => {
    if (score >= 80) return 'text-red-500';
    if (score >= 60) return 'text-orange-500';
    if (score >= 40) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Head>
        <title>🌞 Solar Flare Detection System</title>
        <meta name="description" content="Real-time solar flare monitoring and AI-powered alerts" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌞</text></svg>" />
      </Head>

      {/* Top Navigation Bar with Home Button */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={handleHomeClick}
              className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 rounded-xl transition-all transform hover:scale-105 shadow-lg border border-white/20"
            >
              <span className="text-2xl">🏠</span>
              <span className="font-semibold text-white hidden sm:inline">Home</span>
            </button>
            
            {selectedLocation && (
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-purple-200 hidden sm:inline">Current:</span>
                <span className="font-semibold text-white">{selectedLocation.name}</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 pt-20 max-w-7xl">
        {/* Header Section */}
        <header className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-0 sm:mr-4 animate-pulse">🌞</div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Solar Flare Detection
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-200 mt-2">
                Real-Time Space Weather Monitor
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg text-purple-200 max-w-3xl mx-auto leading-relaxed px-4">
            Get personalized solar flare alerts, risk assessments, and AI-powered recommendations for your location. 
            Stay informed about space weather that could affect your technology and daily activities.
          </p>
        </header>

        {/* Location Selection Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-8 mb-6 sm:mb-8 border border-white/20 shadow-2xl">
          <div className="flex items-center mb-4 sm:mb-6">
            <span className="text-2xl sm:text-3xl mr-3">🌍</span>
            <h2 className="text-xl sm:text-2xl font-bold">Select Your Location</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-200">Choose Country</label>
              <select 
                onChange={handleLocationSelect}
                className="w-full p-3 sm:p-4 rounded-xl bg-white/20 border-2 border-white/30 text-white text-base sm:text-lg focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all appearance-none cursor-pointer hover:bg-white/25"
                defaultValue=""
              >
                <option value="" className="text-gray-800 bg-white">
                  🌍 Choose your country...
                </option>
                {countries.map((country) => (
                  <option key={country.code} value={country.name} className="text-gray-800 bg-white">
                    {country.name} ({country.code})
                  </option>
                ))}
              </select>
            </div>

            {selectedLocation && (
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <h3 className="font-semibold text-lg mb-2">📍 Selected Location</h3>
                <p className="text-purple-200">
                  <span className="font-medium">{selectedLocation.name}</span>
                </p>
                <p className="text-sm text-purple-300">
                  Lat: {selectedLocation.lat.toFixed(4)}°, Lng: {selectedLocation.lng.toFixed(4)}°
                </p>
                <p className="text-xs text-purple-400 mt-2">
                  Aurora visibility: {Math.abs(selectedLocation.lat) > 60 ? 'High' : Math.abs(selectedLocation.lat) > 40 ? 'Moderate' : 'Low'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Main Content - Only show if location is selected */}
        {selectedLocation && (
          <>
            {/* Solar Flare Dashboard - Mobile Responsive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {/* Alerts Panel */}
              <div className="lg:col-span-1">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
                    <div className="flex items-center">
                      <span className="text-2xl sm:text-3xl mr-3">⚡</span>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold">Solar Flare Alerts</h2>
                        {lastUpdate && (
                          <p className="text-xs sm:text-sm text-purple-300">
                            Last updated: {lastUpdate.toLocaleTimeString()}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={fetchSolarFlareData}
                      disabled={loading}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:scale-100 shadow-lg text-sm sm:text-base"
                    >
                      {loading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Updating...
                        </div>
                      ) : (
                        'Refresh Data'
                      )}
                    </button>
                  </div>

                  {loading && (
                    <div className="flex flex-col items-center justify-center py-12 sm:py-16">
                      <div className="animate-spin rounded-full h-12 sm:h-16 w-12 sm:w-16 border-b-4 border-yellow-400 mb-4"></div>
                      <p className="text-lg sm:text-xl text-purple-200">Fetching latest solar data...</p>
                      <p className="text-xs sm:text-sm text-purple-400 mt-2">Connecting to NASA DONKI API</p>
                    </div>
                  )}

                  {!loading && alerts.length === 0 && (
                    <div className="text-center py-12 sm:py-16">
                      <div className="text-4xl sm:text-6xl mb-4">✅</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-green-300 mb-2">All Clear!</h3>
                      <p className="text-base sm:text-lg text-purple-200">No significant solar flare activity detected.</p>
                      <p className="text-sm text-purple-400 mt-2">Your location is currently safe from space weather impacts.</p>
                    </div>
                  )}

                  {!loading && alerts.length > 0 && (
                    <div className="space-y-4 sm:space-y-6">
                      {alerts.map((alert, index) => {
                        const styles = getAlertStyles(alert.level);
                        return (
                          <div
                            key={alert.id || index}
                            className={`${styles.bg} ${styles.border} ${styles.text} rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 shadow-lg transform hover:scale-[1.02] transition-all`}
                          >
                            <div className="flex flex-col sm:flex-row items-start justify-between mb-4 space-y-2 sm:space-y-0">
                              <div className="flex items-start">
                                <span className="text-xl sm:text-2xl mr-3 mt-1">{styles.icon}</span>
                                <div>
                                  <h3 className="text-lg sm:text-xl font-bold mb-1">{alert.title}</h3>
                                  <p className="opacity-90 text-sm sm:text-base">{alert.message}</p>
                                </div>
                              </div>
                              <div className="text-left sm:text-right">
                                <div className={`text-xl sm:text-2xl font-bold ${getRiskColor(alert.riskScore)}`}>
                                  {alert.riskScore}%
                                </div>
                                <div className="text-xs sm:text-sm opacity-75">Risk Score</div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                              <div>
                                <h4 className="font-semibold mb-1 text-sm sm:text-base">📊 Impact Level</h4>
                                <p className="text-base sm:text-lg font-medium">{alert.impact}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1 text-sm sm:text-base">📍 For Your Location</h4>
                                <p className="text-sm opacity-90">{selectedLocation.name}</p>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3 text-sm sm:text-base">💡 Recommendations</h4>
                              <div className="grid grid-cols-1 gap-2">
                                {alert.recommendations.map((rec, i) => (
                                  <div key={i} className="flex items-start text-xs sm:text-sm opacity-90">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>{rec}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* AI Chat Panel - Enhanced for Mobile */}
              <div className="lg:col-span-1">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <span className="text-2xl sm:text-3xl mr-3">🔮</span>
                      <h2 className="text-xl sm:text-2xl font-bold">AI Assistant - Explore the space</h2>
                    </div>
                    <button
                      onClick={() => setShowChat(!showChat)}
                      className="px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
                    >
                      {showChat ? 'Hide 🪐' : 'Chat 🌌'}
                    </button>
                  </div>

                  {!showChat && (
                    <div className="text-center py-8 sm:py-12">
                      <div className="text-3xl sm:text-4xl mb-4">🌍</div>
                      <h3 className="text-lg font-semibold mb-2">AI Solar Expert</h3>
                      <p className="text-purple-200 text-sm mb-4 px-2">
                        Get personalized advice about solar flares, space weather impacts, and safety recommendations.
                      </p>
                      <button
                        onClick={() => setShowChat(true)}
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium rounded-xl transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
                      >
                        Start Conversation 🪄
                      </button>
                    </div>
                  )}

                  {showChat && (
                    <div className="flex flex-col h-[500px] sm:h-[600px]">
                      {/* Chat Messages - Larger on Mobile */}
                      <div className="flex-1 overflow-y-auto bg-black/20 rounded-xl p-3 sm:p-4 mb-4 space-y-3">
                        {chatMessages.length === 0 && (
                          <div className="text-center text-purple-200 py-4">
                            <p className="mb-2 text-sm sm:text-base">👋 Hello! I'm your AI space weather assistant.</p>
                            <p className="text-sm">Ask me about:</p>
                            <ul className="text-xs sm:text-sm mt-2 space-y-1 text-purple-300">
                              <li>• Solar flare impacts</li>
                              <li>• Safety recommendations</li>
                              <li>• Aurora predictions</li>
                              <li>• Technology precautions</li>
                            </ul>
                          </div>
                        )}
                        
                        {chatMessages.map((message, index) => (
                          <div
                            key={index}
                            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[90%] sm:max-w-[85%] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-sm sm:text-base ${
                                message.type === 'user'
                                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                  : 'bg-white/20 text-white border border-white/30 shadow-lg'
                              }`}
                            >
                              <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                            </div>
                          </div>
                        ))}
                        
                        {chatLoading && (
                          <div className="flex justify-start">
                            <div className="bg-white/20 text-white border border-white/30 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-lg">
                              <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Chat Input - Mobile Optimized */}
                      <div className="flex gap-2 sm:gap-3">
                        <input
                          type="text"
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                          placeholder="Ask about solar weather..."
                          className="flex-1 p-3 sm:p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 text-sm sm:text-base focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                          disabled={chatLoading}
                        />
                        <button
                          onClick={sendMessage}
                          disabled={chatLoading || !chatInput.trim()}
                          className="px-3 sm:px-4 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:scale-100 shadow-lg"
                        >
                          <span className="text-base sm:text-lg">🚀</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Status Footer */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-purple-300 space-y-2 sm:space-y-0">
                <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span>System Online</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🛰️</span>
                    <span>NASA DONKI API</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🤖</span>
                    <span>Gemini AI Ready</span>
                  </div>
                </div>
                <div className="text-xs opacity-75">
                  Location: {selectedLocation.name} | Updates every 5min
                </div>
              </div>
            </div>
          </>
        )}

        {/* Welcome Screen - Show when no location selected */}
        {!selectedLocation && (
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-white/10 text-center">
            <div className="text-4xl sm:text-6xl mb-6">🌍</div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Welcome to Solar Flare Detection</h2>
            <p className="text-base sm:text-lg text-purple-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Select your country above to start monitoring solar flare activity and receive personalized space weather alerts for your location.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">Real-Time Alerts</h3>
                <p className="text-sm text-purple-300">Get instant notifications about solar flare activity affecting your area</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="text-2xl sm:text-3xl mb-3">🤖</div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">AI Assistant</h3>
                <p className="text-sm text-purple-300">Chat with our AI expert for personalized space weather advice</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="text-2xl sm:text-3xl mb-3">📊</div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">Risk Assessment</h3>
                <p className="text-sm text-purple-300">Location-based impact analysis and safety recommendations</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}




 
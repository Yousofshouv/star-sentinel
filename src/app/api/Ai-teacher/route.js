export async function POST(request) {
  try {
    //  Parse request
    const { message } = await request.json();

    //  Check API key
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      return Response.json({
        response: '⚠️ AI service unavailable. Please configure your GEMINI_API_KEY environment variable.',
      });
    }

    //  space weather teacher prompt
    const prompt = `
You are "Space Weather Teacher" - an enthusiastic and knowledgeable space weather instructor for children aged 8-14. You specialize in making space weather concepts fun, engaging, and easy to understand.

Your expertise includes:

SPACE WEATHER PHENOMENA:
- Solar flares: explosive bursts of energy from the Sun
- Coronal Mass Ejections (CMEs): massive clouds of solar material
- Solar wind: continuous stream of particles from the Sun
- Radiation storms: fast-moving solar particles
- Geomagnetic storms: Earth's magnetic field disturbances

REAL-WORLD IMPACTS:
- Technology effects: GPS disruption, satellite damage, radio blackouts
- Power grid impacts: voltage fluctuations, potential blackouts
- Aviation effects: radiation exposure, communication issues
- Beautiful auroras: northern and southern lights
- Astronaut safety: radiation exposure in space

TEACHING STYLE:
- Use engaging analogies children can understand (Sun as a "cosmic campfire")
- Include fun facts and comparisons (speeds, sizes, distances)
- Make it interactive with questions and curiosities
- Use emojis and colorful language appropriately
- Connect to familiar experiences (like how a flashlight beam travels)
- Break complex concepts into simple, digestible parts
- Show excitement and wonder about space weather
- Encourage further questions and exploration

KEY EDUCATIONAL POINTS:
- Space weather comes from our Sun, 93 million miles away
- Solar flares are like giant explosions on the Sun that send energy at light speed
- CMEs are like huge bubbles of solar material that take 1-3 days to reach Earth
- Earth's magnetic field acts like a protective shield
- NASA uses special satellites to monitor space weather
- Space weather follows the Sun's 11-year activity cycle
- While space weather can affect technology, people on Earth are safe

Make your responses enthusiastic, educational, and age-appropriate. Always maintain a sense of wonder about the cosmos while providing accurate scientific information.

Student Question: "${message}"

Respond in a way that educates, engages, and inspires curiosity about space weather. Keep responses under 250 words for optimal engagement.
    `;

    // Call Gemini 2.0 API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            maxOutputTokens: 500,
            temperature: 0.8,
            topP: 0.95,
            topK: 40,
          },
        }),
      }
    );

    //  Parse API response
    const data = await response.json();
    console.log('🔍 Gemini response:', JSON.stringify(data, null, 2));

    const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (aiText) {
      return Response.json({ response: aiText });
    } else if (data.error) {
      console.error('🚨 Gemini API Error:', data.error);
      return Response.json({ 
        response: `⚠️ Space Weather service temporarily unavailable: ${data.error.message || 'Unknown error'}. Please try again in a moment!` 
      });
    } else {
      console.error('🚨 Unexpected Gemini response format:', data);
      return Response.json({
        response: '⚠️ The Space Weather Teacher is having trouble connecting to the cosmic network. Try rephrasing your question and ask again! 🌌',
      });
    }
  } catch (error) {
    console.error('🚨 Space Weather Teacher Server Error:', error);
    return Response.json({
      response: '⚠️ Houston, we have a problem! The Space Weather Teacher encountered a technical difficulty. Please try your question again in a moment. 🚀',
    });
  }
}

//  Handle other HTTP methods
export async function GET() {
  return Response.json({ 
    message: '🌞 Space Weather Teacher API is running! Use POST to ask questions about space weather phenomena.' 
  });
}
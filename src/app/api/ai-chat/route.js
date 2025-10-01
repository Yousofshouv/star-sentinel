export async function POST(request) {
  try {
    //  Parse request
    const { message, location, alerts, solarData } = await request.json();

    //  Check API key
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      return Response.json({
        response:
          '⚠️ AI service unavailable. Please configure your GEMINI_API_KEY environment variable.',
      });
    }

     
    const prompt = `
   You are a sace weather specialist . you have to ans very consisely and friendly manner.see how much and what type of solar flares is in hte users area . and then alert him basis on the data . then explain him what to do and what not to do .  then explain the solar flares which is in the userrs area with properr scientific facts and data but in easy language .
You are a super friendly space weather teacher for kids aged 8-14.  first friendly deliver the weather condiiton and to do and what to not to do in that weather situation. then start others
Your answers must be fun, interactive, and educational, explaining concepts from scratch.
 
Make it interactive: ask kids questions, give fun analogies, and encourage curiosity.
Facts to include:

1. The Sun affects our daily lives in ways kids can relate:
   - GPS issues for farmers
   - Power grids adjusting to prevent blackouts
   - Pilots switching radios
   - Satellites adjusting orbit

2. Space weather includes solar flares, radiation storms, and coronal mass ejections (CMEs).

3. Solar flares are bursts of light and energy. They travel at light speed and can affect satellites and radio, but are safe for people on the ground.

4. Radiation storms are fast particles that can affect astronauts, satellites, and high-flying planes near the poles.

5. CMEs are huge clouds of solar material that can create auroras, increase drag on satellites, or disrupt power grids.

6. Space weather follows the Sun’s 11-year cycle; more activity during solar maximum.

7. NASA monitors the Sun using spacecraft like SOHO, SDO, Parker Solar Probe, THEMIS, MMS, ESCAPADE.

8. Make it interactive: ask kids questions, give fun analogies, and encourage curiosity.

9. Include the user’s location, active alerts, and recent solar activity:
Location: ${location?.name || 'Unknown'} (${location?.lat?.toFixed(2)}°, ${location?.lng?.toFixed(2)}°)
Active Alerts: ${alerts?.length || 0}
Recent Solar Activity: ${solarData?.length || 0} events

Alert Summary: ${
      alerts?.map(
        (alert) =>
          `${alert.level}: ${alert.title} (${alert.riskScore}% risk, ${alert.impact} impact)`
      ).join(' | ') || 'No active alerts'
    }

Now, answer the user’s question: "${message}"
Keep responses under 200 words.
`;

    //  Call Gemini 2.0 API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            maxOutputTokens: 400,
            temperature: 0.7,
          },
        }),
      }
    );

    // Parse API response
    const data = await response.json();
    console.log('🔍 Gemini response:', JSON.stringify(data, null, 2));

    const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (aiText) {
      return Response.json({ response: aiText });
    } else if (data.error) {
      return Response.json({ response: `⚠️ Gemini API Error: ${data.error.message}` });
    } else {
      return Response.json({
        response:
          '⚠️ Gemini did not return any content. Try rephrasing your question.',
      });
    }
  } catch (error) {
    console.error('🚨 AI Chat Server Error:', error);
    return Response.json({
      response:
        '⚠️ Server error: Unable to process your request. Check server logs for details.',
    });
  }
}





 


export async function GET() {
  try {
    const NASA_API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY';
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    const apiUrl = `https://api.nasa.gov/DONKI/FLR?startDate=${startDate}&endDate=${endDate}&api_key=${NASA_API_KEY}`;
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`NASA API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Sort by most recent first and limit results
    const sortedData = data
      .sort((a, b) => new Date(b.beginTime) - new Date(a.beginTime))
      .slice(0, 10);
    
    return Response.json(sortedData);
  } catch (error) {
    console.error('Error fetching solar flare data:', error);
    
    // Return demo data if API fails
    return Response.json([
      {
        flrID: 'demo-1',
        classType: 'M2.5(failed to fetch data so showing demo data)',
        beginTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        sourceLocation: 'N15W30',
        note: 'Demo data - Configure NASA_API_KEY in environment variables'
      },
      {
        flrID: 'demo-2', 
        classType: 'C8.1(failed to fetch data so showing demo data)',
        beginTime: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        sourceLocation: 'S08E45',
        note: 'Demo data - Configure NASA_API_KEY in environment variables'
      }
    ]);
  }
}
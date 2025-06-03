export async function fetchCountry() {
    try {
      // Fetch the user's IP address
      const ipResponse = await fetch("https://api64.ipify.org?format=json");
      if (!ipResponse.ok) {
        throw new Error(`Could not fetch IP: HTTP status ${ipResponse.status}`);
      }
      const ipData = await ipResponse.json();
      const userIP = ipData.ip; // Extract the IP address from the response
  
      // Use the IP address to fetch additional information
      const response = await fetch(`https://pro.ip-api.com/json/${userIP}?key=TaBWFskKDcohgrJ`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();
  
      // Return the country
      return res.country;
    } catch (error) {
      console.error("Error fetching IP information:", error);
      throw error;
    }
  }
  
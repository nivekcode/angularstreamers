export default async function handler(req, res) {
  const { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET } = process.env;

  if (!TWITCH_CLIENT_ID || !TWITCH_CLIENT_SECRET) {
    return res.status(500).json({ error: "Twitch client ID or secret not configured" });
  }

  const TWITCH_TOKEN_URL = "https://id.twitch.tv/oauth2/token";

  if (req.method === "POST") {
    try {
      // Request body parameters
      const params = new URLSearchParams({
        client_id: TWITCH_CLIENT_ID,
        client_secret: TWITCH_CLIENT_SECRET,
        grant_type: "client_credentials",
      });

      // Make the request to the Twitch API
      const response = await fetch(TWITCH_TOKEN_URL, {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        return res.status(response.status).json({ error });
      }

      const data = await response.json();
      return res.status(200).json({ accessToken: data.access_token, expiresIn: data.expires_in });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}

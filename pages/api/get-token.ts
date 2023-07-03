import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getServerSideProps(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(req.body, 'res.body')
    const { 
        scope = 'epi_content_delivery', 
        username = process.env.TOKEN_KEY_NAME,
        password = process.env.TOKEN_KEY_VALUE, 
        clientId = 'frontend',
        clientSecret = process.env.TOKEN_KEY_CLI_SEC,
        grant_type = 'password'
    } = req.body;

    const tokenResponse = await axios.post(`${process.env.API_URL}/api/episerver/connect/token`, {
      grant_type,
      client_id: clientId,
      client_secret: clientSecret,
      username,
      password,
      scope,
    },{
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
            'Accept-Language':'en',
            'Accept':'application/json'
        }
    });
    console.log(tokenResponse, 'token')

    res.json({ access_token: tokenResponse.data.access_token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate access token' });
  }
}

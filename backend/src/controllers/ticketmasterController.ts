import fs from 'fs';
import path from 'path';
import axios from 'axios';

const TicketmasterClient = axios.create({
    baseURL: "https://app.ticketmaster.com/discovery/v2/"
});

export async function getArtists(req: any, res: any, client = TicketmasterClient) {
    if (process.env.DEV_MODE == "dev") {
        fs.readFile(path.resolve(__dirname, './../__tests__/artists.json'), 'utf-8', (err, data) => {
            res.send(JSON.parse(data));
        })
        return;
    }

    try {
        const params = {
            apikey: process.env.TM_KEY,
            locale: "*",
            classificationId: process.env.TM_ARTIST_CLASS_ID
        };

        const response = await client.get("attractions", {
            params: params
        });
        
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error querying Ticketmaster for artists");
        res.status(500).json({ msg: "Internal server error" });
    }
}

export async function getArtist(req: any, res: any, client = TicketmasterClient) {
    try {
        const params = {
            apikey: process.env.TM_KEY,
            locale: "*"
        };

        const response = await client.get(`attractions/${req.params.artistId}`, {
            params: params
        });
    
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error querying Ticketmaster for artist");
        res.status(500).json({ msg: "Internal server error" });
    }
}

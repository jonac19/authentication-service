import axios from 'axios';

const TicketmasterClient = axios.create({
    baseURL: "https://app.ticketmaster.com/discovery/v2/"
});

export async function getArtists(req: any, res: any) {
    try {
        const params = {
            apikey: process.env.TM_KEY,
            locale: "*",
            classificationId: process.env.TM_ARTIST_CLASS_ID
        };

        const response = await TicketmasterClient.get("attractions", {
            params: params
        });
        
        res.send(response.data);
    } catch (error) {
        console.error("Error querying Ticketmaster for artists");
        res.status(500).json({ msg: "Internal server error" });
    }
}

export async function getArtist(req: any, res: any) {
    try {
        if (!req.params.artistId) {
            return res.status(400).json({ msg: "Artist ID is missing" });
        }

        const params = {
            apikey: process.env.TM_KEY,
            locale: "*"
        };

        const response = await TicketmasterClient.get(`attractions/${req.params.artistId}`, {
            params: params
        });
    
        res.send(response.data);
    } catch (error) {
        console.error("Error querying Ticketmaster for artist");
        res.status(500).json({ msg: "Internal server error" });
    }
}

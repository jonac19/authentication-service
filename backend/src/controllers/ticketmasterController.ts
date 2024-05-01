import axios from 'axios';

export async function getArtists(req: any, res: any) {
    try {
        const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/attractions?apikey=${process.env.TM_KEY}&locale=*&classificationId=KZFzniwnSyZfZ7v7nJ`)
        res.send(response.data);
    } catch (error) {
        console.error("Error querying Ticketmaster");
        res.status(500).json({ msg: "Internal server error" });
    }
}

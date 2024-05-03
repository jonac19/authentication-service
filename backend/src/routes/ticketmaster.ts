import { Router } from 'express';
import * as TicketmasterController from '../controllers/ticketmasterController';

const router = Router();

router.get('/api/artists', TicketmasterController.getArtists);
router.get('/api/artists/:artistId', TicketmasterController.getArtist);

export default router;

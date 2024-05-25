import { Router } from 'express';
import * as TicketmasterController from '../controllers/ticketmasterController';

const router = Router();

router.get('/api/artists', (req, res) => TicketmasterController.getArtists(req, res));
router.get('/api/artists/:artistId', (req, res) => TicketmasterController.getArtist(req, res));

export default router;

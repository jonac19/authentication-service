import { Router } from 'express';
import * as TicketmasterController from '../controllers/ticketmasterController';

const router = Router();

router.get('/api/ticketmaster', TicketmasterController.getArtists);

export default router;

import { Router } from 'express';
import * as TicketmasterController from '../controllers/ticketmasterController';

const router = Router();

router.get('/api/artists', (req, res) => TicketmasterController.getArtists(req, res));
router.get('/api/artists/:artistId', (req, res) => TicketmasterController.getArtist(req, res));
router.get('/api/shows', (req, res) => TicketmasterController.getShows(req, res));
router.get('/api/shows/:artistId', (req, res) => TicketmasterController.getShowsByArtist(req, res));

export default router;

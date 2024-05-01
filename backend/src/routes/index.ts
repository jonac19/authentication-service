import { Router } from "express";
import authRouter from "./auth";
import usersRouter from "./users";
import ticketmasterRouter from "./ticketmaster";

const router = Router();

router.use(authRouter);
router.use(usersRouter);
router.use(ticketmasterRouter);

export default router;

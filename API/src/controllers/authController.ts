import { Request, Response } from 'express';
import { getUserFromTokenPayload } from '../services/authService';

export function getMe(req: Request, res: Response) {
  const user = getUserFromTokenPayload(req.user);
  res.json(user);
}

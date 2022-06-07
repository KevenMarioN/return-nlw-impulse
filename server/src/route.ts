import { Router } from "express";

import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailerMailAdapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/PrismaFeedbacksRepository";
import { SubmitFeedbackUseCase } from "./use-cases/SubmitFeedbackUseCase";

const routes = Router();

routes.post('/feedbacks', async (req, res) => {
  const { comment, type, screenshot } = req.body;
  
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerAdapater = new NodemailerMailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository,nodemailerAdapater);
  await submitFeedbackUseCase.execute({
    comment,
    type,
    screenshot
  });
 
  return res.status(201).send();
})

export default routes;
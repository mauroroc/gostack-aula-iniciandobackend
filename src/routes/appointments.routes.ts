import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointementService';

const appointmenstRouter = Router();

appointmenstRouter.get('/', (req, res) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = appointmentsRepository.find();
  return res.json(appointments);
});

appointmenstRouter.post('/', async (req, res) => {
  try {
    const { provider, date } = req.body;
    const parsedDate = parseISO(date);
    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({
      date: parsedDate,
      provider,
    });
    return res.json(appointment);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export default appointmenstRouter;

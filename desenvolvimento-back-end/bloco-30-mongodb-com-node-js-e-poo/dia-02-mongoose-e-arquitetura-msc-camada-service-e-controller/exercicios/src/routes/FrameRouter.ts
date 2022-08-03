import { Router } from "express";
import FrameModel from '../models/Frame';
import FrameService from "../services/FrameService";
import FrameController from "../controller/FrameController";

const route = Router();
const frame = new FrameModel();
const frameService = new FrameService(frame);
const frameController = new FrameController(frameService);

route.get('/frame', (req, res) => frameController.read(req, res));
route.delete('/frame', (req, res) => frameController.delete(req, res));

export default route;
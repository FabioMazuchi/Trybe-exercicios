import IService from '../interfaces/IService';
import IFrame from '../interfaces/Frame';
import { Request, Response } from 'express';

class FrameController {
	constructor(private service: IService<IFrame>) {}

	async read(req: Request, res: Response<IFrame[]>) {
		const result = await this.service.read();
		return res.status(200).json(result);
	}
}

export default FrameController;
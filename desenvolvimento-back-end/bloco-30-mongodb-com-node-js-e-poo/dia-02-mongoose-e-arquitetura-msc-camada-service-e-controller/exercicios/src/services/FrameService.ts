import IService from '../interfaces/IService';
import IFrame from '../interfaces/Frame';
import IModel from '../interfaces/IModel';

class FrameService implements IService<IFrame> {
	private _frame: IModel<IFrame>;

	constructor(model: IModel<IFrame>) {
		this._frame = model;
	}

	async delete(_id: string): Promise<IFrame | null> {
		const result = await this._frame.destroy(_id);
		if (result === null) throw new Error('InvalidMongoId')

		return result;
	}

	async read(): Promise<IFrame[]> {
		return this._frame.read();
	}
}

export default FrameService;
import { expect } from 'chai';
import sinon from 'sinon';
import FrameService from '../../../services/FrameService';
import FrameModel from '../../../models/Frame';
import { allFrameMock, frameMockWithId } from '../../mocks/frameMock';

describe('Frame Service', () => {
	const frameModel = new FrameModel()
	const frameService = new FrameService(frameModel);

	before(() => {
		sinon.stub(frameModel, 'read').resolves(allFrameMock);
		sinon.stub(frameModel, 'destroy')
		.onCall(0).resolves(frameMockWithId)
		.onCall(1).resolves(null);
	});

	after(() => {
		sinon.restore();
	});

	describe('read a frame', () => {
		it('successfully read', async () => {
			const frames = await frameService.read();
			expect(frames).to.be.deep.equal(allFrameMock);
		});
	});

	describe('deleting a frame', () => {
		it('successful deletion', async () => {
			const frameDeleted = await frameService.delete('62cf1fc6498565d94eba52cd');
			expect(frameDeleted).to.be.deep.equal(frameMockWithId);
		});

		it('_id not found', async () => {
			try {
				await frameService.delete('ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
});
import { expect } from 'chai';
import sinon from 'sinon';
import FrameService from '../../../services/FrameService';
import FrameModel from '../../../models/Frame';
import { allFrameMock } from '../../mocks/frameMock';

describe('Frame Service', () => {
	const frameModel = new FrameModel()
	const frameService = new FrameService(frameModel);

	before(() => {
		sinon.stub(frameModel, 'read').resolves(allFrameMock);
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
});
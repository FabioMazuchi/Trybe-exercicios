import { expect } from 'chai';
import sinon from 'sinon';
import FrameService from '../../../services/FrameService';
import FrameModel from '../../../models/Frame';
import FrameController from '../../../controller/FrameController';
import { allFrameMock } from '../../mocks/frameMock';
import { Request, Response } from 'express';

describe('Frame Controller', () => {
	const frameModel = new FrameModel()
	const frameService = new FrameService(frameModel);
	const frameController = new FrameController(frameService);

	const req = {} as Request;
	const res = {} as Response;

	before(() => {
		sinon.stub(frameService, 'read').resolves(allFrameMock);

		res.status = sinon.stub().returns(res);
		res.json = sinon.stub().returns(res);
	});

	after(() => {
		sinon.restore();
	});

	describe('read a frame', () => {
		it('successfully read', async () => {
			req.body = allFrameMock;
			await frameController.read(req, res);

			expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
			expect((res.json as sinon.SinonStub).calledWith(allFrameMock)).to.be.true;
		});
	});
});
import ILens from "../../interfaces/Lens";

const lensMock: ILens = {
	degree: 2.3,
	antiGlare: true,
	blueLightFilter: true,
};

const lensMockWithId: ILens & { _id: string } = {
	_id: '987665',
	degree: 2.3,
	antiGlare: true,
	blueLightFilter: true,
};

export { lensMock, lensMockWithId };
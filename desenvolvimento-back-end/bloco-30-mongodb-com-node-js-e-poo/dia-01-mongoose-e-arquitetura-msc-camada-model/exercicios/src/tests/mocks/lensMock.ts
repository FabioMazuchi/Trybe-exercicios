import ILens from "../../interfaces/Lens";

const lensMock: ILens = {
	degree: 2.3,
	antiGlare: true,
	blueLightFilter: true,
};

const lensMockWithId: ILens & { _id: string } = {
	_id: '62cf1fc6498565d94eba52cd',
	degree: 2.3,
	antiGlare: true,
	blueLightFilter: true,
};

const lensMockForChangeWithId:ILens & { _id:string } = {
	_id: '62cf1fc6498565d94eba52cd',
	degree: 9,
  antiGlare: false,
  blueLightFilter: true,
};

export { lensMock, lensMockWithId, lensMockForChangeWithId };
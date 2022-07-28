import IFrame from "../../interfaces/Frame";

const frameMock: IFrame = {
	material: 'Ouro',
	color: 'Amarelo'
};

const frameMockWithId: IFrame & { _id: string} = {
	_id: '62cf1fc6498565d94eba52cd',
	material: 'Ouro',
	color: 'Amarelo'
};

const frameMockForChangeWithId:IFrame & { _id:string } = {
	_id: '62cf1fc6498565d94eba52cd',
	material: 'Ouro com adamantium',
	color: 'ouro brilhante',
};

export { frameMock, frameMockWithId, frameMockForChangeWithId };
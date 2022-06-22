export interface Employee {
	registration: string
	salary: number
	admissionDate: Date
	generateRegistration(): string
}

export interface Enrollable {
	enrollment: string
	generateEnrollment(): string
}
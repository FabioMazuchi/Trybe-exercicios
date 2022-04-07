select 
	EMPLOYEE_ID,
  FIRST_NAME,
  day(HIRE_DATE) 'Dia de Contratação'
from hr.employees;

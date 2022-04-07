select 
	EMPLOYEE_ID,
  FIRST_NAME,
  year(HIRE_DATE) 'Ano de Contratação'
from hr.employees;

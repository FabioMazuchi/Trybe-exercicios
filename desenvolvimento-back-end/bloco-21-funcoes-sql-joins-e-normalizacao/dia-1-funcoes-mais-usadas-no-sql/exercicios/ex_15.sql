select 
	EMPLOYEE_ID,
  FIRST_NAME,
  month(HIRE_DATE) 'Mês de Contratação'
from hr.employees;

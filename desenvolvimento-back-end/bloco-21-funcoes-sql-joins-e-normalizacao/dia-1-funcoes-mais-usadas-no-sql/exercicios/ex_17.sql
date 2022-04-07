select 
	LAST_NAME,
  HIRE_DATE
from hr.employees
where 
  month(HIRE_DATE) = 7 and
  year(HIRE_DATE) = 1987; 

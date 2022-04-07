select 
	FIRST_NAME,
  LAST_NAME,
  datediff(current_date(), HIRE_DATE) 'Dias Trabalhados'
from hr.employees; 

select JOB_ID, count(*) as 'Total' 
from hr.employees
where JOB_ID = 'IT_PROG';
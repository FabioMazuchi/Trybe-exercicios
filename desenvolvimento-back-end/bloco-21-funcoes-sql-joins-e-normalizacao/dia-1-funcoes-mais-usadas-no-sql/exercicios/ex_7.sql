select JOB_ID, sum(SALARY) as 'Total'
from hr.employees
group by JOB_ID;
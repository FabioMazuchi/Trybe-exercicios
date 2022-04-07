select JOB_ID, avg(SALARY) as 'MÉDIA SALARIAL'
from hr.employees
group by JOB_ID, SALARY
order by `MÉDIA SALARIAL` desc;
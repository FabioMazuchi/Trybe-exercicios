select JOB_ID, AVG(SALARY) 'Média Salarial'
from hr.employees
group by JOB_ID
having JOB_ID <> 'IT_PROG'
order by `Média Salarial` desc;

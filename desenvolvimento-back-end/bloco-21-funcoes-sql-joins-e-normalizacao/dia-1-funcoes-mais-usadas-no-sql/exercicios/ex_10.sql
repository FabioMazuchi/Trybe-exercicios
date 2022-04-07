select DEPARTMENT_ID, 
AVG(SALARY) 'Média Salarial',
count(*) 'Total Funcionários'
from hr.employees
group by DEPARTMENT_ID
having `Total Funcionários` > 10;

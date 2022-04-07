select 
round(max(SALARY), 2) as 'Maior Salário',
round(min(SALARY), 2) as 'Menor Salário',
round(sum(SALARY), 2) as 'Total Salaŕio',
round(avg(SALARY), 2) as 'Mádia Salários'
from hr.employees;
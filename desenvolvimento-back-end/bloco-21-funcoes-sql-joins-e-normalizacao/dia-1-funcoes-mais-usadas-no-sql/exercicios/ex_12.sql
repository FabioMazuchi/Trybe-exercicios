select *, char_length(FIRST_NAME) as 'Tamanho'
from hr.employees
having `Tamanho` >= 8;

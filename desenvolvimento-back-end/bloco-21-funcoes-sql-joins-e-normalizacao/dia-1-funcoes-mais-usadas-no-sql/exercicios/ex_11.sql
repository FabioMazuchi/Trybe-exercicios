SET SQL_SAFE_UPDATES = 0;
update hr.employees
set PHONE_NUMBER = replace(PHONE_NUMBER, '515', '777')
where PHONE_NUMBER like '515%';

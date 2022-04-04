use Pixar;
set SQL_SAFE_UPDATES = 0;
update Movies set title = 'Ratatouille', `year` = 2007 where id = 3;

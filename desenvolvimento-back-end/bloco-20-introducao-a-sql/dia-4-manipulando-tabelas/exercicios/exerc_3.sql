use Pixar;
set SQL_SAFE_UPDATES = 0;
update Movies set director = 'Andrew Staton' where director = 'John Lasseter';

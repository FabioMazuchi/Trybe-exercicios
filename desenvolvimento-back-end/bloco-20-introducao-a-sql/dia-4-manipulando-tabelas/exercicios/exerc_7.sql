use Pixar;
set SQL_SAFE_UPDATES = 0;
select id from Movies where director = 'Andrew Staton';
delete from BoxOffice where movie_id in (1,2,5,6,9);
delete from Movies where director = 'Andrew Staton';

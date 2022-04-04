use Pixar;
set SQL_SAFE_UPDATES = 0;

delete from BoxOffice where movie_id = 11;
delete from Movies where title = 'WALL-E';

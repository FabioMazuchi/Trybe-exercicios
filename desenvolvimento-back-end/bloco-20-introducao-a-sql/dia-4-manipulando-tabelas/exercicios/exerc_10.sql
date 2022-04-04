set SQL_SAFE_UPDATES = 0;
use Pixar;
select * from Movies where length_minutes < 100; 
delete from BoxOffice where movie_id in (7,8);
delete from Movies where length_minutes < 100; 
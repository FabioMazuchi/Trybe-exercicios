set SQL_SAFE_UPDATES = 0;
use Pixar;
update BoxOffice set rating = 9.0 where domestic_sales > 400000000;
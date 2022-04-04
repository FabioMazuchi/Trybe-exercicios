set SQL_SAFE_UPDATES = 0;
use Pixar;
update BoxOffice set rating = 6.0 where international_sales < 300000000 and domestic_sales > 200000000;
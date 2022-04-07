select
  m.title,
  b.domestic_sales,
  b.international_sales
from
  Pixar.Movies m
  join Pixar.BoxOffice b on m.id = b.movie_id
where
  b.international_sales > b.domestic_sales;
select
  m.title,
  b.domestic_sales,
  b.international_sales
from
  Pixar.Movies m
  join Pixar.BoxOffice b on m.id = b.movie_id;
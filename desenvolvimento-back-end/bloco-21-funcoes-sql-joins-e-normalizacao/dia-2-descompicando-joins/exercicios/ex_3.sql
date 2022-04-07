select
  m.title,
  b.rating
from
  Pixar.Movies m
  join Pixar.BoxOffice b on m.id = b.movie_id
order by
  m.title desc;
select
  m.id,
  m.title,
  m.director,
  m.`year`,
  m.length_minutes,
  m.theater_id
from
  Pixar.Movies m
  join Pixar.BoxOffice b on b.movie_id = m.id
where
  b.rating > 8
  and m.theater_id is not null;
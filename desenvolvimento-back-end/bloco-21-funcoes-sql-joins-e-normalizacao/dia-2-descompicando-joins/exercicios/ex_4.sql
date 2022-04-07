SELECT
  *
FROM
  Pixar.Movies m
  join Pixar.Theater t on t.id = m.theater_id
order by
  t.`name`;
1.

```
SELECT p.name AS name, (total * CAST(i.price AS INT)) AS total_price
FROM transactions t, persons p, items i
WHERE t.person_id = p.id AND t.item_id = i.id;
```

2.

```
SELECT p.name AS person_name, i.name AS item_name
FROM transactions t, persons p, items i
WHERE t.person_id = p.id AND t.item_id = i.id AND t.date BETWEEN '2020-01-01' AND '2020-06-25';
```

3.

```
SELECT sq.name
FROM (
	SELECT p.id, p.name, count(*) as total_variants
	FROM transactions t, persons p
	WHERE t.person_id = p.id
	GROUP BY p.id, t.item_id
	ORDER BY total_variants DESC
) sq
GROUP BY sq.id, sq.name;
```

// 1. Вывести имена юзеров не из France
db.users.find(
    {country: {$ne: "France"}},
    {_id: 0}
)

// 2. Добавить несколько реакций на треки
db.reactions.insertMany([
    {_id: 6, user_id: 2, reaction: 3, track_id: 4, create_at: 05-01-2023},
    {_id: 7, user_id: 3, reaction: 4, track_id: 3, create_at: 06-01-2023},
    {_id: 8, user_id: 4, reaction: 5, track_id: 1, create_at: 07-01-2023}
])

// 3. Вывести названия треков продолжительностью от 1 до 10 мин
db.tracks.find(
    {duration_secs: { $gte: 60, $lte: 10 * 60}},
    {title: 1, _id: 0}
)

// 4. Вывести треки юзера 4
db.tracks.find(
    {author_id: 4},
    {_id: 0}
)
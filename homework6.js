//1. Вывести названия треков без тега test
db.tracks.find(
    {tags: {$ne:'test'}},
    {title: 1, _id: 0} 
)

//2. Вывести ко-во треков с продолжительностью до одного часа с тегом new
db.tracks.countDocuments(
    {duration_secs: {$lte: 60 * 60}, tags: 'new'}
)

//3. Увеличить баланс заблокированных юзеров не из Germany на 5%
db.users.updateMany(
    {is_blocked: true, country: {$ne: 'Germany'}},
    {$mul: {balance: 1.05}},
)

//4. Добавить всем трекам теги fresh и popular
db.tracks.updateMany(
    {},
    {$addToSet: {tags: {$each:['fresh','popular']}}}
)
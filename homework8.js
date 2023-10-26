//1. Вывести среднюю реакцию по треку 1
db.tracks.aggregate([

    { $match: { _id: 1 } },
    {
        $lookup: {
            from: 'reactions',
            localField: '_id',
            foreignField: 'track_id',
            as: 'reaction'
        }
    },
    { $unwind: '$reaction' },
    {
        $group: {
            _id: "$_id",
            reiting: { $avg: '$reaction.value' }
        }
    },
    { $project: { _id: 1, reiting: 1 } }
])

//2. Увеличить баланс всех незаблокированных юзеров на 0.5%
db.users.updateMany(
    { is_blocked: { $ne: true } },
    { $mul: { balance: 1.05 } }
)

//3. Вывести ко-во реакций с оценкой 4
db.reactions.countDocuments(
    { value: 4 }
)

//4. Вывести названия треков, принадлежащих юзеру 4
db.tracks.aggregate([
    {$match: {author_id: 4}},
    {$project: {_id:0, title:1}}
])

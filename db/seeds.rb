# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(user_name:'michelle', password:'coolbeans')
User.create(user_name:'andy', password:'technical')
User.create(user_name:'dakota', password:'sunnyday')
User.create(user_name:'ronnie', password:'orangeflower')

Profile.create(nick_name:'stranger', name: 'Michelle', birthday: 12/14/1985, address: '123 Clinton St', occupation:'Engineer', bio: 'Enjoy outdoors and hiking', user_id:1 )
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u1 = User.create(user_name:'michelle')
u2 = User.create(user_name:'andy')
u3 = User.create(user_name:'dakota')
u4 = User.create(user_name:'ronnie')

p1 = Profile.create(nick_name:'stranger', name: 'Michelle', birthday: 12/14/1985, address: '123 Clinton St', occupation:'Engineer', bio: 'Enjoy outdoors and hiking', user_id: u1.id )

post1 = Post.create(text_post: 'Hello, My name is Michelle', image_url: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', like: 1, profile_id: p1.id)

c1 = Comment.create(comment_text: 'Hi, Michille', image_url: '', like: 0, post_id: post1.id, profile_id: p1.id)

FriendList.create(user_id: u1.id, friend_id: u2.id)


"done seeding"
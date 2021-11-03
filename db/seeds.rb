# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

u1 = User.create!(user_name:'michelle',password: "secret")
u2 = User.create!(user_name:'andy',password: "secret")

p1 = Profile.create!(name: 'Michelle', location: 'New York City', preferences: 'Enjoy outdoors and hiking', user_id: u1.id )

plan1 = Plan.create!(date: 20211103, start_time: 800, end_time: 1000, location: 'New York City', user_id: p1.id)

a1 = Activity.create!(name: 'Met Museum', address: "800 Central Park East Ny, Ny 10022", start_time: 800, end_time: 1000, description: "Now Showing: Andy Warhol", plan_id: plan1.id, user_id: u1.id)


"done seeding"
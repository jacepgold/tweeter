@user_id = 0

5.times do 
  User.create(
    email: "fake#{@user_id}@fake.com",
    password: 'password'
  )
  1.times do
    @user_id += 1
    Bio.create(
      image: 'img1',
      description: Faker::Lorem.paragraph(2),
      user_id: @user_id
      )
  end
  5.times do
    Post.create(
      content: Faker::Lorem.paragraph(4),
      user_id: @user_id
    )
  end 
end 


puts 'users created'

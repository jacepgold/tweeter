50.times def 
  User.create(
    name: Faker::Twitter.user,
    nickname: Faker::Twitter.screen_name,
    image: Faker::Twitter.status(include_photo: true)
  )
end
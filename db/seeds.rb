50.times def
  User.create(
    usr_name
    name: Faker::Twitter.user,
    nickname: Faker::Twitter.screen_name,
    image: Faker::Twitter.status(include_photo: true)
    email: Faker::Twitter.screen_name + '@test.com'
  )
end
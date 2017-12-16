class User < ActiveRecord::Base
<<<<<<< HEAD
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User
=======
  has_many :posts 
  has_many :comments
  has_one :bio
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

>>>>>>> Add models and controllers
end

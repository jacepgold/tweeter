class User < ActiveRecord::Base
  has_many :posts 
  has_many :comments
  has_one :bio
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

end

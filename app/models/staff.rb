class Staff < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def generate_token
    token = nil
    loop do
      token = Devise.friendly_token
      break token unless Staff.where(authentication_token: token).first
    end
    self.update_attributes authentication_token: token
  end
end

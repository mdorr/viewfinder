class User < ActiveRecord::Base
  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true

  has_attached_file :profile_picture,
    default_url: ->(attachment) {
      ActionController::Base.helpers.asset_path('default-profile-picture.jpg')
    }

  validates_attachment_content_type :profile_picture, content_type: /\Aimage\/.*\z/

  has_attached_file :cover_image,
    default_url: ->(attachment) {
      ActionController::Base.helpers.asset_path('missing.jpg')
    }

  validates_attachment_content_type :cover_image, content_type: /\Aimage\/.*\z/

  attr_reader :password
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many(
    :following_users,
    :class_name => "Follows",
    :foreign_key => :following_id,
    :primary_key => :id
  )

  has_many :followers, :through => :following_users, :source => :followers

  has_many(
    :followed_users,
    :class_name => "Follows",
    :foreign_key => :following_id,
    :primary_key => :id
  )

  has_many :followed, :through => :followed_users, :source => :followed

  after_initialize :ensure_session_token

  def self.find_with_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(new_password)
    @password = new_password
    self.password_digest = BCrypt::Password.create(new_password)
  end

  def is_password?(guess)
    BCrypt::Password.new(self.password_digest).is_password?(guess)
  end

  def reset_session_token
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end
end

class User < ActiveRecord::Base
  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true

  attr_reader :password
  validates :password, length: { minimum: 6, allow_nil: true }


  has_attached_file :profile_picture, default_url: "default-profile-picture.jpg"
  validates_attachment_content_type :profile_picture, content_type: /\Aimage\/.*\z/

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

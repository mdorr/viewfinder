class Photo < ActiveRecord::Base
  has_attached_file :picture,
    default_url: ->(attachment) {
      ActionController::Base.helpers.asset_path('missing.jpg')
    }

  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\z/

  belongs_to :user
  has_many :likes
  has_many :keywordings

  has_many :keywords, through: :keywordings
end

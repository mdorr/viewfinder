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

  def keyword_names=(keyword_names)
    self.keywordings = keyword_names.map do |keyword_name|
      Keywording.new(
        keyword: Keyword.find_or_create_by(name: keyword_name),
        photo: self
      )
    end
  end

end

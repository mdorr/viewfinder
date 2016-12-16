class Keyword < ActiveRecord::Base
  validates :name, uniqueness: true

  has_many :keywordings

end

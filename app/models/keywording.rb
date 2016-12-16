class Keywording < ActiveRecord::Base
  validates :keyword, :photo, presence: true
  validates :keyword, uniqueness: { scope: :photo }

  belongs_to :keyword
  belongs_to :photo
end

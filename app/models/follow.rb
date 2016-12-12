class Follow < ActiveRecord::Base
  validates :following_id, uniqueness: { scope: :followed_id }
  validates :followed_id, uniqueness: { scope: :following_id }

  belongs_to(
    :follower,
    :class_name => "User",
    :foreign_key => :following_id,
    :primary_key => :id
  )

  belongs_to(
    :followed_user,
    :class_name => "User",
    :foreign_key => :followed_id,
    :primary_key => :id
  )  
end

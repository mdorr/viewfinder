class Follow < ActiveRecord::Base
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

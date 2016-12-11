class Follows < ActiveRecord::Base
  belongs_to(
    :followers,
    :class_name => "User",
    :foreign_key => :following_id,
    :primary_key => :id
  )

  belongs_to(
    :followed,
    :class_name => "User",
    :foreign_key => :followed_id,
    :primary_key => :id
  )

end

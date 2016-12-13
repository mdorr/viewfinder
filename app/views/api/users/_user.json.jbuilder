json.extract! user, :id, :username, :profile_picture, :cover_image, :firstname, :lastname, :city, :country, :description, :readableUserName

json.followers user.followers do |follower|
  json.id follower.id
  json.readableUserName follower.readableUserName
end

json.followed user.followed do |following|
  json.id following.id
  json.readableUserName following.readableUserName
end

json.photo_count user.photos.count

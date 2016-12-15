json.extract! user, :id, :username, :firstname, :lastname, :city, :country, :description, :readableUserName

json.cover_image_url asset_path(user.cover_image.url)
json.profile_picture_url asset_path(user.profile_picture.url)

json.followers user.followers do |follower|
  json.id follower.id
  json.readableUserName follower.readableUserName
end

json.followed user.followed do |following|
  json.id following.id
  json.readableUserName following.readableUserName
end

json.photo_count user.photos.count
json.affection user.affection.count

json.photos user.photos do |photo|
  json.id photo.id
end

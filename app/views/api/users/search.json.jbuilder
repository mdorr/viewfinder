json.array! @users do |user|
  json.id user.id
  json.name user.readableUserName
  json.cover_image_url asset_path(user.cover_image.url)
  json.profile_picture_url asset_path(user.profile_picture.url)
  json.followers user.followers.count
end

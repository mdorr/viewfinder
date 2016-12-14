json.id photo.id
json.description photo.description
json.image_url asset_path(photo.picture.url)
json.likes photo.likes.count

json.user do
  json.readableUserName photo.user.readableUserName
  json.profile_picture_url photo.user.profile_picture.url
end

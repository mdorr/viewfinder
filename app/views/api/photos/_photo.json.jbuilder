json.id photo.id
json.description photo.description
json.image_url asset_path(photo.picture.url)
json.user_id photo.user.id

json.keywords do |keyword|
  json.keyword keyword.name
end

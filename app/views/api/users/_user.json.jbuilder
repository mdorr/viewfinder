json.extract! user, :id, :username
json.profile_picture  asset_path(user.profile_picture.url)

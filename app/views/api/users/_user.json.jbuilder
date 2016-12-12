json.extract! user, :id, :username, :profile_picture, :cover_image, :firstname, :lastname, :city, :country, :description, :followed, :followers, :readableUserName

json.photos user.photos do |photo|
  json.id photo.id
  json.url photo.picture.url
  json.description photo.description
  json.username photo.user.readableUserName
end

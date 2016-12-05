# API Endpoints
## HTML API
### Root

* GET / - Loads react web App

## JSON API
### Users
* POST /api/users
* PATCH /api/users
* UPDATE /api/users

### Session
* POST /api/session
* DELETE /api/session

### Photo
* GET /api/photos -- get all photos, for home page and discovery features
* POST /api/photos
* GET /api/photos/:photo_id
* PATCH /api/photos/:photo_id
* DELETE /api/photos/:photo_id
* GET /api/users/:user_id/photos -- get photos by a specific user

### Follows
* GET /api/users/:user_id/follows
* POST /api/users/:user_id/follows
* DELETE /api/users/:user_id/follows
* GET /api/users/:user_id/following -- get people following this user

### Likes
* GET /api/photos/:photo_id/likes
* POST /api/photos/:photo_id/likes
* DELETE /api/photos/:photo_id/likes
* GET /api/users/:user_id/likes -- get likes by this user, for discovery features ("X liked 6 photos")

### Keywords
* GET /api/keywords -- get all keywords, for suggestions
* GET /api/photos/:photo_id/keywords
* POST /api/photos/:photo_id/keywords
* DELETE /api/photos/:photo_id/keywords

### Comments
* GET /api/photos/:photo_id/comments
* POST /api/photos/:photo_id/comments
* DELETE /api/photos/:photo_id/comments
* GET /api/users/:user_id/comments -- get comments by a user

### Notifications
* GET /users/:user_id/notifications
* POST /users/:user_id/notifications
* PATCH /users/notifications/:notification_id -- mark notification as read

### Galleries

* GET /galleries/:gallery_id
* POST /galleries/:gallery_id
* PATCH /galleries/:gallery_id
* DELETE /galleries/:gallery_id

* GET /galleries -- get all galleries, for home page and discover features
* GET /users/:user_id/galleries -- get all galleries created by a specific user

* GET /api/galleries/:gallery_id/photos -- photos in specific gallery
* POST /api/galleries/:gallery_id/photos
* DELETE /api/galleries/:gallery_id/photos

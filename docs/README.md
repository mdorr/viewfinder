# Viewfinder

* [Heroku Link][heroku]
* [Trello Link][trello]

[heroku]: http://www.viewfinder.tech
[trello]: https://trello.com/b/f8Ti26Pu/viewfinder

## Minimum Viable Product

Viewfinder is a photography discovery and sharing network inspired by [500px](www.500px.com), built on Ruby on Rails and React-Redux.

This App will include the following features, fully functional, styled and seeded:

### Hosting and production
* Heroku hosting
* 24/7 availability
* Custom domain
* Production README

### User accounts
* User creation/signup
* User login
* Guest/Demo login

### Basic features
* Post pictures
* Home feed
* Profile page (own profile, other user's profile)
* Follow other users

### Social (Bonus)
* Likes
* Keywords (Tags)
* Comments
* Notifications

### Organizing photos (Bonus)
* Galleries
* Activity (by other users)
* Discover

### Guided user creation (Bonus)
* Guided user creation with initial follows

## Wireframes

[Wireframe folder][wireframes]

* [Home page (not logged in)][home-not-logged-in]
* [Sign up][sign-up]
* [Log in][log-in]
* [Error display on sign up/log in pages][errors-sign-up-log-in]
* [User profile page][user-profile]
* [Home feed, Mode: Following][home-feed-following]
* [Home feed, Mode: Activity][home-feed-activity]
* [Home feed, Mode: Notifications][home-feed-notifications]
* [Home feed, Notifications overlay][home-feed-notifications-overlay]
* [Upload photo (modal)][upload-photo]
* [Photo details (overlay)][photo-details]

[wireframes]: ./wireframes
[home-not-logged-in]: ./wireframes/home_page_not_signed_in.png
[sign-up]: ./wireframes/sign-up.png
[log-in]: ./wireframes/log-in.png
[errors-sign-up-log-in]: ./wireframes/errors-log-in-and-sign-up.png
[user-profile]: ./wireframe/user_profile.png
[home-feed-following]: ./wireframes/home_feed_following.png
[home-feed-activity]: ./wireframes/home_feed_activity.png
[home-feed-notifications]: ./wireframes/home_feed_notifications.png
[home-feed-notifications-overlay]: ./wireframes/home_feed_notifications_overlay.png
[upload-photo]: ./wireframes/upload_photo_modal.png
[photo-details]: ./wireframes/photo_details_overlay.png
## React Components

[Component hierarchy][comp-hierarchy]

[comp-hierarchy]: component-hierarchy.md

## Sample State

[Sample State][sample-state]

[sample-state]: sample-state.md

## DB Schema

[Database Schema][db-schema]

[db-schema]: schema.md

## API Endpoints

[API Endpoints][api-endpoints]

[api-endpoints]: api-endpoints.md

## Implementation Timeline

### Phase 1: Backend setup, login
Objective: Functional rails project with user creation and front-end authentication.

### Phase 2: User profile pages
Objective: User profile pages can be updated by owner and viewed by other users.

### Phase 3: Photos
Objective: Photos can be uploaded, edited, and removed through API

### Phase 4: Photo feed
Objective: Users can see a photo feed based on their follows

### Phase 5: Likes and comments
Objective: Users can like photos, and post comments on photos.

### Phase 6: Keywords (Tags)
Objective: Users can create keywords for photos.

### Phase 7: Search
Objective: Users can search for other users, photo descriptions, and keywords

### Phase 8: Notifications
Objective: Users are notified about actions related to their account (Other user has liked a picture, other user has commented on a picture)

### Phase 9: Galleries
Objective: Users can create galleries, and add photos (from any user) to galleries. Users can browse other user's galleries.

### Phase 10: Activity
Objective: Users can browse other users's activities (what they liked, pictures they posted, galleries they created)

### Phase 11: Discovery
Objective: Users are presented with photos, other users, and galleries to browse. These can be curated lists, or based on popularity.

### Phase 12: Guided user creation
Objective: When signing up as a new user, initial categories can be chosen, which will then set up an initial set of followed users based on those categories.

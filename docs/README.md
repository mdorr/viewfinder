# Viewfinder

* [Heroku Link][heroku]
* [Trello Link][trello]

[heroku]: http://www.viewfinder.tech
[trello]: https://trello.com/b/f8Ti26Pu/viewfinder

## Minimum Viable Product

Viewfinder is a photography discovery and sharing network inspired by [500px](www.500px.com), built on Ruby on Rails and React-Redux.

This App will include the following features, fully functional, styled and seeded:

### Hosting and production
* ~~Heroku hosting~~ *([vfinder.herokuapp.com](http://vfinder.herokuapp.com))*
* ~~24/7 availability~~ *(Heroku account upgraded to run 24/7)*
* ~~Custom domain~~ *([www.viewfinder.tech](http://www.viewfinder.tech))*
* Production README

### User accounts
* ~~User creation/signup~~ *(Done and live)*
* ~~User login~~ *(Done and live)*
* ~~Guest/Demo login~~ *(Done and live)*

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

#### Home page, sign up, log in
* [Home page (not logged in)][home-not-logged-in]
* [Sign up][sign-up]
* [Log in][log-in]
* [Error display on sign up/log in pages][errors-sign-up-log-in]

#### User profile
* [User profile page][user-profile]

#### Photo upload, details
* [Upload photo (modal)][upload-photo]
* [Photo details (overlay)][photo-details]

#### Home feed
* [Home feed, Mode: Following][home-feed-following]
* [Home feed, Mode: Activity][home-feed-activity]
* [Home feed, Mode: Notifications][home-feed-notifications]
* [Home feed, Notifications overlay][home-feed-notifications-overlay]

[wireframes]: ./wireframes
[home-not-logged-in]: ./wireframes/home_page_not_signed_in.png
[sign-up]: ./wireframes/sign-up.png
[log-in]: ./wireframes/log-in.png
[errors-sign-up-log-in]: ./wireframes/errors-log-in-and-sign-up.png
[user-profile]: ./wireframes/user_profile.png
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

### MVP features

#### Phase 1: Backend setup, login
Objectives:
* Functional rails project with user creation and front-end authentication
* Front-end sign up and log in page, with error handling and notifications
* Initial home page with static example picture in background

** Est. date of completion: Dec 6th **

#### Phase 2: User profile pages
Objectives:
* User profile page can be viewed by any user
* User profile page can be updated by owner
* User profile page shows description
* Users can follow other users

** Est. date of completion: Dec 7th **

#### Phase 3: Photos
Objectives:
* Rails backend handles image upload, storage, retrieval, and some modification (resizing), implemented through suitable Gem/Library.
* Photo upload page available on home feed. Multiple pictures can be uploaded at once
* User profile page is updated and shows all pictures uploaded by this user
* User profile page is updated to show profile and cover picture selected by owner

** Est. date of completion: Dec 9th **

#### Phase 4: Photo feed
Objectives:
* Users can see a photo feed based on their follows
* Photos can be opened in a detail view

** Est. date of completion: Dec 10th **

### Bonus features

#### Phase 5: Likes and comments
Objectives:
* Users can like photos
* Users can post comments on photos
* Update home page (when not signed in), show slideshow of popular pictures

#### Phase 6: Keywords (Tags)
Objective:
* Users can create keywords for photos

#### Phase 7: Search
Objectives:
* Users can search for other users, photo descriptions, and keywords
* Add search to home page (when not signed in), show sample results and ask user to sign up

#### Phase 8: Notifications
Objectives:
* Users are notified about actions related to their account (Other user has liked a picture, other user has commented on a picture)
* Home feed page shows 'Activity' sub-navigation
* Home feed page shows 'Notifications' overlay
* Notifications are marked as read once acknowledged by the user (i.e. once the overlay or sub-navigation has been opened)

#### Phase 9: Galleries
Objectives:
* Users can create galleries
* Users can add photos (owned by any user) to own galleries
* Update user profile page: Show 'Galleries' sub-navigation
* Users can browse other galleries on other user's profile pages
* Update home page (when not signed in), show curated selection of galleries that provide preview when clicked, with sign up link

#### Phase 10: Activity
Objectives:
* Users can browse other users's activities (what they liked, pictures they posted, galleries they created)
* Update home feed page: Add 'Activities' sub-navigation

#### Phase 11: Discovery
Objectives:
* Users are presented with photos, other users, and galleries to browse. These can be curated lists, or based on popularity.
* Update main navigation, add 'Discovery' tab

#### Phase 12: Guided user creation
Objectives:
* When signing up as a new user, display initial categories based on keywords; ask new user to mark preferences (p.e. 'Architecture', 'Nature' and so forth)
* Select users who post pictures in these categories
* Create new user with these users as an initial set of followed users

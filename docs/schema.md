# Schema

## users

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
description     | text      |
user_picture    | integer   | indexed
cover_photo     | integer   | indexed
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## photos

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
url             | string    | not null
user_id         | integer   | not null, indexed
description     | text      |

## follows

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed
following_id    | integer   | not null, indexed


## likes

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed
photo_id        | integer   | not null, indexed


## keywords

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
keyword         | string    | not null
photo_id        | integer   | not null, indexed


## comments

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | string    | not null
user_id         | integer   | not null, indexed
photo_id        | integer   | not null, indexed


## notifications

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed
body            | text      |


## galleries

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
description     | text      |
user_id         | integer   | not null, indexed

## gallery-photos

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
gallery_id      | integer   | not null, indexed
user_id         | integer   | not null, indexed

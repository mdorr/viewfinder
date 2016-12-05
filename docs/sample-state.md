# Sample State

```js
{
  currentUser: {
    id: 1,
    username: "viewinder-user"
  },
  forms: {
    signup: { errors: [] },
    login: { errors: [] },
    photoUpload: { errors: [] },
    galleryCreation: { errors: [] },
    search: { errors: [] },
    addComment: { errors: [] }
    addKeyword: { errors: [] }
    editUserProfile: { errors: [] }
  }
  galleries: {
    4: {
      title: "Italian classical architecture",
      owner_id: 6
    }
  }
  photos: {
    54: {
      photo: (URL),
      description: "Milan cathedral",
      keywords: [2]
    }
  }
  searchQuery: {
    query: "Milan", // To search by photo/user description
    keywords: [2, 5] // to filter by keyword id
  }
}
```

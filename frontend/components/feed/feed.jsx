import React from 'react';
import { Link } from 'react-router';


class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="feedPage">
        <div className="feedContainer">
          <div className="feedElement">
            <div className="photo">
              <img src="https://s-media-cache-ak0.pinimg.com/originals/c2/48/36/c24836d55ec95a86f1bda1b42b2297c0.jpg"></img>
            </div>
            <div className="photoInfo">
              User
            </div>
            <div className="photoDescription">
              Purrrrrfect kitty!
            </div>
          </div>
          <div className="feedElement">
            <div className="photo">
              <img src="https://i.ytimg.com/vi/mjeUlajn82Y/maxresdefault.jpg"></img>
            </div>
            <div className="photoInfo">
              User
            </div>
            <div className="photoDescription">
              Woof!
            </div>
          </div>
        </div>
        <aside className="sideBar">
          <div className="userInfoBlock">
            User Info
          </div>
        </aside>
      </section>

    );
  }
}

export default Feed;

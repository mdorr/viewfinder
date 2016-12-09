import React from 'react';
import PageHeaderContainer from './page_header/page_header_container';
import { Link } from 'react-router';


class App extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {

    if (this.props.children) {
      return (
        <div>
          <header>
            <PageHeaderContainer />
          </header>
          { this.props.children }
        </div>
      );
    } else {
      let mainPhoto = {
        backgroundImage: `url('/assets/example-photos/mainPageCover.jpg')`
      };

      return (
        <div>
          <header>
            <PageHeaderContainer />
          </header>
          <section className="welcomePageMainPhoto" style={ mainPhoto }>
            <div className="welcomePageGreeting">
              <h2>Home to everyone's best photos</h2>
              <h3>Showcase your work, discover amazing photos, and stay inspired.</h3>
            </div>
            <div className="welcomePageButtons">
              <button><Link to="/signup"  className="home-header-links" activeClassName="current">Sign up today</Link></button>

              <button><Link to="/signup"  className="home-header-links" activeClassName="current">Explore as Guest</Link></button>
            </div>
          </section>
          <footer className="welcomePageFooter">

          </footer>
        </div>
      );
    }
  }
}

export default App;

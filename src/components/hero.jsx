import React, { Component } from 'react';
import Styled from 'styled-components';
import Img from 'gatsby-image';
import { object } from 'prop-types';
import NavBar from './navbar';
import AboutMe from './aboutme';
import Shapes from './shapes';
import Profile from './profile';


const Hero = Styled.section`
  position: relative;
`;

const HeroBackdrop = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

class hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = {
      // background: 'linear-gradient(45deg, rgba(232,241,242,1) 0%, rgba(36,123,160,1) 100%)',
      position: 'relative',
    };
  }

  render() {
    const { heroImage, profileImage } = this.props;
    return (
      <Hero className="hero is-fullheight" style={this.style}>
        <HeroBackdrop>
          <Img sizes={heroImage.sizes} className="hero-image-wrapper" outerWrapperClassName="hero-image-outer-wrapper" />
        </HeroBackdrop>
        <div className="hero-head">
          <NavBar />
        </div>
        <div className="hero-body">
          <Shapes heroImage={heroImage} />
          <div className="container" style={{ zIndex: '300' }}>
            <div className="columns is-centered is-multiline">
              <div className="column is-12">
                <Profile profileImage={profileImage} />
              </div>
              <div className="column is-2" />
              <div className="column is-8">
                <AboutMe />
              </div>
              <div className="column is-2" />
              {/* <div className="column is-3" /> */}
              <div className="column is-4">
                {/* <Social /> */}
              </div>
              <div className="column is-3" />
            </div>
          </div>
        </div>
        <div className="hero-foot">
          {'placeholder'}
        </div>
      </Hero>
    );
  }
}

hero.propTypes = {
  heroImage: object.isRequired,
  profileImage: object.isRequired,
};

export default hero;

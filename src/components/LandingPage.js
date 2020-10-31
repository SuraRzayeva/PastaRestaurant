import React from 'react'
import { StyledLandingPage } from '../styledComponents/StyledLandingPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { brown } from '../styledComponents/GlobalStyle'

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <div className="hero">
        <div className="blocks">
          <div className="column column1">
            <div className="box box1"></div>
            <div className="box box2">
              <h4 className="white">
                CHEESY <br /> WINE TESTING <br />
                FRIDAYS
              </h4>
            </div>
            <div className="box box3">
              <h4 className="yellow">
                HOMEMADE <br /> PASTA
                <br />
                RECIPES
              </h4>
            </div>
            <div className="box box4">
              <h4 className="yellow">
                ORGANIC <br /> ITALIAN <br />
                WINE
              </h4>
            </div>
          </div>
          <div className="column column2">
            <div className="box box1">
              <div className="halfBox">
                <h4>BOOK A TABLE</h4>
              </div>
            </div>
            <div className="box box2"></div>
            <div className="box box3">
              <h4 className="brown">
                ACTUAL <br /> MENU BY <br />
                OUR CHEFS
              </h4>
            </div>
            <div className="box box4">
              <h4 className="brown">
                PIZZA <br /> WORKSHOPS
                <br />
                FOR KIDS
              </h4>
            </div>
          </div>
          <div className="column column3">
            <div className="box box1"></div>
            <div className="box box2"></div>
            <div className="box box3">
              <h4 className="yellow">
                FRESHLY <br /> PREPARED
                <br />
                PASTA
              </h4>
            </div>
            <div className="box box4">
              <div className="halfBox"></div>
            </div>
          </div>
          <div className="column column4">
            <div className="box box1"></div>
            <div className="box box2"></div>
            <div className="box box3">
              <h4 className="brown">
                WEEKEND <br /> OPEN BUFFET <br />
                BRUNCH
              </h4>
            </div>
            <div className="box box4"></div>
          </div>
        </div>
      </div>
      <div className="preFooter"></div>
      <div className="footer">
        <div className="content-box">
          <div className="hours-block block">
            <h4>HOURS</h4>
            <div className="content">
              <p>
                <span>Monday: </span>11:00 - 20:00
              </p>
              <p>
                <span>Tuesday: </span>11:00 - 20:00
              </p>
              <p>
                <span>Wednesday: </span>11:00 - 20:00
              </p>
              <p>
                <span>Thursday: </span>11:00 - 20:00
              </p>
              <p>
                <span>Friday: </span>11:00 - 20:00
              </p>
              <p>
                <span>Sat &amp; Sun: </span>11:00 - 20:00
              </p>
            </div>
          </div>
          <div className="contact-block block">
            <h4>CONTACT</h4>
            <p>(0178) 345 32 12</p>
          </div>
          <div className="address-block">
            <div className="top-blocks">
              <div className="address block">
                <h4>ADDRESS:</h4>
                <p>Oberfeldstr. 111, </p>
                <p>Berlin, 23453</p>
              </div>
              <div className="follow block">
                <h4>FOLLOW US:</h4>
                <div className="icons">
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookF} color={brown} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitter} color={brown} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} color={brown} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagram} color={brown} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-block block">
              <input type="text" placeholder="Email" />
              <button>SUBSCRIBE</button>

              <p>Designed and built by Sura Rzayeva</p>
            </div>
          </div>
        </div>
      </div>
    </StyledLandingPage>
  )
}

export default LandingPage

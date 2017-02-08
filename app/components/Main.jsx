var React = require('react');
var Nav = require('Nav');
var Hero = require('Hero');
var Card = require('Card');


var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        <div>
            <Hero/>
            <div className="row small-up-1 medium-up-2 large-up-3">
              <div className="column"><Card/></div>
              <div className="column"><Card/></div>
              <div className="column"><Card/></div>
              <div className="column"><Card/></div>
              <div className="column"><Card/></div>
              <div className="column"><Card/></div>
            </div>
            {props.children}

        </div>
      </div>

    </div>
  );
};

module.exports = Main;

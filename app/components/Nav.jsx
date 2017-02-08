var React = require('react');

var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Lowes App Demo</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul clasName="menu">
            <li className="menu-text">Created by
              <a href="http://www.github.com/dwmorrisdev" target="_blank"> Dustin Morris</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Nav;

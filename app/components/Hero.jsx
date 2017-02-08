var React = require('react');

var Hero = () => {
    return (
      <div className="Hero row" >
        <div className="columns large-3">
          <img src="../assets/lowes.jpg" alt="Lowes product image" />
        </div>
        <div className="columns small-4 large-3">
          <h4>some text about the product</h4>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </div>
        <div className="checkout medium-5 large-3 columns text-align">
          <button className="radius button secondary expanded">Add to Cart</button>
          <h2 className="text-align">PRICETAG</h2>
        </div>
      </div>
    );
};

module.exports = Hero;

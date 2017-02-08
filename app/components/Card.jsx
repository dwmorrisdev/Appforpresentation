var React = require('react');

var Card = () => {
    return (
      <div className="card column text-align">
        <div className="">
          <img src="../assets/lowes.jpg" alt="Lowes product image" />
          <h4>Some Product Name and Text</h4>
          <h3>PRICETAG</h3>
          <button className="expanded radius button secondary">View More</button>
        </div>
      </div>
    );
};

module.exports = Card;

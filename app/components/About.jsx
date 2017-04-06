const React = require('react');

// ==> Original way
// var About = React.createClass({
//     render: function() {
//         return (
//             <h3>About Component</h3>
//         )
//     }
// });


// if the component only has a render method we can use
// the "stateless" way of doing things

// ==> Stateless way
// var About = function(props) {
//     return (
//         <h3>About Component</h3>
//     )
// }

// ==> Stateless way w/ arrow function
var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application built on React.</p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <a target="_blank" href="https://facebook.github.io/react">React</a> - this is the JavaScript framework used.
            </ul>
            <ul>
                <a target="_blank" href="http://openweathermap.org">Open Weather Map</a> - free api to search for weather data by city name
            </ul>
        </div>
    )
}

module.exports = About;
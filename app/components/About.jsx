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
        <h3>About Component</h3>
    )
}

module.exports = About;
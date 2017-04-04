const React = require('react');
const {Link} = require('react-router');

// var Examples = React.createClass({
//     render: function() {
//         return (
//             <h3>Examples Component</h3>
//         )
//     }
// });

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples Component</h1>
            <p>Here are a few example locations to try out</p>
            <ol>
                <li>
                    <Link to='/?location=Tokyo'>Tokyo</Link>
                </li>
                <li>
                    <Link to='/?location=Long Beach'>Long Beach, CA</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;
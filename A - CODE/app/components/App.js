var React = require('react');
var Header = require('./Header.js');


class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div id="wrapper">
				<Header />
			</div>
		)
	}
}

module.exports = App;
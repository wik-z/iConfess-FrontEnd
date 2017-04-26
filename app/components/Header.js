var React = require('react');
class Header extends React.Component {
	render() {
		return (
			<header>
				<div id="logo">

				</div>
				<Navigation />
				<UserPanel />
			</header>
		)
	}
}

module.exports = Header;
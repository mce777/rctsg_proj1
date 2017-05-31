import React from 'react';

// every class-based React Component must have a render()
// class-based so that it is aware of itself
class SearchBar extends React.Component {
	constructor(props){
		super(props); // 'super' calls parent class constructor method

		this.state = { term: ''}; //state exists on class-based components
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
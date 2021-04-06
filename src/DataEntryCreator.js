import React from 'react';

class DataEntryCreator extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleBlur(event) {
        this.props.updateEntry(this.state);
    }










    render() {
        return (
            <div>
            <button>Add Entry</button>
                <label>Name</label>
                <input name="name" value={""}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                />
                </div>
        );
    }
}

export default DataEntryCreator;
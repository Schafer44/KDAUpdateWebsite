import React from 'react';

class DataEntryEditor extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = props.item;
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const parent = target.parent;
        this.setState({
            [name]: value
        });
        this.setState({
            [parent]: value
        })
    }

    handleBlur(event) {
        this.props.updateEntry(this.state);
    }
    
    render() {

        const categories = this.props.categories.map(cat => (<option value={cat.key}>{cat.name}</option>));
        return (
            <div>

                <label>Name</label>
                <input name="name" value={this.state.name} 
                    onChange={this.handleChange} 
                    onBlur={this.handleBlur}
                    />
                <label>Parent</label>
                <select onChange={this.handleChange}
                    onBlur={this.handleBlur} parent="parent" value={this.state.parent}>
                    {categories}
                </select>

                <label>
                    <input type="checkbox" name="license" checked={this.state.license}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        />
                    Requires license control
                </label>

                <label>
                    <input type="checkbox" name="temperatureControl" checked={this.state.temperatureControl}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    Requires temperature control
                </label>
                <label>
                    <input type="checkbox" name="snapEligible" checked={this.state.snapEligible}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    Requires snap Eligible control
                </label>
                <label>
                    <input type="checkbox" name="testingRequired" checked={this.state.testingRequired}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    Requires testingRequired control
                </label>

                {
                // description 
                // examples 
                // license
                // temperatureControl
                // snapEligible 
                // testingRequired//
                // regulation
                }
                <button onClick={this.props.removeEntry}>Remove Entry</button>
            </div>

        );
    }
}

export default DataEntryEditor;
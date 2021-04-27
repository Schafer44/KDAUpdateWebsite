import React from 'react';

class DataEntryEditor extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = props.item;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
       
    }

    handleSubmit(event) {
        this.props.updateEntry( this.state);
    }
    
    render() {

        const categories = this.props.categories.map(cat => (<option value={cat.key}>{cat.name}</option>));
     
        return (
            <div>
              
                <label>Name</label>
                <input name="name" value={this.state.name} 
                    onChange={this.handleChange} 
               
                    />
                <label>Parent</label>
                <select onChange={this.handleChange}
                 name="parent" value={this.state.parent}>
                    {categories}
                </select>

                <label>
                    <input type="checkbox" name="license" checked={this.state.license}
                        onChange={this.handleChange}
                  
                        />
                    Requires license
                </label>
                <label>
                    <input type="checkbox" name="testingRequired" checked={this.state.testingRequired}
                        onChange={this.handleChange}
                       
                    />
                    Requires Testing
                </label>

                <label>Description</label>
                <input name="description" value={this.state.description} 
                    onChange={this.handleChange} 
                />
                <label>Examples</label>
                <input name="examples" value={this.state.examples} 
                    onChange={this.handleChange} 
                />    
                {
                // description 
                // examples 
                // license
                // temperatureControl
                // snapEligible 
                // testingRequired//
                // regulation
                }
                <button onClick={this.handleSubmit} >edit Entry</button>
                <br></br>

                <button onClick={this.props.removeEntry} > Remove Entry</button>
            </div>

        );
    }
}

export default DataEntryEditor;
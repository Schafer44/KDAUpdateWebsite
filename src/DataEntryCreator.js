import React from 'react';

class DataEntryCreator extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name: "name",
            type: "entry",
            parent:"Home"
        };


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
        const key = this.state.name.replace(/[^a-zA-Z]/g, "");
        const entry = this.state;
        console.log(key, entry);
        this.props.addEntry(key, entry);
        
        
    }




    render() {
        const categories = this.props.categories.map(cat => (<option value={cat.key}>{cat.name}</option>));
        return (
       // 
            <div>
                <button onClick={this.handleSubmit} >Add Entry</button>
                <label>Name</label>
                <input name="name" value={this.state.name}
                    onChange={this.handleChange}
                    
                />
                <label>type</label>
                <select name="type" value={this.state.type} onChange={this.handleChange}>
                    <option>category</option>
                    <option>entry</option>

                </select>
                <label>Parent</label>
                <select 
                    name="parent" value={this.state.parent} onChange={this.handleChange}>
                    {categories}
                </select>
                </div>
        );
    }
}

export default DataEntryCreator;
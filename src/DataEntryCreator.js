import React from 'react';

class DataEntryCreator extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name: "name",
            type: "entry",
            parent:"Home",
            children:{}
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
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
        this.state.type = "entry";
        this.props.addEntry(key, entry);
        
        
    }

    handleChange2(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
     
    }


    handleSubmit2(event) {
        const key = this.state.name.replace(/[^a-zA-Z0-9]/g, "");
        const entry = this.state;
        console.log(key, entry);
        this.state.type="category";
        this.props.addEntry(key, entry);
        
    }



    render() {
        const categories = this.props.categories.map(cat => (<option value={cat.key}>{cat.name}</option>));
        return (
       // 
       <>
            <div>
                <button onClick={this.handleSubmit} >Add Entry</button>
                <label>Name</label>
                <input name="name" value={this.state.name}
                    onChange={this.handleChange}
                    
                />
                <label>type</label>
                <select name="type" value={this.state.type} onChange={this.handleChange}>
                    <option>entry</option>

                </select>
                <label>Parent</label>
                <select 
                    name="parent" value={this.state.parent} onChange={this.handleChange}>
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

                </div>
                <div>
                <button onClick={this.handleSubmit2} >Add Category</button>
                <label>Name</label>
                <input name="name" value={this.state.name}
                    onChange={this.handleChange}
                    
                />
                <label>type</label>
                <select name="type" value={"category"} onChange={this.handleChange}>
                    <option>category</option>

                </select>
                <label>Parent</label>
                <select 
                    name="parent" value={this.state.parent} onChange={this.handleChange}>
                    {categories}
                </select>
                </div>
                </>

                

        );

        
    }
}

export default DataEntryCreator;
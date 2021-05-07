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
                <br></br>
                <label>Name</label>
                <input name="name" value={this.state.name}
                    onChange={this.handleChange}
                    
                />
                <br></br>
                <label>type</label>
                <select name="type" value={this.state.type} onChange={this.handleChange}>
                    <option>entry</option>

                </select>
                <br></br>
                <label>Parent</label>
                <select 
                    name="parent" value={this.state.parent} onChange={this.handleChange}>
                    {categories}
                </select>
                <br></br>
                <label>
                Requires license
                </label>
                <select onChange={this.handleChange}
                 name="license" value={this.state.license}>
                    <option>Is not required</option>
                    <option>Is required</option>
                </select>
                    
                <br></br>




                <label>
                Requires Testing
                </label>
                <select onChange={this.handleChange}
                 name="testingRequired" value={this.state.testingRequired}>
                    <option>Is not required</option>
                    <option>Is required</option>
                </select>
                <br></br>
                <label>Description</label>
                <input name="description" value={this.state.description} 
                    onChange={this.handleChange} 
                />
                <br></br>
                <label>Examples</label>
                <input name="examples" value={this.state.examples} 
                    onChange={this.handleChange} 
                />

                </div>
                <div>
                <button onClick={this.handleSubmit2} >Add Category</button>
                <br></br>
                <label>Name</label>
                <input name="name" value={this.state.name}
                    onChange={this.handleChange}
                    
                />
                <br></br>
                <label>type</label>
                <select name="type" value={"category"} onChange={this.handleChange}>
                    <option>category</option>

                </select>
                <br></br>
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
import React from 'react';

 


class CataegoryDisplay extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = props.item;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

 

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const parent = target.parent;
        this.setState({
            [name]: value
        });

 


    }

 

    handleSubmit(event) {
        this.props.updateEntry(this.state);
    }
    handleDelete(event) {
   
        this.props.removeEntry(this.state.key);
        
    }

 

    render() {
        
        const categories = this.props.categories.map(cat => (<option value={cat.key}>{cat.name}</option>));
        const childrens = Object.keys(this.state.children).map(keys => (<option value={keys.key}> {this.state.children[keys]}</option>));
        console.log("123456", childrens);
        const buttons = (this.state.name != "Home") ? ( 
                   <> <button onClick={this.handleSubmit}>Edit category</button>
                   <button onClick={this.props.removeEntry}>Remove category</button> </>
        ): "";
        return (
            <div>
                <p>{this.state.name}</p>
                <br></br>
                <label>Name</label>
                <input name="name" value={this.state.name}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                />
                <br></br>
                <label>Parent</label>
                <select onChange={this.handleChange}
                    onBlur={this.handleBlur} name="parent" value={this.state.parent}>
                    {categories}
                </select>
                <br></br>
                <label>children</label>
                <select name="children" onChange={this.handleChange}
                    onBlur={this.handleBlur} value={this.state.parent}>
                    {childrens}
                    
                </select>
                
                {buttons}
    
            </div>

 

        );
    }
}

 

export default CataegoryDisplay;
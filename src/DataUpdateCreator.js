import React from 'react';

class DataUpdateCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "title"
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
        const key = this.state.title.replace(/[^a-zA-Z]/g, "");
        const entry = this.state;
        this.props.addUpdate(key, entry);
        
        
    }


    render() {

        return (
       // 
       <>
            <div>
                <button onClick={this.handleSubmit} >Add Update</button>
                <br></br>
                <label>Title</label>
                <textarea className="inputBox" name="title" value={this.state.name}
                    onChange={this.handleChange}
                    
                />
                <br></br>
                <label>Description</label>
                <textarea className="inputBox" name="description" value={this.state.description} 
                    onChange={this.handleChange} 
                />
                <br></br>
                <label>Preview</label>
                <textarea className="inputBox" name="preview" value={this.state.preview} 
                    onChange={this.handleChange} 
                />
                <br></br>
                <label>Date example=("02-01-21")</label>
                <textarea className="inputBox" name="date" value={this.state.date} 
                    onChange={this.handleChange} 
                />

                </div>
                </>

                

        );

        
    }
}

export default DataUpdateCreator;
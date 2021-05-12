import React from 'react';

 


class UpdatesDisplay extends React.Component {
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
        const title = target.title;
        this.setState({
            [title]: value
        });

 


    }

 

    handleSubmit(event) {
        this.props.updateAlert(this.state);
    }
    handleDelete(event) {
   
        this.props.removeAlert(this.state.key);
        
    }

 

    render() {
        
        console.log("hello2",this.props.item);
        const buttons = (this.state.name != "Home") ? ( 
                   <> <button onClick={this.handleSubmit}>Edit Update</button>
                   <button onClick={this.props.removeAlert}>Remove Update</button> </>
        ): "";
        return (
            <div>
                <p>{this.state.title}</p>
                <br></br>
                <label>Title</label>
                <input title="title" value={this.state.title}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                />
                <br></br>
                <label>Description</label>
                <input title="description" value={this.state.description} 
                    onChange={this.handleChange} 
                />
                <br></br>
                <label>Preview</label>
                <input title="preview" value={this.state.preview} 
                    onChange={this.handleChange} 
                />
                <br></br>
                <label>Date example=("02-01-21")</label>
                <input title="date" value={this.state.date} 
                    onChange={this.handleChange} 
                />
                {buttons}
    
            </div>

 

        );
    }
}


export default UpdatesDisplay;
import React from 'react';

class DataUpdateCreator extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            title: "title",
            type: "entry"
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const key = this.state.title.replace(/[^a-zA-Z]/g, "");
        const entry = this.state;
        console.log(key, entry);
        this.state.type = "entry";
        this.props.addUpdate(key, entry);
        
        
    }

    handleSubmit2(event) {
        const key = this.state.title.replace(/[^a-zA-Z0-9]/g, "");
        const entry = this.state;
        console.log(key, entry);
        this.props.addAlert(key, entry);
        
    }



    render() {

        return (
       // 
       <>
            <div>
                <button onClick={this.handleSubmit} >Add Update</button>
                <br></br>
                <label>Title</label>
                <input name="title" value={this.state.name}
                    onChange={this.handleChange}
                    
                />
                <br></br>
                <label>Description</label>
                <input name="description" value={this.state.description} 
                    onChange={this.handleChange} 
                />
                <br></br>
                <label>Preview</label>
                <input name="preview" value={this.state.description} 
                    onChange={this.handleChange} 
                />
                <br></br>
                <label>Date</label>
                <input name="date" value={this.state.description} 
                    onChange={this.handleChange} 
                />

                </div>
                <div>
                <button onClick={this.handleSubmit2} >Add Alert</button>
                <br></br>
                <label>Title</label>
                <input name="title" value={this.state.name}
                    onChange={this.handleChange}
                    
                />
                <br></br>
                <label>Description</label>
                <input name="description" value={this.state.description} 
                    onChange={this.handleChange} 
                />
                <br></br>
                <label>Preview</label>
                <input name="preview" value={this.state.description} 
                    onChange={this.handleChange} 
                />
                <br></br>
                <label>Date</label>
                <input name="date" value={this.state.description} 
                    onChange={this.handleChange} 
                />

                </div>
                </>

                

        );

        
    }
}

export default DataUpdateCreator;
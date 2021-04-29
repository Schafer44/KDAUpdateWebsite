import logo from './logo.svg';
import './App.css';
import React from 'react';
import DataListEditor from './DataListEditor';

class App extends React.Component {

  constructor(props) 
  {
    super(props);
    this.state = {
      loading: true,
      showJson: false,
      data: {},
      updates: {},
      alerts: {},
      parent: {}
    }
    this.updateEntry = this.updateEntry.bind(this);
    this.addEntry = this.addEntry.bind(this);
      this.removeEntry = this.removeEntry.bind(this);
      this.disChildren = this.disChildren.bind(this);
  }

  componentDidMount() {
    fetch("data.json")
    .then(response => response.json())
    .then(response => {
      this.setState({
        data: response.data,
        updates: response.updates,
        alerts: response.alerts,
        loading: false
      });
    });
  }

  updateEntry(key, entry) {
      var data = this.state.data;
      var parentId = data[key].parent;
      var parents = data[parentId];
      delete parents.children[key];
      data[key] = entry;
      console.log("namas",data[key]);
      //this.setState({ data: data });
      var newparentid = data[key].parent;
      var newParent = data[newparentid]
      newParent.children[key] = entry.name; 
      this.setState({ data: data });
     
  }

  removeEntry(key) {
    var data = this.state.data;
      
      var parentId = data[key].parent;
      var parent = data[parentId];
      delete parent.children[key];
      delete data[key];
    this.setState({data: data});
  }

  addEntry(key, entry) {
    var data = this.state.data;
      data[key] = entry;
      var parent = data[entry.parent];
      parent.children[key] = entry.name; 
   
      console.log( entry);
    this.setState({data: data});
  }

    disChildren(key) {
        var data = this.state.data;
        var parent = data[key];
        return parent.children;
    }



  render() { 
    var obj = {
      data: this.state.data, 
      updates: this.state.updates, 
      alerts: this.state.alerts
    }
    var json = JSON.stringify(obj);
    if(this.state.loading) return (
      <div>Loading...</div>
    );
    return (
      
      <div className="editor">
          <br></br>
            <a href={`data:application/json,${json}`} download="data.json" target="_blank">Download current data file</a>
            <DataListEditor data={this.state.data} updateEntry={this.updateEntry} addEntry={this.addEntry} removeEntry={this.removeEntry} />
      </div>
    );
  }
}

export default App;

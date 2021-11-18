import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.state ={ linkName: '', URL: ''}
       this.handleChange = this.handleChange.bind(this);
       this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange = (event) => {
        /*
            TODO - Logic for changing state based on form changes
        */
       
       const target = event.target;
       const value = target.value;
       const linkName = target.linkName;

       this.setState({ [linkName]: value });

    }

    onFormSubmit(props) {
        // to prevent page reload on form submit
        //alert('A name was submitted: ' + this.state.value);
        props.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
            this.setState({ linkName: '', URL: ''});
    
            this.props.handleSubmit(this.state);
    }

    render() {

        return(
            /*
            <form>
            <div>
            <input type="text" name="linkName" value={this.state.linkName} onChange={this.handleChange} />
                <label>Link Name:</label>
                
                </div>
                <div>
                <input type="text" value={this.state.URL} onChange={this.handleChange}/>
                <label>URL:</label>
                <input type="submit" value="Submit"/>
                <button onclick="favLink()">Submit</button>
                </div>
            </form>
            */
            /*
            <form>
               
                <label for="linkName">Link Name </label>
                <input type="text" id="linkName" LinkName="linkName" value={this.state.linkName} onChange={this.handleChange}/>
                <label> URL </label>
                <input type="text" name="URL" />
                <input type="text" id="url" value={this.state.URL} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
    
            */
            <form onSubmit="onFormSubmit()">
            <label for="linkName">Link Name:</label><br/>
            <input type="text" id="linkName" name="name"/>
  
            <label for="URL">URL:</label><br/> 
            <input type="text" id="URL" name="name"/> 
            <input type="submit" value="Submit"/> 
          </form>
        )
    
    }
}

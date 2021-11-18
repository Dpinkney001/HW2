import React from 'react';
import Table from './Table';
import Form from './Form';


class LinkContainer extends React.Component {
  constructor(props) {
    super(props);
    /* TODO - Create state object for storing favLinks */
    this.state = { favLink:[] };
    
  }


  handleRemove = index => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
            let theArray = this.state.favLink;
            theArray.splice(index,1);
            this.setState({favLink: theArray});
            

  }

  handleSubmit = favLink => {
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
            this.setState(prevState  => ({favLink: [this.state.favLink, favLink]}));

          
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
        <table linkData = {this.state.favLink} removeLink = {this.handleRemove}>
        <thead>
        <tr key={index}>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            
                <td>{row.Name}</td>
                <td><a href={row.URL}>{row.URL}</a></td>
                <td><button onClick={(favLink) => props.removeLink(index)}>Delete</button></td>
            </tr>
        <tbody>{row}</tbody>;
        </thead>
        </table>
           
        

        <br/>
        <h3>Add New</h3>
            {/*TODO - Add Form Component */}
        <form onSubmit="onFormSubmit()">
          <label for="linkName">Link Name:</label><br/>
          <input type="text" id="linkName" name="name"/>

          <label for="URL">URL:</label><br/> 
          <input type="text" id="URL" name="name"/> 
          <input type="submit" value="Submit"/> 
        </form>
      </div>
    );
  }
}

export default LinkContainer;

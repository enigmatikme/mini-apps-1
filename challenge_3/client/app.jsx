// import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentForm: '', 
          name: 'edward'
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        $.ajax({
            url: "/forms",
            type: "POST",
            contentType: 'application/json', //what youre sending
            data: JSON.stringify({ name: this.state.name }),
            dataType: "text", // what it expects to get back 
            success: (result) => { console.log("POST success", result);},
            error: (err) => {console.log("POST error", err);}
        });
    }

    render() {
        return (
            // <div> 
            // <h1> Hellooactividdooo {this.props.word} </h1>
            // </div>
            <form onSubmit={this.handleSubmit}>
              <label> 
                  Name: 
                  <input type="text"></input>
              </label>
              <input type="submit"></input>
            </form>
        )
    }
};

// function Checkout() {

// }
// const element = <h1> Hello, World!BLAHBLAH FROM REACT </h1>;
ReactDOM.render(<App word="Worlddope"/>, document.getElementById('root'));


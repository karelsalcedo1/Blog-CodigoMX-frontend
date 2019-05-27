import React from 'react';
const axios = require('axios');

const URL = 'http://localhost:4000/create_posts';


class CreatePost extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios.post(URL, {
      post_content: this.state.value,
    })
    .then(function (response) {
      //console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      alert('Ocurrio un error: ' + error);
    });
  }
  render() {
  return (
<div className="container p-3">
<h3>Crea un post</h3>
<form onSubmit={this.handleSubmit}>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe lo que quieras!"  onChange={this.handleChange}></textarea>
<button  className="btn btn-success mt-2 float-right" type="submit" value="Submit">Comparte tu post.</button>
</form>
</div>
  );
}
}


export default CreatePost;

import React from 'react';
const axios = require('axios');

const URL = 'http://localhost:4000/create_responses';


class CreateResponses extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: '',
                  id: props.id_post
};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios.post(URL, {
        responses_content: this.state.value,
        post_id: this.state.id
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
<div className="">
<form onSubmit={this.handleSubmit}>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe lo que quieras!"  onChange={this.handleChange}></textarea>
<button  className="btn btn-success mt-2 float-right" type="submit" value="Submit">Crea un Response.</button>
</form>
</div>
  );
}
}


export default CreateResponses;

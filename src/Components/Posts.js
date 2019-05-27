import React,  { Component }  from 'react';
import CreateResponses from '../Components/CreateResponses';

class Posts extends Component{

        state = {
             posts: []
        };
      
      componentDidMount() { 
        fetch('http://localhost:4000/posts')
        .then(function(response) {
            return response.json();
        })
        .then(myjson =>{
            this.setState({
                posts: myjson
            })
        });

      }
      



    
render() {
    var {posts} = this.state;

        const listPosts = posts.map((post) =>
        <div className="card m-3" key={post.post_id}>
        <div className="card-header">
        <i className="fas fa-clipboard"></i> Post Id: {post.post_id} Responses:<span className="badge badge-success">{post.responses_count}</span>
        </div>
        <div className="card-body">
            {post.post_content}
        </div>
        <div className="card-footer text-muted">
        <i class="fas fa-comments"></i> Responses
        </div>
        <ul className="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <CreateResponses id_post={post.post_id}/>
        </div>
        );
        return (
            <div className="container ">
                    <ul>
                    {listPosts}
                    </ul>
            </div>
          );
    }
}


export default Posts;

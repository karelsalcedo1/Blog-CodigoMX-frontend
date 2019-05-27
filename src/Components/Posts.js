import React,  { Component }  from 'react';
import CreateResponses from '../Components/CreateResponses';

class Posts extends Component{

        state = {
             posts: [],
             responses: []
        };
      
      componentDidMount() { 
        //Posts
        fetch('http://localhost:4000/posts')
        .then(function(response) {
            return response.json();
        })
        .then(myjson =>{
            this.setState({
                posts: myjson
            })
        });
        //Responses
        fetch('http://localhost:4000/responses')
        .then(function(response) {
            return response.json();
        })
        .then(myjson =>{
            this.setState({
                responses: myjson
            })
        });
      }
      



    
render() {
    var {posts, responses} = this.state;

        for (let index = 0; index < posts.length; index++) {
            posts[index].responses = [];
            for (let i = 0; i < responses.length; i++) {
                if(posts[index].post_id === responses[i].post_id){
                posts[index].responses.push(responses[i]);
            }
            }
            }
        

            
        
        

        const listPosts = posts.map((post) =>
        <div className="card m-3" key={post.post_id}>
        <div className="card-header">
        <i className="fas fa-clipboard"></i> Post Id: {post.post_id} Responses:<span className="badge badge-success">{post.responses_count}</span>
        </div>
        <div className="card-body">
            {post.post_content}
        </div>
        <div className="card-footer text-muted">
        <i className="fas fa-comments"></i> Responses
        </div>
        <ul className="list-group list-group-flush">
            {
                post.responses.map((r)=>
                 <li className="list-group-item" key={r.response_id}>{r.response_content}</li>
                )
            }
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

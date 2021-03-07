import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import axios from 'axios';

/*
// Class based component
class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}*/

// Function Based Component
const Home = () =>{
    const[posts, setPosts] = useState([ ]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data.slice(0, 10));
            })
    },[]); // The [] is needed to only run useEffect on page load
    const postList = posts.length ? (
        posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="A pokeball"/>
                    <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="center">No posts yet</div>
    )
    return (
        <div className="container home">
            <h4 className="center">Home</h4>
            {postList}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         posts: state.posts
//     }
// }
// export default connect(rootReducer)(Home);
export default (Home); 
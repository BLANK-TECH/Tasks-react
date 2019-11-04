import React, { Component } from 'react'

export default class Posts extends Component {
    state = {
        posts: []
    }

    //El componente ha sido montado
    async componentDidMount(){
        //consumo de API 
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        this.setState({posts:data})
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {this.state.posts.map(post => {
                    return <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                    })
                }
            </div>
        )
    }
}

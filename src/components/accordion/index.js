import React from 'react';
import Section from './accordion';
import './accordion.css';

class Accordion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: null,
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        const posts = [{
            "userId": 1,
            "id": 10,
            "title": "optio molestias id quia eum",
            "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
          },
          {
            "userId": 2,
            "id": 11,
            "title": "et ea vero quia laudantium autem",
            "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
          }]
          this.setState({
                posts,
                loading: false,
                error: null
            });
    }

    renderLoading() {
        return (
            <div className="accordion-container">
                <h1 className="error">Loading...</h1>
            </div>
        );
    }

    renderError() {
        return (
            <div>
                Error
            </div>
        );
    }

    renderPosts() {
        const { posts, error } = this.state;

        if (error) {
            this.renderError();
        }
        return (
            <div className="accordion-container">
                {posts.map(post =>
                    <Section post={post} key={post.id} />
                )}
            </div>
        );
    }

    render() {

        const { loading } = this.state;
        return (
            <div className="accordion-wrapper">
                {loading ? this.renderLoading() : this.renderPosts()}
            </div>
        );
    }

}

export default Accordion;
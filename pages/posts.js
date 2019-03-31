import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";
import Layout from "../components/layout";
import ImageBox from "../components/imageBox";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from'redux'
import _ from 'lodash';
import Router from 'next/router'



class Posts extends Component {

  componentWillReceiveProps(nextProps) {
    var posts = _.values(nextProps.store.data.posts);
    console.log(this.props);
    posts.map( (p) => {
      if (p){
        if (p.upvotes-p.downvotes<-10) {
          this.props.deletePost(p);
          this.setState(this.state);
        }}
    });
  }

  componentDidMount(){
    if(this.props.auth.isEmpty){
      Router.push('/')
    }
  }

  render() {
    var posts = _.values(this.props.store.data.posts);
    var posts = _.orderBy(posts, 'timestamp', 'desc');

    return ( 
      <Layout>
        <div className="table">
          {posts.map(p => p && ( 
            <div key={p.id}>
              <ImageBox p={p}/>
            </div>
          ))}
        </div>
        <style jsx>{`
          .table {
            width: 100%;
            background-color: #595959;
            padding: 2%;
          }
        `}</style>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  store: state.firestore,
  auth: state.firebase.auth
});

const mapDispatchToProps = (dispatch) =>{
  return{
      deletePost: (p) => dispatch(deletePost(p)),
      }
}

export default compose(
    connect( mapStateToProps, mapDispatchToProps),
    firestoreConnect([
      {collection: 'posts'}
    ])
)(Posts);
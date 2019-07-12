import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions/postActions';

export class Nav extends Component {
    
    // componentDidMount(){
    //     this.props.fetchPosts(); // fetchPosts comes over as props
    // }
    
    render(){
        //console.log('props sent to Nav component', this.props.schools);
        return (
            <div>
                    < Link to = '/schools'> Schools </Link>
            </div>
        )
    }

}

// const mapStateToProps = state => ({
//     schools: state.schools.items
// })

//export default connect( mapStateToProps, { fetchPosts })(Nav)
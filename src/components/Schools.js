import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSchools } from '../store/actions/postActions';

class Schools extends Component {
    
    componentDidMount(){
        this.props.fetchSchools(); // fetchPosts comes over as props
    }
    
    render(){
        console.log('props sent to School component', this.props.schools);
        return this.props.schools.map( item => <li key={item.id}>{item.name}</li>)
    }

}

const mapStateToProps = state => ({
    schools: state.schools.items
})

const mapDispatchToProps = dispatch => ({
    fetchSchools: () => dispatch(fetchSchools())
})


export default connect( mapStateToProps, mapDispatchToProps)(Schools)

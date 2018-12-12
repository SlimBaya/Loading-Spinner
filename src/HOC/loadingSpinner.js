import React, {Component} from 'react';
import './loadingSpinner.css';


function LoadingSpinner (WrappedComponent) {
  return class LoadingSpinner extends Component{
  
    render(){
    
      return this.props.movies.length===0 ? <div><h3 className="pidesgin" > Sorry ! This movie is not available ! </h3><div className="loader"></div></div> : <WrappedComponent {...this.props}/>;
    
    }
  }

}
export default LoadingSpinner;
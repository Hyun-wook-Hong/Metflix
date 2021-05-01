import React from "react";
import Proptypes from "prop-types";
import "./Details.css";

class Detail extends React.Component{
    componentDidMount(){
        console.log(this.props);
        const{ location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }

    render(){
        const { location } = this.props;
        if(location.state){
            return (
                <div className="detail__container">
                    <img src={ location.state.poster } alt={ location.state.title } title={ location.state.title }/>
                    <h3> { location.state.title }</h3> 
                    <h5> { location.state.year } </h5>
                    <ul> {location.state.genres.map((genre, index) => (<li key={index} className="genres__genre">{genre}</li>)) } </ul>
                    <p>{ (location.state.summary)}</p>
                </div>
                );
        }else{
            return null;
        }
    }

}
export default Detail;
import React from 'react';
import {Link} from 'react-router';

class Cell extends React.Component {
  constructor(props){
    super(props);
  }
  handleImgClick(){
    document.getElementById('btn'+this.props.index).click();
  }

  render(){
    return(
      <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
        <div className='thumbnail'>
          <img src={this.props.img} onClick={this.handleImgClick.bind(this)} />
          <div className='caption'>
            <h3>{this.props.title}</h3>
            <p>{this.props.dsc}</p>
            <p>
              <button className="btn btn-primary btn-lg" data-toggle="modal" id={'btn'+ this.props.index} key={this.props.index} data-target="#myModal" data-id ={this.props.index}  onClick={this.props.handleClick}>
                Detail
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Cell;

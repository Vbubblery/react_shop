import React from 'react';

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    var img = "https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKCrmIDYlgEQ0AIYmAIyCBdlCWLN5Mlq";
    if(this.props.data){
      img = this.props.data.imgs[0];
    }
    return(
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title" id="myModalLabel">Title</h4>
              </div>
              <div className="modal-body">
              <div id="myCarousel" className="carousel slide">
              	<ol className="carousel-indicators">
              		<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              		<li data-target="#myCarousel" data-slide-to="1"></li>
              		<li data-target="#myCarousel" data-slide-to="2"></li>
              	</ol>
              	<div className="carousel-inner">
              		<div className="item active">
              			<img src={img} />
              		</div>
              		<div className="item">
              			<img src={img} />
              		</div>
              		<div className="item">
              			<img src={img}/>
              		</div>
              	</div>
              	<a className="carousel-control left" href="#myCarousel"
              	   data-slide="prev">&lsaquo;</a>
              	<a className="carousel-control right" href="#myCarousel"
              	   data-slide="next">&rsaquo;</a>
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
}
export default Detail;

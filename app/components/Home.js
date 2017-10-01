import React from 'react';
import {Link} from 'react-router';
import Cell from './Cell';
import Detail from './Detail';
import HomeActions from '../actions/HomeActions';
import HomeStore from '../stores/HomeStore';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
    HomeActions.getProducts();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(e){
    HomeActions.updateIdInfo(e.target.getAttribute("data-id"));
  }

  render() {
    var allProducts = this.state.products.map((product,index)=>{
      return (
        <Cell img={product.imgs[0]} dsc={product.description} key={index} title={product.name} index={index} handleClick={this.handleClick.bind(this)} />
      )
    });

    return (
      <div className="container">
        <div className="row">
          {allProducts}
        </div>
        <Detail data={this.state.currentItem} />
      </div>
    );
  }
}

export default Home;

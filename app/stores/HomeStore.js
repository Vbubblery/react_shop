import alt from '../alt';
import FooterActions from '../actions/HomeActions';

class HomeStore{
  constructor(){
    this.bindActions(FooterActions);
    this.products = [];
    this.currentItem = null;
  }
  onGetProductsSuccess(data){
    this.products = data;
    toastr.options.positionClass = "toast-bottom-right";
    toastr.options.closeButton = true;
    toastr.success("Successed");
  }
  onGetProductsFail(jqXhr){
      toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
  onUpdateIdInfo(data){
    this.currentItem = this.products[parseInt(data)];
  }
}
export default alt.createStore(HomeStore);

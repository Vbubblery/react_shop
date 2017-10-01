import alt from '../alt';

class HomeActions {
  constructor(){
    this.generateActions(
      'getProductsSuccess',
      'getProductsFail',
      'updateIdInfo'
    );
  }
  getProducts(){

  /** Version of origin javascript
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function (){
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        getProductsSuccess(this.responseText);
      }
      if (this.readyState === 4 && this.status !== 200) {
        console.log(this.responseText);
        getProductsFail(this.responseText);
      }
    });
    xhr.open("GET", "/api/product");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send();
  */
  //Jquery
  $.ajax({ url: '/api/product' })
      .done((data) => {
        this.actions.getProductsSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getProductsFail(jqXhr)
      });
  }
}
export default alt.createActions(HomeActions);

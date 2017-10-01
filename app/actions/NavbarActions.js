import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
  updateOnlineUsers(payload) {
    this.dispatch(payload);
  }
  updateAjaxAnimation(payload) {
    this.dispatch(payload);
  }
  updateSearchQuery(payload) {
    this.dispatch(payload);
  }
  getCharacterCountSuccess(payload) {
    this.dispatch(payload);
  }
  getCharacterCountFail(payload) {
    this.dispatch(payload);
  }

  findCharacterSuccess(payload) {
    this.dispatch(payload);
  }

  findCharacterFail(payload) {
    this.dispatch(payload);
  }

  findCharacter(payload) {
    $.ajax({
        url: '/api',
        data: {
          name: payload.searchQuery
        }
      })
      .done((data) => {
        assign(payload, data);
        this.actions.findCharacterSuccess(payload);
      })
      .fail(() => {
        this.actions.findCharacterFail(payload);
      });
  }

  getCharacterCount() {
    $.ajax({
        url: '/api'
      })
      .done((data) => {
        this.actions.getCharacterCountSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getCharacterCountFail(jqXhr)
      });
  }
}

export default alt.createActions(NavbarActions);

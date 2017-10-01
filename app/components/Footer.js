import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5 hidden-xs'>
              <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
              <p>Copyright © 2017-2018 Bubble</p>
            </div>
            <div className='col-sm-2 hidden-xs'>
              <h3 className='lead'><strong>联系我们</strong></h3>
            </div>
            <div className='col-sm-3 hidden-xs'>
              <ul className='list-inline'>
                <li>
                  <img className='thumb-md' src={'/img/contact.png'} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

import React, {Component} from 'react';

class Menu extends Component {
    render() {

        let items = this.props.items;

        return (
          <div className="menu">{
              items.map(item => (
                <a className="home active" href="/">
                    <img src={item.icon} alt="icon" width="40px" height="40px"
                    />
                    <p>{item.label}</p>
                 </a> 
              ))
          }</div>
        );
    }
}
export default Menu;
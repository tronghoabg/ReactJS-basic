import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <a className="home active" href="/">
                    <i class="fas fa-home"></i>
                    <p>Home</p>
                </a>
                <a className="home" href="/">
                    <i class="fas fa-gift"></i>
                    <p>Deal</p>
                </a>
                <a className="home" href="/">
                    <i class="fas fa-cloud-upload-alt"></i>
                    <p>Upload</p>
                </a>
                <a className="home" href="/">
                        <i class="fas fa-briefcase"></i>
                    <p>Work</p>
                </a>
                <a className="home" href="/">
                    <i class="fas fa-cogs"></i>
                    <p>Setting</p>
                </a>
          </div>
        )
    }
}
export default Menu;
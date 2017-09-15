import React, {Component} from 'react';

class Searchbar extends Component {
    render(){
        return(
            <form className="navbar-form navbar-right">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <button type="submit" className="btn btn-default">Go</button>
            </form>
        );
    }
}
export default Searchbar;
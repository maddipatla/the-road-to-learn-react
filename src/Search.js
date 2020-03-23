import React, {Component} from "react";

class Search extends Component {
    
    render = () =>  {
        const {searchTerm, onChange, children} = this.props;
        return (
            <form>
                {children} <input type="text" value={searchTerm} onChange={onChange}/>
            </form>
        );
    }
    
};

export default Search;
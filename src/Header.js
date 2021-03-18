import {Link} from "react-router-dom";

function Header(){
    return(
        <div id="header">
            <h1>My Garden</h1>
            <h5><Link to="/seeds">Seed Index</Link> | <Link to="/seeds/new">Add Seed</Link> | <Link to="/users">My Garden</Link></h5>
        </div>
    )
}

export default Header
import {Link} from "react-router-dom";

function Header(){
    return(
        <div id="header" class="header">
            <h1 class="header">My Garden</h1>
            <h5><Link to="/seeds">Seed Index</Link> | <Link to="/seeds/new">Add Seed</Link> | <Link to="/users">My Garden</Link></h5>
        </div>
    )
}

export default Header
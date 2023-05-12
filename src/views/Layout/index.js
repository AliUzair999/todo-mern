import {Link, Outlet} from "react-router-dom"

export default function Layout () {

    return <>
    <nav>
        <ul>
            <li>
                <Link to="/dashboard"> Dashboard </Link>
            </li>

            <li>
                <Link to="/login"> login </Link>
            </li>

        </ul>

        <hr/>
    </nav>

    <Outlet />
    </>
}

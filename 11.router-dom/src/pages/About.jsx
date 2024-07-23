import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>About</h1>
            <hr />
            <Link to="employee">Çalişanlar Hakkinda</Link>
            <hr />
            <Link to="company">Şirket Hakkinda</Link>

            <Outlet />
        </div>
    )
}

export default About
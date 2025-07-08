
import { Outlet, Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>🏠 Admin Dashboard</h2>

      <nav>
        <Link to="profile">Profile</Link> | 
        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Dashboard;

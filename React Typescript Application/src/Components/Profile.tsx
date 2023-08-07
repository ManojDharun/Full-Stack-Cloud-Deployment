import Dropdown from 'react-bootstrap/Dropdown';
import {useState} from 'react';
function Profile() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleSignOut = () => {
      // Perform sign out actions
      // Example: Redirect to sign out page or clear user session
    };
    return (
        <div>
            <Dropdown show={showDropdown} onToggle={handleDropdownToggle}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                <i className="fas fa-user"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#profile">Dashboard</Dropdown.Item>
                  <hr style={{ borderTop: "1px solid black" }}></hr>
                  <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
        </div>
    )
}

export default Profile;
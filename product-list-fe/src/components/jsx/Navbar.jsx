import "../css/Navbar.css";

function Navbar() {
    return (
        <>
            <div className="profile-container">
                <i className="mdi mdi-account-circle" />
                <div className="profile-info">
                    <p className="profile-name">John Andre</p>
                    <p className="profile-company">Storfjord AS</p>
                </div>
            </div>
            <div className="language-container">
                <p>English</p>
                <img className="profile-image" src="src/assets/uk.png"/>
            </div>
        </>
    );
}

export default Navbar;

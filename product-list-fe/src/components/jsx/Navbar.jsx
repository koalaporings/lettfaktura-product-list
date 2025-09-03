import "../css/Navbar.css";

function Navbar() {
    return (
        <>
            <div className="profile-container">
                <img className="profile-image" src="https://via.placeholder.com/40"/>
                <div className="profile-info">
                    <p>John Andre</p>
                    <p>Storfjord AS</p>
                </div>
            </div>
            <div className="language-container">
                <img className="profile-image" src="https://via.placeholder.com/40"/>
                <p>Logo</p>
            </div>
        </>
    );
}

export default Navbar;

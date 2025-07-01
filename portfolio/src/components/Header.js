// Create your Header component here
const Header = () =>{
    return (
        <div className="header">
            <div className="header-logo">
                <a href="#app"><h3 className="header-name">Fuad Issa</h3></a>
            </div>
            <div className="header-container">
                <div className="nav-item"><a href="#about">about</a></div>
                <div className="nav-item"><a href="#projects">projects</a></div>
                <div className="nav-item"><a href="#skills">skills</a></div>
            </div>
        </div>
    )
}

export default Header;
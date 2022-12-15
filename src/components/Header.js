const Header = ({ handleToodgeDarkMode, darkMode }) => {
    const darkModeClickHandler = () => {
        handleToodgeDarkMode(
            (prevDarkMode) => !prevDarkMode
        );
    }

    return(
        <div className="header">
            <h1>Art notes:</h1>
            <button className="save toogle" onClick={darkModeClickHandler}>
                {darkMode ? 'Toogle to White' : 'Toogle to Black'}
            </button>
            
        </div>
    );
}

export default Header;
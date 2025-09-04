import '../css/SearchBar.css';

const SearchBar = ({ placeholder }) => {

    return (
        <form className="search-bar">
            <div className="search-input-wrapper">
                <input
                    type="text"
                    className="search-input"
                    placeholder={placeholder}
                />
                <button type="submit" className="search-button">
                    <i className="mdi mdi-magnify" />
                </button>
            </div>
        </form>
    );
};

export default SearchBar;

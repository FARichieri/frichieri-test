import "./searchbar.scss";

const Searchbar = ({ comics }) => {
  return (
    <div className="searchbar">
      <input type="text" className="searchInput" placeholder="Search..." />
      <button className="searchBtn">Search</button>
    </div>
  );
};

export default Searchbar;

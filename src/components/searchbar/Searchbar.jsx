import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { searchByName } from "../../Redux/Actions";
import "./searchbar.scss";

const Searchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    searchName: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    navigate("/");
  }

  useEffect(() => {
    dispatch(searchByName(input.searchName.toLowerCase()));
  }, [dispatch, input]);

  return (
    <div className="searchbar">
      <input
        name="searchName"
        value={input.searchName}
        onChange={handleChange}
        placeholder="Search by name..."
        autoComplete="off"
        className="searchInput"
      />
    </div>
  );
};

export default Searchbar;

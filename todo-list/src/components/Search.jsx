const Search = ({ search, setSearch }) => (
    <div className="search">
      <h2>Research:</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type for research..."
      />
    </div>
  );
  
  export default Search;
  
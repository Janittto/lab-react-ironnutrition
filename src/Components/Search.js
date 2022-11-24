import { Divider, Input } from 'antd';

// Iteration 5
function Search({ searchString, handleSearch }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchString} type="search" onChange={handleSearch} />
    </>
  );
}

export default Search;

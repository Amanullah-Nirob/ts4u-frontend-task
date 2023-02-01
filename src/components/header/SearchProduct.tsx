import { Input } from "antd";
const { Search } = Input;

function SearchProduct() {
  return (
    <Search
      placeholder="Search By product Name"
      allowClear
      enterButton="Search"
      size="large"
      style={{ width: "50%" }}
      name="search"
    />
  );
}

export default SearchProduct;

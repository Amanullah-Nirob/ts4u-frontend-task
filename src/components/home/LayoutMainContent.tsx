import { useBookingAllDataByPaginationMutation } from "@/redux/apiSlice/productApiSlice";
import { Row } from "antd";
import { useEffect, useState } from "react";
import Pagination from "react-paginate";
import { useClientRouter } from "use-client-router";
import ProductSkeleton from "../common/ProductSkeleton";
import ProductCard from "../products/ProductCard";

const LayoutMainContent = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useClientRouter();
  const page = router.asPath.slice(7);
  const [bookingAllDataByPagination, { isLoading }] =
    useBookingAllDataByPaginationMutation();

  const fetchData = async () => {
    const paginateData = {
      page: page,
      limit: 12,
    };
    const { data }: any = await bookingAllDataByPagination(paginateData);
    setProducts(data.products);
    setTotal(data.count);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const { query } = router;
    setCurrentPage(Number(page) || 1);
  }, [page]);

  const handlePageChange = (page: any) => {
    router.push({
      pathname: "/",
      query: { page: page.selected + 1 },
    });
  };

  return (
    <div className="content-home">
      {!isLoading ? (
        <>
          <Row gutter={16}>
            {products.map((product: any) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </Row>
          <div className="pagination-container">
            <Pagination
              onPageChange={handlePageChange}
              pageCount={Math.ceil(total / 12) || 12}
              forcePage={currentPage - 1 || 0}
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </>
      ) : (
        <ProductSkeleton />
      )}
    </div>
  );
};

export default LayoutMainContent;

import { Card, Col, Image, Rate } from "antd";
const { Meta } = Card;
const ProductCard = ({ product }: any) => {
  return (
    <Col xs={12} sm={8} md={6} lg={4}>
      <Card
        className="productCard"
        key={product.id}
        cover={<Image src={product?.thumbnail} alt={product.name} />}
      >
        <Meta
          title={product.name}
          description={
            <div>
              <p>Price: {product.price}</p>
              <Rate disabled defaultValue={product.ratingCount} />
            </div>
          }
        />
      </Card>
    </Col>
  );
};
export default ProductCard;

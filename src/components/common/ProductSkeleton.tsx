import { Card, List, Skeleton } from "antd";

function ProductSkeleton() {
  const data = new Array(50).fill({});
  return (
    <div>
      <List
        grid={{ gutter: 1, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }}
        dataSource={data}
        renderItem={() => (
          <List.Item>
            <Card>
              <Skeleton active />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ProductSkeleton;

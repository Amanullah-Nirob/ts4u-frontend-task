import withAuth from "@/hooks/withAuth";
import { useProfileMutation } from "@/redux/apiSlice/userApi";
import { Avatar, Divider, Spin, Typography } from "antd";
import Head from "next/head";
import { useEffect, useState } from "react";

const { Title } = Typography;
const Profile = () => {
  const [profile, { isLoading }] = useProfileMutation();
  const [user, setUser] = useState<any>({});
  const fetchData = async () => {
    const { data }: any = await profile("profile");
    setUser(data.user);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>AmanShop- Profile</title>
      </Head>
      {!isLoading ? (
        <div style={{ textAlign: "center" }}>
          <Avatar src={user.profilePicture} size={128} />
          <Divider />
          <Title level={2}>{user.name}</Title>
          <p>{user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <Spin />
        </div>
      )}
    </>
  );
};

export default withAuth(Profile);

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UserDetailPage = () => {
  const { userId } = useParams();
  const API = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const [userDetail, setUserDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await fetch(API);
        const data = await res.json();
        setUserDetail(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [API]);

  if (loading) return <p>ກຳລັງໂຫຼດ...</p>;
  if (!userDetail) return <p>ບໍ່ມີຂໍ້ມູນ</p>;

  return (
    <div>
      <h1>{userDetail.name}</h1>
      <p>Email: {userDetail.email}</p>
      <p>Phone: {userDetail.phone}</p>
      <p>Website: {userDetail.website}</p>
      <p>Company: {userDetail.company?.name}</p>
      <p>
        Address: {userDetail.address?.suite}, {userDetail.address?.street},{" "}
        {userDetail.address?.city}, {userDetail.address?.zipcode}
      </p>
      <Link to="/users">⬅ Back to Users</Link>
    </div>
  );
};

export default UserDetailPage;

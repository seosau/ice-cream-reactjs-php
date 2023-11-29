import className from "classnames/bind";
import style from "./UserAccount.module.scss";
import { useEffect, useState } from "react";
import axiosClient from "../../../axiosClient/axios";
import { Loader } from "../../../components";

const cx = className.bind(style);
function UserAccount() {
  const [listUsers, setListUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllUsers = () => {
    setLoading(true);
    axiosClient.get("/admin/useraccount").then(({ data }) => {
      setListUsers(data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>
        <h1 className={cx("heading-title")}>registered users</h1>
        <img src={require("../../../assets/img/separator.png")} alt="spr" />
      </div>
      {loading && <Loader />}
      <div className={cx("box-container")}>
        {!loading && (
          <>
            {listUsers.length > 0 ? (
              listUsers.map((user) => (
                <div className={cx("box")}>
                  <img src={user.image ? `http://localhost:8000/${user.image}` :require("../../../assets/img/avt.png")} alt="" />
                  <p>
                    user id: <span>{user.id}</span>
                  </p>
                  <p>
                    user name: <span>{user.name}{/*fetch from db*/}</span>
                  </p>
                  <p>
                    user email: <span>{user.email}{/*fetch from db*/}</span>
                  </p>
                </div>
              ))
            ) : (
              <div className={cx("empty")}>
                <p>no registered user yet!</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default UserAccount;

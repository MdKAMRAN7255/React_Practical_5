import React from "react";
import "../wrapper/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { showModaled } from "../../action/indexAction";

const ProfileList = () => {
  const profileList = useSelector((state) => state.list);
  const staticList = useSelector((state) => state.list1);

  const dispatch = useDispatch();
  const mergedArray = profileList.map((obj, index) => ({
    ...obj,
    ...staticList[index],
  }));
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col w-100">Status</th>
            <th scope="col">Access</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {!(!staticList || staticList.length === 0) &&
            mergedArray.map((list, index) => (
              <tr
                key={index}
                onMouseEnter={() => dispatch(showModaled([list]))}
                onMouseLeave={() => dispatch(showModaled([list]))}
              >
                <td>
                  <div className="d-flex flex-row">
                    <div>
                      <img
                        className="img"
                        src={list.avatar}
                        width="40px"
                        height="40px"
                      />
                    </div>
                    <div className="ps-2">
                      <span className="m-0 d-block">
                        {list.first_name} {list.last_name}
                      </span>
                      <span className="text-secondary">{list.email}</span>
                    </div>
                  </div>
                </td>
                <td className="px-0">
                  {list.first_name === "George" &&
                  list.last_name === "Bluth" ? (
                    <span className="text-success fw-bold ps-1">Active</span>
                  ) : (
                    <select
                      className="form-select border border-0 select"
                      aria-label="Default select example"
                    >
                      <option value="1" className="bg-light">
                        {list.status}
                      </option>
                      <option value="2" className="bg-light">
                        Active
                      </option>
                    </select>
                  )}
                </td>
                <td>
                  {list.first_name === "George" &&
                  list.last_name === "Bluth" ? (
                    <span className="fw-bold ps-1">Owner</span>
                  ) : (
                    <select
                      className="form-select border border-0 select"
                      aria-label="Default select example"
                    >
                      <option value="1" className="bg-light">
                        {list.access}
                      </option>
                      <option value="2" className="bg-light">
                        Read
                      </option>
                    </select>
                  )}
                </td>
                <td>
                  <img src={list.icon} width="25px" height="25px" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ProfileList;

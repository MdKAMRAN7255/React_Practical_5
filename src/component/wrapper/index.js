import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import nothingImage from "../../Img/Nothing.png";
import Profile from "../profile/profile";
import { useSelector } from "react-redux";
import Pagignation from "../pagignation/pagination";
import ProfileList from "../profileList/profileList";

const Index = () => {
  const data = useSelector((state) => state);
  return (
    <>
      <div className="main container">
        <div className="row d-flex justify-content-center align-items-center g-0">
          {!(!data.list1 || data.list1.length === 0) ? (
            <>
              <div
                className={`${
                  data.modalToggle ? "col-5" : "col-12"
                } col-md-6 pt-4 pb-3
                              col-lg-8 overflow mb-2`}
              >
                <ProfileList />
              </div>
              <div
                className={` ${
                  data.modalToggle ? "col-7" : "col-0"
                } col-md-6 col-lg-4 d-flex justify-content-center align-items-center`}
              >
                <Profile />
              </div>
            </>
          ) : (
            <div className="col-12 d-flex justify-content-center image-div">
              <img className="img-fluid" src={nothingImage} />
            </div>
          )}
        </div>
        <div className="row g-0">
          <div className="col-12 pt-2 d-flex justify-content-center">
            <Pagignation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

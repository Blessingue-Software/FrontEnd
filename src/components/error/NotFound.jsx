import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import "./NotFound.scss";
export default function Error() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-404">
        <div className="outer">
          <div className="middle">
            <div className="inner">
              <div className="inner-circle">
                <i className="fa fa-cogs"></i>
                <span>404</span>
              </div>
              <span className="inner-status">Opps! Internal Server Error!</span>
              <span className="inner-detail">
                Unfortunately we're having trouble loading the page you are
                looking for. Please come back in a while.
              </span>
              <div className="button-box">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  돌아가기
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  메인화면
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

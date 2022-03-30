import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

export default function Error() {
  const navigate = useNavigate();

  return (
    <b>
      <div style={{ marginTop: "65px", marginLeft: "50px" }}>에러</div>
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
    </b>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function Board() {
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div></div>
      <div>
        <Link to="/register">
          <Button type="primary">New Post</Button>
        </Link>
      </div>
    </div>
  );
}

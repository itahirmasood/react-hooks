import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectHook() {
  const [data, setData] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        setName(response.data[0].name);
      });
  }, []);

  return (
    <div>
      Email <h1>{data}</h1>
      Name <h1>{name}</h1>

    </div>
  );
}

export default EffectHook;

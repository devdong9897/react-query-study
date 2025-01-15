import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ReactQueryPage = () => {
  const fetchPost = (queryData) => {
    const id = queryData.queryKey[1];
    return axios.get(`http://localhost:3004/posts/${id}`);
  };
  // useQuery: 데이터를 서버에서 가져오는 기능을 하는 React Hook.
  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["posts", 1],
    queryFn: fetchPost,
    retry: 1,
    select: (data) => {
      return data.data;
    },
  });
  console.log("ddd", data, isLoading);
  console.log("error", isError, error);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      {/* {data?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))} */}
      <button onClick={refetch}>post리스트 다시 들고오기</button>
    </div>
  );
};

export default ReactQueryPage;

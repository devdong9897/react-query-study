import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ReactQueryPage = () => {
  const fetchPost = () => {
    return axios.get("http://localhost:3004/posts");
  };
  // useQuery: 데이터를 서버에서 가져오는 기능을 하는 React Hook.
  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
    retry: 1,
    select: (data) => {
      return data.data;
    },
    // 맨 처음(새로고침을 할 때)에는 api를 호출되지 않고 버튼을 클릭했을 때만 호출할 때.
    enabled: false,
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
      {data?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      <button onClick={refetch}>post리스트 다시 들고오기</button>
    </div>
  );
};

export default ReactQueryPage;

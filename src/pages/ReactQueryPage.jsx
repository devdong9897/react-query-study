import React from "react";
import { usePostQuery } from "../hooks/usePosts";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { data } from "react-router-dom";

const ReactQueryPage = () => {
  const ids = [1, 2, 3, 4];

  const fetchPostDetail = (id) => {
    return axios.get(`http://localhost:3004/posts/${id}`);
  };

  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => fetchPostDetail(id),
      };
    }),
    // combine: 여러 개의 요청 결과를 하나로 합치는 역할.
    combine: (results) => {
      return {
        data: results.map((result) => result.data?.data),
      };
    },
  });

  console.log("rrr", results);
  return <div></div>;
};

export default ReactQueryPage;

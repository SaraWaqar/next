import React from "react";
import { fetchAll } from "../store/test";
// import {useDispatch, useSelector} from "react-redux"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

const useTest = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state?.test);
  console.log("store", store);

  const getAll = async () => {
    console.log("xyz");
// @ts-ignore
    dispatch(fetchAll());
  };
  return {
    getAll,
    store,
  };
};

export default useTest;

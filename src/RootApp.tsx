import { FC, Suspense } from "react";

import PageLoading from "@components/PageLoading";
import { Route, Routes } from "react-router-dom";
import AppView from "@views/AppView";

import "./App.module.less";

const RootApp: FC = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="*" element={<AppView />} />
      </Routes>
    </Suspense>
  );
};

export default RootApp;

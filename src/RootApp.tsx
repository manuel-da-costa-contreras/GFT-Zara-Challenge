import { FC, Suspense } from "react";
import "./App.css";
import PageLoading from "@components/PageLoading";
import { Route, Routes } from "react-router-dom";
import AppView from "@views/AppView";

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

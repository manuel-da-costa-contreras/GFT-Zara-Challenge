import { FC, Suspense } from "react";

import PageLoading from "@components/PageLoading";
import { Route, Routes } from "react-router-dom";
import AppView from "@views/AppView";

// import "./App.module.less";
import { FavoriteProvider } from "@common/components";
import ScreenSizesProvider from "@common/components/ScreenSizesProvider";

const RootApp: FC = () => {
  return (
    <FavoriteProvider>
      <ScreenSizesProvider>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="*" element={<AppView />} />
          </Routes>
        </Suspense>
      </ScreenSizesProvider>
    </FavoriteProvider>
  );
};

export default RootApp;

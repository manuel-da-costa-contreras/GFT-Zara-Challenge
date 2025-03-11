import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Redirect } from "@common/components";
import AppHeader from "@components/AppHeader";
import PageLoading from "@components/PageLoading";
import ListView from "@views/ListsView/ListView";
import CharacterView from "@views/CharacterView";
import { AppRoutes } from "@common/config";

const AppView: FC = () => {
  return (
    <div>
      <Suspense fallback={<PageLoading />}>
        <AppHeader />
        <Routes>
          <Route path={`${AppRoutes.HOME_URL}/*`} element={<ListView />} />
          <Route
            path={`${AppRoutes.CHARACTERS_URL}/:idStr/*`}
            element={<CharacterView />}
          />
          <Route path="*" element={<Redirect to={AppRoutes.HOME_URL} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppView;

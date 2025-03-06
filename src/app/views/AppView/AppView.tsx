import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CHARACTER_ROUTE, HOME_ROUTE } from "@common/constants/index";
import { Redirect } from "@common/components";
import AppHeader from "@components/AppHeader";
import PageLoading from "@components/PageLoading";
import ListView from "@views/ListsView/ListView";
import CharacterView from "@views/CharacterView";

const AppView: FC = () => {
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <AppHeader />
        <Routes>
          <Route path={HOME_ROUTE} element={<ListView />} />
          <Route
            path={`${CHARACTER_ROUTE}/:idStr/*`}
            element={<CharacterView />}
          />
          <Route path="*" element={<Redirect to={HOME_ROUTE} />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppView;

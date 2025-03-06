import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RootApp from "./RootApp.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// App Styles
import "./index.module.less";

const queryClient = new QueryClient();

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RootApp />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);

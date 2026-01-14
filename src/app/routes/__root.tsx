import { Sidebar } from "@/widgets";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "../providers/ThemeProvider";
import "../styles/global.css";

const RootLayout = () => (
  <>
    <ThemeProvider>
      <main className="flex flex-row justify-between max-w-[1000px] mx-auto px-[2rem] py-[3rem]">
        <Sidebar />
        <Outlet />
      </main>
    </ThemeProvider>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });

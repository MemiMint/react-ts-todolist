import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing";

export const App: FC = (): JSX.Element => {
  return <RouterProvider router={router} />
}
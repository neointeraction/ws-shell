import React, { useEffect } from "react";
import { remotes } from "../config/remote";
import { createHashRouter } from "react-router-dom";
import { loadModule, loadScript } from "../libs";

import Dashboard from 'dashboard/App'
const GenericComponent = ({ appName, component, path }) => {
  const [Apps, setApps] = React.useState(null);
  useEffect(() => {
    loadScript(appName, path).then(() => {
      loadModule(appName, component).then((e) => {
        setApps(e.default);
      });
    });
  }, []);
  return <>{Apps && <Apps />}</>;
};
const Dboard = () => {
  return <></>;
};
// export const routeConfig = () => {
//   return createHashRouter([
//     {
//       path: "/",
//       element: <Dboard />,
//     },
//     ...remotes.routes.map((s) => {
//       return {
//         path: s.route,
//         element: (
//           <GenericComponent
//             path={s.path}
//             key={s.appName}
//             appName={s.appName}
//             component={s.component}
//           />
//         ),
//       };
//     }),
//   ]);
// };

export const routeConfig = () => {
    return createHashRouter([
      {
        path: "/",
        element: <></>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      }
    ]);
  };
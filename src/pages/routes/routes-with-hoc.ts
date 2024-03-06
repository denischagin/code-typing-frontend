import {ReactNode} from "react";

import {RouteObject} from "react-router-dom";

export const routesWithHOC = (hoc: (children: ReactNode) => ReactNode, routes: RouteObject[]): RouteObject[] => {
    return routes.map(route => {
        return {
            ...route,
            element: hoc(route.element)
        }
    })
}

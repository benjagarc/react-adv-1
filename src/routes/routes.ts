import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;
export interface Route {
    to: string;
    path:string;
    name: string;
    Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
}

const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

export const routes:Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: `Lazy-1`
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: `Lazy-2`
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: `Lazy-3`
    }
];
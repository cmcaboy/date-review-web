import Routes, * as nextRoutes from "next-routes";

// @ts-ignore
export const routes = nextRoutes() as Routes;
export const Router = routes.Router;
export const Link = routes.Link;

routes.add("user", "/user/:id");
routes.add("index", "/");
routes.add("new", "/new");
routes.add("about", "/about");
routes.add("contact", "/contact");

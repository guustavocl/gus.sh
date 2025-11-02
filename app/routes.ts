import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home/home.tsx"),
    route("projects", "routes/projects/projects.tsx"),
    route("contact", "routes/contact/contact.tsx"),
    route("setup", "routes/setup/setup.tsx"),
  ]),
] satisfies RouteConfig;

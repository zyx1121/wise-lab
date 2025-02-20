import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="https://lh4.googleusercontent.com/QQjesvQfpb9bXywvxYSKOEXsqWHJVU5yNfMCuC8WplXdR17yICuN0Pl-o4BdtrHVPFgskCn12EnHRCnyUTbMFuc=w16383"
          alt="WISE Lab"
          width={100}
          height={100}
          className="rounded-xl"
        />
      </>
    ),
  },
  links: [
    {
      text: "About",
      url: "https://sites.google.com/view/chinya-huang/about-me?authuser=0",
      active: "nested-url",
    },
    {
      text: "News",
      url: "https://sites.google.com/view/chinya-huang/news?authuser=0",
      active: "nested-url",
    },
    {
      text: "Projects",
      url: "https://sites.google.com/view/chinya-huang/projects?authuser=0",
      active: "nested-url",
    },
    {
      text: "Publications",
      url: "https://sites.google.com/view/chinya-huang/publications?authuser=0",
      active: "nested-url",
    },
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
  ],
};

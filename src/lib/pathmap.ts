type PathType = "internal" | "external";
interface PathMapProps {
  pathType?: PathType;
  title?: string;
  link?: string;
  isAvailable?: boolean;
}

export const getPathMap = function (): PathMapProps[] {
  return [
    {
      pathType: "internal",
      title: "home",
      link: "/",
      isAvailable: true,
    },
    {
      pathType: "internal",
      title: "freelance",
      link: "/freelance",
      isAvailable: true,
    },
    {
      pathType: "internal",
      title: "blog",
      link: "/blog",
      isAvailable: true,
    },
  ];
};

interface ContactItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  link?: {
    display?: string;
    url?: string;
  };
}

export const getContacts = function (): ContactItemProps[] {
  return [
    {
      title: "GitHub",
      link: {
        display: "@ShardulVanage",
        url: "https://github.com/ShardulVanage",
      },
    },
    {
      title: "LinkedIn",
      link: {
        display: "linkedin.com/in/ShardulVanage",
        url: "https://www.linkedin.com/in/shardul-vanage-294823200/",
      },
    },
    {
      title: "Twitter / X.com",
      link: {
        display: "x.com/shardulvanage",
        url: "https://x.com/ShardulVan35985",
      },
    },
  ];
};

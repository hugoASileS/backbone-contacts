import { Link as RouterLink } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { Fragment } from "react";

interface ILink {
  to: string;
  title: string;
}

export default function LinkList(): JSX.Element {
  const links: Array<ILink> = [
    { to: "/", title: "Home" },
    { to: "/contacts", title: "Contacts" },
    { to: "/email", title: "Email" },
    { to: "/file", title: "File" },
    { to: "/user", title: "User" },
    { to: "/role", title: "Role" },
  ];

  return (
    <>
      {links.map(({ to, title }: ILink) => (
        <Fragment key={title}>
          <RouterLink to={to}>{title}</RouterLink>
          <Divider sx={{ my: 1 }} />
        </Fragment>
      ))}
    </>
  );
}

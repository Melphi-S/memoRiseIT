import styles from "./NavigationLink.module.scss";
import { Link, LinkProps, useLocation } from "react-router-dom";
import { FC } from "react";
import classnames from "classnames";

interface NavigationLinkProps extends LinkProps {
  number?: number | undefined;
  className?: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  to,
  number = undefined,
  children,
  className = "",
  ...rest
}) => {
  const { pathname } = useLocation();

  const linkClass = classnames({
    [styles.link]: true,
    [styles.active]: pathname === to,
    [className]: true
  });

  return (
    <Link to={to} className={linkClass} {...rest}>
      <>
        {children}
        {number !== undefined && (
          <span className={styles.number}>{number < 100 ? number : "99+"}</span>
        )}
      </>
    </Link>
  );
};

export default NavigationLink;

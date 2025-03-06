import { FC, useEffect } from "react";
import { RedirectProps } from "./types";
import { useNavigate } from "react-router-dom";

const Redirect: FC<RedirectProps> = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Redirect;

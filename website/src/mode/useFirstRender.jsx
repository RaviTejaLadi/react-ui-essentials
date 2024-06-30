import { useEffect, useState } from "react";

export const useFirstRender = () => {
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    setFirstRender(false);
  }, []);
  return firstRender;
};

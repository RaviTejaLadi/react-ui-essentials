import { useEffect, useState } from "react";

const useFirstRender = () => {
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    setFirstRender(false);
  }, []);
  return firstRender;
};

export default useFirstRender;

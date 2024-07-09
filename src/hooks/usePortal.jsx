import { useEffect, useRef } from "react";

const usePortal = (id) => {
  const rootElemRef = useRef(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent || createRootElem(id);

    if (!existingParent) {
      addRootElem(parentElem);
    }

    parentElem.appendChild(rootElemRef.current);

    return () => {
      rootElemRef.current.remove();
      if (!existingParent && parentElem.childNodes.length === 0) {
        parentElem.remove();
      }
    };
  }, [id]);

  const createRootElem = (id) => {
    const rootContainer = document.createElement("div");
    rootContainer.setAttribute("id", id);
    return rootContainer;
  };

  const addRootElem = (rootElem) => {
    document.body.insertBefore(
      rootElem,
      document.body.lastElementChild.nextElementSibling
    );
  };

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div");
    }
    return rootElemRef.current;
  };

  return getRootElem();
};

export default usePortal;
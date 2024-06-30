import React, { useEffect } from "react";
import PropTypes from "prop-types";
import throttle from "./utils/throttle";

const ScrollSpy = (props) => {
  const {
    children,
    navContainerRef,
    parentScrollContainerRef,
    scrollThrottle = 300,
    onUpdateCallback,
    offsetTop = 0,
    offsetBottom = 0,
    useDataAttribute = "to-scrollspy-id",
    activeClass = "active-scroll-spy",
    useBoxMethod = true,
    updateHistoryStack = true,
  } = props;
  const scrollContainerRef = React.useRef(null);
  const [navContainerItems, setNavContainerItems] = React.useState();
  const prevIdTracker = React.useRef("");

  useEffect(() => {
    navContainerRef
      ? setNavContainerItems(navContainerRef.current?.querySelectorAll(`[data-${useDataAttribute}]`))
      : setNavContainerItems(document.querySelectorAll(`[data-${useDataAttribute}]`));
  }, [navContainerRef, useDataAttribute]);

  const isVisible = (el) => {
    const rectInView = el.getBoundingClientRect();

    if (useBoxMethod) {
      const useHeight = parentScrollContainerRef?.current
        ? parentScrollContainerRef?.current.offsetHeight
        : window.innerHeight;
      const hitbox_top = useHeight;
      const element_top = rectInView.top;
      const element_bottom = rectInView.top + useHeight;
      return hitbox_top < element_bottom + offsetBottom && hitbox_top > element_top - offsetTop;
    } else {
      const leniency = parentScrollContainerRef?.current
        ? parentScrollContainerRef?.current.offsetHeight * 0.5
        : window.innerHeight * 0.5;
      const useHeight = parentScrollContainerRef?.current
        ? parentScrollContainerRef?.current.offsetHeight
        : window.innerHeight;
      return rectInView.top + leniency + offsetTop >= 0 && rectInView.bottom - leniency - offsetBottom <= useHeight;
    }
  };

  const checkAndUpdateActiveScrollSpy = throttle(() => {
    const scrollParentContainer = scrollContainerRef.current;
    if (!(scrollParentContainer && navContainerItems)) return;
    for (let i = 0; i < scrollParentContainer.children.length; i++) {
      const useChild = scrollParentContainer.children.item(i);
      const elementIsVisible = isVisible(useChild);
      if (elementIsVisible) {
        const changeHighlightedItemId = useChild.id;
        if (prevIdTracker.current === changeHighlightedItemId) return;
        navContainerItems.forEach((el) => {
          const attrId = el.getAttribute(`data-${useDataAttribute}`);
          if (el.classList.contains(activeClass)) {
            el.classList.remove(activeClass);
          }
          if (attrId === changeHighlightedItemId && !el.classList.contains(activeClass)) {
            el.classList.add(activeClass);
            if (onUpdateCallback) {
              onUpdateCallback(changeHighlightedItemId);
            }
            prevIdTracker.current = changeHighlightedItemId;
            if (updateHistoryStack) {
              window.history.replaceState({}, "", `#${changeHighlightedItemId}`);
            }
          }
        });
        break;
      }
    }
  }, scrollThrottle);

  useEffect(() => {
    return parentScrollContainerRef
      ? parentScrollContainerRef.current?.addEventListener("scroll", checkAndUpdateActiveScrollSpy)
      : window.addEventListener("scroll", checkAndUpdateActiveScrollSpy);
  }, [checkAndUpdateActiveScrollSpy, parentScrollContainerRef]);

  useEffect(() => {
    checkAndUpdateActiveScrollSpy();
  }, [checkAndUpdateActiveScrollSpy]);

  return <div ref={scrollContainerRef}>{children}</div>;
};

ScrollSpy.propTypes = {
  activeClass: PropTypes.string,
  children: PropTypes.any,
  navContainerRef: PropTypes.shape({
    current: PropTypes.shape({
      querySelectorAll: PropTypes.func,
    }),
  }),
  offsetBottom: PropTypes.number,
  offsetTop: PropTypes.number,
  onUpdateCallback: PropTypes.func,
  parentScrollContainerRef: PropTypes.shape({
    current: PropTypes.shape({
      addEventListener: PropTypes.func,
      offsetHeight: PropTypes.number,
    }),
  }),
  scrollThrottle: PropTypes.number,
  updateHistoryStack: PropTypes.bool,
  useBoxMethod: PropTypes.bool,
  useDataAttribute: PropTypes.string,
};
export default ScrollSpy;

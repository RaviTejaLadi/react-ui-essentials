import { useState, useEffect, useCallback, useRef } from "react";

const useDynamicVariantsChange = (initialVariants, initialIntervalMinutes = 1) => {
  const [variants, setVariants] = useState(initialVariants);
  const [currentVariant, setCurrentVariant] = useState(() => {
    return localStorage.getItem("currentVariant") || variants[0];
  });
  const [intervalMinutes, setIntervalMinutes] = useState(initialIntervalMinutes);
  const [resetFlag, setResetFlag] = useState(false);
  const timerRef = useRef(null);

  const changeVariant = useCallback(() => {
    const currentIndex = variants.indexOf(currentVariant);
    const nextIndex = (currentIndex + 1) % variants.length;
    const newVariant = variants[nextIndex];
    setCurrentVariant(newVariant);
    localStorage.setItem("currentVariant", newVariant);
    localStorage.setItem("lastChangeTime", Date.now().toString());
  }, [currentVariant, variants]);

  const setSpecificVariant = useCallback(
    (variant) => {
      if (!variants.includes(variant)) {
        setVariants((prevVariants) => [...prevVariants, variant]);
      }
      setCurrentVariant(variant);
      localStorage.setItem("currentVariant", variant);
      localStorage.setItem("lastChangeTime", Date.now().toString());
    },
    [variants]
  );

  const reset = useCallback(() => {
    setResetFlag(true);
  }, []);

  useEffect(() => {
    if (resetFlag) {
      const initialVariant = variants[0];
      setCurrentVariant(initialVariant);
      localStorage.setItem("currentVariant", initialVariant);
      localStorage.setItem("lastChangeTime", Date.now().toString());
      setResetFlag(false);
    }
  }, [resetFlag, variants]);

  useEffect(() => {
    const scheduleNextChange = () => {
      const lastChangeTime = parseInt(localStorage.getItem("lastChangeTime") || "0", 10);
      const elapsedTime = Date.now() - lastChangeTime;
      const remainingTime = Math.max(0, intervalMinutes * 60000 - elapsedTime);

      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        changeVariant();
        scheduleNextChange();
      }, remainingTime);
    };

    scheduleNextChange();

    return () => clearTimeout(timerRef.current);
  }, [intervalMinutes, changeVariant, resetFlag]);

  return [currentVariant, setIntervalMinutes, reset, resetFlag, setResetFlag, setSpecificVariant];
};

export default useDynamicVariantsChange;

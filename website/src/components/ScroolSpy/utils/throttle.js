const throttle = (callback, limit) => {
  let tick = false;
  return () => {
    if (!tick) {
      callback();
      tick = true;
      setTimeout(function () {
        tick = false;
      }, limit);
    }
  };
};

export default throttle;

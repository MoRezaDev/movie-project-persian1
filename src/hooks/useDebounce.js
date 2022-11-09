import { useState, useEffect } from "react";

const useDebounce = (value, timeout, callback) => {
  const [timer, setTimer] = useState(null);

  const clearTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    clearTimer();
    const newtimer = setTimeout(callback, timeout);
    setTimer(newtimer);
  }, [value]);
};

export default useDebounce;

import { useEffect, useState } from "react";

const useIsDark = (): boolean => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const mode = localStorage.getItem("mode");

    if (!mode) {
      localStorage.setItem("mode", "dark");
      return;
    }

    mode === "dark" ? setIsDark(true) : setIsDark(false);
  }, []);
  window.addEventListener("storage", () => {
    const mode = localStorage.getItem("mode");
    mode === "dark" ? setIsDark(true) : setIsDark(false);
  });
  return isDark;
};

export default useIsDark;

import { useState } from "react";

const useIsDark = (): boolean => {
  const [isDark, setIsDark] = useState(true);
  window.addEventListener("storage", () => {
    const mode = localStorage.getItem("mode");
    mode === "dark" ? setIsDark(true) : setIsDark(false);
  });
  return isDark;
};

export default useIsDark;

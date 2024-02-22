import "./DarkModeBtn.scss";
import moon from "../../assets/images/moon.svg";
import sun from "../../assets/images/sun.svg";
import useIsDark from "../../hooks/useIsDark";

const DarkModeBtn = () => {
  const isDark = useIsDark();
  const handleMode = () => {
    const mode = localStorage.getItem("mode");
    localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <img
      src={isDark ? moon : sun}
      alt="moon"
      className="dark-btn"
      onClick={handleMode}
    />
  );
};

export default DarkModeBtn;

import "./DarkModeBtn.scss";

const DarkModeBtn = () => {
  const handleMode = () => {
    const mode = localStorage.getItem("mode");
    localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <button type="button" className="dark-btn" onClick={handleMode}>
      dark mode
    </button>
  );
};

export default DarkModeBtn;

import "./Header.scss";
// import { useCallback } from "react";
import { useReactFlow } from "reactflow";

const Header = () => {
  const { setViewport } = useReactFlow();
  const screenWidth = window.innerWidth;
  const handleTransform = (
    x: number,
    y: number,
    zoom: number,
    duration: number
  ): void => {
    setViewport({ x, y, zoom }, { duration });
  };
  return (
    <header className="header">
      <nav className="nav">
        <button
          type="button"
          className="nav__btn"
          onClick={() => {
            if (screenWidth <= 425) {
              handleTransform(20, 100, 1, 800);
              return;
            }
            handleTransform(300, 200, 3, 800);
          }}>
          home
        </button>
        <button
          type="button"
          className="nav__btn"
          onClick={() => {
            handleTransform(-200, -100, 1, 1000);
          }}>
          projects
        </button>
        <button
          type="button"
          className="nav__btn"
          onClick={() => {
            handleTransform(1600, -400, 1, 1000);
          }}>
          about
        </button>
        <button
          type="button"
          className="nav__btn"
          onClick={() => {
            handleTransform(1200, 850, 1.5, 1000);
          }}>
          contact
        </button>
      </nav>
    </header>
  );
};

export default Header;

import "./Header.scss";
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
  const mobile = (): boolean => {
    return screenWidth <= 480;
  };
  return (
    <nav className="nav">
      <button
        type="button"
        className="nav__btn"
        onClick={() => {
          if (mobile()) {
            handleTransform(30, 200, 0.9, 800);
            return;
          }
          handleTransform(300, 200, 2, 800);
        }}>
        home
      </button>
      <button
        type="button"
        className="nav__btn"
        onClick={() => {
          if (mobile()) {
            handleTransform(-100, 0, 0.4, 1000);
            return;
          }
          handleTransform(-50, -100, 0.7, 1000);
        }}>
        projects
      </button>
      <button
        type="button"
        className="nav__btn"
        onClick={() => {
          if (mobile()) {
            handleTransform(500, -300, 0.6, 1000);
            return;
          }
          handleTransform(1100, -600, 1.2, 1000);
        }}>
        about
      </button>
      <button
        type="button"
        className="nav__btn"
        onClick={() => {
          if (mobile()) {
            handleTransform(500, 500, 0.8, 1000);
            return;
          }
          handleTransform(1200, 850, 1.3, 1000);
        }}>
        contact
      </button>
      <button
        type="button"
        className="nav__btn"
        onClick={() => {
          if (mobile()) {
            handleTransform(-320, 600, 0.5, 1000);
            return;
          }
          handleTransform(-800, 1300, 1.3, 1000);
        }}>
        links
      </button>
    </nav>
  );
};

export default Header;

import "@/components/layout/layout.css";
import "@/components/layout/global.css";
import "@/components/layout/dangerButton.css";

export const Layout = ({ children }) => {
  const text = "My First App";
  return (
    <div className="layout">
      <header className="layout-header">{text}</header>

      <main className="layout-main">{children}</main>

      <footer className="layout-footer">
        <p>&copy; 2025 My Website</p>
      </footer>
    </div>
  );
};

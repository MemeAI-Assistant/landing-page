// src/App.tsx
import MainPage from "./MainPage";
import PrivacyPage from "./PrivacyPage";

function App() {
  const basePath = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const normalizedPath =
    basePath && basePath !== "/" && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname;

  if (normalizedPath === "/privacy") {
    return <PrivacyPage />;
  }

  return (
    <div>
      <MainPage/>
    </div>
  );
}

export default App;

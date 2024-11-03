import { Suspense, lazy } from "react";
import { usePageView } from "./Firebase/Analytics";
import { Loading } from "./components/Loading";
import "./i18n";
import HelmetWrapper from "./components/HelmetWrapper";

const Header = lazy(() => import("./components/Header"));
const PasswordDisplay = lazy(() => import("./components/PasswordDisplay"));
const AccordionInfo = lazy(() => import("./components/Accordion"));

function App() {
  usePageView();
  return (
    <>
      <HelmetWrapper />
      <Suspense fallback={<Loading />}>
        <Header />
        <PasswordDisplay />
        <AccordionInfo />
      </Suspense>
    </>
  );
}

export default App;

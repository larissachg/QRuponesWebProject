import { HeroPage } from "./components/hero/HeroPage";
import { InfoPage } from "./components/info/InfoPage";
import { ClientsPage } from "./components/clients/ClientsPage";
import { FooterPage } from "./components/footer/FooterPage";
import { QuestionsPage } from "./components/questions/QuestionsPage";
import "./styles/style.scss";

function App() {
  return (
    <>
      <HeroPage />
      <InfoPage />
      <ClientsPage />
      <QuestionsPage />
      <FooterPage />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { AgeVerification } from "./components/AgeVerification/AgeVerification";
import { ShopWineFooter } from "./components/Footer/ShopWineFooter";
import { ShopWineHeader } from "./components/Header/ShopWineHeader";
import { BrowserRouter } from "react-router-dom";
import { MainContent } from "./components/MainContent/MainContent";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (!localStorage.getItem("ageVerified")) {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ageVerified", "true");
    setShowModal(false);
  };
  return (
    <>
      <BrowserRouter>
        <AgeVerification isOpen={showModal} handleAccept={handleAccept} />
        <ShopWineHeader />
        <MainContent />
        <ShopWineFooter />
      </BrowserRouter>
    </>
  );
}

export default App;

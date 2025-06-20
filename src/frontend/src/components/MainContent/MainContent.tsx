import { Route, Routes } from "react-router-dom";
import { ShopWineList } from "../List/ShopWineList";
import { Contacts } from "../Contacts/Contacts";
import { ListOfList } from "../ListOfLists/ListOfLists";
import { Favorites } from "../Favorites/Favorites";
import { Registration } from "../Registration/Registration";
export const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<ShopWineList />} />
      <Route path="/catalog" element={<ShopWineList />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/accessories" element={<ListOfList />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/user" element={<Registration />} />
    </Routes>
  );
};

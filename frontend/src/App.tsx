import { Button } from "components/ui/button";
import { HashRouter, Routes, Route } from "react-router-dom";
import { StartPage } from "pages/StartPage/StartPage";
import { ListsPage } from "pages/ListsPage/ListsPage";
import { PurchasePage } from "pages/PurchasePage/PurchasePage";
import { SendingPage } from "pages/SendingPage/SendingPage";

export const App = () => {
    return (
        <>
        <HashRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                {/* Другие экраны */}
                <Route path="/purchase" element={<PurchasePage />} />
                <Route path="/lists" element={<ListsPage />} />
                <Route path="/send" element={<SendingPage />} />
            </Routes>
        </HashRouter>

      </>
    );
}
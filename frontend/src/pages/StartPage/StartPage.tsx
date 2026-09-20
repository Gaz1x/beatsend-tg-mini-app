import { Button } from "components/ui/button";
import { useNavigate } from "react-router-dom";

export const StartPage = () => {

    const navigate = useNavigate();

  return (
    <>
      <h1>Начальная страница</h1>
      <Button variant="outline" onClick={() => navigate('/purchase')}>Оплата подписки</Button>
      <Button variant="outline" onClick={() => navigate('/lists')}>Страница списков</Button>
      <Button variant="outline" onClick={() => navigate('/send')}>Страница отправки писем</Button>
    </>
  );
};

import { Button } from "components/ui/button";
import { useNavigate } from "react-router-dom";
import { SquareArrowLeft } from "lucide-react";

export const SendingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Страница отправки сообщений</h1>
      <Button
        variant="outline"
        size="icon"
        aria-label="Submit"
        onClick={() => navigate("/")}
      >
        {" "}
        <SquareArrowLeft />{" "}
      </Button>
    </>
  );
};

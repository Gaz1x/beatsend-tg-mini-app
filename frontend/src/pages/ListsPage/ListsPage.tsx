import { Button } from "components/ui/button";
import { useNavigate } from "react-router-dom";
import { SquareArrowLeft } from "lucide-react";

export const ListsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Страница со списками</h1>
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

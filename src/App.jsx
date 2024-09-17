import { useEffect } from "react";
import { useCheckUserQueryQuery } from "./redux/api/authApi";
import RouteController from "./routes";
import { useNavigate } from "react-router-dom";

function App() {
  const navigete = useNavigate();
  const { isSuccess } = useCheckUserQueryQuery();
  useEffect(() => {
    if (!isSuccess) {
      navigete("/auth/sign-in");
    }
  }, [isSuccess]);
  return (
    <>
      <RouteController />
    </>
  );
}

export default App;

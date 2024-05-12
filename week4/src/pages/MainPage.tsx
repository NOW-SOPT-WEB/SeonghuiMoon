import { useParams } from "react-router-dom";

const MainPage = () => {
  const { id } = useParams();
  return <div>MainPage</div>;
};

export default MainPage;

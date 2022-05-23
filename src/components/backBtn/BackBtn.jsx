import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <button onClick={goBack} className="back">
      <span className="back__icon"></span>
      Back
    </button>
  );
};

export default BackBtn;

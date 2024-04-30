import Header from "@/components/Header";

interface HeaderContainerInterface {
  score: number;
  numPairs: number;
}

const HeaderContainer = ({ score, numPairs }: HeaderContainerInterface) => {
  const onClickResetBtn = () => {};
  return (
    <Header
      onClickResetBtn={onClickResetBtn}
      score={score}
      numPairs={numPairs}
    />
  );
};

export default HeaderContainer;

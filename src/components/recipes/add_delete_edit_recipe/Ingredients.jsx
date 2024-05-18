const Ingredients = ({
  updateNewRecipeData,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <div>
      <button onClick={() => handlePreviousStep()}>Wstecz</button>
    </div>
  );
};

export default Ingredients;

const DataLoadingProblemText = ({errorMessage}) => {
  return (
    <>
      <p className="text-4xl p-2 text-red-600">
        Please, reload the page again.
      </p>
      <p className="text-xl text-red-500">{errorMessage}</p>
    </>
  );
};

export default DataLoadingProblemText;

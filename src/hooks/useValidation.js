const useValidation = (regex, value) => {
  return regex.test(value);
};

export default useValidation;

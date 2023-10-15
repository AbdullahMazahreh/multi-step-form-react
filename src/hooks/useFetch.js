const useFetch = async (path) => {
  try {
    const data = await fetch(path);
    return data.json();
  } catch (err) {
    console.log(err);
  }
};

export default useFetch;

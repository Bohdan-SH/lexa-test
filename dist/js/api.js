let getData = async () => {
  let path = '../result.json';

  let res = await fetch(path);
  let data = await res.json();
  return data;
};

export default getData;

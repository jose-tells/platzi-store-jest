const getData = (api) => {
  return fetch(api)
    .then((data) => data.json())
    .then((data) => data)
    .catch((error) => error);
};

export default getData;

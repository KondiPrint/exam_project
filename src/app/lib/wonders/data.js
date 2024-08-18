import jWonders from './wonders.json';

export const getWonders = () => jWonders?.wonders;

export const getById = (id) => {
  console.log('#1 Lib Wonders: Fetching data for ID:', id);

  const wonder = jWonders?.wonders.find((wonder) => wonder.id === Number(id));

  console.log('#2 Lib Wonders: Data fetched:', wonder);
  return wonder;
};

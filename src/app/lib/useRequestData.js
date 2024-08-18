import { useState } from 'react';
import fetchData from './fetchData';

const useRequestData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const makeRequest = async (
    apiurl,
    method = 'GET',
    bodydata = null,
    headers = {},
    params = null
  ) => {
    setIsLoading(true);

    const { data, error } = await fetchData(apiurl, method, bodydata, headers, params);

    if (error) {
      setError(error);
      setData(null);
    } else {
      setData(data);
      setError(null);
    }

    setIsLoading(false);
  };

  return { data, isLoading, error, makeRequest };
};

export default useRequestData;

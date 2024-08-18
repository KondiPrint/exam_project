const fetchData = async (apiurl, method = 'GET', bodydata = null, headers = {}, params = null) => {
  let url = apiurl;
  if (params) {
    const query = new URLSearchParams(params).toString();
    url += `?${query}`;
  }

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (bodydata) {
    options.body = JSON.stringify(bodydata);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorText = await response.text(); // Grab the error message from the response
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: `An error occurred: ${error.message}` };
  }
};

export default fetchData;

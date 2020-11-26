import myConfig from '../config';

const getUrlWithParamsConfig = (endpointConfig: string, query: any) => {
  const url = {
    ...myConfig.client.server,
    ...myConfig.client.endpoint[endpointConfig as keyof typeof myConfig.client.endpoint].uri,
    query: {},
  };

  const copyQuery = { ...query };

  const pathname = Object.keys(copyQuery).reduce((acc, value) => {
    if (acc.indexOf(`{${value}}`) !== -1) {
      const result = acc.replace(`{${value}}`, copyQuery[value]);
      delete copyQuery[value];
      return result;
    }
    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = {
    ...copyQuery,
  };

  return url;
};

export default getUrlWithParamsConfig;

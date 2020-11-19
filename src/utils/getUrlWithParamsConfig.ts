import myConfig from '../config';

const getUrlWithParamsConfig = (endpointConfig: string, query: object) => {
  const url = {
    ...myConfig.client.server,
    ...myConfig.client.endpoint[endpointConfig as keyof typeof myConfig.client.endpoint].uri,
    query: {
      ...query,
      limit: 10,
    },
  };
  return url;
};

export default getUrlWithParamsConfig;

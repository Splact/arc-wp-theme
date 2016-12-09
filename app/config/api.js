const config = ({ isProd }) => {
  let mergedConfig = {
    timeout: 6000,
    themeNamespace: 'arc',
    wordpressNamespace: 'wp/v2',
    pageSize: 10,
  };

  if (isProd) {
    mergedConfig = Object.assign({}, mergedConfig, {
      baseURL: 'http://arc.localsite/wp-json',
    });
  } else {
    mergedConfig = Object.assign({}, mergedConfig, {
      baseURL: 'http://arc.localsite/wp-json',
    });
  }

  return mergedConfig;
};

export default config;

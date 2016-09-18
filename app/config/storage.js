const config = ({ pkg, isProd }) => {
  let mergedConfig = {
    options: {
      name: pkg.name,
      version: 1.0,
      storeName: `${pkg.name}-local`,
      description: `Persistent storage for ${pkg.name}`,
    },
    whitelist: [
      'settings',
      // You can also whitelist a nested key (example.foo)
      // [ 'example', 'foo' ]
    ],
    blacklist: [
      // Same as whitelist
    ],
    debounceTime: 2000,
  };

  if (isProd) {
    mergedConfig = Object.assign({}, mergedConfig, {
      key: 'STORAGE-KEY-FOR-PRODUCTION-ENV',
    });
  } else {
    mergedConfig = Object.assign({}, mergedConfig, {
      key: 'STORAGE-KEY-FOR-DEVELOPMENT-ENV',
    });
  }

  return mergedConfig;
};

export default config;

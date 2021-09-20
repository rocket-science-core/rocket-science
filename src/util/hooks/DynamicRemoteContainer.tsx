import React from 'react';
const useDynamicScript = url => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    const element = document.createElement('script');
    element.src = url;
    element.type = 'text/javascript';
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${url}`);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    ready,
    failed
  };
};

const DynamicRemoteContainer = ({ url, scope, module, ...props }) => {
  const { ready, failed } = useDynamicScript(url);

  if (!ready) {
    return  <h2>Loading dynamic script: {url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {url}</h2>;
  }

  const Component = React.lazy(
    () =>
      new Promise(resolve => {
        const moduleResolve = resolve;
        const react = require('react');
        const legacyShareScope = {
          react: {
            [react.version]: {
              get: () => new Promise(resolve => resolve(() => react)),
              loaded: true,
              from: 'webpack4'
            }
          }
        };
        new Promise(resolve => {
          resolve(window[scope].init(legacyShareScope));
        }).then(() => {
          window[scope].get(module).then(factory => {
            moduleResolve(factory());
          });
        });
      })
  );

  return (
    <React.Suspense fallback='Loading System'>
      <Component {...props} />
    </React.Suspense>
  );
};

export default DynamicRemoteContainer;
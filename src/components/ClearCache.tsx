import React, { useState, useEffect, FC } from 'react';
import packageJson from '../../package.json';
import moment from 'moment';

const buildDateGreaterThan = (latestDate: number, currentDate: number) => {
  const momLatestDateTime = moment(latestDate);
  const momCurrentDateTime = moment(currentDate);

  if (momLatestDateTime.isAfter(momCurrentDateTime)) {
    return true;
  } else {
    return false;
  }
};

function withClearCache<P extends object>(
  Component: React.ComponentType<P>,
): FC<P> {
  const ClearCacheComponent: FC<P> = props => {
    const [isLatestBuildDate, setIsLatestBuildDate] = useState(false);

    useEffect(() => {
      try {
        setIsLatestBuildDate(true);
      } catch (error) {
        setIsLatestBuildDate(true);
      }
    }, []);

    useEffect(() => {
      fetch(process.env.PUBLIC_URL + '/meta.json')
        .then(response => response.json())
        .then(meta => {
          const latestVersionDate = meta.buildDate;
          const currentVersionDate = packageJson.buildDate;

          const shouldForceRefresh = buildDateGreaterThan(
            latestVersionDate,
            currentVersionDate,
          );

          if (shouldForceRefresh) {
            console.log('Refreshing cache');
            setIsLatestBuildDate(false);
            refreshCacheAndReload();
          } else {
            console.log('Latest build, not refreshing cache');
            setIsLatestBuildDate(true);
          }
        })
        .catch(error => {
          console.log('error: ', error);
          setIsLatestBuildDate(true);
        });
    }, []);

    const refreshCacheAndReload = () => {
      if (caches) {
        // Service worker cache should be cleared with caches.delete()
        caches.keys().then(names => {
          for (const name of names) {
            caches.delete(name);
          }
        });
      }

      // delete browser cache and hard reload
      window.location.reload();
    };

    return (
      <React.Fragment>
        {isLatestBuildDate ? <Component {...props} /> : null}
      </React.Fragment>
    );
  };

  return ClearCacheComponent;
}

export default withClearCache;

import moment from 'moment';
import React, { useState, useEffect, FC } from 'react';

import packageJson from '../../package.json';

const buildDateGreaterThan = (latestDate: number, currentDate: number) => {
  const momLatestDateTime = moment(latestDate);
  const momCurrentDateTime = moment(currentDate);
  return momLatestDateTime.isAfter(momCurrentDateTime);
};

const REFRESH_LIMIT = 3;
const TIME_WINDOW = 60 * 1000; // 1 minute in milliseconds

function withClearCache<P extends object>(
  Component: React.ComponentType<P>,
): FC<P> {
  const ClearCacheComponent: FC<P> = (props) => {
    const [isLatestBuildDate, setIsLatestBuildDate] = useState(false);

    useEffect(() => {
      try {
        setIsLatestBuildDate(true);
      } catch (error) {
        setIsLatestBuildDate(true);
      }
    }, []);

    useEffect(() => {
      const fetchMetaFile = async () => {
        const isLocal = process.env.NODE_ENV === 'development';

        const metaUrl = isLocal
          ? './meta.json'
          : process.env.REACT_APP_PUBLIC_URL + '/meta.json';

        try {
          const response = await fetch(metaUrl);
          const meta = await response.json();

          const latestVersionDate = meta.buildDate;
          const currentVersionDate = packageJson.buildDate;

          const shouldForceRefresh = buildDateGreaterThan(
            latestVersionDate,
            currentVersionDate,
          );

          if (shouldForceRefresh) {
            const now = Date.now();
            const refreshStart = parseInt(
              localStorage.getItem('refreshStart') || '0',
              10,
            );
            const refreshAttempts = parseInt(
              localStorage.getItem('refreshAttempts') || '0',
              10,
            );

            if (
              refreshAttempts < REFRESH_LIMIT ||
              now - refreshStart > TIME_WINDOW
            ) {
              console.log('Refreshing cache');

              if (now - refreshStart > TIME_WINDOW) {
                localStorage.setItem('refreshStart', now.toString());
                localStorage.setItem('refreshAttempts', '1');
              } else {
                localStorage.setItem(
                  'refreshAttempts',
                  (refreshAttempts + 1).toString(),
                );
              }

              setIsLatestBuildDate(false);
              refreshCacheAndReload();
            } else {
              console.log(
                'Reached refresh limit within time window, not refreshing cache',
              );
              setIsLatestBuildDate(true);
            }
          } else {
            console.log('Latest build, not refreshing cache');
            localStorage.removeItem('refreshStart');
            localStorage.removeItem('refreshAttempts');
            setIsLatestBuildDate(true);
          }
        } catch (error) {
          console.log('error: ', error);
          setIsLatestBuildDate(true);
        }
      };

      fetchMetaFile();
    }, []);

    const refreshCacheAndReload = () => {
      if (caches) {
        // Service worker cache should be cleared with caches.delete()
        caches.keys().then((names) => {
          for (const name of names) {
            caches.delete(name);
          }
        });
      }

      // Hard reload web page
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

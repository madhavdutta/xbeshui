import { useCallback, useEffect, useState } from 'react';
import { useWindowListener } from './windowListener';
// import { Text } from '../../Typography/text/text';
import { Group } from '../../Layout/group/group';

export function useNetwork() {
  const [status, setStatus] = useState<{ isOnline: boolean }>({
    isOnline: true,
  });
  const handleConnectionChange = useCallback(
    () => setStatus((current) => ({ ...current })),
    []
  );

  useWindowListener('online', () => setStatus({ isOnline: true }));
  useWindowListener('offline', () => setStatus({ isOnline: false }));

  useEffect(() => {
    const _navigator = navigator as any;

    if (_navigator.connection) {
      setStatus({ isOnline: _navigator.onLine });
      _navigator.connection.addEventListener('change', handleConnectionChange);
      return () => _navigator.connection.removeEventListener('change', handleConnectionChange);
    }

    if (typeof _navigator.onLine === 'boolean') {
      // Required for Firefox and other browsers that don't support navigator.connection
      setStatus((current) => ({ ...current, isOnline: _navigator.onLine }));
    }

    return undefined;
  }, []);

  return status;
}

type NetworkStatusIndicatorProps = {
  noConnectionJsx: React.ReactNode
  connectionOKJsx: React.ReactNode
}

const NetworkStatusIndicator: React.FC<NetworkStatusIndicatorProps> = ({ noConnectionJsx, connectionOKJsx }) => {
  const { isOnline } = useNetwork()
  return (
    <Group className={`w-full`}>
      {isOnline ?
        connectionOKJsx
        :
        noConnectionJsx
      }
    </Group>
  )
}

export { NetworkStatusIndicator }

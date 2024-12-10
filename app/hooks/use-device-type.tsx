'use client'

import { useEffect, useState } from 'react';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isMac = /Macintosh/i.test(userAgent);

    if (isAndroid) {
      setDeviceType('android');
    } else if (isIOS) {
      setDeviceType('ios');
    } else if (isMac) {
      setDeviceType('mac');
    }  else {
      setDeviceType('other');
    }
  }, []);

  return deviceType;
};

export default useDeviceType;

import React, { useState, useEffect } from 'react';

const useUpdate = (
  effect: React.EffectCallback,
  deps?: React.DependencyList
) => {
  const [isFirst, setIsFirst] = useState<boolean>(true);
  return useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      return;
    }
    effect();
  }, deps);
};

export default useUpdate;

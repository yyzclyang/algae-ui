import { useState } from 'react';

const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [toggleValue, setToggleValue] = useState<boolean>(initialValue);

  return [
    toggleValue,
    () => {
      setToggleValue((prevToggleValue) => !prevToggleValue);
    }
  ];
};

export default useToggle;

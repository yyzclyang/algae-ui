import React, { useState } from 'react';
import useUpdate from './useUpdate';

const useControlState: <S>(
  defaultState: S | (() => S),
  controlState?: S | (() => S)
) => [S, React.Dispatch<React.SetStateAction<S>>] = (
  initialState,
  controlState?
) => {
  const [state, setState] = useState(
    controlState !== undefined ? controlState : initialState
  );
  useUpdate(() => {
    if (controlState !== undefined) {
      setState(controlState);
    }
  }, [controlState]);

  return [
    state,
    (value) => {
      if (controlState === undefined) {
        setState(value);
      }
    }
  ];
};

export default useControlState;

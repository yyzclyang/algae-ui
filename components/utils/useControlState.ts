import React, { useState } from 'react';
import useUpdate from './useUpdate';

const useControlState: <S>(
  defaultState: S | (() => S),
  controlState?: S | (() => S)
) => [S, React.Dispatch<React.SetStateAction<S>>] = (
  initialState,
  controlState?
) => {
  const [state, setState] = useState(controlState ?? initialState);

  useUpdate(() => {
    if (controlState !== undefined) {
      setState(controlState);
    }
  }, [controlState]);

  return [
    state,
    (setStateAction) => {
      if (setStateAction instanceof Function) {
        setStateAction(state);
      }
      if (controlState === undefined) {
        setState(setStateAction);
      }
    }
  ];
};

export default useControlState;

import { useState, useEffect } from 'react';
import '../style/diffuseAnimation.scss';

const useDiffuseAnimation: () => [string, () => void] = () => {
  const [animationClassName, setAnimationClassName] = useState<string>('');
  const [resetAnimationClock, setResetAnimationClock] = useState<
    ReturnType<typeof setTimeout>
  >();
  useEffect(() => {
    return () => {
      resetAnimationClock && clearTimeout(resetAnimationClock);
    };
  }, [resetAnimationClock]);

  const changeAnimationClassName = () => {
    setAnimationClassName('algae-ui-animation-diffuse');

    setResetAnimationClock(
      setTimeout(() => {
        setAnimationClassName('');
      }, 300)
    );
  };

  return [animationClassName, changeAnimationClassName];
};

export default useDiffuseAnimation;

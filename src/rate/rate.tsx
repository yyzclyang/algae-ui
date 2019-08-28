import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Star from './star';
import classNames from '../utils/classNames';
import scopedClassMaker from '../utils/scopedClassMaker';
import './style/rate.scss';

const sc = scopedClassMaker('algae-ui-rate');

interface RateProps {
  className?: string;
  count?: number;
  value?: number;
  defaultValue?: number;
  disabled?: boolean;
  tips?: string[];
  allowClear?: boolean;
  allowHalf?: boolean;
  onChange?: (value: number) => void;
  onHoverChange?: (value: number) => void;
}

const Rate: React.FunctionComponent<RateProps> = (props: RateProps) => {
  const {
    className,
    count,
    value,
    defaultValue,
    onChange,
    onHoverChange
  } = props;

  const [rateValue, setRateValue] = useState<number>(
    value !== undefined ? value : defaultValue!
  );
  const [hoverRateValue, setHoverRateValue] = useState<number>(0);

  useEffect(() => {
    if (value !== undefined) {
      setRateValue(value);
    }
  }, [value]);

  useEffect(() => {
    onHoverChange && onHoverChange(hoverRateValue);
  }, [hoverRateValue]);

  const renderStar = (count: number, rateStarValue: number) => {
    const starMouseEnterGenerator = (
      index: number
    ): React.MouseEventHandler<SVGSVGElement> => (
      e: React.MouseEvent<SVGSVGElement>
    ) => {
      if (hoverRateValue !== index + 1) {
        setHoverRateValue(index + 1);
      }
    };

    const starMouseMoveGenerator = (
      index: number
    ): React.MouseEventHandler<SVGSVGElement> => (
      e: React.MouseEvent<SVGSVGElement>
    ) => {
      if (hoverRateValue !== index + 1) {
        setHoverRateValue(index + 1);
      }
    };

    const starMouseLeaveGenerator = (
      index: number
    ): React.MouseEventHandler<SVGSVGElement> => (
      e: React.MouseEvent<SVGSVGElement>
    ) => {
      //TODO 离开后 0.3s 内不 hover 下一个 star 执行
      setHoverRateValue(0);
    };

    const starOnClickGenerator = (
      index: number
    ): React.MouseEventHandler<SVGSVGElement> => (
      e: React.MouseEvent<SVGSVGElement>
    ) => {
      if (value === undefined) {
        setRateValue(index + 1);
      }
      onChange && onChange(index + 1);
    };

    return Array.from({ length: count }).map((v, i) => {
      const type =
        (hoverRateValue ? hoverRateValue : rateStarValue) - i > 0
          ? 'full'
          : 'none';
      return (
        <Star
          key={i}
          type={type}
          onMouseEnter={starMouseEnterGenerator(i)}
          onMouseMove={starMouseMoveGenerator(i)}
          onMouseLeave={starMouseLeaveGenerator(i)}
          onClick={starOnClickGenerator(i)}
        />
      );
    });
  };

  return (
    <div className={classNames(sc(), className)}>
      {renderStar(count!, rateValue)}
    </div>
  );
};

Rate.displayName = 'Rate';
Rate.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number
};
Rate.defaultProps = {
  count: 5,
  defaultValue: 0
};

export default Rate;

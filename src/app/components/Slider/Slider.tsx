import type { ComponentProps } from 'react';
import classes from './Slider.module.css';
import classNames from 'classnames';

import ReactSlider from 'react-slider';

type SliderProps = ComponentProps<typeof ReactSlider>;

const Slider = (props: SliderProps) => {
  return (
    <ReactSlider
      className={classes.slider}
      thumbClassName={classes.thumb}
      trackClassName={classes.track}
      renderThumb={({ key, ...props }) => (
        <div {...props} key={key}>
          <span className={classes.innerThumb} />
        </div>
      )}
      renderTrack={({ key, ...props }, state) => (
        <div
          {...props}
          key={key}
          className={classNames(
            props.className,
            classes[`track--part-${state.index}`]
          )}
        />
      )}
      {...props}
    />
  );
};
export default Slider;

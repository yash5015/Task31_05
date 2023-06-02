import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function CurveSVGComp({
  fillColor,
  fillOpacity,
  strokeColor,
  strokeOpacity,
  strokeWidth,
}) {
  return (
    <Svg
      viewBox="102.05 148.17 299.62 80.661"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M102.05 148.17l14.274.043c14.274.043 42.823.129 60.664 11.136 17.84 11.007 24.973 32.935 35.671 47.554s24.963 21.928 39.228 21.928 28.529-7.31 39.228-21.928c10.699-14.619 17.831-36.547 35.661-47.511 17.831-10.964 46.36-10.964 60.624-10.964h14.264"
        fill={fillColor}
        opacity={fillOpacity}
        stroke={strokeColor}
        paintOrder="fill markers"
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        px
      />
    </Svg>
  );
}

export default CurveSVGComp;

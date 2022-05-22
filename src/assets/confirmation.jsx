import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

const Confirmation = (props) => (
  <Svg
    {...props}
    width={161}
    height={160}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M73.807 99.939a5.618 5.618 0 0 1-3.955-1.652L52.23 80.665c-2.152-2.153-2.152-5.708 0-7.86 2.153-2.153 5.708-2.153 7.86 0l13.717 13.717 27.335-27.334c2.152-2.153 5.707-2.153 7.859 0 2.153 2.152 2.153 5.707 0 7.86L77.762 98.337c-1.101 1.101-2.553 1.602-3.955 1.602Z"
      fill="#fff"
    />
    <Rect
      x={3.269}
      y={2.769}
      width={154.462}
      height={154.462}
      rx={77.231}
      stroke="#fff"
      strokeWidth={5.538}
    />
  </Svg>
)

export default Confirmation
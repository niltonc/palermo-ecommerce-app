import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Arrow = (props) => (
  <Svg
    width={7}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5 10 0 5l5-5 1.125 1.125L2.258 5l3.867 3.875L5 10Z"
      fill="#85868A"
    />
  </Svg>
)

export default Arrow

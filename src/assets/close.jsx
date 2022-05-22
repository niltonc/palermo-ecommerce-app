import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Close = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M23.026 18.352 16.674 12l6.352-6.352a3.291 3.291 0 0 0 0-4.674 3.291 3.291 0 0 0-4.674 0L12 7.326 5.648.974a3.291 3.291 0 0 0-4.674 0 3.291 3.291 0 0 0 0 4.674L7.326 12 .974 18.352a3.291 3.291 0 0 0 0 4.674 3.291 3.291 0 0 0 4.674 0L12 16.674l6.352 6.352a3.291 3.291 0 0 0 4.674 0c1.299-1.298 1.279-3.376 0-4.674Z"
      fill="CurrentColor"
    />
  </Svg>
)

export default Close
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Min = (props) => (
  <Svg
    width={10}
    height={3}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.835 0a1.169 1.169 0 0 1 0 2.337h-7.67a1.169 1.169 0 0 1 0-2.337h7.67Z"
      fill="#CCC"
    />
  </Svg>
)

export default Min

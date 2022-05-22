import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

const AddItem = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect x={0.5} y={0.5} width={29} height={29} rx={14.5} fill="#fff" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.835 16.159H16.15v2.69C16.15 19.487 15.637 20 15 20a1.16 1.16 0 0 1-1.165-1.15v-2.691h-2.67A1.16 1.16 0 0 1 10 15.008c0-.653.528-1.167 1.165-1.167h2.67v-2.69c0-.638.528-1.151 1.165-1.151s1.15.513 1.15 1.15v2.691h2.685c.637 0 1.165.514 1.165 1.167a1.16 1.16 0 0 1-1.165 1.15Z"
      fill="#8775FE"
    />
    <Rect x={0.5} y={0.5} width={29} height={29} rx={14.5} stroke="url(#a)" />
    <Defs>
      <LinearGradient
        id="a"
        x1={15}
        y1={0}
        x2={15}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#9A8BFF" />
        <Stop offset={1} stopColor="#6F5DE3" stopOpacity={0.98} />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default AddItem

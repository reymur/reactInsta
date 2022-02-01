import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const IconSvgPostPhoto = (props) => (
    <Svg
        width={40}
        height={10}
        className="bi bi-three-dots"
        fill="#000"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            fillRule="evenodd"
            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        />
    </Svg>
)

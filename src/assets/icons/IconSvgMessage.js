import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

export const IconSvgMessage = () => (
    <Svg
        height={62}
        width={72}
        xmlns="http://www.w3.org/2000/svg">
        <G fill="none" fillRule="evenodd">
            <Path
                d="M8 72h56a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8Z"
                fill="#fff"
            />
            <Path
                d="M36 12c-13.255 0-24 9.95-24 22.222 0 6.994 3.49 13.231 8.944 17.305V60l8.172-4.485c2.18.604 4.491.93 6.884.93 13.255 0 24-9.95 24-22.223S49.255 12 36 12Zm2.385 29.926-6.112-6.519-11.925 6.519L33.466 28l6.26 6.519L51.504 28 38.385 41.926Z"
                fill="#000"
            />
        </G>
    </Svg>
)

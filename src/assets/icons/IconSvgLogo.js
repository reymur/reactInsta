import * as React from "react"
import Svg, { LinearGradient, Stop, Path } from "react-native-svg"

export const IconSvgLogo = () => (
    <Svg
        width={70}
        height={70}
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
    >
        <LinearGradient
            gradientUnits="userSpaceOnUse"
            id="a"
            x1={162.129}
            x2={361.155}
            y1={349.815}
            y2={150.789}
        >
            <Stop
                offset={0}
                style={{
                    stopColor: "#fff33b",
                }}
            />
            <Stop
                offset={0.427}
                style={{
                    stopColor: "#ed0013",
                }}
            />
            <Stop
                offset={0.613}
                style={{
                    stopColor: "#db004a",
                }}
            />
            <Stop
                offset={0.877}
                style={{
                    stopColor: "#c30092",
                }}
            />
            <Stop
                offset={1}
                style={{
                    stopColor: "#ba00af",
                }}
            />
        </LinearGradient>
        <Path
            d="M315.5 130.4H196.1c-33.3 0-60.4 27.1-60.4 60.4v128.9c0 5 4 9 9 9s9-4 9-9V190.8c0-23.4 19-42.4 42.4-42.4h119.3c23.6 0 42.8 19 42.8 42.4v130.5c0 23.4-19.2 42.4-42.8 42.4h-117c-5 0-9 4-9 9s4 9 9 9h117c33.5 0 60.8-27.1 60.8-60.4V190.8c.1-33.3-27.2-60.4-60.7-60.4z"
            fill="url(#a)"
        />
        <LinearGradient
            gradientUnits="userSpaceOnUse"
            id="b"
            x1={208.913}
            x2={333.249}
            y1={302.988}
            y2={178.652}
        >
            <Stop
                offset={0}
                style={{
                    stopColor: "#fff33b",
                }}
            />
            <Stop
                offset={0.427}
                style={{
                    stopColor: "#ed0013",
                }}
            />
            <Stop
                offset={0.613}
                style={{
                    stopColor: "#db004a",
                }}
            />
            <Stop
                offset={0.877}
                style={{
                    stopColor: "#c30092",
                }}
            />
            <Stop
                offset={1}
                style={{
                    stopColor: "#ba00af",
                }}
            />
        </LinearGradient>
        <Path
            d="M256 189.4c-36.7 0-66.6 29.9-66.6 66.6s29.9 66.6 66.6 66.6c17.6 0 34.3-7 46.9-19.6 12.6-12.6 19.6-29.3 19.6-46.9.1-36.8-29.8-66.7-66.5-66.7zm0 115.2c-26.8 0-48.6-21.8-48.6-48.6s21.8-48.6 48.6-48.6 48.6 21.8 48.6 48.6c0 26.3-22.3 48.6-48.6 48.6zM332.2 182c0-5.8-4.7-10.6-10.6-10.6S311 176.1 311 182s4.7 10.6 10.6 10.6 10.6-4.8 10.6-10.6z"
            fill="url(#b)"
        />
    </Svg>
)

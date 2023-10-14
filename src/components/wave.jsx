import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export default function Wave() {
  return (
    <Svg
      id="eex8PDnRaOb1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
    >
      <g>
        <path
          d="M0.28436,451.357174c0,39.551917-26.958822-114.913522,430.417923,16.286084s372.253339-165.18742,888.754847-16.286084q516.501508,148.901336,523.481258-13.959501"
          transform="translate(83.757001 2.326583)"
          fill="none"
          stroke="#c71515"
          stroke-width="10.84"
        />
      </g>
      <path
        d=""
        transform="translate(.000001 0.000001)"
        fill="none"
        stroke="#3f5787"
        stroke-width="3.84"
      />
    </Svg>
  );
}

const Svg = styled.svg`
position: absolute;
top: 400px;
left: 0;
width: 100%;
color: red;
z-index: -1;
`;

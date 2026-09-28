import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>

const LOGOSvg = ({...props}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} id="Layer_2" data-name="Layer 2" viewBox="0 0 512.84 512.84">
        {/* <defs>
            <style>
            .cls-1 {
                fill: #d1c6b6;
                stroke-width: 0px;
            }
            </style>
    </defs> */}
    <g id="Layer_2-2" data-name="Layer 2">
        <polygon className="cls-1" strokeWidth={0} fill='currentColor' points="512.84 108.9 371.82 249.92 336.12 285.63 321.33 300.41 300.41 321.33 285.63 336.12 249.92 371.82 108.9 512.84 58.41 462.35 199.43 321.33 235.14 285.63 249.92 270.84 270.84 249.92 285.63 235.14 321.33 199.43 462.35 58.41 512.84 108.9"/>
        <g>
        <polygon className="cls-1" strokeWidth={0} fill='currentColor'  points="321.33 199.43 321.33 199.43 321.33 199.43 321.33 199.43"/>
        <path className="cls-1" strokeWidth={0} fill='currentColor'  d="m249.92,0v199.43L108.9,58.41l-50.49,50.49,141.02,141.02H0v71.41h199.43l-.6-.6c29.09-35.08,29.37-85.87.66-120.63l.61-.61c34.76,28.71,85.55,28.43,120.63-.66l.6.6V0h-71.41Z"/>
        </g>
    </g>
    </svg>
  )
}

export default LOGOSvg
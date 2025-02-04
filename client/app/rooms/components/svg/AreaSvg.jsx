import React from 'react'

const AreaSvg = ({className,width,height}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 17 18" fill="none">
  <path d="M0 4.04167V13.9583C0 14.7396 0.635375 15.375 1.41667 15.375H11.3333C12.1146 15.375 12.75 14.7396 12.75 13.9583V4.04167C12.75 3.26037 12.1146 2.625 11.3333 2.625H1.41667C0.635375 2.625 0 3.26037 0 4.04167ZM11.3348 13.9583H1.41667V4.04167H11.3333L11.3348 13.9583Z" fill="black"/>
  <path d="M8.49992 9.00004H9.91659V5.45837H6.37492V6.87504H8.49992V9.00004ZM6.37492 11.125H4.24992V9.00004H2.83325V12.5417H6.37492V11.125Z" fill="black"/>
</svg>
    </div>
  )
}

export default AreaSvg

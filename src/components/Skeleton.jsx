import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={500}
    height={465}
    viewBox="0 0 500 465"
    backgroundColor="#dfdddd"
    foregroundColor="#07dfbb"
    {...props}
  >
    <rect x="387" y="153" rx="0" ry="0" width="4" height="1" /> 
    <rect x="107" y="109" rx="0" ry="0" width="6" height="0" /> 
    <rect x="112" y="72" rx="0" ry="0" width="0" height="3" /> 
    <rect x="47" y="56" rx="0" ry="0" width="5" height="0" /> 
    <rect x="1" y="0" rx="15" ry="15" width="500" height="465" />
  </ContentLoader>
)

export default Skeleton
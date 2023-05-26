import React from 'react'
import "./Loader.css"

const Loader = ({classProp}) => {
  return <div className={classProp}>
			<i className="spinner"></i>
		</div>
}

export default Loader
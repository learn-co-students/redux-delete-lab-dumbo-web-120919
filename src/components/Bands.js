import React from 'react';
import Band from './Band';

const Bands = (props) => {

  const renderBands = () => {
    return props.bands.map( band => {
      return <Band key={band.id} band={band} deleteBand={props.deleteBand} />
    })
  }
  
  return (
    <div>
      {renderBands()}
    </div>
  )

}

export default Bands;
import React from 'react'
import "../../styles/stats.scss"
import StatTable from '../../Components/StatTable/StatTable'

function StatsPage() {
  return (
    <div className='stats-container'>
      <div className='stats'>
      <StatTable type="Goller"/>
      <StatTable type="Topla Oynama"/>
      <StatTable type="Kırmızı Kartlar"/>
      </div>
    
    </div>
  )
}

export default StatsPage
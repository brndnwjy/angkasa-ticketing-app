import React from 'react'
import styles from "./search.module.css";
import FlightCard from '../../components/module/flightCard';

const Search = () => {
  return (
    <>
    {/* content */}
    {/* <section className={styles.bodycontent}> */}
      {/* leftside */}
      {/* <section className={styles.leftside}>
        
          <div className='row'>
            <div className='col-md-4 '>
              <h1>aadwad</h1>
            </div>
            
          </div>
        
      </section> */}
      {/* rightside */}
      {/* <section className='rightside'>
       
          <div className='row'> */}
            <FlightCard/>
          {/* </div>
          
      </section>
      
    </section> */}
    </>
  )
}

export default Search
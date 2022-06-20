import React from 'react'
import styles from "./customer.module.css";
import CustomerMap from './customerMap';



const Customer = () => {
  return (
   <>
     {/* add navbar also here  */}
      {/* // customer story work started */}
      <div className={styles.customer_main_div}>
       
       <div className={styles.main_Div_Content}>
        {/* //starting div for creating navbar and heading  */}
          <div  className={styles.content1_div}>
               <h1 className={styles.content1}>CUSTOMER STORIES</h1>
          </div>

         <div className={styles.content2_div}>
             <h2 className={styles.content2}>Organizing The World</h2>
         </div>
         <div className={styles.content3_div}>
              <p className={styles.content3}>CoSchedule helps the world’s best marketing teams take control of their entire marketing strategy. See</p>
             <p className={styles.content3}>how these featured customers have found success.</p>

         </div>
        
       </div>
      </div>
  

          {/* for filter creating div */}

    <div className={styles.filter_main_div}>

        {/* <div className={styles.filter_div}>

        <h5 className={styles.filter_content1}>Filter:</h5>
                    <select  onChange={(e)=> setFilterBrand(e.target.value)}  className={styles.filter_content2} >
                        
                        <option value="all">All</option>
                        <option value="technology">Technology</option>
                        
                        <option value="finance">Finance &amp; Insurance</option>
                        <option value="agency">Agency</option>
                        <option value="higher-education">Higher Education</option>
                        <option value="hospitality">Hospitality &amp; Tourism</option>
                        <option value="health-wellness">Health &amp; Wellness</option>
                        <option value="b2b">B2B</option>
                        <option value="b2c">B2C</option>
                    </select>
        </div> */}
        <div className={styles.sort_main}>
            {/* story appending data */}

             <CustomerMap />
        </div>

{/* last main div heere i done */}

        <div className={styles.last_main_div}>

          <div className={styles.last_div}>
            <h1 className={styles.last_h1}>Ready to get your marketing strategy organized?</h1>
            <p className={styles.last_p}>Start Your Forever-Free CoSchedule Marketing Calendar.</p>
            <input className={styles.last_input} type="text" placeholder="Get Started Free"/>
            
          </div>
          {/* add footbar here */}
          {/* <div> footer </div> */}
        </div>

        
           
    </div>


{/* add footer also here */}
   </>
  )
}

export default Customer







import React, { useEffect, useState } from 'react'
// import data from "./data.json";
  import style from "./customer.module.css"

const Custo = () => {
    // console.log(data);
const [show, setShow]=useState([]);
const [filterBrand, setFilterBrand] = useState("");

    useEffect(()=>{

        fetch(`http://localhost:8080/customerInfo`)
        .then((res)=>res.json())
        .then((data)=>setShow(data))
        .catch((er)=>console.log(er))
    },[])

console.log(show);

    return (
        <>
          <div className={style.filter_div}>

         <h5 className={style.filter_content1}>Filter:</h5>
            <select  onChange={(e)=> setFilterBrand(e.target.value)}  className={style.filter_content2} >
                
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
           
</div>
   <hr  className={style.filter_hr} />
            <div className={style.sort_main_div}>


                {show 
                           
                           .filter((sorttype)=>{
                            if(filterBrand === ""){
                                return sorttype;
                            }
                            else{
                                return sorttype.sorttype===filterBrand;
                            }
                        })

                .map((item) =>

                    <div className={style.card} key={item.id}>

                        <div className={style.card_img}>
                            <img src={item.img} alt='images' />
                        </div>
                        <div className={style.card_header}>
                            <h3 className={style.para}>{item.heading}</h3>
                          
                        </div>
                        <div className={style.card_nextpage}>
                        <p className={style.para1}>{item.nextpage}</p> 
                        </div>
                    </div>
    )}
    </div>

        </>
    )
}

export default Custo;

import { useState, useEffect } from "react"


const ProductList = () => {
     const [ulvi,setulvi]=useState([])


     
     useEffect(()=>{
          fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=>setulvi(json))
     
          
        },[])
        
        
        
       
  return(
      <div className="flex flex-wrap">
{
     
          ulvi.map((item)=>(
             
                <div className="box w-2/6">
                  <div className="box-img">
                    <img src={item.image} alt="" />
                  </div>
                     <div className="box-text">
                      <h4>{item.title}</h4>
                     </div>
                </div>
            
          ))
          
          }
   </div>      
        
  
  //  <section className='w-full h-auto'>
  //   <div className="container w-4/5 m-auto">
  //     <div className="flex w-full flex-wrap">
  //     <div className="box w-2/6">
  //       <div className="img-box w-full h-auto">
  //         <img src="" alt="" className='w-full h-full' />
  //       </div>
  //       <div className="box-text">
  //         <h4></h4>
  //         <p></p>
  //       </div>
  //     </div>

  //     </div>
  //   </div>
  //  </section>
 
  )
}  


export default ProductList
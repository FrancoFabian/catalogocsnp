import Products from "./Products";
import img1 from '../img/001.jpg'
const Prodinamic = (props)=>{
    
    const DB = [{
        nombre:"Pareja de catrines",
        precio:12000,
        stock:4,
        Altura:"15 cm",
        Ancho:"20 cm",
        Largo:"30cm",
        Descripcion:"lmmdcmckmcdcmm kkrkrckdckdckd  kkdcd",
        Peso:"23kg",
        existencia:1,
        img:img1


    },{
        nombre:"Pareja de catrines",
        precio:15000,
        stock:4,
        Altura:"15 cm",
        Ancho:"20 cm",
        Largo:"30cm",
        Descripcion:"lmmdcmckmcdcmm kkrkrckdckdckd  kkdcd",
        Peso:"23kg",
        existencia:1,
        img:img1


    },{
        nombre:"Pareja de catrines",
        precio:"18000",
        stock:"4",
        Altura:"15 cm",
        Ancho:"20 cm",
        Largo:"30cm",
        Descripcion:"lmmdcmckmcdcmm kkrkrckdckdckd  kkdcd",
        Peso:"23kg",
        existencia:"1",
        img:img1


    }]
    return(
        <div className='Products-content'>
        {
            DB.map((objeto)=>(
                <div className="rew" key={objeto.name}>
                    <Products alebrijes={objeto}/>
                </div>
                
            ))

            
        }
        
        </div>

    );

}
export default Prodinamic
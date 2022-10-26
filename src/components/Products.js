
const Products = ({alebrijes})=>{

   
    return(
        
        <div className="contend-card">
            <div className='add'>
                <div className='txt'><p>Ver más</p></div>
                <div className='ictx'><i className="bi bi-images"></i></div>
                </div>
            <div className='divone'><img className='imgl' src={alebrijes.img}/></div>
            <div className='divtwo'><p className="text-card">{alebrijes.nombre}</p></div>
            <div className='divtres' id='divtres'><p className="text-cards">{alebrijes.precio} mx</p></div>
            
        </div>
        
        
    );

}
export default Products
function Card(prop){
    return <div className='Card'>
            <img src={prop.img} alt="" />
            <h1>{prop.user}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View Profile</button>
          </div>
}
export default Card;
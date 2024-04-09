import Image from '../../public/blacky.svg'

const Header = () => {
  return (
    <div className="w-full flex flex-col sm:flex-col lg:flex-row items-center md:justify-between lg:w-full h-25 pt-2 bg-purple-800">
        <div className="flex items-center pl-10">
            <img src={Image} id="agab" alt="Agab" className="w-20 h-full pl-1" />
        </div>
        <div className="flex flex-col align-center">
          <h1 className="text-white font-bold text-7xl mx-auto alfa-slab pt-2">GATS</h1>
          <p className="text-black font-bold text-xl lobster mx-auto pt-2 pb-3">Amics dels Gats i d'altres Animals de Catalunya</p>
        </div>
        <div className="flex flex-col  flex-start items-center pr-1">
            <a href="#" className="text-lg text-black rounded-md p-1 border-4 border-black lora mb-3 bg-white">bizzum: 999999999</a>
            <a href="#" className="text-lg text-black rounded-md p-1 border-4 border-black lora mb-3  bg-white">gatscat999@gmail.com</a>  
        </div>

    </div>
  )
}

export default Header
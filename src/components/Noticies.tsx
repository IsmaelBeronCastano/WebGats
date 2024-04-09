import Noticia from "./Noticia"
import cadells from '../assets/cadells_fons_vermell.jpg'
import cadells2 from '../assets/cadells_pati.jpeg'
import cadells3 from '../assets/cadells_mama.jpg'


const Noticies = () => {
return (
    <div className="container w-[90%] h-full flex justify-center bg-gray-300 pt-4 pb-4 rounde-md">
            <Noticia titol="Necessitem el teu ajut!" noticia={ `Estem desbordats/des...
            
            En època de cadells/es, sense pinso i amb deutes, necessitem mes que mai el teu ajut! 
            Si us plau, colabora!
            Bizzum: 999999999
            IBAN: ES12 1234 1234 1234 1234 1234
            
            Castellano:
            Necsitamos tu ayuda.
            estamos desbordados/as
            En época de cachorros/as, sin pienso y con deudas, necesitamos más que nunca tu ayuda.
            Por favor, colabora!
            
            Bizzum: 999999999
            IBAN: ES12 1234 1234 1234 1234 1234
            ` }
            foto1={cadells}
            foto2={cadells2}
            foto3={cadells3}
            />

    </div>
)
}

export default Noticies
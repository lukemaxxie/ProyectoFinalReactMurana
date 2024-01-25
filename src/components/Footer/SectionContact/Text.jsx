import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import logoPacha from "../../../assets/logoPacha.png";
export const Text = () => {
    return(
        <div className="col-xs-12 col-lg-4 ">

            <Link to="/">   <Image src={logoPacha} style={{ width:"200px"}}   /> </Link>
        <p className="mt-3">
         Registrate para poder realizar tu presupuesto o compra con nosotros. 
        </p>
      </div>
    )
}
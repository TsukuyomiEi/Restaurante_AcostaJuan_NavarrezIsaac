import { useState } from "react";
import { Plato } from "../../modelos/Plato";
import { ARREGLO_PLATOS } from "../../mocks/Plato-mocks";
import { ARREGLO_PLATOS_REGION } from "../../utilidades/dominios/DomRegion";

export const MenuListar = () => {
  const [arrPlatos] = useState<Plato[]>(ARREGLO_PLATOS);

  const obtenerNombre = (valor: string)=>{
    for(const objRegion of ARREGLO_PLATOS_REGION){
      if (objRegion.codRegion==valor) {
        return objRegion.nombreRegion;
      }
    }
  }


  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8 shadow-sm p-3 mb-5 bg-white rounded">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th style={{width: "5%"}}>Código</th>
    <th style={{width: "30%"}}>Nombre plato</th>
    <th style={{width: "20%"}}>Precio</th>
    <th style={{width: "25%"}}>Región</th>
    <th style={{width: "20%"}}>Imagen</th>
    </tr>
    </thead>
    <tbody>

      {arrPlatos.map((miPla: Plato)=>(
        <tr key={miPla.codPlato} className="align-middle">
          <td>{miPla.codPlato}</td>
          <td>{miPla.nombrePlato}</td>
          <td> <i className="bi bi-currency-dollar"></i>{miPla.precioPlato}</td>
          <td>{obtenerNombre(miPla.regionPlato)}</td>
          <td>
            <img
              src={miPla.imagenPlatoBase64}
              alt={miPla.nombrePlato}
              className="imagenListado"
            />
            <br />
            {miPla.imagenPlato}
          </td>
        </tr>
      ))}
    </tbody>
    </table>
    </div>
    </div>
    </>
  );
};

export const MenuAdmin = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>No.</th>
                <th style={{ width: "25%" }}>Nombre plato</th>
                <th style={{ width: "25%" }}>Acompañamiento</th>
                <th style={{ width: "15%" }} className="text-center">
                  Precio
                </th>
                <th style={{ width: "20%" }}>Región</th>
                <th style={{ width: "10%" }}>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bandeja paisa</td>
                <td>Con aguacate</td>
                <td className="text-center">35000</td>
                <td>Paisa</td>
                <td>
                  <a href="/menactu/1">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#2596be" }}
                    ></i>
                  </a>
                  &nbsp;
                  <i
                    className="fa-solid fa-eraser"
                    style={{ color: "#2596be" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ajiaco</td>
                <td>Con Arroz</td>
                <td className="text-center">28000</td>
                <td>Andina</td>
                <td>
                  <a href="/menactu/2">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#2596be" }}
                    ></i>
                  </a>
                  &nbsp;
                  <i
                    className="fa-solid fa-eraser"
                    style={{ color: "#2596be" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mute Santandereano</td>
                <td>Con Arroz</td>
                <td className="text-center">25000</td>
                <td>Santander</td>
                <td>
                  <a href="/menactu/3">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#2596be" }}
                    ></i>
                  </a>
                  &nbsp;
                  <i
                    className="fa-solid fa-eraser"
                    style={{ color: "#2596be" }}
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

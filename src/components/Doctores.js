
import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import DetalleDoctores from "./DetalleDoctores";

export default class Doctores extends Component {
  state = {
    doctores: [],
    idDoctor: -1,
  };

  loadDoctores = () => {
    var idHospital = this.props.idhospital;
    var request = "api/doctores/doctoreshospital/" + idHospital;
    var url = Global.apiDoctores + request;

    axios.get(url).then((response) => {
      console.log("Leyendo servicio doctores");

      this.setState({
        doctores: response.data,
        idDoctor: -1,
      });
    });
  };

  componentDidMount = () => {
    this.loadDoctores();
  };

  componentDidUpdate = (oldProps) => {
    if (this.props.idhospital != oldProps.idhospital) {
      this.loadDoctores();
    }
  };

  mostrarDetalleDoctor = (idDoctor) => {
    this.setState({
      idDoctor: idDoctor,
    });
  };

  render() {
    return (
      <div>
        <h2>
          Doctores del hospital:
          <span style={{ color: "red" }}>{this.props.idhospital}</span>
        </h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Apellido</th>

              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctores.map((doc, index) => {
              return (
                <tr key={index}>
                  <td>{doc.apellido}</td>

                  <td>
                    <button
                      onClick={() => {
                        this.mostrarDetalleDoctor(doc.idDoctor);
                      }}
                    >
                      Detalles
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.state.idDoctor != -1 && (
          <DetalleDoctores iddoctor={this.state.idDoctor} />
        )}
      </div>
    );
  }
}

// import React, { Component } from "react";
// import Global from "./Global";
// import axios from "axios";
// import DetalleDoctores from "./DetalleDoctores";

// export default class Doctores extends Component {
//   state = {
//     doctores: [],
//     doctorSeleccionado: null,
//   };

//   loadDoctores = () => {
//     var idHospital = this.props.idhospital;
//     var request = "api/Doctores/doctoreshospital/" + idHospital;
//     var url = Global.apiDoctores + request;

//     axios.get(url).then((response) => {
//       this.setState({
//         doctores: response.data,
//       });
//     });
//   };

//   componentDidMount = () => {
//     this.loadDoctores();
//   };

//   componentDidUpdate = (oldProps) => {
//     if (this.props.idhospital != oldProps.idhospital) {
//       this.loadDoctores();
//     }
//   };

//   mostrarDetalles = (doctor) => {
//     this.setState({
//       doctorSeleccionado: doctor,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Doctores</h2>
//         <h3>Id Hospital: {this.props.idhospital}</h3>
//         <table className="table table-border">
//           <thead>
//             <tr>
//               <th>Apellido</th>
//               <th>Detalles</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.doctores.map((doctor, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{doctor.apellido}</td>
//                   <td>
//                     <button onClick={() => this.mostrarDetalles(doctor)}>
//                       Detalles
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//         {/* Muestra el componente DetalleDoctores si hay un doctor seleccionado */}
//         {this.state.doctorSeleccionado && (
//           <DetalleDoctores doctor={this.state.doctorSeleccionado} />
//         )}
//       </div>
//     );
//   }
// }

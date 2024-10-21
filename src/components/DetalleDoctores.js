import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";

export default class DetalleDoctores extends Component {
  state = {
    doctor: null,
  };

  loadDoctor = () => {
    let idDoctor = this.props.iddoctor;
    let request = "api/doctores/" + idDoctor;
    let url = Global.apiDoctores + request;

    axios.get(url).then((response) => {
      this.setState({
        doctor: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadDoctor();
  };

  componentDidUpdate = (oldProps) => {
    if (this.props.iddoctor != oldProps.iddoctor) {
      this.loadDoctor();
    }
  };

  render() {
    return (
      <div>
        {this.state.doctor && (
          <ul className="list-group">
            <li className="list-group-item active">
              {this.state.doctor.apellido}
            </li>
            <li className="list-group-item">
              {this.state.doctor.especialidad}
            </li>
            <li className="list-group-item">
                {this.state.doctor.salario}
            </li>
            <li className="list-group-item">
                {this.state.doctor.idHospital}
            </li>
          </ul>
        )}
      </div>
    );
  }
}


// import React, { Component } from "react";
// import Global from "./Global";
// import axios from "axios";

// export default class DetalleDoctores extends Component {
//   render() {
//     var doctor = this.props.doctor;

//     if (!doctor) return null;

//     return (
//       <div>
//         <h2>Detalles del Doctor {doctor.apellido}</h2>
//         <table className="table table-border">
//           <thead>
//             <tr>
//               <th>Especialidad</th>
//               <th>Salario</th>
//               <th>Id Hospital</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{doctor.especialidad}</td>
//               <td>{doctor.salario}</td>
//               <td>{doctor.idHospital}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

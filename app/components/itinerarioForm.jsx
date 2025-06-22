import { useState, useEffect } from "react";
import CamposFormulario from "./camposFormulario";

export default function ItinerarioForm({ dispatch, eventoEditando, setEventoEditando }) {
    const [nombre, setNombre] = useState(""), [fecha, setFecha] = useState(""),
        [hora, setHora] = useState(""), [lugar, setLugar] = useState(""),
        [presupuesto, setPresupuesto] = useState("");

    useEffect(() => {
        if (eventoEditando) {
            setNombre(eventoEditando.nombre); setFecha(eventoEditando.fecha);
            setHora(eventoEditando.hora || ""); setLugar(eventoEditando.lugar || "");
            setPresupuesto(eventoEditando.presupuesto || "");
        }
    }, [eventoEditando]);

    const manejarEnvio = (e) => {
        e.preventDefault();
        dispatch({
            type: eventoEditando ? "EDITAR_EVENTO" : "AGREGAR_EVENTO",
            payload: {
                id: eventoEditando ? eventoEditando.id : Date.now(),
                nombre, fecha, hora, lugar, presupuesto
            },
        });
        [setNombre, setFecha, setHora, setLugar, setPresupuesto].forEach(fn => fn(""));
        setEventoEditando(null);
    };

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <form onSubmit={manejarEnvio} className="mb-4">
                    <div className="text-center mb-4">
                        <img src="/assets/itinerario.jpg" alt="Itinerario" style={{ maxWidth: "200px" }} />
                    </div>
                    <CamposFormulario 
                    {...{ nombre, setNombre, fecha, setFecha, hora, setHora, lugar, setLugar, presupuesto, setPresupuesto }} />
                    <div className="col-12 d-flex justify-content-center mt-4">
                        <button className="btn btn-success" type="submit">
                            {eventoEditando ? "Guardar cambios" : "Agregar evento"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function EventoCard({ evento, dispatch, setEventoEditando }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{evento.nombre}</h5>
          <p className="card-text">
            📅 {evento.fecha}
            {evento.hora && <> | 🕒 {evento.hora}</>}
            {evento.lugar && <><br />📍 {evento.lugar}</>}
            {evento.presupuesto && <><br />💰 Presupuesto: {evento.presupuesto}</>}
          </p>
          <div className="d-flex justify-content-end gap-2">
            <button className="btn btn-warning btn-sm"
              onClick={() => setEventoEditando(evento)}
            >
              Editar
            </button>
            <button className="btn btn-danger btn-sm"
              onClick={() => dispatch({ type: "ELIMINAR_EVENTO", payload: evento.id })}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
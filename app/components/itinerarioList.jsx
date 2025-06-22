import EventoCard from "./eventCard";

export default function ItinerarioLista({ eventos, dispatch, setEventoEditando }) {
  if (eventos.length === 0) {
    return <p className="text-muted">Aún no hay eventos en tu itinerario.</p>;
  }

  return (
    <div className="row">
      {eventos.map((evento) => (
        <EventoCard
          key={evento.id}
          evento={evento}
          dispatch={dispatch}
          setEventoEditando={setEventoEditando}
        />
      ))}
    </div>
  );
}

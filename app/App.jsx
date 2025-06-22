import { useReducer, useState } from "react";
import { itinerarioReducer, estadoInicial } from "./reducer/itinerarioReducer";
import ItinerarioForm from "./components/itinerarioForm";
import ItinerarioLista from "./components/itinerarioList";

export default function App() {
  const [state, dispatch] = useReducer(itinerarioReducer, estadoInicial);
  const [eventoEditando, setEventoEditando] = useState(null);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4"> Itinerario de Viaje</h1>

      <ItinerarioForm dispatch={dispatch} eventoEditando={eventoEditando}
        setEventoEditando={setEventoEditando}
      />

      <ItinerarioLista eventos={state.eventos} dispatch={dispatch}
        setEventoEditando={setEventoEditando}
      />
    </div>
  );
}

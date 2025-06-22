export const estadoInicial = {
  eventos: [],
};

export function itinerarioReducer(state, action) {
  switch (action.type) {
    case "AGREGAR_EVENTO":
      return {
        ...state,
        eventos: [...state.eventos, action.payload],
      };

    case "ELIMINAR_EVENTO":
      return {
        ...state,
        eventos: state.eventos.filter((evento) => evento.id !== action.payload),
      };

    case "EDITAR_EVENTO":
      return {
        ...state,
        eventos: state.eventos.map((evento) =>
          evento.id === action.payload.id ? action.payload : evento
        ),
      };

    default:
      return state;
  }
}

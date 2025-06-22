export default function CamposFormulario({
    nombre, setNombre,
    fecha, setFecha,
    hora, setHora,
    lugar, setLugar,
    presupuesto, setPresupuesto
}) {
    const crearInput = (type, value, set, placeholder, required = false) => (
        <input
            type={type}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={(e) => set(e.target.value)}
            required={required}
        />
    );

    return (
        <div className="row g-3">
            <div className="col-md-6">{crearInput("text", nombre, setNombre, "Nombre del evento", true)}</div>
            <div className="col-md-3">{crearInput("date", fecha, setFecha, "", true)}</div>
            <div className="col-md-3">{crearInput("time", hora, setHora, "(Opcional)")}</div>
            <div className="col-md-6">{crearInput("text", lugar, setLugar, "Lugar")}</div>
            <div className="col-md-6">{crearInput("text", presupuesto, setPresupuesto, "Presupuesto")}</div>
        </div>
    );
}

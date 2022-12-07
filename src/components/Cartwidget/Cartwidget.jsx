
const Cardwidget = () => {
    return (
        <div className="navbar__carrito">
            <button className="boton__carrito">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path d="M14.387 5.16h-2.79V3.152a3.21 3.21 0 0 0-6.42 0V5.16H2.384l-.383 9.58a1.2 1.2 0 0 0 1.2 1.252h10.4a1.207 1.207 0 0 0 1.2-1.22l-.414-9.612ZM5.98 3.152a2.407 2.407 0 1 1 4.814 0V5.16H5.98V3.153Zm7.623 12.036h-10.4a.4.4 0 0 1-.4-.417l.352-8.81h2.022v1.6h.8v-1.6h4.814v1.6h.8v-1.6h2.023l.384 8.826a.4.4 0 0 1-.395.4v.001Z"></path></svg>
                <span className="item__total">3</span>
            </button>
        </div>
    )
}

export default Cardwidget;
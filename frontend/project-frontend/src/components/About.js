import './About.css'

function About() {

    return(
        <div className="info">
            <h1><span class="icon">👾</span> BARTECA <span class="icon">👾</span></h1>
            <p><span class="icon">👤</span> Autora: <strong>Andrea Castilla Cocera</strong></p>
            <p><span class="icon">👨‍💻</span> Grado: <strong>Grado Superior de Desarrollo de Aplicaciones Multiplataforma</strong></p>
            <p>Alguna vez has ido a un lugar y no sabías donde tomarte una simple caña... Aquí está tu solución, en esta aplicación encontrarás una biblioteca especial,<br></br>
                donde no se buscan libros, si no bares, que ahora mismo están más cotizados.
            </p>
            <p>Además, podrás hacer una reserva en ese bar que te llama tanto la atención y evitarte encontrarte con un lugar lleno sin mesa donde comer o tomar algo.
            </p>
            <p>
                Esta aplicación está realizada con React y respaldada con un backend realizado con Spring. Si te interesa ese mundillo no dudes en investigar, un mundo<br></br>
                lleno de muchos conocimientos y diferentes salidas para cualquier idea.
            </p>
        </div>
    );

}

export default About;
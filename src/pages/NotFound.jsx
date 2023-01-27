import { Link } from 'react-router-dom'

const NotFound = () => {
    return <>
        <div id='oopss'>
            <div id='error-text'>
                <img src='/sad404.svg' alt='Error 404' />
                    <span className='notFound'>Página no encontrada</span>
                    <p className="p-a">La página no fue encontrada</p>
                    <Link to='/' className="back">Volver al inicio</Link>
            </div>
        </div>
    </>
}

export default NotFound
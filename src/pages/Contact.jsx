import React from 'react'

import '../css/contact.css'

const Contact = () => {
  return (
    <div className="contentContact">
        <form action="https://formsubmit.co/gerencia@enermotors.com" method='POST'>
            <div className="inputs">
                <input type="text" name='Nombre-Cliente' placeholder='Nombre Completo' required/>
                <input type="email" name='email' placeholder='Correo' required/>
            </div>
            <input type="text" name='Asunto' placeholder='Asunto del Mensaje' required/>
            <textarea name="Mensaje" className='messageArea' placeholder='Mensaje' required></textarea>
            <button className='btnSend'>
                <i className='bx bx-mail-send'></i>
                <p>Enviar</p>
            </button>
        </form>
        <div className="infoContact">
            <h3>Necesitas ayuda?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur similique sint nisi saepe doloremque ab, sed quasi ipsa, iusto vitae necessitatibus asperiores illum fugit! Recusandae eius reprehenderit dolorum suscipit molestiae!</p>
        </div>
    </div>
  )
}

export default Contact
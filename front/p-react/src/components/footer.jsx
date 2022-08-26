import React, {useRef} from 'react'
import '../css/footer.css'
import LogoBranco from '../assets/logo_white.png'
import Instagram from '../assets/instagram.png'
import Facebook from '../assets/facebook.png'

const Footer = () => {

    const name_form = useRef(null);
    const email_form = useRef(null);
    const phone_form = useRef(null);

    function checkForm(e) {
        e.preventDefault();
        if (name_form.current.value == ""){
               document.getElementById("Error-Message-Form").style.display = "block"
               document.getElementById("i-name").style.display = "block"      
        } 
        if (email_form.current.value == ""){
            document.getElementById("Error-Message-Form").style.display = "block"
            document.getElementById("i-email").style.display = "block"
        }

        if (phone_form.current.value == ""){
            document.getElementById("Error-Message-Form").style.display = "block"
            document.getElementById("i-phone").style.display = "block"
        } else {
            window.location.reload()
        }
       
    }
    


    return (
      <div className='footer'>

            <div className='email'>
                <h1> <a>Cadastre-se </a> e receba nossos Rankings </h1>
        
                <h2 id='Error-Message-Form' style={{display: 'none'}}>Campo inválido: <span id='i-name' style={{display: 'none'}}>Nome</span> <span id='i-email' style={{display: 'none'}}>E-mail</span><span id='i-phone' style={{display: 'none'}}>Telefone</span> 
                </h2>

                
                <form onSubmit={checkForm}>
                    <input type="text" id="Nome" name="input-name" placeholder='NOME' ref={name_form}/>
                    <input type='email' id="E-mail" name="input-email" placeholder='E-MAIL' ref={email_form}/>
                    <input type='tel' id="Telefone" name="input-phone" placeholder='TELEFONE' ref={phone_form}/> <br/>
                    <input type="submit" value="Enviar" id='Submit-form'/>
                </form>
            </div>

            <div className='footer-infos'>

                <div className='column-1'>
                    <img src={LogoBranco} alt='logo branco' id='LogoBranco'/>
                    <div>
                        <img src={Instagram} alt='instagram' id='Instagram'/>
                        <img src={Facebook} alt='facebook' id='Facebook'/>
                    </div>
                </div>

                <p className='column-2'>
                <b> A Podmetrics </b> é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>

                <p className='column-3'>
                    <a> Política de privacidade</a> <br/>
                    <a> Termos de uso</a>
                </p>

            </div>

      </div>
    )
} 

export default Footer
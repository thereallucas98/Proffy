import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/61020789?s=460&u=c31e4f97295bff2d7a618cfaad20126b10e80476&v=4" alt="David Lucas" />
                <div>
                    <strong>David Lucas</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
            <br /> <br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>
            <footer>
                <p>
                    Preço/Hora
                <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
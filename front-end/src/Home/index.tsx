import { useState } from "react";
import * as S  from "./styles";
import Cadastro from "../Cadastrado/index";
import Login from "../Login";

const Home = () => {
    const [abrirCadastro, setAbrirCadastro] = useState(false);
    const [abrirLogin, setAbrirLogin] = useState(false)
    
    return (
        <S.Container>
            <S.Logo>
                <img height={300} src="https://twitter-copia-cxso.vercel.app/twitter.png" alt="" />
            </S.Logo>
            <S.Content>
                <h1>Acontecendo agora</h1>
                <h2>Inscreva-se hoje</h2>
                <S.CriarConta onClick={() => setAbrirCadastro(true)}>Criar conta</S.CriarConta>
                {abrirCadastro && <Cadastro onClose={() => setAbrirCadastro(false)} />}
                <p>
                    Ao se inscrever, você concorda com os <a href="https://x.com/pt/tos">Termos de Serviço</a> e a <a href="https://x.com/pt/privacy">Política de Privacidade</a>, incluindo o <a href="https://help.x.com/pt/rules-and-policies/x-cookies">Uso de Cookies</a>.
                </p>
                <h3>Já tem uma conta?</h3>
                <S.Entrar onClick={() => setAbrirLogin(true)}>Entrar</S.Entrar>
                {abrirLogin && <Login onClose={() => setAbrirLogin(false)} />}
            </S.Content>
        </S.Container>
    )
}

export default Home;
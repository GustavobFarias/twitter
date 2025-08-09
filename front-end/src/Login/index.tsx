import { useState } from "react";
import * as S from "./styles";


const Login = ({ onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handLeSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                alert("Login realizado com sucesso!");
                console.log("Usuario logado", data);
                onClose();
                return;
            } else {
                const errorData = await response.json();
                alert("Erro ao realizar login: " + (errorData.error || "Erro desconhecido"));
                console.error(errorData);
                return;
            }
        } catch (error) {
            console.error("Erro ao fazer login", error);
        }
    }

    return (
        <>
            <S.Body>
                <S.Container>
                    <S.ModalHeader>
                        <div onClick={onClose} className="btn-fechar">
                            <span ></span>
                        </div>
                        <img height={25} src="https://twitter-copia-cxso.vercel.app/twitter.png" alt="" />
                    </S.ModalHeader>
                    <S.Content>
                        <h2>Entrar no X</h2>
                        <form onSubmit={handLeSubmit}>
                            <input
                                type="text" 
                                placeholder="Nome do usuario" 
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input 
                                type="password" 
                                placeholder="senha" 
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className="avancar">Avançar</button>
                        </form>
                    </S.Content>
                </S.Container>
            </S.Body>
        </>
    )
}

export default Login;
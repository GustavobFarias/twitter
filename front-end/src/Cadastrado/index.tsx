import { useState } from "react";
import * as S from "./styles";

const Cadastrado = ({ onClose }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("As senhas são diferentes!");
            return;
        } 

        try {
            const response = await fetch("http://localhost:8000/api/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, email, password, password2: confirmPassword  })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Conta criada com sucesso!");
                console.log("Usuário criado", data);
                onClose();
            } else {
                alert("Erro ao criar conta.");
                console.error(data);
            }
        } catch (error) {
            console.error("Erro ao registrar", error);
        }
    };

    return (
        <S.Body>
            <S.Container>
                <S.ModalHeader>
                    <div onClick={onClose} className="btn-fechar">
                        <span></span>
                    </div>
                    <img height={25} src="https://twitter-copia-cxso.vercel.app/twitter.png" alt="" />
                </S.ModalHeader>
                <S.Content>
                    <h2>Criar sua conta</h2>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Nome do usuário" 
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Repita a senha" 
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                        <button type="submit">Criar conta</button>
                    </form>
                </S.Content>
            </S.Container>
        </S.Body>
    );
};

export default Cadastrado;

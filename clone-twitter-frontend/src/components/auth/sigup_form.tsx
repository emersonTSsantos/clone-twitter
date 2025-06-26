"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SignUpForm = () => {
    const router = useRouter();
    const [nameField, setNameField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [passwordField, setPasswordField] = useState("");

    const handleEnterButton = () => {
        router.replace("/signin");
    }

    return (
        
        <>

            <Input
                placeholder="Nome Completo" 
                value={nameField}
                onChange={(text) => setNameField(text)}
            />

            <Input
                placeholder="Digite seu email" 
                value={emailField}
                onChange={(text) => setEmailField(text)}
            />
    
            <Input
                placeholder="Digite sua senha" 
                value={passwordField}
                onChange={(text) => setPasswordField(text)}
                password
            />

            <Button 
                label="Criar conta"
                onclick={handleEnterButton}
                size={1}
            />
        </>
    );
}
import {object,ref,string} from 'yup'

export const registerSchema = object({
    confirmPassword:string()
    .required("el requerido")
    .oneOf([ref("password"),null],"Las contraseñas no coinciden"),
    password:string()
                .required("Contraseña requerida")
                .min(8,"Minimo 8 caracteres")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"Debe contener mayuscula, minuscula y numero"),
    email:string()
            .required("El email es requerido")
            .email("Email no valido"),
    
})
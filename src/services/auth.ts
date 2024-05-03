import { removeCookie, setCookie } from "@/lib/cookie-manager"
import { CreateAccountForm, Credential, ResponseStatus, SuccessLoginResponse } from "@/types/auth"
import toast from "react-hot-toast"
import httpClient from "@/services/http"

export async function authenticate(credential: Credential): Promise<ResponseStatus> {
  try {
    const response = await httpClient.post<SuccessLoginResponse>(`/login`, credential)

    setCookie('access_token',response.data.access_token)
    const message = "Bienvenue ! Vous avez été connecté avec succès 🎉😊"    
    toast(message)
    return { success: true, message }

  } catch (error) {

    toast.error("Identifiant ou mot de passe incorrect !")
    return { success: false, message: "Identifiant ou mot de passe incorrect !" }
  }
}

export async function createAccount(createAccountForm: CreateAccountForm): Promise<ResponseStatus> {
  try {
    const response = await httpClient.post<SuccessLoginResponse>(`/register`,createAccountForm)

    setCookie('access_token',response.data.access_token)
    const message = "Bienvenue ! Votre compte a été créé avec succès 🎉😊"    
    toast(message)
    return { success: true, message }

  } catch (error: any) {
    const message = error?.response?.data?.message || "Une erreur s'est produite"
    toast.error(message)

    console.log(error)
    return { success: false, message }
  }
}

export async function logout(): Promise<ResponseStatus> {
  try {
    await httpClient.post('/logout')
    
    removeCookie('access_token')
    
    return { success: true, message: 'Logout' }
  } catch (error) {
    console.log(error)
    return { success: false, message: 'Error' }
  }

}


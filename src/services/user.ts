import { BASE_API_URL } from "@/lib/constants"
import User from "@/models/user"
import ky, { HTTPError } from "ky"
import { cookies } from "next/headers"

export async function getUserInfo(): Promise<User|null> {
  try {
    const response = await ky(`${BASE_API_URL}/user-info`, {
      method: 'get',
      hooks: {
        beforeRequest: [
          request => {
            const cookieStore = cookies()
            const accessToken = cookieStore.get('access_token')?.value
            if(accessToken){
              request.headers.set('Authorization', `Bearer ${accessToken}`);
            }
          },
        ]
      }
    }).json() as User
    return response
  } catch (error) {
    if (error instanceof HTTPError && error.response) {
      const errorResponseData = await error.response.json()
      console.log(errorResponseData);
      
      return null
    } else {
      console.log(error)
      // Gérer d'autres types d'erreurs (réseau, etc.)
      return null
    }
  }
}


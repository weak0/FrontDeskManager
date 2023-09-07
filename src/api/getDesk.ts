import { adminToken, connectionString } from "../config"
import { IDesk } from "../interfaces/IDesk"

export const getDesk = async (id: number, token : string): Promise<IDesk> => {
    const response = await fetch(`${connectionString}/desks/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
            "Authorization": adminToken
        },
    })

    if (!response.ok) {
        const data = await response.text()
        throw new Error(data)
    }    
    const details = await response.json();
    return details

}
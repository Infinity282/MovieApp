// import { ServerError, ServerQuery } from '../interfaces/server'

// export const ServerService = {
//   async getFromServer<T>(route: string, query?: ServerQuery): Promise<T | ServerError | null> {
//     try {
//       const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/${route}`, {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_SERVER_API_KEY}`,
//         },
//       })
//       const responseBody = response.json()
//       if (response.ok) {
//         return responseBody
//       } else {
//         return responseBody
//       }
//     } catch (err) {
//       console.log(err)
//       return null
//     }
//   },
// }

export {}

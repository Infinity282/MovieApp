export type ServerError = {
  success: boolean
  status_code: number
  status_message: string
}

export type ServerQuery = {
  [key: string]: string
}

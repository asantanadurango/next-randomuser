export interface APIResponse {
  results: APIUser[]
}

interface APIUser {
  name: APIName
  picture: APIPicture
}

interface APIPicture {
  large: string
  medium: string
  thumbnail: string
}

interface APIName {
  title: string
  first: string
  last: string
}

export interface User {
  id: string
  name: Name
  picture: string
}

interface Name {
  first: string
  last: string
}

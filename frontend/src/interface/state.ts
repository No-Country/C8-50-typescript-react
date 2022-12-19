export interface State{
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
    country: string,
    city: string,
    latitude: string,
    longitude: string
}
export interface StateDetails{
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
    country: string,
    city: string,
    latitude: string,
    longitude: string,
    operation: {title: string},
    quantity: [quantity: string, feature: { title: string}],
    coment: [id: string, coment: string, user: {email: string, img: string, id: string}]
    type: {title: string}
}
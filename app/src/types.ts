export interface User {
	_id: string
	name: string
	phone:string
	points: number
	money: number
	created_at: string
}

export interface Metadata {
	tokenId: number	
	image: string
	name: string
	head: string
	body: string
	promoId: string
	promoDescription: string
}
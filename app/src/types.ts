export interface User {
	_id: string
	name: string
	phone:string
	points: number
	money: number
	created_at: string
}

export interface Metadata {
	tokenId: string	
	image: string
	name: string
	head: string
	rarity: string
	body: string
	promoId: string
	promoDescription: string
	redeemed: boolean
	approved: boolean
}

export interface Collectible{
  id: number,
  promoID: number,
  userID: string,
  reedemed: boolean,
  approved: boolean
}
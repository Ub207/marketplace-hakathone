export interface Product {
    _id: string
    _type: string
    name: string
    image: any
    price: number
    originalPrice?: number
    description: string
    sizes: string[]
    slug: string
    category: string
    stock_quantity: number
    rating: number
    reviews: number
    tags: string[]
  }
  
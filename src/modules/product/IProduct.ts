export default interface IProduct {
    // id: string
    // name: string
    // description: string
    // price: number
    // category?:string

    add(product: IProduct):void
    // edit(product: IProduct):Promise<IProduct>
    // findAndEdit(id: string):Promise<IProduct>
    // filter(filters: string[]):Promise<IProduct>
    findById(id: string):Promise<IProduct>
    // findAndRemove(id: string):Promise<IProduct>
    findByName(name: string):Promise<any>
    addToCart(customer:any,product:any):Promise<any>
    booksNamesAndPrices():Promise<any[]>

}
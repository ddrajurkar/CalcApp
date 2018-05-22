export class user{

id:number
Email:string
pass:string
cpass:string
gender:string
tnc:boolean

constructor(Values: Object = { }){
Object.assign(this, Values)
}

}

import { TSlider } from '@/app/UI/MainTamplateForProducts'
import { createSlice } from '@reduxjs/toolkit'
import type { Action, PayloadAction } from '@reduxjs/toolkit'
type TCartProduct =TSlider &{
qty:number
}

export interface IProduct {
  products: TCartProduct[]
}

const initialState: IProduct = {
  products:[]
}
const getSavedCard=()=>{
  if(typeof window !=="undefined"){
    const data=localStorage.getItem("basket")
    return data? JSON.parse(data) :[]
  }
  return []
}

export const addToBasket = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    hydrateCArd:(state,action:PayloadAction<any[]>)=>{
     state.products=action.payload
    },
    //add product
    setProduct: (state ,action:PayloadAction<TSlider>) => {
      const product=action.payload
      const exists=state.products.find((p)=>(p.id===product.id))
      if(exists){
        exists.qty+=1
      }else{
        state.products.push({...product,qty:1})
      }
      localStorage.setItem("basket", JSON.stringify(state.products))
    },
    deleteOne: (state,action:PayloadAction<string>) => {
       const id=action.payload
       const exist=state.products.find((p)=>(p.id===id))
       if (!exist) return
       if(exist.qty>1){
        exist.qty-=1
       }else{
        state.products.filter((p)=>(p.id!==id))
       }
       localStorage.setItem("basket", JSON.stringify(state.products))
    },
    clearAll: (state) => {
      state.products=[]
      localStorage.removeItem("basket")
    },
    setQty: (state,action:PayloadAction<{id:string,qty:number}>) => {
      const {id,qty}=action.payload
      const findItem=state.products.find((p)=>(p.id===id))
      if(findItem){
        findItem.qty=qty
      }
      localStorage.setItem("basket", JSON.stringify(state.products))
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProduct,clearAll,deleteOne,setQty,hydrateCArd } = addToBasket.actions

export default addToBasket.reducer
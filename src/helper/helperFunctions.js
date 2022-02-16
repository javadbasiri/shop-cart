

export const shorten = (text)=>{

    const splited = text.split(" ")
    const newText = splited[0] +" "+splited[1];
    return newText

}

export const isInCart=(state,id)=>{
    const result = !!state.selectedItems.find(item=>item.id === id)
    return result
}

export const quantity =(state , id)=>{
    const index = state.selectedItems.findIndex(item=>item.id === id)
    if(index == -1){
        return false
    }else{
        return state.selectedItems[index].quantity
    }
}
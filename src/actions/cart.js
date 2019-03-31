export const addToCart = (item) => {
    console.log('Adding item', item)
    return {
        type: 'add', 
        item
    }
}

export const removeFromCart = (item)=>{
    console.log('removing item', item)
    return {
        type: 'remove',
        item
    }
}

export const setUser = (user_id) => {
    console.log('setting user')
    return {
        type: 'add_user',
        user_id
    }
}


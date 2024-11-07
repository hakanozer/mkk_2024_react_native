import AsyncStorage from '@react-native-async-storage/async-storage';

export const likesAddRemove = async (id: number) => {
  const stObj = await AsyncStorage.getItem('likes')
  if(stObj != null) {
    // daha önce var
    const likesArr = JSON.parse(stObj) as number[]
    const index = likesArr.findIndex(item => item === id)
    if (index == -1) {
      // id yok
      likesArr.push(id)
    }else {
      // id var
      likesArr.splice(index, 1)
    }
    const jsonString = JSON.stringify(likesArr)
    await AsyncStorage.setItem('likes', jsonString )
  }else {
    // daha önce yok
    const likesArr = [id]
    const jsonString = JSON.stringify(likesArr)
    await AsyncStorage.setItem('likes', jsonString )
  }
}


export const allLikes = async () => {
  const stObj = await AsyncStorage.getItem('likes')
  if(stObj != null) { 
    const likesArr = JSON.parse(stObj) as number[]
    return likesArr
  }else {
    return []
  }
}

export const likesControl = async (id: number) => {
  const stObj = await AsyncStorage.getItem('likes')
  if(stObj != null) { 
    const likesArr = JSON.parse(stObj) as number[]
    const index = likesArr.findIndex(item => item === id)
    return index === -1 ? false : true 
  }else {
    return false
  }
}
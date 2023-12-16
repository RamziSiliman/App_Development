export const getSlotsRemaining =(occupants, capacity)=>{
    let remainingSlots = capacity - occupants.length 
    if(remainingSlots == 0){
        return `the room is full`
    }else if(remainingSlots == 1){
        return `there is only 1 slot remaining`
    }else{
        return `there are ${remainingSlots} slots available`
    }
}

export const getRoomType=(capacity)=>{
if(capacity == 1){
    return `Single Room`
}else if(capacity == 2){
    return `Double Room`
}
else if(capacity == 3){
    return `Tripple Room`
}
else{
    return `This room can take ${capacity} students`
}
}
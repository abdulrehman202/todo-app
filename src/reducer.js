export const initialState = {
    todoList: [],
    taskId: 1,
    loggedInUser: null,
}

export const reducer = (state, action)=>{
    switch(action.type)
    {
        case 'ADD_TO_LIST':
            let currentTask = [state.taskId]
            
            return{
                ...state,
                todoList: [...state.todoList, action.item],
                taskId: parseInt(currentTask)+1,
            }
        
        case 'MARK_AS_COMPLETED':
            let newList = [...state.todoList]
            const index = state.todoList.findIndex((item)=>{return item.id === action.id});
            newList[index].status = 'complete';
            return{
                ...state,
                todoList: newList,
            }
        
        default:
            return{}
    }
}

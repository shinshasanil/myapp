export const ADD_TODO = 'ADD_TODO'
export let todoID = 1;
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const DELETE_TODO = 'DELETE_TODO'
export function addTodo (text){
    return {
        type:ADD_TODO,
        id:todoID++,
        date:new Date().toISOString().slice(0, 10),
        text
    }
}
 export function toggleTodo (id){
     return {
         type:TOGGLE_TODO,
         id
     }
 }
 export const setVisibilityFilter = (filters) => ({
    type: 'SET_VISIBILITY_FILTER',
    filters
  })

  export function deleteTodos(id) {
      return{
        type:DELETE_TODO,
        id
      }
  }
export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
})

export const toggleComplete = todo => ({
  type: 'TOGGLE_COMPLETE',
  todo
})
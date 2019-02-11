import API from '@/services/API'

export default {
  addTodo (todo) {
    return API().post('addTodo', {
      todo: todo // add our data to the request body
    })
  },
  deleteTodo (todoID) {
    return API().post('deleteTodo', {
      todoID: todoID // add our data to the request body
    })
  },
  getToDos () {
    return API().get('todo')
  }
}

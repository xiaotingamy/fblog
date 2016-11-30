import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions';
import { combineReducers } from 'redux';
const { SHOW_ALL } = VisibilityFilters;

// const initialState = {
// 	visibilityFilter: VisibilityFilters.SHOW_ALL,
// 	todos:[]
// };

// function todoApp(state = initialState, action) {
// 	switch (action.type) {
// 		case SET_VISIBILITY_FILTER :
// 			return Object.assign({}, state, {
// 				visibilityFilter: action.filter
// 			})
// 		case ADD_TODO :
// 			return Object.assign({}, state, {
// 				todos: [
// 					...state.todos,
// 					{
// 						text: action.text,
// 						completed: false
// 					}
// 				]
// 			})
// 		case TOGGLE_TODO : 
// 			return object.assign({}, state, {
// 				todos: state.todos.map((todo,index) => {
// 					if(index == action.index) {
// 						return Object.assign({}, todo, {
// 							completed: !todo.completed
// 						})
// 					}
// 					return todo
// 				})
// 			})
// 		default:
// 			return state
// 	}
// }

function todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		case TOGGLE_TODO:
			return state.map((todo,index) => {
				if (index == action.index) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}
				return todo
			})
		default:
			return state
	}
}

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

// function todoApp(state = {}, action) {
// 	return {
// 		visibilityFilter: visibilityFilter(state.visibilityFilter, action),
// 		todos: todos(state.todos, action)
// 	}
// }

// 重构todoApp
const todoApp = combineReducers({
	visibilityFilter,
	todos
})
export default todoApp;


// 注意上面的写法和下面完全等价：

export default function todoApp(state= {}, action) {
	return {
		visibilityFilter: visibilityFilter(state.visibilityFilter, action),
		todos: todos(state.todos, action)
	}
}
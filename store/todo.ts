import {defineStore} from 'pinia';
import {v4 as uuid} from 'uuid';

export interface Todo {
	id: string;
	title: string;
	done: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export interface TodoAdd {
	title: string;
}

export interface TodoUpdate {
	title?: string;
	done?: boolean;
}

export interface TodoState {
	todos: Todo[];
}

export const useTodoStore = defineStore('todoStore', {
	state: (): TodoState => ({
		todos: [],
	}),
	getters: {
		getById: (state: TodoState) => (id: string) => {
			return state.todos.find((item: Todo) => item.id === id);
		},
		getOrderedTodos: (state: TodoState) =>
			[...state.todos].sort(
				(a: Todo, b: Todo) => a.createdAt.getTime() - b.createdAt.getTime()
			),
	},
	actions: {
		add(partialTodo: TodoAdd) {
			const todo: Todo = {
				id: uuid(),
				...partialTodo,
				done: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			};
			this.todos.push(todo);
		},
		remove(id: string) {
			this.todos = this.todos.filter((todo: Todo) => todo.id != id);
		},
		update(id: string, update: TodoUpdate) {
			const index = this.todos.findIndex((todo) => todo.id === id);
			this.todos[index] = {
				...this.todos[index],
				...update,
				updatedAt: new Date(),
			};
		},
	},
});

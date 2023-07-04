import {createPinia, setActivePinia} from 'pinia';
import {describe, test, expect, beforeAll, beforeEach, afterEach} from 'vitest';
import {Todo, useTodoStore} from './todo';

beforeAll(() => {
	setActivePinia(createPinia());
});

describe('useTodoStore', () => {
	let store: ReturnType<typeof useTodoStore>;

	beforeEach(() => {
		store = useTodoStore();
	});

	afterEach(() => {
		store.$reset();
	});

	test('creates a store', () => {
		expect(store).toBeDefined();
	});

	test('initializes with empty todos', () => {
		expect(store.todos).toStrictEqual([]);
	});

	test('creates a todo', () => {
		store.add({title: 'Test my code!'});
		expect(store.todos[0]).toBeDefined();
		expect(store.todos[0].title).toBe('Test my code!');
	});

	test('gets by id', () => {
		store.add({title: 'Test'});
		const addedTodo = store.todos[0];
		const todo = store.getById(addedTodo.id);
		expect(todo).toStrictEqual(addedTodo);
	});

	test('gets ordered todos', () => {
		const todo: Todo = {
			id: '',
			title: '',
			updatedAt: new Date(),
			createdAt: new Date(),
			done: false,
		};
		const todos: Todo[] = [
			{
				...todo,
				createdAt: new Date(2019, 1, 1),
			},
			{
				...todo,
				createdAt: new Date(2021, 1, 1),
			},
			{
				...todo,
				createdAt: new Date(2020, 1, 1),
			},
		];

		store.todos = todos;
		const orderedTodos = store.getOrderedTodos;

		expect(orderedTodos[0].createdAt.getFullYear()).toBe(2019);
		expect(orderedTodos[1].createdAt.getFullYear()).toBe(2020);
		expect(orderedTodos[2].createdAt.getFullYear()).toBe(2021);
	});

	test('removes a todo', () => {
		store.add({title: 'test'});
		const todo = store.todos[0];
		store.remove(todo.id);
		expect(store.todos).toStrictEqual([]);
	});

	test('updates a todo', () => {
		store.add({title: 'test'});
		const todo = store.todos[0];
		store.update(todo.id, {done: true});
		const updatedTodo = store.todos[0];
		expect(updatedTodo.done).toBe(true);
	});

	test('updates a todo title', () => {
		store.add({title: 'test'});
		const todo = store.todos[0];
		store.update(todo.id, {title: 'tested'});
		const updatedTodo = store.todos[0];
		expect(updatedTodo.title).toBe('tested');
	});
});

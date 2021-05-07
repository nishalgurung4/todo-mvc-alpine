window.todos = function () {
	return {

		filter: 'all',

		todos: [],

		editedTodo : null,

		newTodo: '',

		get active() {
			return this.todos.filter(todo => !todo.completed);
		},

		get completed() {
			return this.todos.filter(todo => todo.completed);
		},

		get filteredTodos() {
			return {
				all: this.todos,
				active: this.active,
				completed: this.completed
			}[this.filter];
		},

		addTodo() {
			this.todos.push({
				id: this.todos.length + 1,
				body: this.newTodo,
				completed: false
			});
			this.newTodo = ''
		},

		deleteTodo(todo) {
			let position = this.todos.indexOf(todo);

			this.todos.splice(position, 1);
		},

		editTodo(todo) {
			todo.cachedBody = todo.body;
			this.editedTodo = todo;
		},

		editComplete(todo) {
			if (todo.body.trim() === '') {
				return this.deleteTodo(todo);
			}
			this.editedTodo = null;
		},

		cancelEdit(todo) {
			todo.body = todo.cachedBody;

			this.editedTodo = null;

			delete todo.cachedBody;

		}

	}
}

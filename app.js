window.vue = new Vue({
	el: "#app",
	data: {
		text: '',
		todos: []
	},
	methods: {
		addTodo() {
			if (this.text.trim().length > 0) {
				this.todos.push({ text: this.text, isCompleted: false });
				this.text = '';
			}
		},
		removeTodo(index) {
			this.todos.splice(index, 1);
		},
		changeCompletedStatu(index) {
			this.todos[index].isCompleted = !this.todos[index].isCompleted;
		},
		deleteAllCompleted() {
			let temp = [];
			this.todos.forEach((todo) => {
				if (!todo.isCompleted) {
					temp.push(todo);
				}
			})
			this.todos = temp;
		}
	},
	computed: {
		completedTotal() {
			let total = 0;
			this.todos.forEach((todo) => {
				if (todo.isCompleted) { total ++ }
			})
			return total;
		}
	},
	created() {
		fetch('./data.json')
			.then((data) => { return data.json() })
			.then((data) => {
				this.todos = data.todos;
				})
	}
})
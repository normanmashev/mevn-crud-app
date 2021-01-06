<template>
	<div class="create">
		<div class="wrapper">
			<h1>Создание нового поста</h1>
			<form action="/create" @submit.prevent="createPost()">
				<div class="form__group field">
					<input
						v-model="title"
						type="input"
						class="form__field"
						placeholder="Название"
						name="title"
						id="title"
						required
					/>
					<label for="title" class="form__label">Название</label>
				</div>
				<div class="form__group field">
					<input
						v-model="description"
						type="input"
						class="form__field"
						placeholder="description"
						name="description"
						id="description"
						required
					/>
					<label for="description" class="form__label">Описание</label>
				</div>

				<button class="button button-purple">Создать</button>
			</form>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Create",
	data: () => ({
		title: "",
		description: "",
	}),
	methods: {
		async createPost() {
			let posts = [];
			await axios
				.get("api/posts/")
				.then(res => (posts = res.data))
				.catch(error => console.error(error));

			/*
      @ Maximum number of posts: 10
      */
			if (posts.length < 10) {
				await axios
					.post("api/posts/", {
						title: this.title,
						description: this.description,
					})
					.then(res => {
						this.$swal.fire("Пост создан!", "", "success").then(() => {
							this.$router.push("/");
						});
					})
					.catch(error => console.error(error));
			} else {
				this.$swal
					.fire({
						icon: "error",
						title: "Упс...",
						text: "Вы достигли максимального количества постов",
						footer:
							"<b>Попробуйтие удалить один из постов и попробовать снова</b>",
					})
					.then(() => {
						this.$router.push("/");
					});
			}
		},
	},
};
</script>

<style lang="scss" scoped>
$primary: #44355b;
$secondary: #44355b;
$white: #333;
$gray: #333;
.create {
	padding: 30px 0 100px;
}
form {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	max-width: 500px;
	margin: 0 auto;
	padding: 40px 40px 0;
}
</style>

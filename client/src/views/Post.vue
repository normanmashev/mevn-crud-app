<template>
	<div class="post">
		<div class="wrapper">
			<h1>Редактирование поста</h1>
			<h4>Пост был создан: {{ date | dateFilter }}</h4>
			<Loader v-if="!mounted" />
			<form v-else>
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

				<div class="buttons-block">
					<button class="button button-purple" @click.prevent="updatePost()">
						Обновить
					</button>
					<button class="button button-danger" @click.prevent="deletePost()">
						Удалить
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/app/Loader";

export default {
	name: "Post",
	data: () => ({
		title: "",
		description: "",
		date: "",
		mounted: false,
	}),
	components: { Loader },
	methods: {
		async deletePost() {
			await this.$swal
				.fire({
					title: "Удалить данный пост?",
					showDenyButton: true,
					showCancelButton: false,
					confirmButtonText: `Да`,
					denyButtonText: `Нет`,
				})
				.then(result => {
					if (result.isConfirmed) {
						axios
							.delete(`api/posts/${this.$route.params.id}`)
							.then(res => {
								this.$swal.fire("Пост удален!", "", "success");
								this.$router.push("/");
							})
							.catch(error => console.error(error));
					}
				});
		},
		async updatePost() {
			await axios
				.put(`api/posts/${this.$route.params.id}`, {
					title: this.title,
					description: this.description,
				})
				.then(res => {
					this.$swal.fire("Пост обновлен!", "", "success").then(() => {
						this.$router.push("/");
					});
				})
				.catch(error => console.error(error));
		},
	},
	async mounted() {
		await axios
			.get(`api/posts/${this.$route.params.id}`)
			.then(res => {
				this.title = res.data.title;
				this.description = res.data.description;
				this.date = res.data.date;
			})
			.catch(error => console.log(error));
		this.mounted = true;
	},
};
</script>

<style lang="scss" scoped>
.post {
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
.buttons-block {
	button {
		min-width: 135px;
		color: #fff;
		&:first-child {
			margin-right: 10px;
		}
	}
}
</style>

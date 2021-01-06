<template>
	<div class="post">
		<div class="post__info">
			<h1 class="title">{{ post.title }}</h1>
			<p class="description">{{ post.description | descriptionFilter }}</p>
			<legend class="date">{{ post.date | dateFilter }}</legend>
		</div>
		<div class="post__buttons">
			<button
				class="button-icon button-primary"
				@click="$router.push(`/${post._id}`)"
			>
				<i class="fas fa-edit"></i>
			</button>
			<button class="button-icon button-danger" @click="deletePost()">
				<i class="fas fa-trash-alt"></i>
			</button>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Post",
	props: ["post"],
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
							.delete(`api/posts/${this.post._id}`)
							.then(res => {
								this.$swal.fire("Пост удален!", "", "success").then(() => {
									this.$router.go();
								});
							})
							.catch(error => console.error(error));
					}
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.post {
	display: grid;
	grid-template-columns: 4fr 1fr;
	width: 100%;
	padding: 20px;
	margin: 10px 0 0;
	border: 1px solid #31263e;
	border-radius: 7px;
	color: #fff;
	background-color: #44355b;
	max-height: 200px;
	&:hover {
		background-color: #392c4d;
	}
}
.post__info {
	display: flex;
	flex-direction: column;
	justify-content: cetner;
}
.post__buttons {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	button:first-child {
		margin: 0 0 10px;
	}
}
.date {
	font-size: 1rem;
	font-weight: 700;
}
.description {
	overflow: hidden;
}
@media screen and (max-width: 568px) {
	.post {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.post__buttons {
		margin-top: 10px;
		flex-direction: row;
		button:first-child {
			margin: 0 10px 0 0;
		}
	}
}
</style>

<template>
	<div class="home">
		<div class="wrapper">
			<Loader v-if="!mounted" />
			<div class="posts" v-else-if="mounted && posts.length">
				<h1>Количество постов: {{ posts.length }}</h1>
				<Post v-for="post of posts" :key="post._id" :post="post" />
			</div>
			<div class="empty" v-else>
				<h1>Упс, видимо, постов пока что нет :D</h1>
				<router-link to="/create" class="link"
					>Но вы можете создать его</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Post from "@/components/Post";
import Loader from "@/components/app/Loader";

export default {
	name: "Home",
	data: () => ({
		posts: [],
		mounted: false,
	}),
	components: {
		Post,
		Loader,
	},
	async mounted() {
		await axios
			.get("api/posts/")
			.then(res => {
				this.posts = res.data;
			})
			.catch(error => console.error(error));
		this.mounted = true;
	},
};
</script>

<style lang="scss" scoped>
.home {
	padding: 30px 0 100px;
}
.posts {
	display: flex;
	flex-direction: column;
	max-width: 500px;
	margin: 0 auto;
}
.link {
	text-decoration: underline;
}
.empty {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>

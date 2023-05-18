<template>
  <div class="container">
    <header><div class="logo"></div></header>

    <h2 class="header">
      Як заробляти <span class="orange">від $100</span> на день на налаштуванні
      рекламних кампаній Facebook+Instagram
    </h2>
    <div>
      <div class="lessons-list">
        <ul v-if="posts && posts.length">
          <li
            v-for="(post, index) of posts"
            :class="isActive ? 'lesson-link-active' : 'lesson-link'"
            @click="console.log(posts[index].video_url)"
            :key="post"
          >
            <router-link :to="post.title">
              <p>
                <strong>{{ post.title }}</strong>
              </p>
              <p>{{ post.subtitle }}</p>
            </router-link>
          </li>
        </ul>

        <ul v-if="errors && errors.length">
          <li v-for="(index, error) of errors" :key="index">
            {{ error.message }}
          </li>
        </ul>
      </div>
      <section class="content">
        <slot />
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Default-layout",

  data: () => ({
    isActive: 0,
    posts: [],
    errors: [],
  }),

  created() {
    axios
      .get(`http://localhost:8081/db.json`)
      .then((response) => {
        this.posts = response.data;
      })
      .catch((e) => {
        this.erros.push(e);
      });
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: auto;
}

.logo {
  background-image: url(../../public/i/atom_logo.svg);
  width: 100px;
  height: 75px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
}

.header {
  max-width: 75%;
  margin: auto;
}
.orange {
  color: orange;
}

.lessons-list {
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: end;
}

.lesson-link-active {
  background: orange !important;
}

.lesson-link {
  width: 400px;
  height: 70px;
  background: rgb(128, 128, 128, 0.5);
  display: block;
}

.lesson-link > a {
  text-decoration: none;
  color: whitesmoke;
  display: block;
  height: 100%;
}

footer {
  background-color: blue;
  height: 70px;
}

.content {
}

ul {
  list-style: none;
  margin: 0;
  color: yellow;
  padding: 0;
}

li {
  color: yellow;
  margin: 0 5px;
}

.link {
  color: yellow;
  text-decoration: none;
}
</style>

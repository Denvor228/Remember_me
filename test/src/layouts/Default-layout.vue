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
          <router-link
            :class="isActive ? 'lesson-link-active' : 'lesson-link'"
            @click="isActive = true"
            v-for="index of posts"
            :key="index"
            :to="index.title"
          >
            <p>
              <strong>{{ index.title }}</strong>
            </p>
            <p>{{ index.subtitle }}</p>
          </router-link>
        </ul>

        <ul v-if="errors && errors.length">
          <li v-for="index of errors" :key="index">
            {{ index.message }}
          </li>
        </ul>
      </div>
      <section class="content">
        <!--Элемент, который при отрисовке будет заменен на ваш view-->
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
    isActive: false,
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
}

li {
  color: yellow;
  display: inline;
  margin: 0 5px;
}

.link {
  color: yellow;
  text-decoration: none;
}
</style>

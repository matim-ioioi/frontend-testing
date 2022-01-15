<template>
  <div class="home">
    <h1>Home page</h1>
    <my-button
      @click="handleModalOpen"
      content="click me"
      data-test="dialog-open"
    />
    <my-dialog v-model="isModalVisible" header="header" data-test="dialog">
      <template #body>
        <div>body of modal</div>
      </template>
      <template #footer>
        <my-button
          content="Fetch repos"
          @click="fetchSomeData"
          data-test="fetch"
        />
      </template>
    </my-dialog>
    <div v-if="repos && repos.length">
      <div v-for="repo in repos" :key="repo.name" data-test="repo">
        <span>Name: {{ repo.name }}, </span>
        <span>URL: {{ repo.url }}, </span>
        <span>last update: {{ repo.lastUpdate }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyButton from "@/components/not_to_be_tested/MyButton.vue";
import MyDialog from "@/components/to_be_tested/MyDialog.vue";

@Component({
  components: {
    MyButton,
    MyDialog,
  },
})
export default class Home extends Vue {
  isModalVisible = false;
  repos: any = null;

  handleModalOpen(): void {
    this.isModalVisible = true;
  }

  fetchSomeData(): void {
    fetch("https://api.github.com/users/matim-ioioi/repos")
      .then(async (response: any) => {
        const resp = await response.json();

        this.repos = resp.map((repo: any) => {
          return {
            name: repo.name,
            url: repo.html_url,
            lastUpdate: repo.updated_at,
          };
        });
      })
      .finally(() => {
        this.isModalVisible = false;
      });
  }
}
</script>

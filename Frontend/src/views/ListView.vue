<script>
import Add from "../components/Add.vue";
import TodoList from "../components/TodoList.vue";
import TodoAdd from "../components/TodoAdd.vue";
import Header from "../components/Header.vue";

export default {
  components: {
    Add,
    TodoList,
    TodoAdd,
    Header,
  },
};
</script>

<template>
  <main class="min-h-screen w-full flex flex-col  p-8 bg-pink-50">
    <div class="w-full h-fit justify justify-center flex flex-col mt-3 px-56">
      <Header />
      <TodoList />
    </div>
  </main>
</template>

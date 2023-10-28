<script>
import Add from "../components/Add.vue";
import TodoAdd from "../components/TodoAdd.vue";

export default {
  components: {
    Add,
    TodoAdd,
  },
  data() {
    return {
      taskStore,
      isModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.isModal = !this.isModal;
    },
  },
};
</script>

<template>
  <span class="font-bold text-4xl text-center text-black my-10">List Tugas</span>
  <div class="w-full flex justify-start">
    <button
      @click="toggleModal"
      class="px-6 py-2 bg-rose-300 text-white font-bold mb-2 w-fit border-[1.5px] hover:scale-110 transition-all hover:ease-in-out hover:duration-300 rounded-xl text-sm"
    >
      Add Event
    </button>
    <Add @close-modal="toggleModal" :isModal="isModal">
      <TodoAdd @close-modal="toggleModal" />
    </Add>
  </div>
</template>

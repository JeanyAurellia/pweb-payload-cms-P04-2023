<template>
  <div class="flex justify-center items-center mt-20">
    <div class="p-4 w-1/2">
      <h2 class="text-3xl font-bold text-pink-400 mb-4 flex items-center">
        Edit Tugas
      </h2>
      <div class="space-y-4">
        <div class="flex flex-col">
          <label class="text-gray-700 font-semibold mb-3">Tugas</label>
          <input
            v-model="inputNewTask"
            class="border rounded-md px-4 py-2 border-pink-300 focus:outline-none focus:border-pink-500"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-gray-700 font-semibold mb-3">Kategori</label>
          <input
            v-model="inputKategoriBaru"
            class="border rounded-md px-4 py-2 border-pink-300 focus:outline-none focus:border-pink-500"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-gray-700 font-semibold mb-3">Deadline</label>
          <input
            v-model="inputDeadlineBaru"
            type="date"
            class="border rounded-md px-4 py-2 border-pink-300 focus:outline-none focus:border-pink-500"
          />
        </div>
      </div>
      <button
        @click="updateTask(this.id)"
        class="px-6 py-3 mt-6 bg-pink-600 text-white font-bold text-md rounded-lg hover:bg-pink-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
      >
        Edit
      </button>
    </div>
  </div>
</template>


<script>
import qs from "qs";

export default {
  emits: ["close-modal"],
  data() {
    return {
      taskStore,
      inputTask: "",
      inputKategori:"",
      kategori:[],
      inputDeadline: "",
      id: this.$route.params.id
    };
  },
  methods: {
    async updateTask() {
  const stringifiedQuery = qs.stringify({
    where: {
      id: {
        contains: this.id,
      },
    },
  },{ addQueryPrefix: true });

  try {
    const req = await fetch(`http://localhost:3000/api/todos/${stringifiedQuery}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          inputTask: this.inputTask,
          inputKategori: this.inputKategori,
          inputDeadline: this.inputDeadline,
        }),
    });
    const data = await req.json();
    if (data) {
      window.alert('Todo telah dibuat');
      this.$router.push({ path: '/' });
    }
  } catch (err) {
    console.log(err);
  }
},

    async addKategori(){
      await fetch('http://localhost:3000/api/categories')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.docs);
        this.kategori = data.docs;
      })
      .catch((error) => {
        console.error(error)
      })
    }
  },
  mounted(){
    console.log(this.id)
    this.getKategori()
    document.title = "Edit Task";
  }
};
</script>


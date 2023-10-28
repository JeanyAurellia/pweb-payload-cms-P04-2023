<script>

export default {
  emits: ["close-modal"],
  data() {
    return {
      taskStore,
      inputTask: "",
      inputKategori:"",
      kategori:[],
      inputDeadline: "",
    };
  },
  methods: {
    async addTask (){
      try {
        const req = await fetch('http://localhost:3000/api/todos',{
          method: "POST",
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify({
            inputTask: this.inputTask,
            inputKategori: this.inputKategori,
            inputDeadline: this.inputDeadline,
          }),
        })
        const data = await req.json()
          if (data){
            window.alert('Todo telah terbuat');
            window.location.reload();
          }
      } catch (err){
        console.log (err)
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
      });
    }
  },
  mounted(){
    this.getKategori()
    document.title = "Add Event";
  }
};
</script>

<template>
  <span class="text-black font-bold text-2xl">Tambahkan Tugas Baru</span>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-1">
      <label class="text-black font-bold">To Do</label>
      <input
        v-model="inputTask"
        class="border-2 py-1 border-gray-400 rounded-lg text-center"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-black font-bold">Kategori</label>
      <input
        v-model="inputKategori"
        class="border-2 py-1 border-gray-400 rounded-lg text-center"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-black font-bold">Deadline</label>
      <input
        v-model="inputDeadline"
        type="date"
        class="border-2 py-1 border-gray-400 rounded-lg text-center"
      />
    </div>
  </div>
  <button
    @click="addTask"
    class="px-4 py-2 mt-1 bg-rose-400 w-fit h-fit text-gray-100 font-bold text-sm rounded-xl hover:scale-110 transition-all hover:ease-in-out hover:duration-300"
  >
    Buat
  </button>
</template>

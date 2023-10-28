<script>
export default {
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async fetchTasks() {
      await fetch('http://localhost:3000/api/todos')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.docs);
        this.tasks = data.docs;
      })
      .catch((error) => {
        console.error(error)
      })
    },
    async deleteTask(taskId) {
      const stringifiedQuery = qs.stringify({
        where: {
          id: {
            contains: taskId,
          },
        },
      },{ addQueryPrefix: true });
      try {
        const req = await fetch(`http://localhost:3000/api/todos/${stringifiedQuery}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await req.json();
        if (data) {
        window.alert('Task has been deleted successfully');
        window.location.reload();
      }
      } catch (err) {
        console.log(err);
      }
    }
  },
  created() {
    this.fetchTasks();
  },
};
</script>

<template>
  <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
    <thead class="bg-pink-100 border-b-2 border-gray-300">
      <tr>
        <th class="p-1 text-sm font-bold tracking-normal">No.</th>
        <th class="p-3 text-sm font-bold tracking-normal">To Do</th>
        <th class="p-1 text-sm font-bold tracking-normal">Kategori</th>
        <th class="p-1 text-sm font-bold tracking-normal">Deadline</th>
        <th class="p-1 text-sm font-bold tracking-normal">Delete</th>
        <th class="p-1 text-sm font-bold tracking-normal">Edit</th>
        <th class="p-1 text-sm font-bold tracking-normal">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border-b hover:bg-pink-200"
        v-for="(task, index) in taskStore.tasks"
        :key="task.id"
        :class="{ 'line-through': task.done }"
      >
        <th class="p-3 text-sm text-black font-normal">
          {{ index + 1 }}
        </th>
        <th class="p-3 text-sm text-black font-normal">
          {{ task.task }}
        </th>
        <th class="p-3 text-sm text-black font-normal">
          {{ task.kategori }}
        </th>
        <th class="p-3 text-sm text-black font-normal">
          {{ task.deadline }}
        </th>
        <th>
          <div class="flex justify-center gap-4 items-center h-full w-full">
            <svg
              @click="taskStore.deleteTask(task.id)"
              xmlns="http://www.w3.org/2000/svg"
              height="1.2em"
              viewBox="0 0 448 512"
              class="cursor-pointer text-pink-600 hover:text-pink-800"
            >
              <path
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
              />
            </svg>
            
          </div>       
        </th>
        <th>
          <div class="flex justify-center gap-4 items-center h-full w-full">
          <router-link :to="{ name: 'edit', params: { id: task.id } }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.2em"
              viewBox="0 0 512 512"
              class="cursor-pointer text-pink-600 hover:text-pink-800"
            >
              <path
                d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
              />
            </svg>
            </router-link>
          </div>
        </th>
        <th>
          <div class="flex justify-center gap-4 items-center h-full w-full">
            <input
            type="checkbox"
            v-model="task.done"
            class="form-checkbox h-5 w-5 text-pink-600 transition duration-150 ease-in-out line-through"
            />
          </div>
        </th>
      </tr>
    </tbody>
  </table>

</template>

<template>
  <section style="background-color: #e2d5de;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl">

          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">

              <h6 class="mb-3">Awesome Todo List</h6>

              <form @submit.prevent="editingIndex === -1 ? addTask() : updateTask()" class="d-flex justify-content-center align-items-center mb-4">
                <div class="form-outline flex-fill">
                  <input v-model="newTask" type="text" class="form-control form-control-lg" />
                  <label class="form-label" for="form3">What do you need to do today?</label>
                </div>
                <button type="submit" class="btn btn-primary btn-lg ms-2">{{ editingIndex === -1 ? 'Add' : 'Update' }}</button>
              </form>

              <ul class="list-group mb-0">
                <li
                  v-for="(task, index) in tasks"
                  :key="index"
                  :class="{'list-group-item': true, 'd-flex': true, 'justify-content-between': true, 'align-items-center': true, 'border-start-0': true, 'border-top-0': true, 'border-end-0': true, 'border-bottom': true, 'rounded-0': true, 'mb-2': true, 'text-decoration-line-through': task.done}"
                >
                  <div class="d-flex align-items-center">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      :value="index"
                      :checked="task.done"
                      @change="toggleTaskStatus(index)"
                      aria-label="..."
                    />
                    {{ task.text }}
                  </div>
                  <div>
                    <a href="#!" @click="editTask(index)" data-mdb-toggle="tooltip" title="Edit item">
                      <i class="fas fa-edit text-primary me-2"></i>
                    </a>
                    <a href="#!" @click="removeTask(index)" data-mdb-toggle="tooltip" title="Remove item">
                      <i class="fas fa-times text-primary"></i>
                    </a>
                  </div>
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [],
      editingIndex: -1,
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === "") return;
      this.tasks.unshift({ text: this.newTask, done: false });
      this.newTask = "";
    },
    toggleTaskStatus(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
    editTask(index) {
      this.newTask = this.tasks[index].text;
      this.editingIndex = index;
    },
    updateTask() {
      if (this.newTask.trim() === "") return;
      this.tasks[this.editingIndex].text = this.newTask;
      this.editingIndex = -1;
      this.newTask = "";
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

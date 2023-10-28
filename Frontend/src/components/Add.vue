<script>
export default {
  props: {
    isModal: Boolean,
  },
  emits: ["close-modal"],
};
</script>

<template>
  <Transition name="modal-outer">
    <div
      v-show="isModal"
      class="absolute w-full bg-rose-300 bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
      @click="$emit('close-modal')"
    >
      <Transition name="modal-inner">
        <div
          v-if="isModal"
          class="p-7 rounded-lg relative flex flex-col gap-3 bg-white self-start mt-36 w-[26rem]"
          @click.stop
        >
          <slot />
        </div>
      </Transition>
    </div>
  </Transition>
</template>

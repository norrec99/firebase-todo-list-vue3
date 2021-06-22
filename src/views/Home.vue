<template>
  <NavbarHeader />
  <div class="w-full flex justify-center mt-8">
    <TodoList />
  </div>
</template>

<script>
import NavbarHeader from "@/components/NavbarHeader.vue";
import TodoList from "@/components/TodoList";
export default {
  name: "Home",
  components: { NavbarHeader,TodoList },
};
</script>

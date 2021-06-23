<template>
  <NavbarHeader />
  <Suspense>
    <template #default>
      <div class="w-full flex justify-center mt-8">
        <TodoList />
      </div>
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
</template>

<script>
import NavbarHeader from "@/components/NavbarHeader.vue";
import TodoList from "@/components/TodoList";
export default {
  name: "Home",
  components: { NavbarHeader, TodoList },
};
</script>

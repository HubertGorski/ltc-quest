<script setup lang="ts">
import { TASK_STATUS } from "@/enums/enumTasks";
import { Task } from "@/models/Task";
import { computed } from "vue";

const props = defineProps({
  task: {
    type: Task,
    required: true,
  },
});

const infoIcon = computed(() => {
  const isRejectedIcon: infoIcon = {
    mdiText: "mdi-alert-circle",
    color: "text-red-accent-4",
    taskStatus: TASK_STATUS.REJECTED,
  };
  const isConfirmedIcon: infoIcon = {
    mdiText: "mdi-checkbox-marked-circle",
    color: "text-green-accent-4",
    taskStatus: TASK_STATUS.CONFIRMED,
  };
  const isExpectancyIcon: infoIcon = {
    mdiText: "mdi-clock-time-eight",
    color: "text-yellow-accent-4",
    taskStatus: TASK_STATUS.EXPECTANCY,
  };
  return [isRejectedIcon, isConfirmedIcon, isExpectancyIcon].filter(
    (infoIcon) => infoIcon.taskStatus === props.task.status
  )[0];
});

interface infoIcon {
  mdiText: string;
  color: string;
  taskStatus: TASK_STATUS;
}
</script>

<template>
  <RouterLink
    :to="{ path: `/tasks/${task.taskId}` }"
    :class="[task.isDisabled ? 'text-grey-lighten-1' : 'text-grey-darken-3']"
    class="task"
  >
    <div class="task_info">
      <div class="title">
        <v-icon
          v-if="infoIcon"
          class="pb-1 mr-2"
          :class="infoIcon.color"
          size="20"
          >{{ infoIcon.mdiText }}</v-icon
        >
        <span> {{ task.title }}</span>
      </div>
      <div
        v-if="!task.isDone"
        class="description"
        :class="[
          task.isDisabled ? 'text-grey-lighten-1' : 'text-grey-darken-2',
        ]"
      >
        {{ task.description }}
      </div>
    </div>
    <div class="task_points">{{ task.points }}</div>
  </RouterLink>
  <v-divider></v-divider>
</template>

<style scoped>
.task {
  display: flex;
  padding: 12px 4px;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
}
.task_points {
  padding: 8px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.task_info {
  padding-left: 8px;
}
.title {
  font-size: 16px;
  font-weight: 600;
}
.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>

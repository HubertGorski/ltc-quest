<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { KillGameCard } from "./models/KillGameCard";
import HubIconWithTooltip from "@/components/hubComponents/HubIconWithTooltip.vue";
import { computed } from "vue";

const { t } = useI18n();

const props = defineProps<{
  card: KillGameCard;
}>();

const infoIcon = computed(() => {
  const isAcquiredDirectlyIcon: infoIcon = {
    class: "text-grey-darken-2",
    icon: "mdi-card-account-details-outline",
    tooltipText: t("killGame.card.acquiredDirectly"),
    isVisible: props.card.isAcquiredDirectly,
  };
  const isAcquiredIndirectlyIcon: infoIcon = {
    class: "text-grey-darken-2",
    icon: "mdi-card-account-details-outline",
    tooltipText: `${t("killGame.card.acquiredIndirectly")} ${props.card.killerName}`,
    isVisible: props.card.isAcquiredIndirectly,
  };
  const isExpectancyIcon: infoIcon = {
    class: "text-yellow-accent-4",
    icon: "mdi-clock-time-eight",
    tooltipText: t("isAwaitingConfirmation"),
    isVisible: props.card.isExpectancy,
  };
  return [
    isAcquiredDirectlyIcon,
    isAcquiredIndirectlyIcon,
    isExpectancyIcon,
  ].find((infoIcon) => infoIcon.isVisible);
});

interface infoIcon {
  class: string;
  icon: string;
  tooltipText: string;
  isVisible: boolean;
}
</script>

<template>
  <v-card class="mb-4" :class="{ 'elevation-4': !card.isInactive }">
    <div>
      <div class="d-flex justify-space-between px-3 pt-2 pb-1">
        <v-card-title class="px-0 py-0">{{ card.userName }}</v-card-title>
        <hub-icon-with-tooltip
          v-if="infoIcon"
          :class="infoIcon.class"
          :icon="infoIcon.icon"
          :tooltipText="infoIcon.tooltipText"
        />
      </div>
      <div class="d-flex justify-space-between">
        <v-card-subtitle class="px-3 py-0">{{
          $t("killGame.card.keyWord")
        }}</v-card-subtitle>
        <v-card-subtitle class="px-3 py-0">
          {{ $t("killGame.card.keyAction") }}
        </v-card-subtitle>
      </div>
      <div class="d-flex justify-space-between">
        <v-card-text class="xw-fit-content px-3 pt-0 pb-3">{{
          card.keyWord
        }}</v-card-text>
        <v-card-text class="xw-fit-content text-right px-3 pt-0 pb-3">{{
          card.keyAction
        }}</v-card-text>
      </div>
    </div>
  </v-card>
</template>
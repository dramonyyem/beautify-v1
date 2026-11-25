<script setup lang="ts">
type ButtonVariant = "primary" | "secondary" | "danger" | "outline";

interface Props {
  title?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: "Button",
  variant: "primary",
  disabled: false,
  loading: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<template>
  <button
    class="ph-button"
    :class="`ph-button--${variant}`"
    :disabled="disabled || loading"
    @click="emit('click', $event)"
  >
    <span v-if="loading">Loading...</span>

    <slot v-else>
      {{ title }}
    </slot>
  </button>
</template>

<style scoped>
.ph-button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
}

.ph-button--primary {
  background: #2563eb;
  color: white;
}

.ph-button--secondary {
  background: #e5e7eb;
  color: #111827;
}

.ph-button--danger {
  background: #dc2626;
  color: white;
}

.ph-button--outline {
  background: transparent;
  border: 1px solid #2563eb;
  color: #2563eb;
}

.ph-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

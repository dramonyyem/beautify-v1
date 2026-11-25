<script setup lang="ts">
import { ref } from 'vue'

import {
  Button,
  Input,
  Card,
} from '../../src'

const username = ref('')
const clicked = ref(false)
</script>

<template>
  <main class="playground">
    <header class="playground-header">
      <div>
        <h1>Beaufity UI</h1>
        <p>Component development playground</p>
      </div>

      <span class="version">v1.0.0</span>
    </header>

    <section class="component-section">
      <h2>Buttons</h2>

      <Card>
        <div class="component-row">
          <Button
            title="Primary"
            variant="primary"
            @click="clicked = true"
          />

          <Button
            title="Secondary"
            variant="secondary"
          />

          <Button
            title="Danger"
            variant="danger"
          />

          <Button
            title="Outline"
            variant="outline"
          />
        </div>

        <p v-if="clicked">
          Button clicked successfully!
        </p>
      </Card>
    </section>

    <section class="component-section">
      <h2>Inputs</h2>

      <Card>
        <Input
          v-model="username"
          placeholder="Enter your username"
        />

        <p>Value: {{ username }}</p>
      </Card>
    </section>

    <section class="component-section">
      <h2>Cards</h2>

      <Card>
        <h3>Example card</h3>
        <p>
          This is a preview of your reusable card component.
        </p>
      </Card>
    </section>
  </main>
</template>

<style scoped>
.playground {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 24px;
  color: #111827;
}

.playground-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.playground-header h1 {
  margin: 0;
}

.playground-header p {
  color: #6b7280;
}

.version {
  background: #eff6ff;
  color: #2563eb;
  padding: 6px 12px;
  border-radius: 20px;
}

.component-section {
  margin-bottom: 32px;
}

.component-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
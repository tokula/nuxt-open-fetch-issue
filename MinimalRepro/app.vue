<script setup lang="ts">

import { PathsPetFindByStatusGetParametersQueryStatus } from "~/utils/petutils"

const { $petsApi } = useNuxtApp()

const pet = await $petsApi("/pet/findByStatus", {
  method: 'get',
  query: {
    status: PathsPetFindByStatusGetParametersQueryStatus.sold
  },
})

</script>

<template>
  <div>
    <pre>Pet: {{ pet }}</pre>
  </div>
</template>

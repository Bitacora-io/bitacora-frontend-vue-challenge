<template>
  <dl class="c-summary tw-max-w-xl">
    <div class="c-summary__block">
      <dt class="c-summary__title">Comments:</dt>
      <dd class="c-summary__content">
        {{ activity.comment }}
      </dd>
    </div>
    <div class="c-summary__block">
      <dt class="c-summary__title">Progress comments:</dt>
      <dd class="c-summary__content">
        {{ activity.progressEntryComments }}
      </dd>
    </div>
    <div class="c-summary__block">
      <dt class="c-summary__title">Expenses:</dt>
      <dd class="c-summary__content">
        {{ activity.cost }}
      </dd>
    </div>
    <div class="c-summary__block">
      <dt class="c-summary__title">Income:</dt>
      <dd class="c-summary__content">
        {{ activity.value }}
      </dd>
    </div>
    <div class="c-summary__block">
      <dt class="c-summary__title">Status:</dt>
      <dd class="c-summary__content">
        {{ activity.status }}
      </dd>
    </div>
    <div class="c-summary__block">
      <dt class="c-summary__title">Start date:</dt>
      <dd class="c-summary__content">
        {{ activity.startDate }}
      </dd>
    </div>
    <div class="c-summary__block">
      <dt class="c-summary__title">End date:</dt>
      <dd class="c-summary__content">
        {{ activity.endDate }}
      </dd>
    </div>
    <div class="c-summary__block">
      <dt class="c-summary__title">Creation Date:</dt>
      <dd class="c-summary__content">
        {{ activity.createdAt }}
      </dd>
    </div>
  </dl>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>
</style>

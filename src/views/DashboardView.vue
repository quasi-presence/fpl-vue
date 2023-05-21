<template>
  <div class="w-full p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <template v-for="league in leagues">
        <UserLeagueCard :league="league" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ILeague } from '../interfaces';
  import { Actions } from '../actions';
  import UserLeagueCard from '../components/UserLeagueCard.vue';

  const leagues: ILeague[] = Actions.getLeagues();
</script>

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
  import { useUserStore } from '../stores/user';
  import { ILeague } from '../interfaces';
  import UserLeagueCard from '../components/UserLeagueCard.vue';

  const store = useUserStore();

  const leagues: ILeague[] = [
    {
      id: 1230,
      name: 'Fantasy Nascar',
      imageUrl: "https://images.unsplash.com/photo-1579987323085-529f1a806810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      memberCount: 6,
      position: 2
    },
    {
      id: 1231,
      name: 'My Supercross',
      imageUrl: "https://images.unsplash.com/photo-1515540250667-fadb39ba0799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1844&q=80",
      memberCount: 4,
      position: 1
    },
    {
      id: 1232,
      name: 'F1 Madness',
      imageUrl: "https://images.unsplash.com/photo-1615123817063-2649bcb6949a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      memberCount: 10,
      position: 7
    },
    {
      id: 1233,
      name: 'Rubbing is Racing',
      imageUrl: "https://images.unsplash.com/photo-1591349830016-04a3eb804c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1795&q=80",
      memberCount: 4,
      position: 2
    },
    {
      id: 1234,
      name: '4 wheels turn better',
      imageUrl: "https://images.unsplash.com/photo-1583949678953-6e878338d161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      memberCount: 3,
      position: 1
    },
    {
      id: 1235,
      name: 'Indy car',
      imageUrl: "https://images.unsplash.com/photo-1520215838868-1f34e8029665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      memberCount: 4,
      position: 2
    },
  ]
</script>

<template>
  <div class="w-1/2 bg-white rounded-lg p-12 flex flex-col justify-center items-center">
    <div class="text-3xl font-bold mb-5">User Profile</div>

    <div class="mb-8">
      <img class="object-center object-cover rounded-full h-36 w-36" src="/public/blank_profile_image.png" alt="photo">
    </div>

    <div class="text-center">
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700">Email</label>
        <input type="email" v-model="form.email" class="rounded-3xl border shadow px-6 py-2" />
      </div>

      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700">Profile Image Url</label>
        <input type="text" v-model="form.imageUrl" class="rounded-3xl border shadow px-6 py-2" />
      </div>

      <template v-if="changingPassword">
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700">New Password</label>
          <input type="password" v-model="form.password" class="rounded-3xl border shadow px-6 py-2" />
        </div>

        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700">Confirm Password</label>
          <input type="password" v-model="form.passwordConfirmation" class="rounded-3xl border shadow px-6 py-2" />
        </div>
      </template>
      <template v-else>
        <div class="mb-4">
          <button type="button"
                  v-on:click="changePassword"
                  class="bg-gray-500 hover:bg-gray-600 text-white rounded-3xl shadow-xl px-10 py-2">
            Change Password
          </button>
        </div>
      </template>

      <div class="mt-20">
        <button type="button"
                v-on:click="save"
                class="bg-green-500 hover:bg-green-600 text-white rounded-3xl shadow-xl w-1/2 px-10 py-2">
          Save
        </button>
        <button type="button"
                v-on:click="cancel"
                class="bg-cyan-500 hover:bg-cyan-600 text-white rounded-3xl shadow-xl w-1/2 px-10 py-2">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, PropType, ref } from 'vue';
  import { IUser, IProfileData } from '../interfaces';
  import { Actions } from '../actions';

  const props = defineProps<{ profile: IUser | null }>();
  const changingPassword = ref<boolean>(false);

  let form = {
    email: props.profile?.email,
    imageUrl: props.profile?.imageUrl,
    password: null,
    passwordConfirmation: null
  } as IProfileData;

  function changePassword(): void {
    changingPassword.value = true;
  }

  function save(): void {
    Actions.saveProfile(form);
  }

  function cancel(): void {
    changingPassword.value = false;
    Actions.viewDashboard();
  }
</script>

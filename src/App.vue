<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />
      <span>Wellington Della Mura</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="/" text>
        <span class="mr-2">Início</span>
      </v-btn>
      <v-btn href="/courses" text>
        <span class="mr-2">Disciplinas</span>
      </v-btn>
      <v-btn href="/about" text>
        <span class="mr-2">Sobre mim</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

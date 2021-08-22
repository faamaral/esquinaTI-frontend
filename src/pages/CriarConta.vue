<template>
  <div class="Cadastrar">
    <p>Crie sua própria conta</p>
    <input type="text" placeholder="Nome Completo" v-model="NomeCompleto" />
    <br />
    <input type="text" placeholder="Nome de Usuário" v-model="NomeUsuario" />
    <br />
    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Senha" v-model="senha" />
    <br />
    <button @click="cadastrar">Registrar</button>
    <span>ou retorne ao <router-link to="/login">Cadastrar</router-link></span>
  </div>
</template>

<script>
export default {
  name: "Cadastrar",
  data() {
    return {
      NomeCompleto: "",
      NomeUsuario: "",
      email: "",
      senha: "",
    };
  },
};
</script>

 <style scoped>
.Cadastrar {
  text-align: center;
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #1606f3;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

p {
  margin-top: 100px;
  font-size: 50px;
}

span {
  display: block;
  margin-top: 20px;
  font-size: 18px;
}
</style>
<template>
  <div>
    <div v-if="!loggedIn">
      <h1>ورود به GuardZilla</h1>
      <label>نام کاربری:</label>
      <input type="text" v-model="username">
      <label>{{firstname}}</label>
      <p>
        <button v-on:click="login">ورود</button>
      </p>
    </div>
    <div v-if="loggedIn">
      <h1 v-if="!userLock.IsLock">باز</h1>
      <h1 v-if="userLock.IsLock">بسته</h1>

      <div>
        <input type="checkbox" v-model="userLock.IsLock">
        <input type="text" v-model="userLock.Comment">
        <button v-on:click="save">ذخیره</button>
      </div>

      <button v-on:click="signout">خروج</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "Login",
  created: function() {
    if (localStorage.getItem("user")) {
      this.loggedIn = true;
    }
  },
  data: function() {
    return {
      username: "",
      firstname: "",
      loggedIn: false,
      userLock: {},
      user: null
    };
  },
  watch: {
    loggedIn: function(val) {
      if (val) {
        let self = this;
        var user = JSON.parse(localStorage.user);
        this.user = user;
        axios
          .get("http://localhost:8099/userlock/" + user.Id + "/1")
          .then(function(response) {
            if (response.data == null) {
              self.userLock = {
                UserId: self.user.Id,
                EnvironmentId: 1
              };
            } else {
              self.userLock = response.data;
              self.userLock.IsLock = true;
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  },
  methods: {
    login: function() {
      let self = this;
      if (!self.username) {
        alert("نام کاربری معتبر نمی باشد");
        return;
      }
      axios
        .get("http://localhost:8099/users/" + self.username)
        .then(function(response) {
          if (response.data == null) {
            alert("نام کاربری معتبر نمی باشد");
            return;
          }
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          self.loggedIn = true;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    signout: function() {
      localStorage.removeItem("user");
      this.loggedIn = false;
    },
    save: function() {
      if (this.userLock.IsLock) {
        axios
          .post("http://localhost:8099/userlock", this.userLock)
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        axios
          .delete("http://localhost:8099/userlock/" + this.user.Id + "/1")
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

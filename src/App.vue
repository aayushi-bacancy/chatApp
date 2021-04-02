<template>
  <div id="app">
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="#">Chat Application</b-navbar-brand>
      <!-- <b-navbar-nav>
        <b-nav-item href="#">
          <b-button variant="outline-light">Logout</b-button>
        </b-nav-item>
      </b-navbar-nav> -->
    </b-navbar>
    <br />

    <b-container>
      <!-- Header Section -->

      <!-- <b-card title="Chat-App">
        <b-form>
          <label class="sr-only" for="inline-form-input-username">Username</label>
        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input id="inline-form-input-username" placeholder="Username" v-model.trim="username"></b-form-input>
          <b-button @click="joinRoom">Join</b-button>
        </b-input-group>
        </b-form>
      </b-card> -->

      <b-card>
        <div class="chatbox">
          <b-row
            class="no-gutters"
            align-h="start"
            v-for="(message, inx) in chatHistory"
            :key="inx"
          >
            <b-col class="no-gutters" cols="8">
              <div>
                <p class="received-chat">{{ message }}</p>
              </div>
            </b-col>
          </b-row>
        </div>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0" @click.enter="sendMessage">
          <b-form-input
            placeholder="type here.."
            v-model.trim="newMsg"
            @keyup.enter="sendMessage"
          ></b-form-input>
          <b-button
            size="md"
            variant="primary"
            class="mb-2"
            @click="sendMessage"
            :disabled="!newMsg"
          >
            Send
          </b-button>
        </b-input-group>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: "App",
  components: {},
  data() {
    return {
      socket: null,
      newMsg: "",
      serverUrl: process.env.VUE_APP_SOCKET_URL || "ws://localhost:8080",
      chatHistory: [],
    };
  },
  created() {
    this.connectToWebsocket();
  },
  mounted() {
    if (this.socket) {
      this.socket.on("/message", (message) => {
        if (message) {
          this.chatHistory.push(message.trim());
        }
      });
    }
  },
  beforeDestroy() {},
  methods: {
    connectToWebsocket() {
      this.socket = io(this.serverUrl, {
        transports: ["websocket"],
      });
    },
    sendMessage() {
      if (this.newMsg) {
        this.socket.emit("/chat", { name: "Nikita", message: this.newMsg });
        this.newMsg = "";
      }
    },
  },
};
</script>

<style>
html, 
body,
#app,
.card {
  height: 100%;
}

.container {
  height: calc(100% - 100px);
}

.chatbox {
  padding: 10px;
  height: calc(100% - 35px);
  overflow-y: auto;
  background-image: url("https://i0.wp.com/www.tortugacreative.com/wp-content/uploads/social-media-background-dark-2.png?ssl=1");
}
.sender-name {
  margin: 0px;
}
.chat {
  background-color: lightgreen;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.received-chat {
  background-color: lightblue;
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>

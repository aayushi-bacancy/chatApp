<template>
<div>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">Chat-App</b-navbar-brand>
    <b-navbar-nav>
      <b-navbar-brand>
        <b-button variant="outline-light">Logout</b-button>
      </b-navbar-brand>
    </b-navbar-nav>
  </b-navbar>
  <br>

  <b-container>
    <!-- Header Section -->
      
      <b-card title="Chat-App">
        <b-form >
          <label class="sr-only" for="inline-form-input-username">Username</label>
        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input v-model="userName" id="inline-form-input-username" placeholder="Username"></b-form-input>
          <b-button @click="setUser" >Join</b-button>
        </b-input-group>
        </b-form>
      </b-card>

      <b-card>
        <div class="chatbox"> 
          <b-row v-if="type==1" class="no-gutters" align-h="end">
            <b-col class="no-gutters" cols="8" >
              <div v-for="message in messages" :key="message.id">
                <p class="user-name">{{message.username}}</p>
              <p class="chat">{{message.message}}</p>
                </div>
              </b-col>
          </b-row>
          <b-row v-if="type==0" class="no-gutters" align-h="start">
            <b-col class="no-gutters" cols="8" >
              <div>
                <p class="user-name">UserName</p>
              <p class="received-chat">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatum et, voluptate sint deleniti dolore?</p>
                </div>
              </b-col>
          </b-row>
          
        </div>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input v-model="message" id="" placeholder="type here.."></b-form-input>
          <b-button @click.prevent="sendMessage" size="md" variant="primary" class="mb-2">
            Send
          </b-button>
        </b-input-group>
      </b-card>
      {{messages}}{{type}}
    </b-container>
</div>
</template>

<script>
export default {
  data(){
    return{
  //  ws:null,
  //  serverUrl: 'wss://echo.websocket.org',
  messages:[],
  isConnected: false,
  message: null,
  userName: null,
  username: null,
  type:null
    };
  },
  // computed:{
  //   messages(){
  //     return this.$store.getters.messages;
  //   }
  // },
  // mounted(){
  //    this.connectToWebsocket()
  // },
  methods:{
  //   connectToWebsocket(){
  //      this.ws = new WebSocket( this.serverUrl );
  //       this.ws.addEventListener('open', (event) => { this.onWebsocketOpen(event) });
  //        this.ws.addEventListener('message', (event) => { this.handleNewMessage(event) });
  //   },
  //   handleNewMessage(event){
  // let data = event.data;
  // data = data.split(/\r?\n/);
  // for (let i = 0; i < data.length; i++) {
  //   let msg = JSON.parse(data[i]);
  //     this.$store.dispatch('setMessage',{
  //    message:msg,
  //    username: msg.username,

  //    })
  //   }
    // },
    // onWebsocketOpen() {
    //     console.log("connected to WS!");
    //   },
    setUser(){
    alert("userNmae has been set");
    this.username= this.userName;
    this.userName= null;
    },
    sendMessage(){
   if(this.message !== "") {
     this.type= 1;
    this.messages.push({
      id:new Date().toISOString(),
      message:this.message,
      username:this.username
    })
    this.message=null;
    // this.ws.send(JSON.stringify({message: this.message,username:this.username}));
    // this.message = null
    }
  }
  }
  }
</script>

<style>
.chatbox{
  padding: 10px;
  height: 380px;
  overflow-y: auto;
  background-image: url("https://www.olivetcollege.edu/wp-content/plugins/wp-live-chat-support2/images/bg/cloudy.jpg");
}
.user-name{
  /* padding: 0px; */
  margin:0px;
}
.chat{
  background-color: lightgreen;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  /* max-width: 70%; */
}
.received-chat{
  background-color: lightblue;
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  /* max-width: 70%; */
}
</style>



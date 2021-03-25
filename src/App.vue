<template>
  <div id="app">
      <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">Chat-App</b-navbar-brand>
    <b-navbar-nav>
      <b-navbar-item>
        <b-button variant="outline-light">Logout</b-button>
      </b-navbar-item>
    </b-navbar-nav>
  </b-navbar>
  <br>

  <b-container>
    <!-- Header Section -->
      
      <b-card title="Chat-App">
        <b-form >
          <label class="sr-only" for="inline-form-input-username">Username</label>
        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input id="inline-form-input-username" placeholder="Username"></b-form-input>
          <b-button>Join</b-button>
        </b-input-group>
        </b-form>
      </b-card>

      <b-card>
        <div class="chatbox"> 
          <b-row class="no-gutters" align-h="end">
            <b-col class="no-gutters" cols="8" >
              <div>
                <p class="sender-name">UserName</p>
              <p class="chat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod laborum quas beatae quae voluptatem. Repellendus cumque ab non consequuntur placeat iure possimus voluptas veritatis mollitia alias. Ab, id architecto.</p>
                </div>
              </b-col>
          </b-row>
          <b-row class="no-gutters" align-h="start">
            <b-col class="no-gutters" cols="8" >
              <div>
                <p class="sender-name">UserName</p>
              <p class="received-chat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod laborum quas beatae quae voluptatem. Repellendus cumque ab non consequuntur placeat iure possimus voluptas veritatis mollitia alias. Ab, id architecto.</p>
                </div>
              </b-col>
          </b-row>
          <b-row class="no-gutters" align-h="end">
            <b-col class="no-gutters" cols="8" >
              <div>
                <p class="sender-name">UserName</p>
              <p class="chat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod laborum quas beatae quae voluptatem. Repellendus cumque ab non consequuntur placeat iure possimus voluptas veritatis mollitia alias. Ab, id architecto.</p>
                </div>
              </b-col>
          </b-row>
          <b-row class="no-gutters" align-h="start">
            <b-col class="no-gutters" cols="8" >
              <div>
                <p class="sender-name">UserName</p>
              <p class="received-chat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod laborum quas beatae quae voluptatem. Repellendus cumque ab non consequuntur placeat iure possimus voluptas veritatis mollitia alias. Ab, id architecto.</p>
                </div>
              </b-col>
          </b-row>
        </div>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input id="" placeholder="type here.."></b-form-input>
          <b-button size="md" variant="primary" class="mb-2">
            Send
          </b-button>
        </b-input-group>
      </b-card>
    </b-container>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.chatbox{
  padding: 10px;
  height: 380px;
  overflow-y: auto;
  background-image: url("https://i0.wp.com/www.tortugacreative.com/wp-content/uploads/social-media-background-dark-2.png?ssl=1");
}
.sender-name{
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

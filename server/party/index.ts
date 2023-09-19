import type * as Party from "partykit/server";

export default class Server implements Party.Server {
  constructor(readonly party: Party.Party) {}

  userdata=['Hello']
  url=['Hello']
  // uuid:String

  onConnect(conn: Party.Connection, ctx: Party.ConnectionContext) {
    // A websocket just connected!
  //   console.log(
  //     `Connected:
  // id: ${conn.id}
  // room: ${this.party.id}
  // url: ${new URL(ctx.request.url).pathname}`
  //   );

    // console.log(ctx.request.url)
    // console.log(conn)
    // console.log(this.party)
  

    // //Let's generate a random string and send it back to the user
    if(this.userdata.length==1)
    {
      // console.log('Sent the data')
      // conn.send('User-1')
      console.log('User 1 has connected')
      this.userdata.push('Ok now its full')
    }
    else{
      console.log('User 2 has connected')
    }

    // // let's send a message to the connection
    // conn.send("hello from server");
  }

  onMessage(message:string, sender: Party.Connection) {

    //Whenever the message is from User A and that the other user needs to verify then perform a certain task
      //- send an email to the user sharing the link of the site
      //- maintain the state of the first user

    //When the message is from the User B sharing the shared token then perform some other task
      //- broadcast the received message simply to the first user

    //Finally perform some other task when the message from User A regarding the shared CID Url
       //- broadcast the received message to the second user
    // let's log the message
    console.log(`connection ${sender.id} sent message: ${message}`);
    console.log(this.url)
    console.log(this.userdata)
    // if(this.url.length<=2)   //User B to User A sharing the sharedtoken    //User A sends the cid url to User B
    // {
      this.party.broadcast(
        message,
        // ...except for the connection it came from
        [sender.id]
      );

      this.url.push('Okkay')
   
  }
}

Server satisfies Party.Worker;

const Discord = require("discord.js");
const client = new Discord.Client();

client.login("NDc0OTM4Njg1NjU4MjM0ODgz.DowH_Q.SuiwbnMWeYE9jb5EJa6FavB__Q8");

client.on("ready", () => {
  console.log("I am ready!");
});
///////////////////////////////////////////////////////////////
client.on("message", (message) => {
  if (message.content.startsWith("+Ping")) {
    message.channel.send("Pong!");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("+ping")) {
    message.channel.send("Pong!");
  }
});
///////////////////////////////////////////////////////////////
Bot . on ( "message" , async message => { 

  if ( command === prefix + "mute" ) { 

    if (! message . member . hasPermission ( "MANAGE_MESSAGES" )) return message . channel . send ( "You do not have the rights to transfer a user!" ); 

    let toMute = message . guild . member ( Message . particulars . users . first ()) || message . guild . members . get ( args [ 0 ]); if (! toMute ) return message . channel . send ( "Please enter a user!" ); 
    let role = message . guild . Search 
     . find ( r => r . name === " Muted Users" ); if (! role ) { try { 
        role = await message . guild . createRole ({ 
          name : " Muted Users" , 
          color : "# 000000" , 
          permissions : [] }); 
    
        
        

        message . guild . channels . forEach ( async ( channel , id ) => { 
          await channel . overwritePermissions ( role , { 
            SEND_MESSAGES : false , 
            ADD_REACTIONS : false }); }); } catch ( e ) { 
        console . log ( e . stack ) } }     
          
        
         
      
    

    if ( toMute . Actual . HAS ( role . id )) return messages . channel . send ( 'This user is already mutated!' ); 

    await ( toMute . addRole ( role )); 
    message . channel . send ( "I transferred it!" );

    return ; }
  

});
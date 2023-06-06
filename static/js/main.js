console.log('in main.js');

var labelUsername = document.querySelector('#label-username');
var usernameInput = document.querySelector('#username');
var btnJoin = document.querySelector('#btn-join');


var username;


function webSocketOnMessage(event){

    var parsedData = JSON.parse(event.data);
    var message = parsedData['message'];
    console.log('message', message );



}




btnJoin.addEventListener('click',()=>{
    username = usernameInput.value;
    console.log('username', username);

    if(username == ''){
        return;
    }

    usernameInput.value = '';
    usernameInput.disabled = true;
    usernameInput.getElementsByClassName.visibility = 'hidden';

    btnJoin.disabled = true;
    btnJoin.getElementsByClassName.visibility = 'hidden';


    var labelUsername = document.querySelector("#label-username")
    labelUsername.innerHTML = username;


    var loc = window.location;
    var wsStart = "ws://";

    if(loc.protocol == 'https'){

        wsStart ='wss://';

    }

    var endPoint = wsStart + loc.host + loc.pathname;

    console.log('endpoint' , endPoint)


    webSocket = new WebSocket(endPoint)


    webSocket.addEventListener('open',(e)=>{
        console.log('connection opened')
    } );
    webSocket.addEventListener('message', webSocketOnMessage);
    webSocket.addEventListener('close',(e)=>{
        console.log('connection closed')
    } );
    webSocket.addEventListener('error', (e)=>{
        console.log("error occured")
    });


})
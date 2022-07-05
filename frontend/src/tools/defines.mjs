export let URL; 

switch (window.location.hostname) {
    case "localhost":
      URL="http://localhost:4000/"
      break;

    case "127.0.0.1":
      URL="http://127.0.0.1:4000/"
      break;
      
    default:
      URL="/"
      break;
}

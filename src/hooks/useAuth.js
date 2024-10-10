export function useAuth(objeto) {
  if(objeto == null || objeto == undefined || objeto == ""){
    return true;
  }
  else{
    return false;
  }
}
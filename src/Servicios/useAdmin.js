export function useAdmin(infoAdmin) {
  let encontrado = false;

  $.ajax({
    type: "POST",
    url: import.meta.env.VITE_API_URL + "buscarToken.php",
    data: infoAdmin,
    success: function (response) {
      encontrado = response.var;
    },
    catch: function (error) {
      console.log(error);
    }
  });

  return encontrado;
}
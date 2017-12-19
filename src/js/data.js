
var databox = {
    getData : function(dataid){
      return localStorage.getItem(dataid);
    },
    setData : function(dataid, content){
      localStorage.setItem(dataid, content);
    }
}

/* This file was auto-generated using RapydScript */
(function(){

exemplo_W1 = function (item){
  item.cat = item.cat+"-"+item.sub;
  item.icon = new L.icon({
      iconUrl: (getSLpath()+"../images/"+item.cat+".png"),
      iconSize: [45, 58],
      iconAnchor: [23, 48],
      popupAnchor: [0, (-40)]
  });
  return item;
};

exemplo_gdoc = function() {
  var mps, public_spreadsheet_url;
  public_spreadsheet_url = "https://docs.google.com/spreadsheet/pub?key=1_3TVgSw_qsE6bQIsLiCdg6RvFbNlJty2CummjZRMs5U&single=true&gid=0&output=html";
  mps = new Searchlight(public_spreadsheet_url, exemplo_W1, "map_gdoc", null, false, false);
};

exemplos = function() {
  exemplo_gdoc();
};


}());

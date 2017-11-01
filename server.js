var express=require("express");
var app=express(); // 產生 Express Application 物件
app.get("/" , function(req, res){//連線到伺服器根目錄,做出回應
  res.send("Hello <b>World</b>");
});
app.listen(3000, function () {
  console.log("伺服器已經啟動在 http://localhost:3000/")
});

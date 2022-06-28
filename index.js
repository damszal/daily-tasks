const stat = document.querySelector(".status")
console.log(stat)
const level = document.querySelector(".level")
console.log(stat)

navigator.getBattery().then(battery => {
    function updateBatteryInfo(){
      updateChargeInfo();
      updateLevelInfo();
    }
    updateBatteryInfo();
  
    battery.addEventListener('chargingchange', () => {
      updateChargeInfo();
    });
    function updateChargeInfo(){
        stat.innerHTML = `Charging status : ${battery.charging ? "Connected" : "Disconnected"}`
    }
  
    battery.addEventListener('levelchange', () => {
      updateLevelInfo();
    });
    function updateLevelInfo(){
        level.innerHTML = `Battery level : ${battery.level * 100 + "%"}`
    }
    return "dupa1"
  
}).then((re)=>{
    console.log("dupa2" + re)
})
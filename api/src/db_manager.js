const mockup_devices_list = {
 devices: [
   { id: 1, name: "device 1",on_off: "on", state: "online" },
   { id: 2, name: "device 2",on_off: "off", state: "offline" },
   { id: 3, name: "device 2",on_off: "off", state: "offline" }
 ]
}


function get_devices () {
    //DB logic
    const devices = mockup_devices_list
    return devices
  }

function get_device (id) {
  //DB logic
  const device = mockup_devices_list[0]
  return device
}

function remove_device(id) {
  //DB logic
  const device = mockup_devices_list[0]
  return device
}

module.exports =  { get_devices, get_device } ;

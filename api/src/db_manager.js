//Mockup devices list
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
  const device = id
  return device
}

function add_device (id, name, on_off, device_status) {
  //DB Logic
  return 'Device added: '+'id: '+id+', '+'name: '+name+', '+'on_off: '+on_off+', '+'device_status: '+device_status
}
function update_device (id, name, on_off, device_status) {
  //DB Logic
  return 'Device updated: '+'id: '+id+', '+'name: '+name+', '+'on_off: '+on_off+', '+'device_status: '+device_status
}

function delete_device(id) {
  //DB logic

  return 'Device removed'
}

module.exports =  { get_devices, get_device, add_device, update_device, delete_device } ;

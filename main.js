// document.addEventListener('DOMContentLoaded',()=>{
//     if('serviceWorker' in navigator){
//         navigator.serviceWorker.register('./sw.js')
//         console.log('its registered')
//     }
// })
// It's not DOM we can't use it
// self.addEventListener('click',()=>{})

self.addEventListener('install',((e)=>{
    console.log('installed...',e)
}))
self.addEventListener('activate',((e)=>{
    console.log('activated...',e)
    return self.clients.claim()
}))
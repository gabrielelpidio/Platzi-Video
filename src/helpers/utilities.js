export const leftPad = number => {
    const pad = `0${number}`
    return pad.substring(pad.length -2, pad.length)
}

export const formattedTime = s => {
    const minutes = (~~(s/60))
    const secs = (~~(s%60))
    return `${leftPad(minutes)} : ${leftPad(secs)}`
}

////////////////////////////////////////////////////////////////////////////

export const isFullScreen = () => document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen


export const requestFullScreen = element => {
  try{ element.requestFullscreen()        } catch(e){
  try{ element.webkitRequestFullscreen()  } catch(e){
  try{ element.mozRequestFullscreen()     } catch(e){
  try{ element.msRequestFullscreen()      } catch(e){
    console.log(e)
  }}}}
}

export const exitFullScreen = () => {
  try { document.exitFullscreen()       } catch(e){
  try { document.webkitExitFullscreen() } catch(e){
  try { document.mozCancelFullscreen()  } catch(e){
  try { document.msExitFullscreen()     } catch(e){
    console.log(e)
  }}}}
}

////////////////////////// Aporte de @JJYepez ///////////////////////////////////////
    
import { Camera } from 'phosphor-react'
import html2canvas from 'html2canvas'
import { useState } from 'react'

export function ScreenshotButtton() {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)
  async function handleTakeScreenShot() {
    try {
      setIsTakingScreenshot(true)
      const canvas = await html2canvas(document.querySelector('html')!)
      const base64image = canvas.toDataURL('image/png')
      setIsTakingScreenshot(false)
    } catch (error) {
      setIsTakingScreenshot(false)
      alert(
        'Erro ao tirar print da página, recarregue a página e tente novamente'
      )
      console.log(error)
    }
  }
  return (
    <button
      type="button"
      className="
        p-2 bg-zinc-800 rounded-stm border-transparent hover:bg-zinc-700
        transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 
        focus:ring-offset-zinc-900 focus:ring-brand-500 text-zinc-100
      "
      onClick={handleTakeScreenShot}
    >
      <Camera className="w-6 h-6 text-zinc-100" />
    </button>
  )
}

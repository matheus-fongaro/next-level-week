import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'
import { useState } from 'react'

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void
  screenshot: string | null
}

export function ScreenshotButtton({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenShot() {
    try {
      setIsTakingScreenshot(true)
      const canvas = await html2canvas(document.querySelector('html')!)
      const base64image = canvas.toDataURL('image/png')
      onScreenshotTook(base64image)
      setIsTakingScreenshot(false)
    } catch (error) {
      setIsTakingScreenshot(false)
      alert(
        'Erro ao tirar print da página, recarregue a página e tente novamente'
      )
      console.log(error)
    }
  }

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshotTook(null)}
        className="
          p-1 w-10 h-10 rounded-md border-transparent flex justify-end
          items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    )
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

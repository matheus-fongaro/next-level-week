import { ArrowLeft, Camera } from 'phosphor-react'
import { FeedbackType, feedbackTypes } from '..'
import { CloseBtn } from '../../CloseBtn'
import { ScreenshotButtton } from '../ScreenshotButton'

interface feedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: feedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 text-zinc-400 hover:text-zinc-100 absolute"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.src}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseBtn />
      </header>

      <form className="my-4 w-full">
        <textarea
          className="
            min-w-[304px] w-full min-h-[112px] text-sm 
            placeholder:text-zinc-400 text-zinc-100 border-zinc-600 
            bg-transparent rounded-md border-2 focus:border-brand-500
            focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none
            scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin
          "
          placeholder="Conte com detalhes o que está acontecendo"
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButtton />

          <button
            type="submit"
            className="
            p-2 bg-brand-500 rounded-stm border-transparent flex flex-1
            justify-center items-center text-sm hover:bg-brand-300
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors
          "
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}

import { FeedbackType, feedbackTypes } from '..'
import { CloseBtn } from '../../CloseBtn'

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseBtn />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className="flex flex-col items-center bg-zinc-800 rounded-lg w-24
               flex-1 gap-2 border-2 border-transparent hover:border-brand-500
               focus:border-brand-500 focus:outline-none py-5"
              type="button"
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.src} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}

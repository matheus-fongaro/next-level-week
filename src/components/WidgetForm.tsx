export function WidgetForm() {
    return (
        <div
            className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col 
            items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
        >
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
            </header>
            <p>Hello world</p>
            <footer className="text-xs text-neutral-400">
                Feito com amor por{' '}
                <a
                    className="underline-offset-2 underline"
                    href="https://github.com/matheus-fongaro"
                >
                    Matheus Fongaro
                </a>
            </footer>
        </div>
    )
}

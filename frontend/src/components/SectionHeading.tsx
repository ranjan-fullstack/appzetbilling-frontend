interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <p className="mb-3 text-sm font-extrabold uppercase tracking-wider text-[#238000] dark:text-[#6ee22d]">{eyebrow}</p>
      <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight text-slate-950 dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  )
}

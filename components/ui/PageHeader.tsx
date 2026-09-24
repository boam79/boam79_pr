interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-12 text-left">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">{description}</p>
      ) : null}
    </header>
  );
}

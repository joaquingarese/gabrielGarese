type Props = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-5">
      <div className={className}>{children}</div>
    </section>
  );
}

export default Container;

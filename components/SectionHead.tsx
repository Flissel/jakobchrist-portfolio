type Props = { num: string; label: string };

export function SectionHead({ num, label }: Props) {
  return (
    <div className="section__head">
      <span className="section__num">{num}</span>
      <span>{label}</span>
    </div>
  );
}

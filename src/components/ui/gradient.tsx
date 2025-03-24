export default function Gradient({ direction }: { direction: 'r' | 'l' }) {
  return (
    <div className={`absolute top-0 w-10 md:w-20 bg-gradient-to-r h-full ${direction === 'r' ? 'from-transparent to-background -right-2' : 'from-background to-transparent -left-2'}`} />
  );
}

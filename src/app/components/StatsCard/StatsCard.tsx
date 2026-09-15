interface StatsCardProps {
  value: string;
  label: string;
}

export const StatsCard = ({ value, label }: StatsCardProps) => {
  return (
    <div 
      className="p-6 text-center"
      style={{
        borderRadius: "20px",
        border: "0.5px solid rgba(139, 116, 165, 0.40)",
        background: "linear-gradient(90deg, rgba(191, 148, 255, 0.05) 0%, rgba(134, 61, 233, 0.08) 99.99%)",
      }}
    >
      <div className="font-light text-3xl md:text-4xl text-[#BF94FF] mb-2">{value}</div>
      <div className="text-sm text-gray-500 uppercase tracking-wide">{label}</div>
    </div>
  );
};

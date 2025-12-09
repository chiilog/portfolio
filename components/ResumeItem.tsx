interface Props {
  period: string;
  company: string;
  position: string;
  responsibilities: string[];
}

export default function ResumeItem({ period, company, position, responsibilities }: Props) {
  return (
    <div className="border-b border-gray-200 py-6 px-4 even:bg-slate-50">
      <div className="mb-4">
        <h3 className="font-semibold text-xl text-gray-800 mb-2">{period}</h3>
        <p className="text-gray-600">{company}</p>
        <p className="text-gray-600 italic">{position}</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">主な業務内容</h4>
        <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

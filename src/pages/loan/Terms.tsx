interface TermsProps {
  acceptedTerms: boolean;
  setAcceptedTerms: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Terms({ acceptedTerms, setAcceptedTerms }: TermsProps) {
  return (
    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
      <input
        type="checkbox"
        className="w-5 h-5 cursor-pointer"
        checked={acceptedTerms}
        onChange={(e) => setAcceptedTerms(e.target.checked)}
      />
      <p className="text-sm text-gray-700">
        Sunt de acord cu termenii și condițiile contractului de credit și
        confirm că am citit și înțeles toate clauzele acestuia.
      </p>
    </div>
  );
}

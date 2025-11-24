interface DatePersonaleProps {
  form: {
    phone: number;
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    address: string;
  };

  // React.Dispatch permite o valoare nouă sau o funcție prev => newState
  setForm: React.Dispatch<
    React.SetStateAction<{
      phone: number;
      firstName: string;
      lastName: string;
      email: string;
      city: string;
      address: string;
    }>
  >;
}
// Componenta principală — primește "form" și "setForm" prin props
export default function DatePersonale({ form, setForm }: DatePersonaleProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-blue-900 mb-4 border-b pb-2">
        Date Personale
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Prenume</label>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, firstName: e.target.value }))
            }
            placeholder="Prenume"
            className="border rounded-lg p-3"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Nume</label>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, lastName: e.target.value }))
            }
            placeholder="Nume"
            className="border rounded-lg p-3"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="email@example.com"
            className="border rounded-lg p-3"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Telefon</label>
          <input
            type="number"
            value={form.phone}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, phone: Number(e.target.value) }))
            }
            placeholder="07XX XXX XXX"
            className="border rounded-lg p-3"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Oraș</label>
          <input
            type="text"
            value={form.city}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, city: e.target.value }))
            }
            placeholder="Oraș"
            className="border rounded-lg p-3"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Adresă</label>
          <input
            type="text"
            placeholder="Introdu adresa completă"
            className="border rounded-lg p-3"
            value={form.address}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, address: e.target.value }))
            }
          />
        </div>
      </div>
    </section>
  );
}

import DepositCard from '../components/DepositCard';

const deposits = [
  {
    title: 'Recurring Deposit',
    description: 'दरमहा निश्चित रक्कम जमा करून शिस्तबद्ध बचत करण्यासाठी योग्य योजना.',
    interestRate: 'उदा. 6.75% p.a.'
  },
  {
    title: 'Fixed Deposit',
    description: 'निश्चित कालावधीसाठी एकरकमी गुंतवणुकीवर स्थिर आणि सुरक्षित परतावा मिळवा.',
    interestRate: 'उदा. 7.10% p.a.'
  },
  {
    title: 'Monthly Deposit',
    description: 'महिन्याला जमा सुविधेसह लवचिक बचत पर्याय आणि नियोजित आर्थिक उद्दिष्टे.',
    interestRate: 'उदा. 6.50% p.a.'
  },
  {
    title: 'Senior Citizen Deposit',
    description: 'ज्येष्ठ नागरिकांसाठी वाढीव व्याजदरासह सुरक्षित आणि विश्वासार्ह ठेव योजना.',
    interestRate: 'उदा. 7.60% p.a.'
  }
];

const Deposits = () => {
  return (
    <section className="py-12">
      <div className="bank-container">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-brand-primary to-blue-600 p-6 text-white md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">ठेवी योजना</h1>
              <p className="mt-3 text-sm text-blue-50 md:text-base">
                सुरक्षित गुंतवणूक, आकर्षक व्याजदर आणि तुमच्या गरजांनुसार निवडता येतील अशा योजना.
              </p>
            </div>

            <div className="flex h-44 items-center justify-center rounded-2xl border border-white/40 bg-white/10 text-sm text-blue-100">
              {/* Add financial savings image */}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {deposits.map((deposit) => (
            <DepositCard key={deposit.title} {...deposit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deposits;

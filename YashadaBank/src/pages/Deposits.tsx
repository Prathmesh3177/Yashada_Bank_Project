import DepositCard from '../components/DepositCard';
import { useLanguage } from '../context/LanguageContext';

const deposits = [
  {
    titleMr: 'आवर्ती ठेव',
    titleEn: 'Recurring Deposit',
    descriptionMr: 'दरमहा निश्चित रक्कम जमा करून शिस्तबद्ध बचत करण्यासाठी योग्य योजना.',
    descriptionEn: 'Ideal scheme for disciplined savings by depositing a fixed amount every month.',
    interestRate: '6.75% p.a.'
  },
  {
    titleMr: 'मुदत ठेव',
    titleEn: 'Fixed Deposit',
    descriptionMr: 'निश्चित कालावधीसाठी एकरकमी गुंतवणुकीवर स्थिर आणि सुरक्षित परतावा मिळवा.',
    descriptionEn: 'Earn stable and secure returns on a lump-sum investment for a fixed tenure.',
    interestRate: '7.10% p.a.'
  },
  {
    titleMr: 'मासिक ठेव',
    titleEn: 'Monthly Deposit',
    descriptionMr: 'महिन्याला जमा सुविधेसह लवचिक बचत पर्याय आणि नियोजित आर्थिक उद्दिष्टे.',
    descriptionEn: 'Flexible monthly savings option aligned with your planned financial goals.',
    interestRate: '6.50% p.a.'
  },
  {
    titleMr: 'ज्येष्ठ नागरिक ठेव',
    titleEn: 'Senior Citizen Deposit',
    descriptionMr: 'ज्येष्ठ नागरिकांसाठी वाढीव व्याजदरासह सुरक्षित आणि विश्वासार्ह ठेव योजना.',
    descriptionEn: 'Safe and reliable deposit plan for senior citizens with higher interest benefits.',
    interestRate: '7.60% p.a.'
  }
];

const Deposits = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  return (
    <section className="py-12">
      <div className="bank-container">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-brand-primary to-blue-600 p-6 text-white md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">{isMarathi ? 'ठेवी योजना' : 'Deposit Schemes'}</h1>
              <p className="mt-3 text-sm text-blue-50 md:text-base">
                {isMarathi
                  ? 'सुरक्षित गुंतवणूक, आकर्षक व्याजदर आणि तुमच्या गरजांनुसार निवडता येतील अशा योजना.'
                  : 'Secure investment options with attractive interest rates tailored to your needs.'}
              </p>
            </div>

            <div className="flex h-44 items-center justify-center rounded-2xl border border-white/40 bg-white/10 text-sm text-blue-100">
              {isMarathi ? 'आर्थिक बचत प्रतिमा' : 'Savings Image'}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {deposits.map((deposit) => (
            <DepositCard key={deposit.titleMr} {...deposit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deposits;

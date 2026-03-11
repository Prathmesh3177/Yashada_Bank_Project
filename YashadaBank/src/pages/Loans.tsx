import LoanCard from '../components/LoanCard';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CurrencyRupeeIcon,
  HomeModernIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

const loans = [
  {
    loanType: 'Gold Loan',
    description: 'सोने तारण ठेवून जलद मंजुरीसह कर्ज सुविधा.',
    Icon: CurrencyRupeeIcon
  },
  {
    loanType: 'Personal Loan',
    description: 'वैयक्तिक गरजांसाठी कमी कागदपत्रांसह सोपे कर्ज.',
    Icon: BuildingOffice2Icon
  },
  {
    loanType: 'Vehicle Loan',
    description: 'नवीन किंवा वापरलेल्या वाहनासाठी आकर्षक व्याजदरात कर्ज.',
    Icon: TruckIcon
  },
  {
    loanType: 'Business Loan',
    description: 'व्यवसाय विस्तार आणि कार्यरत भांडवलासाठी कर्ज पर्याय.',
    Icon: BriefcaseIcon
  },
  {
    loanType: 'Education Loan',
    description: 'उच्च शिक्षणासाठी लवचिक परतफेडीसह आर्थिक मदत.',
    Icon: AcademicCapIcon
  },
  {
    loanType: 'Home Loan',
    description: 'घर खरेदी, बांधकाम किंवा नूतनीकरणासाठी गृहकर्ज.',
    Icon: HomeModernIcon
  }
];

const Loans = () => {
  return (
    <section className="py-12">
      <div className="bank-container">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-brand-primary to-blue-700 px-6 py-10 shadow-xl md:px-10">
          <h1 className="text-3xl font-bold text-white md:text-4xl">कर्ज योजना</h1>
          <p className="mt-3 max-w-2xl text-sm text-blue-100 md:text-base">
            आपल्या गरजेनुसार योग्य कर्ज योजना निवडा आणि आर्थिक उद्दिष्टे पूर्ण करा.
          </p>
          <div className="mt-6 flex h-40 items-center justify-center rounded-2xl border border-dashed border-blue-200/70 bg-white/10 text-sm text-blue-100">
            {/* Add loan related image */}
            Loan image placeholder
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loans.map((loan) => (
            <LoanCard key={loan.loanType} {...loan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loans;

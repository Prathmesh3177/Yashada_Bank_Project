import {
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CurrencyRupeeIcon,
  HomeModernIcon,
  TruckIcon
} from '@heroicons/react/24/outline';
import LoanCard from '../components/LoanCard';
import { useLanguage } from '../context/LanguageContext';
import loansBanner from '../assets/loans-banner.png';

const loans = [
  {
    loanTypeMr: 'गोल्ड लोन',
    loanTypeEn: 'Gold Loan',
    descriptionMr: 'सोने तारण ठेवून जलद मंजुरीसह कर्ज सुविधा.',
    descriptionEn: 'Quick loan approval against pledged gold.',
    Icon: CurrencyRupeeIcon
  },
  {
    loanTypeMr: 'वैयक्तिक कर्ज',
    loanTypeEn: 'Personal Loan',
    descriptionMr: 'वैयक्तिक गरजांसाठी कमी कागदपत्रांसह सोपे कर्ज.',
    descriptionEn: 'Easy personal loans with minimal documentation.',
    Icon: BuildingOffice2Icon
  },
  {
    loanTypeMr: 'वाहन कर्ज',
    loanTypeEn: 'Vehicle Loan',
    descriptionMr: 'नवीन किंवा वापरलेल्या वाहनासाठी आकर्षक व्याजदरात कर्ज.',
    descriptionEn: 'Attractive vehicle loan options for new or used vehicles.',
    Icon: TruckIcon
  },
  {
    loanTypeMr: 'व्यवसाय कर्ज',
    loanTypeEn: 'Business Loan',
    descriptionMr: 'व्यवसाय विस्तार आणि कार्यरत भांडवलासाठी कर्ज पर्याय.',
    descriptionEn: 'Business financing for expansion and working capital.',
    Icon: BriefcaseIcon
  },
  {
    loanTypeMr: 'शैक्षणिक कर्ज',
    loanTypeEn: 'Education Loan',
    descriptionMr: 'उच्च शिक्षणासाठी लवचिक परतफेडीसह आर्थिक मदत.',
    descriptionEn: 'Flexible education loans for higher studies.',
    Icon: AcademicCapIcon
  },
  {
    loanTypeMr: 'गृहकर्ज',
    loanTypeEn: 'Home Loan',
    descriptionMr: 'घर खरेदी, बांधकाम किंवा नूतनीकरणासाठी गृहकर्ज.',
    descriptionEn: 'Home loans for purchase, construction, or renovation.',
    Icon: HomeModernIcon
  }
];

const Loans = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  return (
    <section className="py-12">
      <div className="bank-container">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-brand-primary to-blue-700 px-6 py-10 shadow-xl md:px-10">
          <h1 className="text-3xl font-bold text-white md:text-4xl">{isMarathi ? 'कर्ज योजना' : 'Loan Schemes'}</h1>
          <p className="mt-3 max-w-2xl text-sm text-blue-100 md:text-base">
            {isMarathi
              ? 'आपल्या गरजेनुसार योग्य कर्ज योजना निवडा आणि आर्थिक उद्दिष्टे पूर्ण करा.'
              : 'Choose the right loan scheme as per your needs and achieve your financial goals.'}
          </p>
          <div className="mt-6 flex h-40 items-center justify-center rounded-2xl border border-dashed border-blue-200/70 bg-white/10 text-sm text-blue-100">
            <img src={loansBanner} alt="Loan Banner" className="h-full w-full rounded-2xl object-cover" />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loans.map((loan) => (
            <LoanCard key={loan.loanTypeMr} {...loan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loans;

import bankLogo from '../assets/bank_logo.png';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  return (
    <div className="bank-container py-12 md:py-16">
      <section>
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary p-8 text-white shadow-card lg:grid-cols-2">
          <div>
            <p className="text-sm text-blue-100">
              {isMarathi ? 'यशदा मल्टिस्टेट को.ऑप.क्रेडिट' : 'Yashada Multistate Co-op Credit'}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold md:text-5xl">{isMarathi ? 'संस्थेविषयी' : 'About Institution'}</h1>
            <p className="mt-4 text-sm leading-7 text-blue-100 md:text-base">
              {isMarathi
                ? 'विश्वास, सहकार आणि आर्थिक सक्षमीकरण यांवर आधारित आमची वाटचाल.'
                : 'Our journey is rooted in trust, cooperation, and financial empowerment.'}
            </p>
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-5">
            <img src={bankLogo} alt="Yashada Bank" className="h-48 w-48 rounded-full bg-white p-2 object-contain" />
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title">{isMarathi ? 'संस्थेविषयी' : 'About Institution'}</h2>
        <div className="mt-6 bank-card">
          <h3 className="text-2xl font-bold text-brand-primary">
            {isMarathi ? 'यशदा मल्टिस्टेट को.ऑप.क्रेडिट' : 'Yashada Multistate Co-op Credit'}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            {isMarathi
              ? 'यशदा मल्टीस्टेट ही अशी बँक आहे जी फक्त स्वप्नच दाखवत नाही तर ती पूर्ण करण्याचे सामर्थ्य ही देते. आज समाजात अनेक घटक आहेत ज्यांना खंबीर, भक्कम आधाराची गरज आहे, जसे शेतकरी, नवउदयोजक, महिला इ. सर्व घटकांना प्रेरणा, उत्साहासह आर्थिक पाठबळ ही यशदा देते. या सहकाराच्या साखळीतून एक बुलंद भारत बनविण्यासाठी यशदा सक्रीय आहे. यासाठी छत्रपती शिवप्रभू, राजर्षी शाहु महाराज, महिंद्रा, रतनजी टाटा आणि श्री व सौ नारायण मूर्ती यांच्या आदर्शांचा प्रभाव यशदावर आहे.'
              : 'Yashada Multistate is not just a bank that shows dreams, it empowers people to fulfill them. Today, many groups in society need strong support, including farmers, emerging entrepreneurs, and women. Yashada provides motivation and financial backing to all these groups. Through the cooperative movement, Yashada actively contributes to building a stronger India. The institution draws inspiration from Chhatrapati Shivaji Maharaj, Rajarshi Shahu Maharaj, Mahindra, Ratan Tata, and Shri & Smt Narayana Murthy.'}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            {isMarathi
              ? 'सामाजिक बांधिलकी जपताना आम्हाला समाजातूनच प्रेरणा मिळते, विश्वास मिळतो. सर्व सामान्यांच्या चेहऱ्यावर कायम आनंद राहावा, चांगली जीवनशैली विकसित व्हावी, शेतकरी, महिला, विद्यार्थी, युवा पिढी आणि जेष्ठ नागरिक इ. सर्वांसाठी प्रामाणिकपणे कार्य करण्यासाठी यशदा मल्टीस्टेट प्रयत्नशील आहे आणि राहील. या कार्यामध्ये आपला सहभाग सदैव अपेक्षित आहे.'
              : 'While preserving our social commitment, we gain our strongest inspiration and trust from society itself. Yashada Multistate remains committed to honest work for farmers, women, students, youth, and senior citizens so that people can enjoy a better quality of life. Your continued participation in this mission is always welcomed.'}
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title">{isMarathi ? 'आकडेवारी' : 'Statistics'}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 text-center shadow-card">
            <p className="text-3xl font-extrabold text-brand-primary">10000+</p>
            <p className="mt-1 text-sm text-slate-500">{isMarathi ? 'समाधानी खातेदार' : 'Satisfied Account Holders'}</p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-card">
            <p className="text-3xl font-extrabold text-brand-primary">45</p>
            <p className="mt-1 text-sm text-slate-500">{isMarathi ? 'प्रशिक्षित कर्मचारी' : 'Trained Employees'}</p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-card">
            <p className="text-3xl font-extrabold text-brand-primary">365</p>
            <p className="mt-1 text-sm text-slate-500">{isMarathi ? 'दिवस अखंड सेवा' : 'Days of Continuous Service'}</p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title">{isMarathi ? 'संस्थापक' : 'Founder'}</h2>
        <div className="mt-6 grid items-center gap-8 rounded-3xl bg-white p-8 shadow-card lg:grid-cols-3">
          <div className="flex items-center justify-center rounded-2xl bg-blue-50 p-4 lg:col-span-1">
            <img src={bankLogo} alt="Founder" className="h-48 w-48 rounded-full object-contain" />
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-brand-primary">{isMarathi ? 'प्रा. सुधीर दत्तात्रय सस्ते' : 'Prof. Sudhir Dattatray Saste'}</h3>
            <p className="mt-1 text-sm font-medium text-slate-500">
              {isMarathi ? 'संस्थापक / चेअरमन' : 'Founder / Chairman'}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              {isMarathi
                ? '‘यशदा मल्टीस्टेट को. ऑप. क्रेडिट. सो. लि’ ही बँक गेली 12 वर्षं ग्राहकांच्या सेवेत सज्ज आहे. बँकेच्या सातही शाखा ग्राहकांच्या सेवेत सदैव तत्पर असून बँकिंग प्रक्रिया अधिकाधिक सोपी करण्याकडे आमचा कायमचा कल आहे. बँकेच्या 99% कर्जवसुली धोरणामुळे कमी कालावधीत मोठा पल्ला गाठला आहे. मागील 12 वर्षांप्रमाणेच पुढील सर्व वर्षेही बँक उत्तम सेवा देत राहील, याची मी खात्री देतो.'
                : '“Yashada Multistate Co-op Credit Society Ltd has served customers with commitment for the last 12 years. All seven branches remain consistently responsive, with a constant focus on simplifying banking for every customer. With a 99% loan recovery policy, the bank has achieved strong growth in a short period. I assure that, just like the past 12 years, we will continue to deliver excellent service in the years ahead.”'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

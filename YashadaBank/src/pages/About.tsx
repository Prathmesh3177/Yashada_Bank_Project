const teamMembers = [
  { name: 'सौ. पूजा देशमुख', role: 'शाखा व्यवस्थापक' },
  { name: 'श्री. अमोल शिंदे', role: 'कर्ज अधिकारी' },
  { name: 'सौ. मीनल पाटील', role: 'ठेवी सल्लागार' },
  { name: 'श्री. संदीप जगताप', role: 'ग्राहक सेवा प्रमुख' },
  { name: 'सौ. वैशाली कदम', role: 'डिजिटल बँकिंग अधिकारी' },
  { name: 'श्री. निखिल मोरे', role: 'ऑपरेशन्स अधिकारी' }
];

const About = () => {
  return (
    <div className="bank-container py-12 md:py-16">
      <section>
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary p-8 text-white shadow-card lg:grid-cols-2">
          <div>
            <p className="text-sm text-blue-100">यशदा सहकारी बँक</p>
            <h1 className="mt-3 text-3xl font-extrabold md:text-5xl">आमच्याबद्दल</h1>
            <p className="mt-4 text-sm leading-7 text-blue-100 md:text-base">
              उस्मानाबाद जिल्ह्यातील नागरिक, शेतकरी आणि उद्योजकांसाठी विश्वासार्ह आर्थिक भागीदार.
            </p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
            {/* Add bank building image */}
            <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-white/40 text-sm text-blue-100">
              Bank Building Placeholder
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title">About Bank</h2>
        <div className="mt-6 bank-card">
          <p className="text-sm leading-7 text-slate-600 md:text-base">
            यशदा सहकारी बँक ही सहकार तत्वावर उभी राहिलेली आणि स्थानिक विकासासाठी बांधील असलेली संस्था आहे.
            ग्रामीण तसेच शहरी भागातील ग्राहकांना बचत, ठेवी, कर्ज आणि डिजिटल बँकिंग सेवा सुरक्षित व पारदर्शक
            पद्धतीने उपलब्ध करून देणे हे आमचे प्रमुख उद्दिष्ट आहे. बदलत्या काळात तंत्रज्ञानाचा स्वीकार करत,
            ग्राहकांच्या गरजेनुसार सोप्या, वेगवान आणि विश्वासार्ह सेवा देण्यासाठी आमची टीम सातत्याने कार्यरत आहे.
            आर्थिक साक्षरता, लघुउद्योगांना वित्तपुरवठा आणि शेतकरी सक्षमीकरण यांद्वारे आम्ही उस्मानाबादच्या
            सर्वांगीण प्रगतीत योगदान देत आहोत.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title">Mission Vision Values</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="bank-card">
            <h3 className="text-xl font-semibold text-brand-primary">ध्येय</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              प्रत्येक ग्राहकाला सोप्या आणि परवडणाऱ्या बँकिंग सेवांद्वारे आर्थिक स्थैर्य देणे.
            </p>
          </article>
          <article className="bank-card">
            <h3 className="text-xl font-semibold text-brand-primary">दृष्टी</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              महाराष्ट्रातील अग्रगण्य सहकारी बँक म्हणून आधुनिक, सुरक्षित आणि सर्वसमावेशक सेवा देणे.
            </p>
          </article>
          <article className="bank-card">
            <h3 className="text-xl font-semibold text-brand-primary">मूल्ये</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              प्रामाणिकपणा, पारदर्शकता, ग्राहककेंद्री दृष्टिकोन आणि समाजहित ही आमची मूलभूत तत्त्वे आहेत.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title">Statistics</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 text-center shadow-card">
            <p className="text-3xl font-extrabold text-brand-primary">10000+</p>
            <p className="mt-1 text-sm text-slate-500">Customers</p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-card">
            <p className="text-3xl font-extrabold text-brand-primary">45</p>
            <p className="mt-1 text-sm text-slate-500">Employees</p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-card">
            <p className="text-3xl font-extrabold text-brand-primary">25+</p>
            <p className="mt-1 text-sm text-slate-500">Years of Service</p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title">Leadership</h2>
        <div className="mt-6 grid items-center gap-8 rounded-3xl bg-white p-8 shadow-card lg:grid-cols-3">
          <div className="rounded-2xl bg-blue-50 p-4 lg:col-span-1">
            {/* Add chairman image */}
            <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-blue-300 text-sm text-slate-500">
              Chairman Image Placeholder
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-brand-primary">श्री. राजेंद्र पाटील</h3>
            <p className="mt-1 text-sm font-medium text-slate-500">संस्थापक / अध्यक्ष</p>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              "सहकाराच्या बळावर स्थानिक अर्थव्यवस्थेला गती देणे आणि प्रत्येक कुटुंबापर्यंत विश्वासार्ह बँकिंग
              पोहोचवणे हे आमचे ध्येय आहे. ग्राहकांच्या प्रगतीतच बँकेची खरी प्रगती आहे."
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title">Bank Team</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="bank-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-brand-primary">
                {member.name.charAt(0)}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{member.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{member.role}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

export type Branch = {
  id: string;
  name: { en: string; mr: string };
  address: { en: string; mr: string };
  phone: string;
  mapUrl: string;
};

export const branches: Branch[] = [
  {
    id: 'dharashiv',
    name: { en: 'Dharashiv (Main Branch)', mr: 'धाराशिव (मुख्य शाखा)' },
    address: {
      en: 'Yashada Heights, Kakade Building,\nNaikwadi Nagar, near Shri Visarjan Vihiri,\nDharashiv - 413501',
      mr: 'यशदा हाईटस्, काकडे बिल्डींग,\nनाईकवाडी नगर, श्री विसर्जन विहीरी शेजारी\nधाराशिव - 413501'
    },
    phone: '+91 9881059007',
    mapUrl: 'https://www.google.com/maps/place/Yashada+multi-state+co-op'
  },
  {
    id: 'tuljapur',
    name: { en: 'Tuljapur Branch', mr: 'तुळजापूर' },
    address: {
      en: 'Hungargekar Sankul,\nnear ICICI Bank,\nopposite old bus stand, Tuljapur',
      mr: 'हंगरगेकर संकुल,\nआय सी आय सी आय बँके शेजारी,\nजुन्या बसस्थानका समोर तुळजापूर.'
    },
    phone: '+91 8237961244',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tuljapur+Maharashtra'
  },
  {
    id: 'yedshi',
    name: { en: 'Yedshi Branch', mr: 'येडशी' },
    address: {
      en: 'Yashada Multistate Co-op Credit Society Ltd.\nSaste Nagar, Yedshi\nTal. Dist. Dharashiv',
      mr: 'यशदा मल्टीस्टेट को.ऑप. क्रे. सो. लि.\nसस्ते नगर मु.पो येडशी\nता. जि. धाराशिव.'
    },
    phone: '+91 9922237898',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Yedshi+Dharashiv'
  },
  {
    id: 'dhoki',
    name: { en: 'Dhoki Branch', mr: 'ढोकी' },
    address: {
      en: 'Late Damodar Joshi Complex\nBalaji Nagar, Dhoki',
      mr: 'कै. दामोदर जोशी कॉम्प्लेक्स\nबालाजी नगर, ढोकी'
    },
    phone: '+91 9922237898',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dhoki+Maharashtra'
  },
  {
    id: 'alani',
    name: { en: 'Alani Branch', mr: 'आळणी' },
    address: {
      en: 'Chhatrapati Shivaji Chowk, Alani',
      mr: 'छत्रपती शिवाजी चौक, आळणी'
    },
    phone: '+91 9657565428',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Alani+Dharashiv'
  },
  {
    id: 'pune',
    name: { en: 'Pune Branch', mr: 'पुणे' },
    address: {
      en: 'Shop No. 32\nRohan Plaza\nSiddheshwar Hotel\nSade Satra Nali, Hadapsar\nPune - 411028',
      mr: 'दुकान क्र. 32\nरोहन प्लाझा\nसिद्धेश्वर हॉटेल\nसाडे सत्रा नळी, हडपसर\nपुणे - 411028'
    },
    phone: '+91 7057598247',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hadapsar+Pune'
  },
  {
    id: 'upla',
    name: { en: 'Upla Branch', mr: 'उपळा' },
    address: {
      en: 'Teli Chowk,\nUple (Makadache)\nTal. Dist. Dharashiv',
      mr: 'तेली चौक,\nउपळे (माकडाचे)\nता. जि. धाराशिव'
    },
    phone: '+91 7057598247',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Uple+Makadache+Dharashiv'
  },
  {
    id: 'chorakhali',
    name: { en: 'Chorakhali Branch', mr: 'चोराखळी' },
    address: {
      en: 'Sonatakke Galli\nnear Laxmi Mandir\nChorakhali, Tal. Kalamb',
      mr: 'सोनटक्के गल्ली\nलक्ष्मी मंदिर जवळ\nचोराखळी, ता. कळंब'
    },
    phone: '+91 9420074143',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chorakhali+Kalamb'
  }
];

export const announcements = [
  {
    id: 'a1',
    date: '2026-03-01',
    title: {
      en: 'Special Women Entrepreneurship Loan Camp from 15 March',
      mr: '१५ मार्चपासून महिला उद्योजिका कर्ज शिबिर सुरू'
    }
  },
  {
    id: 'a2',
    date: '2026-02-25',
    title: {
      en: 'Higher interest benefit for senior citizen deposits',
      mr: 'ज्येष्ठ नागरिक ठेवींसाठी वाढीव व्याजदर लाभ'
    }
  },
  {
    id: 'a3',
    date: '2026-02-17',
    title: {
      en: 'Digital service upgrade completed across all branches',
      mr: 'सर्व शाखांमध्ये डिजिटल सेवा उन्नती पूर्ण'
    }
  }
];

export const notices = [
  {
    id: 'n1',
    date: '2026-03-05',
    text: {
      en: 'Annual General Meeting on 28 March 2026 at Dharashiv Head Office.',
      mr: 'वार्षिक सर्वसाधारण सभा २८ मार्च २०२६ रोजी धाराशिव मुख्य कार्यालयात आयोजित.'
    }
  },
  {
    id: 'n2',
    date: '2026-02-28',
    text: {
      en: 'Updated KYC verification drive is active at all branches.',
      mr: 'सर्व शाखांमध्ये अद्ययावत केवायसी पडताळणी मोहीम सुरू आहे.'
    }
  },
  {
    id: 'n3',
    date: '2026-02-21',
    text: {
      en: 'RTGS service maintenance window: Sunday 01:00 AM to 03:00 AM.',
      mr: 'आरटीजीएस सेवा देखभाल वेळ: रविवार पहाटे १:०० ते ३:००.'
    }
  }
];

export const faqItems = [
  {
    id: 'f1',
    question: {
      en: 'How can I become a member of the society?',
      mr: 'सोसायटीचा सदस्य कसा होता येईल?'
    },
    answer: {
      en: 'Submit membership form with KYC documents at nearest branch. Approval is usually completed within 3 working days.',
      mr: 'जवळच्या शाखेत केवायसी कागदपत्रांसह सदस्यत्व फॉर्म जमा करा. साधारण ३ कामकाजाच्या दिवसांत मंजुरी मिळते.'
    }
  },
  {
    id: 'f2',
    question: {
      en: 'What is the processing time for personal loans?',
      mr: 'वैयक्तिक कर्जासाठी प्रक्रिया किती वेळात होते?'
    },
    answer: {
      en: 'If all documents are complete, personal loans are processed within 48 hours.',
      mr: 'सर्व कागदपत्रे पूर्ण असल्यास वैयक्तिक कर्जाची प्रक्रिया ४८ तासांत पूर्ण होते.'
    }
  },
  {
    id: 'f3',
    question: {
      en: 'Can I download application forms online?',
      mr: 'अर्जाचे फॉर्म ऑनलाइन डाउनलोड करता येतात का?'
    },
    answer: {
      en: 'Yes, forms are available on the Downloads page and can be submitted at any branch.',
      mr: 'होय, फॉर्म डाउनलोड्स पेजवर उपलब्ध आहेत आणि कोणत्याही शाखेत सादर करता येतात.'
    }
  }
];

export const downloadForms = [
  { id: 'd1', key: 'membership', file: '/forms/membership-form.txt' },
  { id: 'd2', key: 'loan', file: '/forms/loan-application.txt' },
  { id: 'd3', key: 'kyc', file: '/forms/kyc-update-form.txt' }
];

export const fallbackFacebookPosts = [
  {
    id: 'fb1',
    message: 'Women entrepreneurship loan awareness camp highlights from Tuljapur branch.',
    created_time: '2026-03-08',
    permalink_url: 'https://www.facebook.com/',
    full_picture:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'fb2',
    message: 'Financial literacy session for students completed successfully at Dharashiv.',
    created_time: '2026-03-03',
    permalink_url: 'https://www.facebook.com/',
    full_picture:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'fb3',
    message: 'New member onboarding drive this week across all branches.',
    created_time: '2026-02-26',
    permalink_url: 'https://www.facebook.com/',
    full_picture:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80'
  }
];

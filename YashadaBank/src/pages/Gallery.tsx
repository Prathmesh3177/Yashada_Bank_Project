const galleryItems = [
  'नवीन शाखा उद्घाटन',
  'ग्राहक मेळावा',
  'कृषी कर्ज शिबिर',
  'महिला बचत गट कार्यक्रम',
  'डिजिटल बँकिंग कार्यशाळा',
  'वार्षिक सर्वसाधारण सभा'
];

const Gallery = () => {
  return (
    <section className="bank-container py-12">
      <h1 className="section-title">गॅलरी</h1>
      <p className="section-subtitle">बँकेचे उपक्रम, कार्यक्रम आणि समाजाभिमुख उपक्रमांची झलक.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item) => (
          <article key={item} className="bank-card p-4">
            {/* Add bank image here */}
            <div className="flex h-44 items-center justify-center rounded-xl border border-dashed border-blue-300 bg-blue-50 text-sm text-slate-500">
              फोटो येथे जोडा
            </div>
            <h3 className="mt-4 text-base font-semibold text-brand-primary">{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

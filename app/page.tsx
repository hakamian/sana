"use client";

import Image from "next/image";

export default function Home() {
  const features = [
    { title: "گفتگوی هوشمند", desc: "دسترسی به آخرین مدل‌های GPT, Claude و Gemini برای پاسخ به سوالات حرفه‌ای.", color: "#06b6d4", bg: "rgba(6, 182, 212, 0.1)", icon: "/assets/chat.png" },
    { title: "تولید تصویر", desc: "تبدیل متن به عکس‌های خیره‌کننده با Midjourney و DALL-E 3 با بالاترین کیفیت.", color: "#6366f1", bg: "rgba(99, 102, 241, 0.1)", icon: "/assets/image.png" },
    { title: "سایت‌ساز خودکار", desc: "تنها با توصیف بیزنس خود، یک وب‌سایت کامل، ریسپانسیو و بهینه تحویل بگیرید.", color: "#f43f5e", bg: "rgba(244, 63, 94, 0.1)", icon: "/assets/web.png" },
    { title: "ویدیو و موسیقی", desc: "ساخت کلیپ‌های ویدیویی جذاب و موزیک‌های اورجینال با هوش مصنوعی.", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.1)", icon: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" }
  ];

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', direction: 'rtl', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Dynamic Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
      </div>

      {/* Header */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '80px', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,0,0,0.05)', zIndex: 1000, display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1200px', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <div style={{ ...gradientTextStyle, fontSize: '24px', fontWeight: '900' }}>هوشی باما</div>
            <nav style={{ display: 'flex', gap: '30px', fontSize: '14px', fontWeight: 'bold', opacity: 0.6 }} className="hidden lg:flex">
              <span style={{ cursor: 'pointer' }}>ابزارها</span>
              <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>تعرفه‌ها</a>
              <span style={{ cursor: 'pointer' }}>وبلاگ</span>
              <span style={{ cursor: 'pointer' }}>درباره ما</span>
            </nav>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="/login" style={{ fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>ورود</a>
            <a href="/signup" style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1)', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '50px', fontWeight: '900', fontSize: '14px', cursor: 'pointer', boxShadow: '0 10px 20px -5px rgba(6, 182, 212, 0.3)', textDecoration: 'none' }}>
              شروع رایگان
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ height: '140px' }}></div>

        {/* Hero Section */}
        <section style={{ width: '100%', maxWidth: '1100px', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: '50px', backgroundColor: 'rgba(6, 182, 212, 0.08)', border: '1px solid rgba(6, 182, 212, 0.15)', color: '#0891b2', fontSize: '13px', fontWeight: '900', marginBottom: '48px', boxShadow: '0 4px 12px rgba(6, 182, 212, 0.05)' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#06b6d4', boxShadow: '0 0 10px #06b6d4' }}></span>
            مدرن‌ترین پلتفرم هوش مصنوعی فارسی
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '32px', letterSpacing: '-0.03em' }}>
            آینده را با <br />
            <span style={gradientTextStyle}>هوشی باما</span> بسازید
          </h1>

          <p style={{ fontSize: '1.25rem', color: '#475569', fontWeight: '500', lineHeight: 1.7, maxWidth: '750px', marginBottom: '64px' }}>
            تلفیقی از ابزارهای پیشرفته هوش مصنوعی برای خلق محتوا، طراحی و مدیریت هوشمندانه. همه‌ی آنچه برای جهش کسب‌وکار خود نیاز دارید در یک‌جا.
          </p>

          <div style={{ display: 'flex', gap: '24px', width: '100%', maxWidth: '480px', marginBottom: '100px' }}>
            <a href="/signup" style={{ flex: 1.2, background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white', padding: '22px', borderRadius: '24px', fontSize: '18px', fontWeight: '900', border: 'none', cursor: 'pointer', boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.25)', transition: 'transform 0.2s', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>شروع رایگان</a>
            <button style={{ flex: 1, backgroundColor: 'white', border: '1px solid #e2e8f0', color: '#0f172a', padding: '22px', borderRadius: '24px', fontSize: '18px', fontWeight: '900', cursor: 'pointer', transition: 'all 0.2s' }}>مشاهده دمو</button>
          </div>

          {/* Large Dashboard Mockup using AI Generated Image */}
          <div style={{ width: '100%', maxWidth: '1000px', position: 'relative', overflow: 'visible' }}>
            <div style={{ width: '100%', backgroundColor: '#0f172a', borderRadius: '48px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.4)', overflow: 'hidden' }}>
              <img src="/assets/dashboard.png" alt="Hoshi Bama Dashboard" style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.9 }}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000";
                  e.currentTarget.style.opacity = '0.3';
                }}
              />
            </div>

            {/* Floating Visual Badges */}
            <div style={{ position: 'absolute', left: '-50px', bottom: '15%', padding: '24px', borderRadius: '28px', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '16px', zIndex: 10 }} className="hidden xl:flex">
              <img src="/assets/chat.png" style={{ width: '48px', height: '48px', borderRadius: '12px' }} alt=""
                onError={(e) => e.currentTarget.style.display = 'none'} />
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: '900', fontSize: '15px' }}>چت هوشمند</div>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 'bold' }}>GPT-4 AI</div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Showcase */}
        <section style={{ width: '100%', padding: '120px 24px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: '900', color: '#94a3b8', letterSpacing: '3px', marginBottom: '60px', opacity: 0.7 }}>مورد اعتماد پیشروان تکنولوژی</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '80px', opacity: 0.2, fontWeight: '900', fontSize: '36px', filter: 'grayscale(1)' }}>
            <span>DIGIKALA</span>
            <span>SNAPP</span>
            <span>TAPSI</span>
            <span>DIVAR</span>
            <span>BAZAAR</span>
          </div>
        </section>

        {/* Features with AI Visuals */}
        <section style={{ width: '100%', maxWidth: '1200px', padding: '120px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: '900', marginBottom: '80px', textAlign: 'center', letterSpacing: '-0.02em' }}>
            امکانات <span style={gradientTextStyle}>هوشی باما</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', width: '100%' }}>
            {features.map((f, i) => (
              <div key={i} style={{ backgroundColor: 'white', padding: '48px', borderRadius: '48px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'transform 0.3s', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ width: '80px', height: '80px', borderRadius: '24px', backgroundColor: f.bg, marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  {f.icon.startsWith('M') ? (
                    <svg style={{ width: '40px', height: '40px', color: f.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={f.icon} /></svg>
                  ) : (
                    <img src={f.icon} alt={f.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) parent.innerHTML = '<div style="font-size: 30px">✨</div>';
                      }}
                    />
                  )}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '16px' }}>{f.title}</h3>
                <p style={{ color: '#64748b', fontWeight: '500', lineHeight: 1.6, fontSize: '15px' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section style={{ width: '100%', maxWidth: '1100px', padding: '100px 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '60px' }}>
          {[
            { label: "کاربر فعال", value: "۵۰,۰۰۰+" },
            { label: "تصویر تولید شده", value: "۱.۲ میلیون" },
            { label: "وب‌سایت ساخته شده", value: "۱۲,۰۰۰" },
            { label: "دقت مدل‌ها", value: "۹۹.۹٪" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ ...gradientTextStyle, fontSize: '42px', fontWeight: '900', marginBottom: '8px' }}>{stat.value}</div>
              <div style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px' }}>{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Pricing Section */}
        <section id="pricing" style={{ width: '100%', maxWidth: '1200px', padding: '120px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: '900', marginBottom: '24px', textAlign: 'center' }}>انتخاب <span style={gradientTextStyle}>برنامه هوشمند</span></h2>
          <p style={{ color: '#64748b', fontSize: '18px', fontWeight: '500', marginBottom: '80px', textAlign: 'center', maxWidth: '600px' }}>پلن‌های متنوع برای نیازهای مختلف، از استفاده شخصی تا کسب‌وکارهای بزرگ.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', width: '100%' }}>
            {[
              {
                name: "رایگان",
                price: "۰",
                features: ["۱۰ چت در روز", "۳ تصویر ماهانه", "سایت‌ساز محدود", "پشتیبانی معمولی"],
                cta: "شروع کنید",
                popular: false
              },
              {
                name: "حرفه‌ای",
                price: "۱۹۹,۰۰۰",
                features: ["چت نامحدود", "۱۰۰ تصویر ماهانه", "سایت‌ساز پیشرفته", "پشتیبانی ۲۴/۷ Priority"],
                cta: "خرید اشتراک",
                popular: true
              },
              {
                name: "سازمانی",
                price: "۷۹۹,۰۰۰",
                features: ["دسترسی تیمی", "تولید تصویر نامحدود", "سایت‌ساز White-label", "مدیر حساب اختصاصی"],
                cta: "تماس بگیرید",
                popular: false
              }
            ].map((plan, i) => (
              <div key={i} style={{
                backgroundColor: 'white',
                padding: '48px',
                borderRadius: '48px',
                border: plan.popular ? '2px solid #06b6d4' : '1px solid #e2e8f0',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: plan.popular ? '0 30px 60px -15px rgba(6, 182, 212, 0.2)' : '0 10px 30px -10px rgba(0,0,0,0.05)',
                transition: 'all 0.3s'
              }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: '24px', left: '24px', backgroundColor: '#06b6d4', color: 'white', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '900' }}>محبوب‌ترین</div>
                )}
                <div style={{ fontSize: '20px', fontWeight: '900', marginBottom: '16px' }}>{plan.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '40px' }}>
                  <span style={{ fontSize: '48px', fontWeight: '900' }}>{plan.price}</span>
                  <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: 'bold' }}>تومان / ماه</span>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
                  {plan.features.map((feat, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: '700', color: '#475569' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#06b6d4', fontSize: '12px' }}>✓</div>
                      {feat}
                    </div>
                  ))}
                </div>
                <button style={{
                  width: '100%',
                  padding: '20px',
                  borderRadius: '24px',
                  fontSize: '16px',
                  fontWeight: '900',
                  border: 'none',
                  backgroundColor: plan.popular ? '#0f172a' : '#f1f5f9',
                  color: plan.popular ? 'white' : '#0f172a',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}>{plan.cta}</button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ width: 'calc(100% - 48px)', maxWidth: '1100px', margin: '80px 24px', padding: '80px', borderRadius: '60px', background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'url(/assets/hero.png)', backgroundSize: 'cover', mixBlendMode: 'overlay' }}></div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', marginBottom: '32px', position: 'relative' }}>همین حالا ماجراجویی خود را آغاز کنید</h2>
          <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px', position: 'relative' }}>به جمع هزاران کاربری بپیوندید که هوشمندانه در حال تغییر دنیای اطرافشان هستند.</p>
          <a href="/signup" style={{ background: 'white', color: '#0f172a', padding: '24px 64px', borderRadius: '24px', fontSize: '20px', fontWeight: '900', border: 'none', cursor: 'pointer', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', textDecoration: 'none', display: 'inline-block' }}>عضویت سریع</a>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ width: '100%', padding: '100px 24px', borderTop: '1px solid #e2e8f0', backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ ...gradientTextStyle, fontSize: '32px', fontWeight: '900', marginBottom: '32px' }}>هوشی باما</div>
          <p style={{ color: '#94a3b8', fontSize: '15px', fontWeight: 'bold', maxWidth: '500px', lineHeight: 1.6 }}>پلتفرم هوشمند ایرانی برای ارتقای کسب‌وکارها با استفاده از قدرت هوش مصنوعی روز دنیا.</p>
          <div style={{ height: '1px', width: '80px', background: 'linear-gradient(to right, transparent, #e2e8f0, transparent)', margin: '48px 0' }}></div>
          <p style={{ color: '#cbd5e1', fontSize: '13px', fontWeight: 'bold' }}>© 2026 کلیه حقوق برای هوشی باما محفوظ است.</p>
        </div>
      </footer>
    </div>
  );
}
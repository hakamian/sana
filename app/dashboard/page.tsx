import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from '@/app/auth/actions'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const features = [
    { 
      title: 'چت هوشمند',
      desc: 'گفتگو با پیشرفته‌ترین مدل‌های زبانی جهان',
      icon: '💬', 
      color: 'from-blue-400 to-blue-600',
      bg: 'bg-blue-50',
      status: 'فعال'
    },
    { 
      title: 'تولید تصویر',
      desc: 'خلق تصاویر هنری با هوش مصنوعی',
      icon: '🎨', 
      color: 'from-purple-400 to-purple-600',
      bg: 'bg-purple-50',
      status: 'به‌زودی'
    },
    { 
      title: 'سایت‌ساز',
      desc: 'ساخت وب‌سایت در کمتر از ۵ دقیقه',
      icon: '🌐', 
      color: 'from-rose-400 to-rose-600',
      bg: 'bg-rose-50',
      status: 'به‌زودی'
    },
    { 
      title: 'دستیار صوتی',
      desc: 'تبدیل متن به گفتار و برعکس',
      icon: '🎙️', 
      color: 'from-amber-400 to-amber-600',
      bg: 'bg-amber-50',
      status: 'غیرفعال'
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#f8fafc]" dir="rtl">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.1)_0%,transparent_70%)] blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_70%)] blur-[120px] animate-blob animation-delay-2000"></div>
      </div>

      {/* Glass Header */}
      <header className="sticky top-4 z-50 mx-4 md:mx-8">
        <div className="glass-panel rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-80 transition-opacity">
              هوشی باما
            </Link>
            <span className="hidden md:inline-flex px-3 py-1 bg-cyan-500/10 text-cyan-600 text-xs font-bold rounded-full border border-cyan-500/20">
              نسخه آزمایشی
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-lg font-bold text-slate-700">
                  {user.email?.[0].toUpperCase()}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-700">{user.user_metadata.full_name || 'کاربر عزیز'}</span>
                <span className="text-xs text-slate-500 font-medium">{user.email}</span>
              </div>
            </div>
            
            <form action={logout}>
              <button 
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm font-bold transition-all hover:shadow-md active:scale-95"
              >
                خروج
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        {/* Welcome Section */}
        <section className="glass-card rounded-[32px] p-8 md:p-12 text-center md:text-right relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
              سلام، <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">{user.user_metadata.full_name || 'دوست من'}</span> 👋
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
              به پنل کاربری خود خوش آمدید. از اینجا می‌توانید به تمام ابزارهای هوش مصنوعی دسترسی داشته باشید و پروژه‌های خود را مدیریت کنید.
            </p>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div key={i} className="glass-card rounded-3xl p-6 flex flex-col h-full group cursor-pointer">
              <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.status === 'فعال' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                  {item.status}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity (Placeholder) */}
        <section className="glass-card rounded-[32px] p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-slate-800">فعالیت‌های اخیر</h2>
            <button className="text-sm font-bold text-cyan-600 hover:text-cyan-700">مشاهده همه</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/50 transition-colors border border-transparent hover:border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-lg">⚡</div>
                <div className="flex-grow">
                  <div className="font-bold text-slate-700">تولید تصویر جدید</div>
                  <div className="text-xs text-slate-400 mt-1">۲ دقیقه پیش</div>
                </div>
                <span className="text-xs font-bold text-slate-400">تکمیل شده</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

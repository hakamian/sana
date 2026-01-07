'use client'

import { login } from '@/app/auth/actions'
import Link from 'next/link'
import { useActionState } from 'react'

const initialState = {
  error: null as string | null,
}

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(async (prevState: any, formData: FormData) => {
    const result = await login(formData)
    if (result?.error) {
      return { error: result.error }
    }
    return { error: null }
  }, initialState)

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#f8fafc]" dir="rtl">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_70%)] blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] blur-[100px]"></div>
      </div>

      <div className="w-full max-w-md relative z-10 p-6">
        <div className="bg-white/80 backdrop-blur-2xl rounded-[40px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/50 p-10">
          <div className="text-center mb-10">
            <Link href="/" className="inline-block mb-6 hover:scale-105 transition-transform">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">
                هوشی باما
              </span>
            </Link>
            <h2 className="text-2xl font-black text-slate-800">خوش‌آمدید! 👋</h2>
            <p className="text-slate-500 text-sm font-bold mt-2">برای ادامه وارد حساب خود شوید</p>
          </div>

          <form action={formAction} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-500 mr-1">ایمیل</label>
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-sans text-slate-800 font-bold placeholder:font-normal"
                  placeholder="example@mail.com"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center mr-1">
                <label className="text-xs font-black text-slate-500">رمز عبور</label>
                <a href="#" className="text-xs font-bold text-cyan-600 hover:text-cyan-700">رمز را فراموش کردید؟</a>
              </div>
              <div className="relative">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all text-slate-800 font-bold placeholder:font-normal"
                  placeholder="••••••••"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
              </div>
            </div>

            {state?.error && (
              <div className="p-4 rounded-2xl bg-red-50/80 border border-red-100 text-red-600 text-sm font-bold flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 11 18 0z" /></svg>
                {state.error}
              </div>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-black text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isPending ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>در حال ورود...</span>
                </div>
              ) : 'ورود به حساب'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-500 font-bold text-sm">
              هنوز ثبت‌نام نکرده‌اید؟{' '}
              <Link href="/signup" className="text-indigo-600 hover:text-indigo-700 font-black hover:underline">
                ساخت حساب رایگان
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

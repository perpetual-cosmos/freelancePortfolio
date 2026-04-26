"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  User,
  Briefcase,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────────────────── */
type Status = "idle" | "sending" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const CONTACT_CARDS = [
  {
    label: "Email",
    val: "unipick000@gmail.com",
    href: "mailto:unipick000@gmail.com",
    color: "from-violet-600 to-purple-700",
    bg: "from-violet-500/10 to-purple-500/5",
    icon: <Mail size={20} />,
  },
  {
    label: "WhatsApp / Call",
    val: "+91 94511 72458",
    href: "https://wa.me/919451172458",
    color: "from-emerald-500 to-teal-600",
    bg: "from-emerald-500/10 to-teal-500/5",
    icon: <Phone size={20} />,
  },
  {
    label: "Location",
    val: "Kanpur, India · Remote Worldwide",
    href: null,
    color: "from-pink-500 to-rose-600",
    bg: "from-pink-500/10 to-rose-500/5",
    icon: <MapPin size={20} />,
  },
];

const SERVICE_OPTIONS = [
  "Web Development",
  "UI/UX Design",
  "Full-Stack App",
  "SEO Optimization",
  "Automation / AI",
  "Other",
];

/* ─── Input Component ───────────────────────────────────────────────────── */
const Field = ({
  label,
  icon,
  error,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <label className="flex items-center gap-2 text-[0.65rem] font-black text-violet-400 tracking-[0.25em] uppercase">
      {icon} {label}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="text-red-400 text-[0.72rem] font-semibold flex items-center gap-1"
        >
          <AlertCircle size={12} /> {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

/* ─── Main Component ─────────────────────────────────────────────────────── */
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [activeService, setActiveService] = useState<string>("");

  /* cursor glow */
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handler = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    section.addEventListener("mousemove", handler);
    return () => section.removeEventListener("mousemove", handler);
  }, []);

  /* ── Validation ─────────────────────────────────────────────────────── */
  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message cannot be empty";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  /* ── Send ────────────────────────────────────────────────────────────── */
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject || activeService || "General Inquiry",
      message: form.message,
      service: activeService || "Not specified",
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setActiveService("");
      setErrors({});
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  /* ── Input helpers ───────────────────────────────────────────────────── */
  const cx =
    "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white/90 text-[0.95rem] placeholder:text-white/25 focus:outline-none focus:border-violet-500/70 focus:bg-white/8 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#060610] py-28 lg:py-40 overflow-hidden"
    >
      {/* Ambient cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(109,40,217,0.08) 0%, transparent 70%)`,
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#a78bfa 1px,transparent 1px),linear-gradient(to bottom,#a78bfa 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blurred orbs */}
      <div className="absolute top-[-12rem] left-[-8rem] w-[45rem] h-[45rem] rounded-full bg-violet-700/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10rem] right-[-6rem] w-[35rem] h-[35rem] rounded-full bg-fuchsia-700/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Header ── */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-violet-500/20 bg-violet-500/8 text-violet-400 text-[0.68rem] font-black tracking-[0.3em] uppercase mb-8"
          >
            <Sparkles size={13} /> Let's Build Together
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[0.92] tracking-tighter text-white mb-6"
          >
            Start a{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-white/50 text-[1.1rem] max-w-xl mx-auto leading-relaxed"
          >
            Drop me a message and I'll get back to you within 24 hours with a
            clear plan — no strings attached.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.6fr] gap-10 lg:gap-14 items-start">
          {/* ── Left: Contact cards + CTA ── */}
          <div className="space-y-5">
            {CONTACT_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                {card.href ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-5 p-5 rounded-2xl border border-white/8 bg-gradient-to-br ${card.bg} backdrop-blur-sm group relative overflow-hidden cursor-pointer`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                    >
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[0.6rem] font-black text-white/40 tracking-widest uppercase mb-0.5">
                        {card.label}
                      </div>
                      <div className="font-bold text-[0.95rem] text-white/90 truncate">
                        {card.val}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-white/20 group-hover:text-white/70 transition-colors flex-shrink-0"
                    />
                  </a>
                ) : (
                  <div
                    className={`flex items-center gap-5 p-5 rounded-2xl border border-white/8 bg-gradient-to-br ${card.bg} backdrop-blur-sm`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                    >
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[0.6rem] font-black text-white/40 tracking-widest uppercase mb-0.5">
                        {card.label}
                      </div>
                      <div className="font-bold text-[0.95rem] text-white/90">
                        {card.val}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Service picker */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="p-6 rounded-2xl border border-white/8 bg-white/3"
            >
              <p className="text-[0.65rem] font-black text-violet-400 tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
                <Briefcase size={13} /> What can I help you with?
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICE_OPTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setActiveService(s === activeService ? "" : s)}
                    className={`px-3.5 py-1.5 rounded-lg text-[0.78rem] font-bold border transition-all duration-200 ${
                      activeService === s
                        ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/20"
                        : "bg-white/5 border-white/10 text-white/50 hover:border-violet-500/40 hover:text-white/80"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.42 }}
              className="flex items-center gap-3 p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5"
            >
              <div className="relative flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400/40 animate-ping" />
              </div>
              <p className="text-emerald-400 text-[0.82rem] font-bold">
                Available for new projects · responds in{" "}
                <span className="text-white/80">≤ 24h</span>
              </p>
            </motion.div>
          </div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 lg:p-10 shadow-2xl"
          >
            {/* Glass shine */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent rounded-t-3xl" />

            <AnimatePresence mode="wait">
              {status === "success" ? (
                /* ── Success State ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/15 flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-emerald-400" />
                  </div>
                  <h3 className="text-[1.8rem] font-black text-white tracking-tight">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-white/50 max-w-sm leading-relaxed">
                    Thanks for reaching out! I'll review your message and get
                    back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSend}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  noValidate
                >
                  <div>
                    <h3 className="text-[1.5rem] font-black text-white tracking-tight mb-1">
                      Send a Message
                    </h3>
                    <p className="text-white/40 text-[0.88rem]">
                      Fill in the details below — I'll reply fast.
                    </p>
                  </div>

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      label="Your Name"
                      icon={<User size={12} />}
                      error={errors.name}
                    >
                      <input
                        type="text"
                        className={cx}
                        placeholder="Rahul Sharma"
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        onFocus={() =>
                          setErrors((er) => ({ ...er, name: undefined }))
                        }
                      />
                    </Field>
                    <Field
                      label="Email Address"
                      icon={<Mail size={12} />}
                      error={errors.email}
                    >
                      <input
                        type="email"
                        className={cx}
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        onFocus={() =>
                          setErrors((er) => ({ ...er, email: undefined }))
                        }
                      />
                    </Field>
                  </div>

                  {/* Subject */}
                  <Field
                    label="Subject"
                    icon={<Briefcase size={12} />}
                  >
                    <input
                      type="text"
                      className={cx}
                      placeholder={
                        activeService
                          ? `Re: ${activeService}`
                          : "e.g. Build a landing page"
                      }
                      value={form.subject}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, subject: e.target.value }))
                      }
                    />
                  </Field>

                  {/* Message */}
                  <Field
                    label="Your Message"
                    icon={<MessageSquare size={12} />}
                    error={errors.message}
                  >
                    <textarea
                      rows={5}
                      className={`${cx} resize-none`}
                      placeholder="Tell me about your project — goals, timeline, budget..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      onFocus={() =>
                        setErrors((er) => ({ ...er, message: undefined }))
                      }
                    />
                  </Field>

                  {/* Error banner */}
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[0.85rem] font-semibold"
                      >
                        <AlertCircle size={16} />
                        Something went wrong. Please try again or reach out via
                        WhatsApp.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={
                      status !== "sending" ? { y: -2, scale: 1.01 } : {}
                    }
                    whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black text-[0.88rem] uppercase tracking-[0.2em] text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-white/25 text-[0.72rem]">
                    No spam. Your data is safe with me.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

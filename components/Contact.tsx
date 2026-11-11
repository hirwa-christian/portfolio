import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle } from
'lucide-react';
// import { portfolioData } from '../lib/portfolioData';
type FormState = {
  name: string;
  email: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormState, string>>;
type SubmitStatus = 'idle' | 'submitting' | 'success';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.message.trim()) {
    errors.message = 'Please enter a message.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }
  return errors;
}
const inputBase =
'w-full bg-ide-bg border rounded-md px-4 py-3 text-ide-text placeholder:text-ide-muted/60 focus:outline-none focus:ring-1 transition-colors font-mono text-sm';
export function Contact() {
  const reduce = useReducedMotion();
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const update = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(formState);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setStatus('submitting');
    // Simulate async submission (no backend).
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus('success');
  };
  const resetForm = () => {
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    setStatus('idle');
  };
  const fieldClass = (field: keyof FormState) =>
  `${inputBase} ${errors[field] ? 'border-ide-red focus:border-ide-red focus:ring-ide-red' : 'border-ide-border focus:border-ide-blue focus:ring-ide-blue'}`;
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="contact_me"
          subtitle="ping -c 4 hirwa.christian" />
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={
            reduce ?
            false :
            {
              opacity: 0,
              x: -20
            }
            }
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}>
            
            <h3 className="text-2xl font-bold text-ide-heading mb-6">
              Let's Connect
            </h3>
            <p className="text-ide-text mb-8 leading-relaxed max-w-md">
              I'm currently open for new opportunities. Whether you have a
              question, a project idea, or just want to say hi, I'll try my best
              to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-ide-text">
                <div className="w-12 h-12 rounded-full bg-ide-surface border border-ide-border flex items-center justify-center text-ide-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-ide-muted font-mono mb-1">
                    Email
                  </div>
                  {/* <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="hover:text-ide-blue transition-colors">
                    
                    {portfolioData.personal.email}
                  </a> */}
                </div>
              </div>

              <div className="flex items-center gap-4 text-ide-text">
                <div className="w-12 h-12 rounded-full bg-ide-surface border border-ide-border flex items-center justify-center text-ide-green">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-ide-muted font-mono mb-1">
                    Location
                  </div>
                  {/* <span>{portfolioData.personal.location}</span> */}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={
            reduce ?
            false :
            {
              opacity: 0,
              x: 20
            }
            }
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="glass-panel p-8 rounded-xl">
            
            <AnimatePresence mode="wait">
              {status === 'success' ?
              <motion.div
                key="success"
                initial={
                reduce ?
                false :
                {
                  opacity: 0,
                  scale: 0.96
                }
                }
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                exit={{
                  opacity: 0
                }}
                className="text-center py-8"
                role="status"
                aria-live="polite">
                
                  <div className="w-16 h-16 mx-auto rounded-full bg-ide-green/15 border border-ide-green/40 flex items-center justify-center text-ide-green mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-ide-heading mb-2">
                    Message sent!
                  </h3>
                  <p className="text-ide-text text-sm mb-6 max-w-sm mx-auto">
                    Thanks for reaching out, {formState.name.split(' ')[0]}.
                    I'll get back to you as soon as I can.
                  </p>
                  <button
                  onClick={resetForm}
                  className="font-mono text-sm text-ide-blue hover:underline">
                  
                    ./send-another-message
                  </button>
                </motion.div> :

              <motion.form
                key="form"
                initial={
                reduce ?
                false :
                {
                  opacity: 0
                }
                }
                animate={{
                  opacity: 1
                }}
                exit={{
                  opacity: 0
                }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6">
                
                  <div>
                    <label
                    htmlFor="name"
                    className="block text-sm font-mono text-ide-muted mb-2">
                    
                      <span className="text-ide-purple">const</span> name =
                    </label>
                    <input
                    type="text"
                    id="name"
                    className={fieldClass('name')}
                    placeholder="'John Doe'"
                    value={formState.name}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    onChange={(e) => update('name', e.target.value)} />
                  
                    {errors.name &&
                  <p
                    id="name-error"
                    className="mt-2 flex items-center gap-1.5 text-xs text-ide-red font-mono">
                    
                        <AlertCircle size={13} /> {errors.name}
                      </p>
                  }
                  </div>

                  <div>
                    <label
                    htmlFor="email"
                    className="block text-sm font-mono text-ide-muted mb-2">
                    
                      <span className="text-ide-purple">const</span> email =
                    </label>
                    <input
                    type="email"
                    id="email"
                    className={fieldClass('email')}
                    placeholder="'john@example.com'"
                    value={formState.email}
                    aria-invalid={!!errors.email}
                    aria-describedby={
                    errors.email ? 'email-error' : undefined
                    }
                    onChange={(e) => update('email', e.target.value)} />
                  
                    {errors.email &&
                  <p
                    id="email-error"
                    className="mt-2 flex items-center gap-1.5 text-xs text-ide-red font-mono">
                    
                        <AlertCircle size={13} /> {errors.email}
                      </p>
                  }
                  </div>

                  <div>
                    <label
                    htmlFor="message"
                    className="block text-sm font-mono text-ide-muted mb-2">
                    
                      <span className="text-ide-purple">const</span> message =
                    </label>
                    <textarea
                    id="message"
                    rows={4}
                    className={`${fieldClass('message')} resize-none`}
                    placeholder="'Hello, I would like to...'"
                    value={formState.message}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                    errors.message ? 'message-error' : undefined
                    }
                    onChange={(e) => update('message', e.target.value)} />
                  
                    {errors.message &&
                  <p
                    id="message-error"
                    className="mt-2 flex items-center gap-1.5 text-xs text-ide-red font-mono">
                    
                        <AlertCircle size={13} /> {errors.message}
                      </p>
                  }
                  </div>

                  <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-ide-blue hover:bg-opacity-90 text-ide-bg font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  
                    {status === 'submitting' ?
                  <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>sending...</span>
                      </> :

                  <>
                        <Send size={18} />
                        <span>sendMessage()</span>
                      </>
                  }
                  </button>
                </motion.form>
              }
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>);

}
import { useState } from 'react';
import { Send, Mail, User as UserIcon, MessageSquare, Loader2 } from 'lucide-react';
import { TypingText } from './TypingText';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Using FormSubmit.co service (free, no backend needed)
      const response = await fetch('https://formsubmit.co/abhijeetsoren222@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.name}`,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="h-full flex flex-col p-8 overflow-hidden">
      {/* Header */}
      <div className="flex items-center space-x-4 border-b border-primary/30 pb-6 mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          <div className="relative w-16 h-16 rounded-full border-2 border-primary bg-background/80 flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary animate-pulse-glow" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-orbitron font-bold hologram-text mb-1">
            <TypingText text="COMMUNICATION PROTOCOLS" speed={50} delay={200} />
          </h2>
          <p className="text-sm text-primary/70 font-tech">
            <TypingText text="Quantum Channel Access" speed={30} delay={1000} />
          </p>
        </div>
        <div className="text-right">
          <div className="text-xs font-orbitron text-primary/50 mb-1">SECTION</div>
          <div className="text-3xl font-orbitron font-bold text-primary">07</div>
        </div>
      </div>

      {/* Form Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
        <div className="space-y-6">
          {/* Info Message */}
          <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
            <p className="font-tech text-primary/80 text-sm">
              <TypingText
                text=">>> SECURE COMMUNICATION CHANNEL ESTABLISHED. YOUR MESSAGE WILL BE TRANSMITTED DIRECTLY TO THE PRIMARY NEURAL INTERFACE <<<"
                speed={20}
                delay={1500}
                showCursor={false}
              />
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-orbitron text-primary">
                <UserIcon className="w-4 h-4" />
                <span>IDENTITY DESIGNATION</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name..."
                className="w-full px-4 py-3 bg-background/60 border border-primary/30 rounded-lg font-tech text-primary placeholder:text-primary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-orbitron text-primary">
                <Mail className="w-4 h-4" />
                <span>COMMUNICATION ADDRESS</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@domain.com"
                className="w-full px-4 py-3 bg-background/60 border border-primary/30 rounded-lg font-tech text-primary placeholder:text-primary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-orbitron text-primary">
                <MessageSquare className="w-4 h-4" />
                <span>MESSAGE TRANSMISSION</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Compose your message..."
                className="w-full px-4 py-3 bg-background/60 border border-primary/30 rounded-lg font-tech text-primary placeholder:text-primary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none custom-scrollbar"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 bg-primary/20 border-2 border-primary rounded-lg font-orbitron font-bold text-primary hover:bg-primary/30 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 group"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>TRANSMITTING...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>INITIATE TRANSMISSION</span>
                </>
              )}
            </button>
          </form>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="p-4 rounded-lg border border-green-400/30 bg-green-400/10 animate-pulse">
              <p className="font-tech text-green-400 text-center">
                ✓ MESSAGE SUCCESSFULLY TRANSMITTED TO NEURAL INTERFACE
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 rounded-lg border border-red-400/30 bg-red-400/10 animate-pulse">
              <p className="font-tech text-red-400 text-center">
                ✗ TRANSMISSION FAILED. PLEASE RETRY COMMUNICATION
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-6 pt-4 border-t border-primary/20">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xs font-orbitron text-primary/50 mb-1">ENCRYPTION</div>
            <div className="text-sm font-orbitron font-bold text-green-400">ACTIVE</div>
          </div>
          <div>
            <div className="text-xs font-orbitron text-primary/50 mb-1">CHANNEL</div>
            <div className="text-sm font-orbitron font-bold text-primary">SECURE</div>
          </div>
          <div>
            <div className="text-xs font-orbitron text-primary/50 mb-1">STATUS</div>
            <div className="text-sm font-orbitron font-bold text-green-400">ONLINE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export type WhatsAppIntent = 'trial' | 'demo' | 'sales' | 'started' | 'chat'

const whatsappNumber = '919692428905'

const messages: Record<WhatsAppIntent, string> = {
  trial: 'Hi AppzetBilling, I want to start a free trial. Please share the next steps.',
  demo: 'Hi AppzetBilling, I want to book a demo for my business.',
  sales: 'Hi AppzetBilling, I want to talk to sales about pricing and setup.',
  started: 'Hi AppzetBilling, I am interested in getting started with your billing software.',
  chat: 'Hi AppzetBilling, I have a question. Can you help?',
}

export function openWhatsApp(intent: WhatsAppIntent) {
  const message = encodeURIComponent(messages[intent])
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
}

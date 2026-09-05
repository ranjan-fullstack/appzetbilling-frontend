import { openWhatsApp } from "../utils/whatsapp";

function WhatsAppFloatButton() {
  return (
    <button
      type="button"
      onClick={() => openWhatsApp("chat")}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 animate-[pulse_2.5s_ease-in-out_infinite]"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.29.638 4.43 1.744 6.256L4 29l7.94-1.71A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-1.98 0-3.834-.54-5.424-1.48l-.39-.23-4.71 1.015 1.03-4.59-.256-.402A9.72 9.72 0 0 1 4.75 15c0-6.213 5.043-11.25 11.254-11.25 6.21 0 11.246 5.037 11.246 11.25S22.214 24.75 16.004 24.75Zm5.79-8.42c-.317-.159-1.874-.925-2.165-1.03-.29-.106-.502-.159-.714.159-.212.317-.82 1.03-1.006 1.242-.185.212-.37.238-.687.08-.317-.16-1.338-.494-2.548-1.573-.942-.84-1.578-1.878-1.763-2.195-.185-.318-.02-.49.139-.648.143-.142.318-.37.476-.556.16-.185.212-.318.318-.53.106-.212.053-.397-.026-.556-.08-.159-.714-1.723-.978-2.36-.257-.618-.518-.535-.714-.545l-.608-.011c-.212 0-.556.079-.847.397-.29.318-1.111 1.086-1.111 2.65 0 1.563 1.138 3.073 1.297 3.285.159.212 2.24 3.42 5.43 4.797.759.328 1.351.524 1.813.671.762.242 1.455.208 2.003.126.611-.091 1.874-.766 2.138-1.507.264-.741.264-1.376.185-1.508-.08-.132-.291-.212-.608-.37Z" />
      </svg>
    </button>
  );
}

export default WhatsAppFloatButton;

<script lang="ts">
  import { CONTACT_INFO } from '@/data/content';
</script>

<nav
  id="seccion-bottom-bar"
  class="fixed bottom-0 left-0 right-0 z-50 pb-safe bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-4px_20px_rgba(19,37,57,0.12)] sm:hidden"
  aria-label="Acciones rápidas de emergencia"
>
  <div class="px-4 py-3 flex items-center gap-2.5 max-w-lg mx-auto">
    <!-- Botón Discado Rápido -->
    <a
      id="btn-llamar-bottombar"
      href={CONTACT_INFO.telUrl}
      class="h-13 w-14 rounded-xl bg-slate-100 active:bg-slate-200 text-brand-marine flex flex-col items-center justify-center gap-0.5 flex-shrink-0 border border-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
      aria-label="Llamar directo al operador"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-5 h-5 text-brand-marine"
        aria-hidden="true"
      >
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        />
      </svg>
      <span class="text-[10px] font-bold uppercase text-brand-marine">Llamar</span>
    </a>

    <!-- Botón WhatsApp Principal Naranja -->
    <a
      id="btn-whatsapp-bottombar"
      href={CONTACT_INFO.defaultWhatsappUrl}
      class="h-13 flex-1 rounded-xl bg-brand-orange active:bg-[#cf4f2c] text-white flex items-center justify-center gap-2 text-sm font-black uppercase tracking-wider shadow-lg shadow-brand-orange/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-5 h-5"
        aria-hidden="true"
      >
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        />
      </svg>
      <span>SOLICITAR GRÚA AHORA</span>
    </a>
  </div>
</nav>

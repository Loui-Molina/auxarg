<script lang="ts">
  import { VEHICLE_OPTIONS, CONTACT_INFO } from '@/data/content';
  import type { VehicleType } from '@/types';

  // Svelte 5 State
  let selectedVehicleId = $state<VehicleType>('auto');

  // Derived active vehicle configuration
  let activeVehicle = $derived(
    VEHICLE_OPTIONS.find((v) => v.id === selectedVehicleId) ?? VEHICLE_OPTIONS[0]
  );

  // Derived WhatsApp link
  let whatsappUrl = $derived(
    `https://wa.me/${CONTACT_INFO.rawPhone}?text=${encodeURIComponent(activeVehicle.whatsappMessage)}`
  );

  function selectVehicle(id: VehicleType) {
    selectedVehicleId = id;
  }
</script>

<section id="seccion-cotizador" class="w-full px-4 sm:px-6 py-10 bg-slate-100">
  <div class="max-w-3xl mx-auto flex flex-col gap-5">
    <!-- Header de Sección -->
    <div class="flex flex-col gap-1">
      <span class="text-xs font-extrabold uppercase tracking-wider text-brand-orange">
        CONFIGURADOR EXPRESS
      </span>
      <h2 class="text-2xl sm:text-3xl text-brand-marine uppercase font-black tracking-tight">
        COTIZAR SALIDA INMEDIATA
      </h2>
      <p class="text-sm text-slate-600">
        Seleccione su categoría para disponer los anclajes y la capacidad correcta.
      </p>
    </div>

    <!-- Selector de Categoría de Vehículo -->
    <div
      class="grid grid-cols-3 gap-2 sm:gap-3"
      role="tablist"
      aria-label="Selector de tipo de vehículo para cotización"
    >
      {#each VEHICLE_OPTIONS as option (option.id)}
        {@const isActive = selectedVehicleId === option.id}
        <button
          type="button"
          role="tab"
          aria-selected={isActive}
          aria-controls="config-panel"
          id={`tab-${option.id}`}
          onclick={() => selectVehicle(option.id)}
          class={`p-3 sm:p-4 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
            isActive
              ? 'bg-brand-marine text-white shadow-md scale-[1.02]'
              : 'bg-white text-brand-marine hover:bg-slate-50 border border-slate-200'
          }`}
        >
          {#if option.icon === 'car'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class={`w-6 h-6 sm:w-7 sm:h-7 ${isActive ? 'text-brand-orange' : 'text-brand-marine'}`}
              aria-hidden="true"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <path d="M9 17h6" />
              <circle cx="17" cy="17" r="2" />
            </svg>
          {:else if option.icon === 'suv'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class={`w-6 h-6 sm:w-7 sm:h-7 ${isActive ? 'text-brand-orange' : 'text-brand-marine'}`}
              aria-hidden="true"
            >
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
              <circle cx="7" cy="15" r="2" />
              <circle cx="17" cy="15" r="2" />
            </svg>
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class={`w-6 h-6 sm:w-7 sm:h-7 ${isActive ? 'text-brand-orange' : 'text-brand-marine'}`}
              aria-hidden="true"
            >
              <circle cx="5" cy="16" r="3" />
              <circle cx="19" cy="16" r="3" />
              <path d="M12 17h3l2-7H9l-3 4" />
              <path d="m14 10-2-6h-3" />
            </svg>
          {/if}
          <span class="text-xs sm:text-sm font-bold uppercase tracking-wide">
            {option.label}
          </span>
        </button>
      {/each}
    </div>

    <!-- Panel de Configuración Dinámica -->
    <div
      id="config-panel"
      role="tabpanel"
      aria-labelledby={`tab-${activeVehicle.id}`}
      class="w-full rounded-2xl bg-white p-5 sm:p-6 flex flex-col gap-4 shadow-md border border-slate-200"
    >
      <div class="flex items-center justify-between border-b border-slate-100 pb-3">
        <span class="text-xs font-bold uppercase tracking-wider text-slate-500">
          EQUIPAMIENTO LISTO
        </span>
        <span
          class="px-2.5 py-1 rounded-full bg-status-green/10 text-status-green text-xs font-black uppercase tracking-wider flex items-center gap-1.5"
        >
          <span class="w-2 h-2 rounded-full bg-status-green"></span>
          100% DISPONIBLE
        </span>
      </div>

      <div class="flex items-start gap-3.5">
        <div
          class="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-brand-marine flex-shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-6 h-6 text-brand-marine"
            aria-hidden="true"
          >
            <path d="M12 2v20" />
            <path d="m17 5-5-3-5 3" />
            <path d="m17 19-5 3-5-3" />
            <path d="M2 12h20" />
            <path d="m5 7-3 5 3 5" />
            <path d="m19 7 3 5-3 5" />
          </svg>
        </div>
        <div class="flex flex-col">
          <h3 class="text-base sm:text-lg text-brand-marine uppercase font-black leading-snug">
            {activeVehicle.title}
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            {activeVehicle.description}
          </p>
        </div>
      </div>

      <!-- Botón de Consulta Dinámico -->
      <a
        id="btn-cotizar-cotizador"
        href={whatsappUrl}
        class="mt-2 w-full h-13 py-3.5 rounded-xl bg-brand-marine hover:bg-[#1b3452] active:scale-[0.99] text-white flex items-center justify-center gap-2 text-sm sm:text-base font-bold uppercase tracking-wider shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-5 h-5 text-brand-orange"
          aria-hidden="true"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        <span>Consultar Precio y Salida por WhatsApp</span>
      </a>
    </div>
  </div>
</section>
